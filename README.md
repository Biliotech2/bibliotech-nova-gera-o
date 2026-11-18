# BiblioTech

Site estático com catálogo local de demonstração. Para usar contas reais, conecte o Supabase Auth conforme abaixo.

## Conectar ao Supabase

1. Crie um projeto no [Supabase](https://supabase.com/) e abra as configurações de API do projeto.
2. Copie a Project URL e a chave pública `publishable` (ou `anon` legada). Nunca coloque uma `service_role` ou outra chave secreta no navegador.
3. Em `auth-config.js`, altere `authMode` para `supabase` e substitua `supabaseUrl` e `supabasePublishableKey` pelos valores do projeto.
4. Em **Authentication → URL Configuration**, defina a URL pública do site como **Site URL** e adicione-a à lista de URLs permitidas para redirecionamento. Para desenvolvimento, use a URL exibida pelo seu servidor local, por exemplo `http://localhost:5500/**`.
5. Abra o site por um servidor local ou hospede-o em uma plataforma estática. Não use `file://` para a integração real, pois o fluxo de confirmação precisa de uma URL de retorno permitida.
6. Teste criando uma conta e entrando. O Supabase Auth armazena e valida a senha; este projeto não cria tabela de usuários nem salva senha no navegador no modo Supabase.

O cadastro entra automaticamente quando o Supabase retorna uma sessão. Se a confirmação por e-mail estiver habilitada, a pessoa precisará confirmar o endereço antes de entrar; para um protótipo que exige entrada imediata, desative a confirmação de e-mail nas configurações de Auth. Em um site público, mantenha a confirmação ativada.

O acervo contém conteúdo de demonstração no `app.js`. A proteção de página evita a navegação sem sessão, mas para proteger dados privados de verdade, os dados da API também precisam de políticas RLS no Supabase. Nunca confie em permissões de administrador definidas pelo navegador.

## Modo local

`auth-config.js` inicia com `authMode: 'local'`, que mantém o cadastro de demonstração no armazenamento do próprio navegador. Contas desse modo não são sincronizadas entre dispositivos e não servem para dados reais.
