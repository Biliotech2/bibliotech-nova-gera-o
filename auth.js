(() => {
  'use strict';

  const USERS_KEY = 'bibliotech-users';
  const SESSION_KEY = 'usuario_logado';
  const config = window.BIBLIOTECH_CONFIG || {};
  const useSupabase = config.authMode === 'supabase';
  const supabaseReady = Boolean(
    useSupabase && window.supabase?.createClient &&
    /^https:\/\/[\w-]+\.supabase\.co$/.test(config.supabaseUrl || '') &&
    config.supabasePublishableKey &&
    !config.supabasePublishableKey.includes('SUA_CHAVE')
  );
  const supabaseClient = supabaseReady
    ? window.supabase.createClient(config.supabaseUrl, config.supabasePublishableKey)
    : null;

  const readUsers = () => {
    try {
      const value = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
      return Array.isArray(value) ? value : [];
    } catch { return []; }
  };
  const saveSession = user => localStorage.setItem(SESSION_KEY, JSON.stringify({
    id: user.id,
    nome: user.nome || user.user_metadata?.full_name || user.email || 'Leitor',
    email: user.email || '',
    tipo: 'usuario'
  }));
  const safeReturnUrl = () => {
    const target = new URLSearchParams(location.search).get('returnTo') || 'livros.html';
    return /^(livros|inicio|favoritos|perfil|configura|sobre|suporte)\.html(?:[?#].*)?$/i.test(target)
      ? target
      : 'livros.html';
  };
  const goToLogin = () => location.replace(`login.html?returnTo=${encodeURIComponent('livros.html')}`);
  const showConfigError = () => {
    alert('A conexão com Supabase ainda não está configurada. Confira auth-config.js e a conexão com a internet.');
  };

  document.addEventListener('DOMContentLoaded', async () => {
    const isCatalog = location.pathname.toLowerCase().endsWith('/livros.html');

    if (isCatalog) {
      if (useSupabase) {
        if (!supabaseReady) { showConfigError(); goToLogin(); return; }
        const { data, error } = await supabaseClient.auth.getSession();
        if (error || !data.session) { goToLogin(); return; }
        saveSession(data.session.user);
      } else {
        try {
          const session = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
          if (!session?.id) { goToLogin(); return; }
        } catch { goToLogin(); return; }
      }
    }

    const register = document.querySelector('.register-form');
    if (register) {
      const password = document.getElementById('senha');
      password?.addEventListener('input', () => {
        const value = password.value;
        const score = [value.length >= 8, /[A-Z]/.test(value), /[0-9]/.test(value), /[^A-Za-z0-9]/.test(value)].filter(Boolean).length;
        document.querySelectorAll('.strength-bars span').forEach((bar, index) => bar.classList.toggle('active', index < score));
      });

      register.addEventListener('submit', async event => {
        event.preventDefault();
        const nome = document.getElementById('nome')?.value.trim();
        const email = document.getElementById('email')?.value.trim().toLowerCase();
        const senha = document.getElementById('senha')?.value;
        const confirmar = document.getElementById('confirmar-senha')?.value;
        if (!nome || !email || !senha || !confirmar) { alert('Preencha todos os campos.'); return; }
        if (senha.length < 8) { alert('A senha precisa ter pelo menos 8 caracteres.'); return; }
        if (senha !== confirmar) { alert('As senhas não coincidem.'); return; }

        if (useSupabase) {
          if (!supabaseReady) { showConfigError(); return; }
          const { data, error } = await supabaseClient.auth.signUp({
            email,
            password: senha,
            options: { data: { full_name: nome } }
          });
          if (error) { alert(`Não foi possível criar a conta: ${error.message}`); return; }
          if (!data.session) {
            alert('Conta criada. Confirme seu e-mail pelo link enviado para entrar.');
            location.assign(`login.html?returnTo=${encodeURIComponent(safeReturnUrl())}`);
            return;
          }
          saveSession(data.session.user);
          location.assign(safeReturnUrl());
          return;
        }

        const users = readUsers();
        if (users.some(user => user.email === email)) { alert('Já existe uma conta com esse e-mail neste navegador.'); return; }
        const user = { id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`, nome, email, senha };
        users.push(user);
        try {
          localStorage.setItem(USERS_KEY, JSON.stringify(users));
          saveSession(user);
          location.assign(safeReturnUrl());
        } catch (error) { console.error(error); alert('Não foi possível salvar sua conta neste navegador.'); }
      });
    }

    // Solicitação de recuperação: o Supabase envia um link seguro por e-mail.
    const recoveryForm = document.querySelector('.recovery-form:not(.password-reset-form)');
    if (recoveryForm) {
      recoveryForm.addEventListener('submit', async event => {
        event.preventDefault();
        const email = document.getElementById('recovery-email')?.value.trim().toLowerCase();
        const feedback = document.getElementById('recovery-feedback');
        const button = recoveryForm.querySelector('button[type="submit"]');
        if (!email) { if (feedback) feedback.textContent = 'Informe seu e-mail.'; return; }
        if (!useSupabase || !supabaseReady) {
          if (feedback) feedback.textContent = 'A recuperação por e-mail exige que a conexão com o Supabase esteja configurada.';
          return;
        }

        if (button) { button.disabled = true; button.textContent = 'Enviando...'; }
        if (feedback) feedback.textContent = '';
        try {
          const redirectTo = new URL('redefinir-senha.html', window.location.href).href;
          const { error } = await supabaseClient.auth.resetPasswordForEmail(email, { redirectTo });
          if (error) throw error;
          if (feedback) feedback.textContent = 'Se este e-mail estiver cadastrado, você receberá uma mensagem com o link para criar uma nova senha. Verifique também a caixa de spam.';
          recoveryForm.reset();
        } catch (error) {
          console.error('Erro ao solicitar recuperação:', error);
          if (feedback) feedback.textContent = 'Não foi possível enviar o e-mail agora. Confira sua conexão e tente novamente.';
        } finally {
          if (button) { button.disabled = false; button.textContent = 'Enviar instruções'; }
        }
      });
    }

    // Página aberta pelo link de recuperação enviado pelo Supabase.
    const resetForm = document.querySelector('.password-reset-form');
    if (resetForm) {
      const feedback = document.getElementById('reset-feedback');
      const submitButton = resetForm.querySelector('button[type="submit"]');
      let recoveryReady = false;

      if (!useSupabase || !supabaseReady) {
        if (feedback) feedback.textContent = 'A conexão com o Supabase não está disponível.';
      } else {
        try {
          const { data, error } = await supabaseClient.auth.getSession();
          recoveryReady = !error && Boolean(data.session);
          if (!recoveryReady && feedback) {
            feedback.textContent = 'Este link é inválido ou expirou. Solicite uma nova recuperação de senha.';
          }
        } catch (error) {
          console.error('Não foi possível validar o link de recuperação:', error);
          if (feedback) feedback.textContent = 'Não foi possível validar o link. Solicite uma nova recuperação.';
        }
      }

      resetForm.addEventListener('submit', async event => {
        event.preventDefault();
        const password = document.getElementById('new-password')?.value || '';
        const confirmation = document.getElementById('confirm-new-password')?.value || '';
        if (!recoveryReady) {
          if (feedback) feedback.textContent = 'Solicite um novo link de recuperação antes de continuar.';
          return;
        }
        if (password.length < 8) {
          if (feedback) feedback.textContent = 'A nova senha precisa ter pelo menos 8 caracteres.';
          return;
        }
        if (password !== confirmation) {
          if (feedback) feedback.textContent = 'As senhas não coincidem.';
          return;
        }

        if (submitButton) { submitButton.disabled = true; submitButton.textContent = 'Salvando...'; }
        try {
          const { error } = await supabaseClient.auth.updateUser({ password });
          if (error) throw error;
          if (feedback) feedback.textContent = 'Senha alterada com sucesso! Redirecionando para o login...';
          resetForm.reset();
          await supabaseClient.auth.signOut();
          setTimeout(() => location.assign('login.html'), 1400);
        } catch (error) {
          console.error('Erro ao atualizar senha:', error);
          if (feedback) feedback.textContent = 'Não foi possível alterar a senha. Solicite um novo link e tente novamente.';
          if (submitButton) { submitButton.disabled = false; submitButton.textContent = 'Salvar nova senha'; }
        }
      });
    }

    const login = document.querySelector('.login-page form');
    if (login) {
      login.addEventListener('submit', async event => {
        event.preventDefault();
        const email = document.getElementById('email')?.value.trim().toLowerCase();
        const senha = document.getElementById('senha')?.value;
        if (!email || !senha) { alert('Informe seu e-mail e sua senha.'); return; }

        if (useSupabase) {
          if (!supabaseReady) { showConfigError(); return; }
          const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password: senha });
          if (error) { alert('E-mail ou senha incorretos.'); return; }
          saveSession(data.user);
          location.assign(safeReturnUrl());
          return;
        }

        const user = readUsers().find(item => item.email === email && item.senha === senha);
        if (!user) { alert('E-mail ou senha incorretos.'); return; }
        saveSession(user);
        location.assign(safeReturnUrl());
      });
    }
  });
})();
