
/* =========================================================
   BIBLIOTECH — DADOS DOS LIVROS
   Camada estática de apresentação
========================================================= */


const books = [

    {
        id: 'odisseia',
        title: 'A Odisseia',
        author: 'Homero',
        genre: 'Mitologia, História, Clássico',
        cover: 'img/odiseia.jpeg',
        year: '2011',
        publisher: 'Random House',
        pages: '576',
        language: 'Português',
        isbn: '9788535909071',
        rating: '4,8',
        age: 'Livre',

        /* PDF DO LIVRO */
        pdf: 'livros/Odisseia.pdf',

        description:
            'A Odisseia é uma obra clássica da literatura grega que narra as aventuras de Odisseu em sua longa jornada de volta para casa após a Guerra de Troia, enfrentando criaturas mitológicas, deuses e inúmeros desafios.',

        synopsis:
            'Após a Guerra de Troia, Odisseu tenta retornar à ilha de Ítaca, onde sua esposa Penélope e seu filho Telêmaco o aguardam. Entretanto, sua viagem se transforma em uma jornada repleta de perigos, marcada por encontros com seres fantásticos, como o ciclope Polifemo, e pela interferência dos deuses do Olimpo. Durante anos, ele precisa usar sua inteligência, coragem e persistência para superar os obstáculos e reencontrar sua família, recuperar seu reino e finalmente voltar ao lar.'
    },

    {
        id: 'capitaes',
        title: 'Capitães da Areia',
        author: 'Jorge Amado',
        genre: 'romance, drama, clássico',
        cover: 'img/cap areia.jpeg',
        year: '1937',
        publisher: 'Companhia das Letras',
        pages: '288',
        language: 'Português',
        isbn: '9788535911693',
        rating: '4,7',
        age: '14 anos',

        /* PDF DO LIVRO */
        pdf: 'livros/capitaes da areia.pdf',

        description:
            'O retrato sensível de jovens que vivem nas ruas de Salvador e sonham com um futuro diferente.',

        synopsis:
            'A obra acompanha um grupo de meninos que vive nas ruas de Salvador. Conhecidos como Capitães da Areia, eles enfrentam dificuldades, preconceitos e abandono, enquanto constroem entre si laços de amizade, proteção e companheirismo.'
    },

    
{
    id: 'alien-surgido-das-sombras',
    title: 'Alien: Surgido das Sombras',
    author: 'Tim Lebbon',
    genre: 'Ficção Científica, Terror',
    cover: 'img/alien.jpeg',
    year: '2016',
    publisher: 'LeYa',
    pages: '288',
    language: 'Português',
    isbn: '9788544103951',
    rating: '4,0',
    age: '16+',

    /* PDF DO LIVRO */
    pdf: 'livros/AlienLivro1.pdf',

    description:
        'Uma história de terror e ficção científica ambientada no universo Alien, com criaturas mortais, suspense e uma luta desesperada pela sobrevivência.',

    synopsis:
        'Chris Hooper trabalha em uma mineradora no planeta LV178, onde ele e sua equipe descobrem um ninho de Xenomorfos escondido no solo. O que parecia ser apenas mais uma missão de trabalho transforma-se em um pesadelo quando as criaturas começam a atacar. Em meio ao perigo, Hooper precisa lutar para sobreviver enquanto eventos inesperados envolvem Ellen Ripley. A história combina terror, ação e suspense em uma aventura que expande o universo da franquia Alien.'
},



{
    id: 'alien-2-mar-de-angustia',
    title: 'Alien II: Mar de Angústia',
    author: 'James A. Moore',
    genre: 'Ficção Científica, Terror',
    cover: 'img/alien 2.jpeg',
    year: '2016',
    publisher: 'LeYa',
    pages: '320',
    language: 'Português',
    isbn: '9788544104903',
    rating: '4,0',
    age: 'Adulto',

    /* PDF DO LIVRO */
    pdf: 'livros/AlienLivro2.pdf',

    description:
        'Uma continuação aterrorizante do universo Alien, repleta de criaturas mortais, mistérios espaciais e uma luta desesperada pela sobrevivência.',

    synopsis:
        'Alan Decker trabalha para manter os assentamentos do planeta LV178 em segurança, mas descobre que o local esconde segredos perigosos. Obrigado a integrar uma equipe de mercenários, ele participa de uma investigação em uma antiga escavação, onde a empresa responsável pela exploração deseja capturar um xenomorfo vivo. Enquanto a missão se transforma em um pesadelo, o passado de Decker volta para assombrá-lo. Seu pai já havia enfrentado os Aliens, dando início a uma vingança sangrenta que ameaça continuar. Em meio ao terror e aos perigos desconhecidos, Decker precisa enfrentar criaturas mortais e descobrir a verdade por trás dos planos da companhia.'
},




{
    id: 'alien-3-rio-de-sofrimento',
    title: 'Alien III: Rio de Sofrimento',
    author: 'Christopher Golden',
    genre: 'Ficção Científica, Terror',
    cover: 'img/alien 3.jpeg',
    year: '2017',
    publisher: 'LeYa',
    pages: '246',
    language: 'Português',
    isbn: '9788544105122',
    rating: '4,2',
    age: '16+',

    /* PDF DO LIVRO */
    pdf: 'livros/AlienLivro3.pdf',

    description:
        'Um romance de terror e ficção científica que revela a origem e a queda de uma colônia humana em um planeta infestado por xenomorfos.',

    synopsis:
        'Enquanto Ellen Ripley permanece em hipersono, o planeta LV-426 é transformado em uma colônia humana chamada Aqueronte. Durante a terraformação, uma expedição encontra uma misteriosa nave alienígena que desperta o interesse da Weyland-Yutani. Anne e Russell, um casal que busca uma vida melhor no planeta e acaba de ter uma filha chamada Rebecca, conhecida como Newt, veem seus sonhos se transformarem em um pesadelo. Quando os terríveis xenomorfos começam a ameaçar a colônia Hadley’s Hope, os habitantes precisam lutar pela sobrevivência. A história revela os acontecimentos que levaram à destruição da colônia antes dos eventos do filme Aliens, o Resgate.'
},




{
    id: 'cem-anos-de-solidao',
    title: 'Cem Anos de Solidão',
    author: 'Gabriel García Márquez',
    genre: 'Romance, Clássico',
    cover: 'img/solidao.jpeg',
    year: '2024',
    publisher: 'Record',
    pages: '446',
    language: 'Português',
    isbn: '9788501012074',
    rating: '4,8',
    age: '14+',

    /* PDF DO LIVRO */
    pdf: 'livros/cem anos de solidao.pdf',

    description:
        'Um clássico da literatura latino-americana que mistura realidade, fantasia e os destinos de várias gerações de uma mesma família.',

    synopsis:
        'Na fictícia cidade de Macondo, acompanhamos a trajetória de várias gerações da família Buendía, marcada por amores intensos, guerras, segredos, tragédias e acontecimentos extraordinários. Enquanto o povoado cresce e se transforma, os membros da família enfrentam a solidão, repetem erros do passado e lutam contra destinos que parecem se renovar a cada geração. Com elementos de realismo mágico, Gabriel García Márquez constrói uma narrativa sobre o tempo, a memória, o poder e a condição humana.'
},



{
    id: 'noites-brancas',
    title: 'Noites Brancas',
    author: 'Fiódor Dostoiévski',
    genre: 'Romance, Clássico',
    cover: 'img/noite branca.jpeg',
    year: '2009',
    publisher: 'Editora 34',
    pages: '96',
    language: 'Português',
    isbn: '9788573263350',
    rating: '4,7',
    age: '12+',

    /* PDF DO LIVRO */
    pdf: 'livros/noites brancas.pdf',

    description:
        'Uma novela romântica e melancólica sobre solidão, sonhos e um encontro capaz de transformar a vida de um jovem sonhador.',

    synopsis:
        'Durante as noites claras do verão de São Petersburgo, um jovem solitário conhece Nástienka, uma moça que também carrega suas próprias angústias e esperanças. Ao longo de quatro noites de conversas e confidências, os dois desenvolvem uma conexão profunda. Enquanto o sonhador se apaixona, Nástienka aguarda o retorno de um homem que ama. Entre expectativas, ilusões e sentimentos sinceros, a história explora a solidão humana, o amor não correspondido e a diferença entre viver um sonho e enfrentar a realidade.'
},




{
    id: '1822-edicao-juvenil',
    title: '1822: Edição Juvenil Ilustrada',
    author: 'Laurentino Gomes',
    genre: 'Clássico, História',
    cover: 'img/1822.jpeg',
    year: '2016',
    publisher: 'Globo Livros',
    pages: '256',
    language: 'Português',
    isbn: '9788525061911',
    rating: '4,1',
    age: '12+',

    /* PDF DO LIVRO */
    pdf: 'livros/1822 Versao Juvenil.pdf',

    description:
        'Uma versão ilustrada e acessível da história da Independência do Brasil, que apresenta os acontecimentos e personagens responsáveis pela formação do país.',

    synopsis:
        'Laurentino Gomes apresenta os acontecimentos que levaram à Independência do Brasil em 1822, explorando os bastidores políticos, econômicos e sociais que marcaram aquele período. A narrativa acompanha figuras históricas como Dom Pedro I, Dona Leopoldina e outros personagens importantes, revelando que a criação do Brasil independente foi resultado de uma combinação de decisões, conflitos, interesses e circunstâncias inesperadas. Com linguagem acessível e ilustrações de Rita Bromberg Brugger, a edição juvenil convida os jovens leitores a conhecer a história brasileira de maneira leve, envolvente e informativa.'
},



{
    id: 'a-nova-psicologia-do-sucesso',
    title: 'Mindset: A Nova Psicologia do Sucesso',
    author: 'Carol S. Dweck',
    genre: 'Educação',
    cover: 'img/mindset.jpeg',
    year: '2017',
    publisher: 'Objetiva',
    pages: '312',
    language: 'Português',
    isbn: '9788547000240',
    rating: '4,7',
    age: 'Livre',

    /* PDF DO LIVRO */
    pdf: 'livros/A Nova Psicologia do Sucesso.pdf',

    description:
        'Uma obra sobre como nossa mentalidade influencia a aprendizagem, a motivação, os relacionamentos e a busca pelo sucesso.',

    synopsis:
        'A psicóloga Carol S. Dweck apresenta o conceito de mindset, explicando como nossas crenças sobre inteligência e talento influenciam nossas escolhas e conquistas. A autora diferencia a mentalidade fixa, na qual as capacidades são vistas como características imutáveis, da mentalidade de crescimento, que considera possível desenvolver habilidades por meio do esforço, da aprendizagem e da persistência. Com exemplos de situações pessoais, profissionais e educacionais, o livro mostra como mudar a maneira de enfrentar desafios, aprender com os erros e desenvolver o próprio potencial.'
},





{
    id: 'a-arte-da-guerra',
    title: 'A Arte da Guerra',
    author: 'Sun Tzu',
    genre: 'Clássico, História',
    cover: 'img/arte de guerra.jpeg',
    year: '2019',
    publisher: 'Penguin-Companhia das Letras',
    pages: '448',
    language: 'Português',
    isbn: '9788582850909',
    rating: '4,7',
    age: '12+',

    /* PDF DO LIVRO */
    pdf: 'livros/Arte da Guerra de Sun Tzu.pdf',

    description:
        'Um clássico milenar sobre estratégia, liderança e inteligência, cujos ensinamentos ultrapassam os campos de batalha e podem ser aplicados a diferentes situações da vida.',

    synopsis:
        'Atribuído ao estrategista chinês Sun Tzu, A Arte da Guerra apresenta princípios fundamentais para compreender conflitos, planejar ações e alcançar objetivos com inteligência. Dividida em treze capítulos, a obra aborda temas como planejamento, liderança, conhecimento do adversário, adaptação às circunstâncias e uso eficiente dos recursos. O livro ensina que a vitória nem sempre depende da força, mas da capacidade de antecipar situações, reconhecer oportunidades e evitar confrontos desnecessários. Seus ensinamentos continuam influenciando áreas como política, negócios, administração e desenvolvimento pessoal.'
},




{
    id: 'crime-e-castigo',
    title: 'Crime e Castigo',
    author: 'Fiódor Dostoiévski',
    genre: 'Romance, Clássico',
    cover: 'img/crime castigo.jpeg',
    year: '2019',
    publisher: 'Editora 34',
    pages: '592',
    language: 'Português',
    isbn: '9788573266467',
    rating: '4,8',
    age: '16+',

    /* PDF DO LIVRO */
    pdf: 'livros/CRIME E CASTIGO.pdf',

    description:
        'Um clássico da literatura russa que explora a culpa, a moralidade e os conflitos psicológicos de um homem confrontado pelas consequências de seus atos.',

    synopsis:
        'Rodion Raskólnikov é um jovem ex-estudante que vive na pobreza em São Petersburgo e desenvolve uma teoria segundo a qual pessoas extraordinárias poderiam ultrapassar os limites morais em nome de objetivos maiores. Convencido de suas próprias ideias, ele comete um assassinato, mas logo passa a enfrentar uma intensa batalha psicológica marcada por culpa, medo e paranoia. Enquanto o investigador Porfíri Petrovitch se aproxima da verdade, Raskólnikov precisa lidar com seus conflitos internos e com as pessoas que cruzam seu caminho. Em uma profunda reflexão sobre justiça, sofrimento, responsabilidade e redenção, Dostoiévski investiga os limites da consciência humana.'
},




{
    id: 'dracula',
    title: 'Drácula',
    author: 'Bram Stoker',
    genre: 'Terror, Clássico',
    cover: 'img/dracula.jpeg',
    year: '2024',
    publisher: 'Amarcord',
    pages: '224',
    language: 'Português',
    isbn: '9786585854023',
    rating: '4,8',
    age: '16+',

    /* PDF DO LIVRO */
    pdf: 'livros/dracula.pdf',

    description:
        'Um clássico do terror gótico que apresenta o lendário Conde Drácula e explora o medo, o mistério e a luta entre a humanidade e forças sobrenaturais.',

    synopsis:
        'Jonathan Harker viaja até a Transilvânia para auxiliar o misterioso Conde Drácula na compra de uma propriedade na Inglaterra. Ao chegar ao castelo, percebe que seu anfitrião esconde segredos aterrorizantes. Enquanto acontecimentos inexplicáveis começam a ocorrer na Inglaterra, Mina Harker, Lucy Westenra e o professor Abraham Van Helsing se envolvem em uma luta contra a ameaça do vampiro. Narrada por meio de cartas, diários e telegramas, a história acompanha a tentativa de impedir que Drácula espalhe sua maldição e transforme outras vidas em vítimas das trevas.'
},




{
    id: 'grande-sertao-veredas',
    title: 'Grande Sertão: Veredas',
    author: 'João Guimarães Rosa',
    genre: 'Romance, Clássico',
    cover: 'img/sertao.jpeg',
    year: '2019',
    publisher: 'Companhia das Letras',
    pages: '560',
    language: 'Português',
    isbn: '9788535931983',
    rating: '4,7',
    age: '16+',

    /* PDF DO LIVRO */
    pdf: 'livros/grande sertao.pdf',

    description:
        'Uma das grandes obras da literatura brasileira, que mistura amor, violência, conflitos morais e reflexões filosóficas em meio às paisagens do sertão.',

    synopsis:
        'Riobaldo, antigo jagunço do sertão brasileiro, narra suas experiências de vida, relembrando batalhas, amizades, traições e os dilemas que marcaram seu passado. Entre suas lembranças está sua relação profunda e misteriosa com Diadorim, companheiro de armas por quem desenvolve sentimentos complexos. Enquanto atravessa conflitos e questiona a existência do bem e do mal, Riobaldo também reflete sobre Deus, o destino e a possibilidade de ter feito um pacto com o diabo. Com linguagem inovadora e uma narrativa intensa, João Guimarães Rosa transforma o sertão em um espaço universal de reflexão sobre a condição humana.'
},




{
    id: 'harry-potter-pedra-filosofal',
    title: 'Harry Potter e a Pedra Filosofal',
    author: 'J. K. Rowling',
    genre: ['Fantasia' , 'Aventura'],
    cover: 'img/harry potter.jpeg',
    year: '2021',
    publisher: 'Rocco',
    pages: '288',
    language: 'Português',
    isbn: '9786555321227',
    rating: '4,9',
    age: '10+',

    /* PDF DO LIVRO */
    pdf: 'livros/harry potter e a pedra filosofal.pdf',

    description:
        'O início de uma jornada mágica que apresenta um jovem bruxo, uma escola extraordinária e um mundo repleto de mistérios, amizades e aventuras.',

    synopsis:
        'Harry Potter é um garoto órfão que vive com os tios e nunca imaginou que sua vida pudesse esconder algo extraordinário. Ao completar onze anos, recebe uma carta que revela sua verdadeira identidade: ele é um bruxo e foi convidado para estudar na Escola de Magia e Bruxaria de Hogwarts. Lá, Harry faz amizade com Rony Weasley e Hermione Granger, aprende a usar magia e descobre segredos sobre seu passado. Ao investigar o mistério da Pedra Filosofal, os três amigos se envolvem em uma aventura perigosa que os leva a enfrentar forças sombrias ligadas ao bruxo responsável pela morte dos pais de Harry.'
},




{
    id: 'a-metamorfose',
    title: 'A Metamorfose',
    author: 'Franz Kafka',
    genre: ['Clássico, Fantasia'],
    cover: 'img/metamor.jpeg',
    year: '2024',
    publisher: 'Editora Antofágica',
    pages: '96',
    language: 'Português',
    isbn: '9786580210367',
    rating: '4,7',
    age: '14+',

    /* PDF DO LIVRO */
    pdf: 'livros/metamorfose.pdf',

    description:
        'Uma obra clássica que aborda a solidão, a alienação e a desumanização por meio de uma transformação extraordinária e perturbadora.',

    synopsis:
        'Gregor Samsa é um caixeiro-viajante que sustenta financeiramente sua família. Certa manhã, ele desperta e percebe que se transformou em uma criatura monstruosa semelhante a um inseto. Incapaz de continuar trabalhando e de se comunicar normalmente, passa a enfrentar o medo, a rejeição e o afastamento das pessoas que ama. Enquanto sua família tenta lidar com a situação, Gregor experimenta uma crescente solidão e perde gradualmente seu lugar dentro de casa. Com uma narrativa inquietante e simbólica, Franz Kafka explora a identidade, a exclusão social, as obrigações familiares e a fragilidade das relações humanas.'
},




{
    id: 'o-iluminado',
    title: 'O Iluminado',
    author: 'Stephen King',
    genre: 'Terror',
    cover: 'img/iluminado.jpeg',
    year: '2017',
    publisher: 'Suma',
    pages: '520',
    language: 'Português',
    isbn: '9788556510464',
    rating: '4,8',
    age: '18+',

    /* PDF DO LIVRO */
    pdf: 'livros/O iluminado.pdf',

    description:
        'Um clássico do terror que transforma um hotel isolado em um cenário de medo, loucura e forças sobrenaturais.',

    synopsis:
        'Jack Torrance consegue um emprego como zelador de inverno no isolado Hotel Overlook, nas montanhas do Colorado. Ele se muda para o local com sua esposa, Wendy, e seu filho Danny, esperando reconstruir a vida e dedicar-se à escrita. Porém, durante o inverno rigoroso, o hotel fica isolado pela neve e começa a revelar uma presença maligna. Danny possui uma habilidade sobrenatural conhecida como “iluminação”, que lhe permite perceber coisas ocultas e acontecimentos inexplicáveis. Enquanto as forças do hotel tentam dominar o menino, as fraquezas e os conflitos de Jack se intensificam, colocando toda a família em perigo.'
},





{
    id: 'orgulho-e-preconceito',
    title: 'Orgulho e Preconceito',
    author: 'Jane Austen',
    genre: 'Romance, Clássico',
    cover: 'img/orgulho preco.jpeg',
    year: '2023',
    publisher: 'Faro Editorial',
    pages: '320',
    language: 'Português',
    isbn: '9786559572625',
    rating: '4,8',
    age: '12+',

    /* PDF DO LIVRO */
    pdf: 'livros/ORGULHO E PRECONCEITO.pdf',

    description:
        'Um clássico da literatura que combina romance, ironia e crítica social para mostrar como o orgulho e os julgamentos precipitados podem impedir as pessoas de enxergar umas às outras verdadeiramente.',

    synopsis:
        'Elizabeth Bennet é uma jovem inteligente e independente que vive com suas quatro irmãs e seus pais na Inglaterra do século XIX. Ao conhecer o reservado Sr. Darcy, ela desenvolve uma antipatia por ele. Entre mal-entendidos, diferenças sociais e sentimentos inesperados, ambos precisam rever suas primeiras impressões e seus próprios preconceitos.'
},





{
    id: '1984',
    title: '1984',
    author: 'George Orwell',
    genre: 'Ficção Cientifica, Clássico',
    cover: 'img/1984.jpeg',
    year: '2020',
    publisher: 'Penguin-Companhia das Letras',
    pages: '392',
    language: 'Português',
    isbn: '9788582851197',
    rating: '4,8',
    age: '16+',

    /* PDF DO LIVRO */
    pdf: 'livros/orwell 1984.pdf',

    description:
        'Uma distopia marcante sobre vigilância, manipulação da informação e controle absoluto do Estado sobre a sociedade.',

    synopsis:
        'Winston Smith vive na Oceânia, uma sociedade totalitária governada pelo Partido e simbolizada pela figura do Grande Irmão. Nesse mundo, todos são constantemente vigiados, a história é alterada para atender aos interesses do governo e até os pensamentos individuais podem ser considerados crimes. Insatisfeito com a realidade em que vive, Winston começa a questionar o regime e busca preservar sua liberdade e sua própria identidade. Ao se aproximar de Julia, ele encontra uma possibilidade de resistência, mas logo percebe que desafiar um sistema que controla a informação, a linguagem e o comportamento humano pode ter consequências devastadoras. George Orwell apresenta uma reflexão inquietante sobre autoritarismo, propaganda, censura e liberdade.'
},



{
    id: 'pedagogia-do-oprimido',
    title: 'Pedagogia do Oprimido',
    author: 'Paulo Freire',
    genre: 'Educação',
    cover: 'img/pedagogia.jpeg',
    year: '2019',
    publisher: 'Paz e Terra',
    pages: '256',
    language: 'Português',
    isbn: '9788577534180',
    rating: '4,8',
    age: '14+',

    /* PDF DO LIVRO */
    pdf: 'livros/PEDAGOGIA DO OPRIMIDO.pdf',

    description:
        'Uma obra fundamental da educação crítica que questiona as relações de opressão e defende o diálogo e a conscientização como caminhos para a transformação social.',

    synopsis:
        'Paulo Freire analisa como as desigualdades sociais influenciam a educação e as relações entre as pessoas. O autor critica o modelo de educação bancária, no qual os estudantes são tratados como receptores passivos de informações, e propõe uma prática educativa baseada no diálogo, na reflexão crítica e na participação ativa dos educandos. Ao discutir as relações entre opressores e oprimidos, Freire defende que a educação pode contribuir para a compreensão da realidade e para a construção de uma sociedade mais justa e democrática.'
},





{
    id: 'percy-jackson-o-ladrao-de-raios',
    title: 'Percy Jackson e os Olimpianos: O Ladrão de Raios',
    author: 'Rick Riordan',
    genre: 'Fantasia, Aventura, Mitologia ',
    cover: 'img/percy ja.jpeg',
    year: '2023',
    publisher: 'Intrínseca',
    pages: '400',
    language: 'Português',
    isbn: '9786555606539',
    rating: '4,8',
    age: '12+',

    /* PDF DO LIVRO */
    pdf: 'livros/percy jackson.pdf',

    description:
        'Uma aventura repleta de mitologia grega, criaturas fantásticas e descobertas sobre identidade, amizade e coragem.',

    synopsis:
        'Percy Jackson é um garoto de doze anos que enfrenta dificuldades na escola e acontecimentos estranhos que parecem saídos dos mitos gregos. Sua vida muda quando descobre ser um semideus, filho de um deus do Olimpo. Acusado de roubar o raio-mestre de Zeus, Percy precisa encontrar o verdadeiro responsável antes que uma guerra entre os deuses destrua o mundo. Ao lado de Annabeth Chase e Grover Underwood, ele embarca em uma jornada perigosa pelos Estados Unidos, enfrentando monstros, desafios e segredos da mitologia grega. Durante a missão, Percy também começa a compreender suas origens e o destino que o aguarda.'
},




{
    id: 'a-republica',
    title: 'A República',
    author: 'Platão',
    genre: 'Clássico, Mitologia',
    cover: 'img/republica.jpeg',
    year: '2023',
    publisher: 'EDUFPA',
    pages: '860',
    language: 'Português e Grego',
    isbn: '9786589745020',
    rating: '4,7',
    age: '14+',

    /* PDF DO LIVRO */
    pdf: 'livros/Platao A Republica.pdf',

    description:
        'Uma das obras fundamentais da filosofia ocidental, na qual Platão investiga a justiça, a organização da sociedade e as características de um governo ideal.',

    synopsis:
        'Por meio de diálogos conduzidos principalmente por Sócrates, Platão explora o significado da justiça e questiona o que torna uma pessoa e uma sociedade verdadeiramente justas. A obra apresenta reflexões sobre educação, ética, política, conhecimento e organização do Estado, discutindo o papel dos governantes e a formação dos cidadãos. Entre seus trechos mais conhecidos está a Alegoria da Caverna, que representa a busca pelo conhecimento e a diferença entre as aparências e a realidade. Ao longo dos diálogos, o filósofo convida o leitor a refletir sobre a verdade, o poder, a natureza humana e os fundamentos de uma sociedade justa.'
},




{
    id: 'por-lugares-incriveis',
    title: 'Por Lugares Incríveis',
    author: 'Jennifer Niven',
    genre: 'Romance, Drama',
    cover: 'img/por lugares.jpeg',
    year: '2015',
    publisher: 'Seguinte',
    pages: '336',
    language: 'Português',
    isbn: '9788565765572',
    rating: '4,6',
    age: '14+',

    /* PDF DO LIVRO */
    pdf: 'livros/por lugares incriveis.pdf',

    description:
        'Um romance emocionante sobre amizade, amor, luto e saúde mental, que mostra como os encontros inesperados podem transformar a maneira como enxergamos a vida.',

    synopsis:
        'Violet Markey ainda tenta lidar com a perda da irmã e se sente incapaz de retomar a vida que conhecia. Theodore Finch é um jovem introspectivo que enfrenta dificuldades emocionais e carrega conflitos familiares. Os dois se encontram em um momento delicado e acabam trabalhando juntos em um projeto escolar que os leva a explorar lugares especiais de seu estado. Durante essa jornada, Violet começa a redescobrir a alegria de viver, enquanto Finch encontra alguém com quem pode compartilhar seus sentimentos. A relação entre eles se torna uma experiência de descobertas, afeto e desafios, abordando temas como sofrimento emocional, luto, empatia e a importância de enxergar as pessoas para além das aparências.'
},




{
    id: 'torto-arado',
    title: 'Torto Arado',
    author: 'Itamar Vieira Junior',
    genre: 'Romance, Clássico',
    cover: 'img/torto.jpeg',
    year: '2019',
    publisher: 'Todavia',
    pages: '264',
    language: 'Português',
    isbn: '9786580309313',
    rating: '4,8',
    age: '16+',

    /* PDF DO LIVRO */
    pdf: 'livros/Torto Arado.pdf',

    description:
        'Um romance marcante da literatura brasileira que aborda a desigualdade social, a luta pela terra, a ancestralidade e a resistência de comunidades rurais no sertão baiano.',

    synopsis:
        'As irmãs Bibiana e Belonísia vivem na Fazenda Água Negra, no sertão da Bahia, onde suas famílias trabalham em terras que não lhes pertencem. Ainda crianças, as duas sofrem um acidente que transforma profundamente suas vidas e estabelece entre elas uma ligação inseparável. Conforme crescem, enfrentam as consequências da exploração dos trabalhadores rurais, do racismo e das desigualdades herdadas do passado escravista brasileiro. Entre tradições familiares, espiritualidade, conflitos e resistência, suas trajetórias se entrelaçam à luta de toda uma comunidade por dignidade, justiça e direito à terra.'
},



{
    id: 'tudo-nela-brilha-e-queima',
    title: 'Tudo Nela Brilha e Queima',
    author: 'Ryane Leão',
    genre: 'Romance',
    cover: 'img/tudo nela.jpeg',
    year: '2017',
    publisher: 'Planeta do Brasil',
    pages: '192',
    language: 'Português',
    isbn: '9788542211801',
    rating: '4,8',
    age: '14+',

    /* PDF DO LIVRO */
    pdf: 'livros/Tudo Nela Brilha e Queima.pdf',

    description:
        'Uma coletânea de poemas intensos sobre amor, identidade, resistência, autoestima e os desafios de ser mulher em uma sociedade marcada por desigualdades.',

    synopsis:
        'Em seu livro de estreia, Ryane Leão reúne poemas que exploram sentimentos, experiências cotidianas e processos de transformação pessoal. Com uma escrita direta, íntima e carregada de emoção, a autora aborda o amor, o desapego, as dores, os recomeços e a busca pela própria identidade. Suas palavras também expressam resistência, empoderamento feminino e a necessidade de dar voz a sentimentos frequentemente silenciados. Entre vulnerabilidade e força, os poemas convidam o leitor a reconhecer suas próprias experiências, acolher suas emoções e encontrar coragem para continuar seguindo em frente.'
},



    {
        id: 'pequeno',
        title: 'O Pequeno Príncipe',
        author: 'Antoine de Saint-Exupéry',
        genre: 'Clássico, História',
        cover: 'img/pequeno.jpeg',
        year: '1943',
        publisher: 'Agir',
        pages: '96',
        language: 'Português',
        isbn: '9788522031443',
        rating: '4,9',
        age: 'Livre',

        /* PDF DO LIVRO */
        pdf: 'livros/O PEQUENO PRÍNCIPE.pdf',

        description:
            'Uma fábula delicada sobre amizade, cuidado e aquilo que é essencial.',

        synopsis:
            'A história acompanha um pequeno príncipe que viaja por diferentes planetas e encontra personagens que fazem o leitor refletir sobre amizade, amor, responsabilidade e sobre aquilo que realmente importa na vida.'
    },

    {
        id: 'sapiens',
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        genre: 'História, Clássico',
        cover: 'img/sapiens.jpeg',
        year: '2011',
        publisher: 'Companhia das Letras',
        pages: '464',
        language: 'Português',
        isbn: '9788535922486',
        rating: '4,8',
        age: '16 anos',

        /* PDF DO LIVRO */
        pdf: 'livros/sapiens.pdf',

        description:
            'A trajetória da nossa espécie, das primeiras comunidades ao mundo atual.',

        synopsis:
            'Sapiens apresenta uma visão geral da história da humanidade, passando pelas primeiras sociedades, pela Revolução Agrícola, pelo desenvolvimento das grandes civilizações e pelas transformações que levaram ao mundo moderno.'
    },

    {
        id: 'deadpool-samurai',
        type: 'hq',
        title: 'Deadpool Samurai',
        author: 'Sanshirou Kasama',
        genre: 'Comédia, ação',
        cover: 'img/Deadpool samurai.jpg',
        year: '2020-2021',
        publisher: 'Shōnen Jump+',
        pages: '210',
        language: 'Português',
        isbn: 'A definir',
        rating: '3,96',
        age: '14+',

    /* PDF DO LIVRO */
    pdf: 'hq/Deadpool Samurai.pdf',

    description:
        'É um mangá shonen escrito por Sanshirou Kasama e ilustrado por Hikaru Uesugi, publicado originalmente pela plataforma Shonen Jump+ da editora Shueisha.',

    synopsis:
        'Deadpool: Samurai acompanha Wade Wilson em Tóquio após ser recrutado pelo Homem de Ferro para fundar a Esquadra Samurai, uma divisão japonesa dos Vingadores.'
    },




    /* EXEMPLOS DE MANGÁS — substitua/adapte os caminhos dos arquivos */

   
{
    id: 'jujutsu-kaisen',
    type: 'manga',
    title: 'Jujutsu Kaisen',
    series: 'Jujutsu Kaisen',
    volume: '1-4',
    author: 'Gege Akutami',
    genre: 'Ação',
    cover: 'img/jujutsu kaisen.jpg',
    year: '2018',
    publisher: 'Shueisha',
    pages: '968',
    language: 'Português',
    isbn: 'A definir',
    rating: '—',
    age: 'Consultar edição',

    pdf: 'mangás/jujutsu kaisen/JUJUTSU KAISEN VOL.01.pdf',

    chapters: [
        {
            number: 1,
            title: 'Volume 1',
            pdf: 'mangás/jujutsu kaisen/JUJUTSU KAISEN VOL.01.pdf'
        },
        {
            number: 2,
            title: 'Volume 2',
            pdf: 'mangás/jujutsu kaisen/JUJUTSU KAISEN VOL.02.pdf'
        },
        {
            number: 3,
            title: 'Volume 3',
            pdf: 'mangás/jujutsu kaisen/JUJUTSU KAISEN VOL.03.pdf'
        },
        {
            number: 4,
            title: 'Volume 4',
            pdf: 'mangás/jujutsu kaisen/JUJUTSU KAISEN VOL.04.pdf'
        }
    ],

    description:
        'Um estudante se envolve com o mundo das maldições e da feitiçaria jujutsu.',

    synopsis:
        'Yuji Itadori entra em contato com objetos amaldiçoados e passa a enfrentar perigos sobrenaturais, envolvendo-se no universo dos feiticeiros jujutsu.'
},


{
    id: 'lanterna-verde',
    type: 'hq',
    title: 'Lanterna Verde: Deluxe',
    series: 'Lanterna Verde',
    volume: 'Edição única',
    author: 'Geoff Johns, Dave Gibbons e outros',
    genre: ['Super-heróis', 'Ação', 'Ficção científica'],
    cover: 'img/lanterna verde.jpg',
    year: '2019',
    publisher: 'Panini Comics',
    pages: '324',
    language: 'Português',
    isbn: '9788573516340',
    rating: '—',
    age: 'Consultar edição',

    pdf: 'hq/Lanterna verde/lanterna 01.pdf',

    chapters: [
           {
            number: 1,
            title: 'Renascimento',
            pdf: 'hq/Lanterna verde/lanterna 01.pdf'
        },
        {
            number: 2,
            title: 'Sem medo',
            pdf: 'hq/Lanterna verde/lanterna 02.pdf'
        },
        {
            number: 3,
            title: 'A Vinganças dos Lanternas Verdes',
            pdf: 'hq/Lanterna verde/lanterna 03.pdf'
        },
        {
            number: 4,
            title: 'Hal Jordan: Procurado',
            pdf: 'hq/Lanterna verde/lanterna 04.pdf'
        },
        { number: 5,
            title: 'Tropa dos Lanternas Verdes: O Lado Negro do Verde',
            pdf: 'hq/Lanterna verde/lanterna 05.pdf'
        }
    ],

    description:
        'Hal Jordan retorna à função de Lanterna Verde após sua redenção e precisa enfrentar novas ameaças cósmicas, enquanto a Tropa dos Lanternas Verdes volta a se organizar.',

    synopsis:
        'Após ressurgir e encontrar sua redenção, Hal Jordan retoma seu papel como protetor do Setor Espacial 2814. De volta à Terra e à Força Aérea, ele enfrenta os Caçadores Cósmicos, o Tubarão e outros inimigos perigosos. Enquanto ameaças misteriosas colocam a humanidade em risco, a Tropa dos Lanternas Verdes tenta se reerguer em Oa para proteger a galáxia. Esta edição reúne histórias que marcam o retorno de Hal Jordan e o início de uma nova fase para os Lanternas Verdes.'
},


 {
    id: 'batman-absolute',
    type: 'hq',
    title: 'Batman Absolute',
    series: 'Absolute Batman',
    volume: '1',
    author: 'Scott Snyder e Nick Dragotta',
    genre: ['Ação', 'Super-heróis'],
    cover: 'img/batman.jpeg',
    year: '2025',
    publisher: 'Panini Comics / DC Comics',
    pages: '72',
    language: 'Português',
    isbn: '9786525940205',
    rating: '—',
    age: 'Consultar edição',

    pdf: 'hq/batman absolute/Absolute 01.pdf',
    chapters: [
        {
            number: 1,
            title: 'Absolute 1',
            pdf: 'hq/batman absolute/Absolute 01.pdf'
        },
        {
            number: 2,
            title: 'Absolute 2',
            pdf: 'hq/batman absolute/Absolute 02.pdf'
        },
        {
            number: 4,
            title: 'Absolute 4',
            pdf: 'hq/batman absolute/Absolute 04.pdf'
        },
        { number: 5,
            title: 'Absolute 5',
            pdf: 'hq/batman absolute/Absolute 05.pdf'
        }
    ],

    description:
        'Uma nova versão do Cavaleiro das Trevas em um universo alternativo da DC Comics.',

    synopsis:
        'No Universo Absolute, Bruce Wayne é reinventado em uma Gotham marcada pela violência e pela desigualdade. Sem a fortuna tradicional da família Wayne e sem o apoio habitual de Alfred, ele assume uma versão diferente do Batman e enfrenta uma perigosa onda de criminosos mascarados.'
},

{
    id: 'black-clover',
    type: 'manga',
    title: 'Black Clover',
    series: 'Black Clover',
    volume: '1',
    author: 'Yuki Tabata',
    genre: ['Ação', 'Aventura', 'Fantasia'],
    cover: 'img/bla clover.jpeg',
    year: '2025',
    publisher: 'Panini / Planet Mangá',
    pages: '192',
    language: 'Português',
    isbn: 'A definir',
    rating: '—',
    age: '16 anos',

    pdf: 'mangás/Black clover/Black Clover Vol 01.pdf',
     chapters: [  
    {
            number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Black Clover Vol 01', 
            pdf: 'mangás/Black clover/Black Clover Vol 01.pdf'
        },
        {
            number: 2, 
            title: 'Black Clover Vol 02 ', 
            pdf: 'mangás/Black clover/Black Clover Vol 02.pdf'
        },
        {
             number: 3, 
            title: 'Black Clover Vol 03 ', 
            pdf: 'mangás/Black clover/Black Clover Vol 03.pdf'

        },
        {
             number: 4, 
            title: 'Black Clover Vol 04 ', 
            pdf: 'mangás/Black clover/Black Clover Vol 04.pdf'
        },
        {
             number: 5, 
            title: 'Black Clover Vol 05 ', 
            pdf: 'mangás/Black clover/Black Clover Vol 05.pdf'
        }
    ],

    description:
        'Um mangá de fantasia sobre magia, rivalidade, amizade e superação.',

    synopsis:
        'Em um mundo onde a magia determina grande parte da vida das pessoas, Asta nasce sem capacidade de usar poderes mágicos. Mesmo assim, ele sonha em se tornar o Rei Mago e superar seu rival e amigo de infância, Yuno. Com determinação e a ajuda de um poder misterioso, Asta começa sua jornada entre os Cavaleiros Mágicos.'
},

{
    id: 'bleach',
    type: 'manga',
    title: 'Bleach',
    series: 'Bleach',
    volume: '1',
    author: 'Tite Kubo',
    genre: ['Ação', 'Aventura', 'Sobrenatural'],
    cover: 'img/BLEACH 2.0.jpg',
    year: 'A definir',
    publisher: 'Panini / Planet Mangá',
    pages: 'A definir',
    language: 'Português',
    isbn: 'A definir',
    rating: '—',
    age: 'Consultar edição',

    pdf: 'mangás/bleach/BLEACH Vol 01.pdf',
    chapters: [
         {
            number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'BLEACH Vol 01', 
            pdf: 'mangás/bleach/BLEACH Vol 01.pdf'
        },
        {
            number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'BLEACH Vol 02', 
            pdf: 'mangás/bleach/BLEACH Vol 02.pdf'
        },
        {
            number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'BLEACH Vol 03', 
            pdf: 'mangás/bleach/BLEACH Vol 03.pdf'
        },
        {
            number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'BLEACH Vol 04', 
            pdf: 'mangás/bleach/BLEACH Vol 04.pdf'
        }
    ],

    description:
        'Um mangá de ação sobrenatural que acompanha um jovem capaz de enxergar espíritos.',

    synopsis:
        'Ichigo Kurosaki é um estudante que consegue ver fantasmas. Sua vida muda quando encontra Rukia Kuchiki, uma Shinigami que combate espíritos malignos conhecidos como Hollows. Após um acontecimento inesperado, Ichigo passa a assumir responsabilidades ligadas ao mundo espiritual e precisa proteger sua família e outras pessoas de ameaças sobrenaturais.'
},

{
    id: 'dragon-ball',
    type: 'manga',
    title: 'Dragon Ball',
    series: 'Dragon Ball',
    volume: '1',
    author: 'Akira Toriyama',
    genre: ['Ação', 'Aventura', 'Comédia'],
    cover: 'img/Dragon Ball super.jpg',
    year: '2015',
    publisher: 'Panini / Planet Mangá',
    pages: '192',
    language: 'Português',
    isbn: 'A definir',
    rating: '—',
    age: '12 anos',

    pdf: 'mangás/dragon ball/DB 01.pdf',
    chapters: [
        {
            number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Dragon Ball super Vol 01', 
            pdf: 'mangás/dragon ball/DB 01.pdf'
        },
        {
                number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Dragon Ball super Vol 02', 
            pdf: 'mangás/dragon ball/DB 02.pdf'
        },
        {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Dragon Ball super Vol 03', 
            pdf: 'mangás/dragon ball/DB 03.pdf'
        },
        {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Dragon Ball super Vol 04', 
            pdf: 'mangás/dragon ball/DB 04.pdf'
        },
        {
                number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Dragon Ball super Vol 05', 
            pdf: 'mangás/dragon ball/DB 05.pdf'
        },
    ],

    description:
        'Uma aventura clássica que mistura artes marciais, humor e a busca por artefatos mágicos.',

    synopsis:
        'Son Goku é um garoto de força extraordinária que vive afastado da civilização. Ao conhecer Bulma, ele parte em uma jornada para encontrar as sete Esferas do Dragão, capazes de realizar desejos quando reunidas. Durante a viagem, os dois encontram adversários, fazem amizades e descobrem um mundo cheio de desafios e aventuras.'
},

{
    id: 'gachiakuta',
    type: 'manga',
    title: 'Gachiakuta',
    series: 'Gachiakuta',
    volume: '1',
    author: 'Kei Urana',
    genre: ['Ação', 'Aventura', 'Fantasia sombria'],
    cover: 'img/gachia.jpeg',
    year: '2024',
    publisher: 'Panini / Planet Mangá',
    pages: '192',
    language: 'Português',
    isbn: 'A definir',
    rating: '—',
    age: 'Consultar edição',

    pdf: 'mangás/Gachiakuta/Gachiakuta Vol 01.pdf',
    chapters: [
       {   
         number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Gachiakuta Vol 01', 
            pdf: 'mangás/Gachiakuta/Gachiakuta Vol 01.pdf'

        }, 
        {
            number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Gachiakuta Vol 02', 
            pdf: 'mangás/Gachiakuta/Gachiakuta Vol 02.pdf'
        },
        {
            number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Gachiakuta Vol 03', 
            pdf: 'mangás/Gachiakuta/Gachiakuta Vol 03.pdf'
        },
        {
            number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Gachiakuta Vol 04', 
            pdf: 'mangás/Gachiakuta/Gachiakuta Vol 04.pdf'
        },
        {
            number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Gachiakuta Vol 05', 
            pdf: 'mangás/Gachiakuta/Gachiakuta Vol 05.pdf'
        }

    ],

    description:
        'Um mangá de ação em um mundo dividido por desigualdade, preconceito e descarte de resíduos.',

    synopsis:
        'Rudo vive em um gueto onde descendentes de criminosos são discriminados. Depois de ser acusado injustamente de um crime, ele é lançado em um local temido por todos, cercado por resíduos e perigos. Lá, conhece Enjin e descobre habilidades especiais que podem ajudá-lo a compreender a verdade sobre aquele mundo e buscar justiça.'
},

{
    id: 'jujutsu-kaisen-modulo',
    type: 'manga',
    title: 'Jujutsu Kaisen: Modulo',
    series: 'Jujutsu Kaisen: Modulo',
    volume: '1',
    author: 'Gege Akutami e Yuji Iwasaki',
    genre: ['Ação', 'Fantasia sombria', 'Ficção científica'],
    cover: 'img/juju modulo.jpeg',
    year: '2026',
    publisher: 'Panini / Planet Mangá',
    pages: '192',
    language: 'Português',
    isbn: '9786525946191',
    rating: '—',
    age: 'Consultar edição',

    pdf: 'mangás/jujutsu modulo/Jujutsu Kaisen Modulo 1.pdf',
    chapters: [
        {
            number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jujutsu Kaisen Modulo 1', 
            pdf: 'mangás/Gachiakuta/Jujutsu Kaisen Modulo 1.pdf'
        },
        {
             number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jujutsu Kaisen Modulo 2', 
            pdf: 'mangás/Gachiakuta/Jujutsu Kaisen Modulo 2.pdf'
        },
        {
             number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jujutsu Kaisen Modulo 3', 
            pdf: 'mangás/Gachiakuta/Jujutsu Kaisen Modulo 3.pdf'
        },
        {
             number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jujutsu Kaisen Modulo 4', 
            pdf: 'mangás/Gachiakuta/Jujutsu Kaisen Modulo 4.pdf'
        }
    ],

    description:
        'Uma continuação do universo de Jujutsu Kaisen que combina feitiçaria e um encontro com seres extraterrestres.',

    synopsis:
        'Décadas após os acontecimentos da série original, a humanidade se depara com a chegada dos Simurianos, seres extraterrestres que procuram refúgio na Terra. Os jovens feiticeiros Tsurugi e Yuuka Okkotsu se envolvem em uma investigação que coloca em questão a convivência entre humanos e visitantes de outro mundo, enquanto forças desconhecidas se cruzam com as técnicas jujutsu.'
},

{
    id: 'Junji ito',
    type: 'manga',
    title: 'Junji Ito',
    series: 'Junji Ito',
    volume: 'Volume único',
    author: 'Junji Ito',
    genre: ['Terror', 'Suspense', 'Ficção científica'],
    cover: 'img/junji ito.jpeg',
    year: '2023',
    publisher: 'JBC',
    pages: '208',
    language: 'Português',
    isbn: '9786555945645',
    rating: '—',
    age: '18 anos',

    pdf: 'Mangás/Junji ito/Black Paradox_compressed.pdf',
    chapters: [
        {
             number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Black Paradox', 
            pdf: 'mangás/Junji ito/Black Paradox_compressed.pdf'
        },
        {
             number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Sensor', 
            pdf: 'mangás/Junji ito/SENSOR.pdf'
        },
        {
             number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Uzumaki: A Espiral do Horror', 
            pdf: 'mangás/Junji ito/Uzumaki A Espiral do Horror 01 1.pdf'
        }
    ],

    description:
        'Uma história de horror psicológico que mistura mistério, tecnologia e acontecimentos inexplicáveis.',

    synopsis:
        'Quatro pessoas se conhecem por meio de um site chamado Black Paradox e decidem se encontrar após compartilharem sentimentos de desespero. O encontro toma um rumo inesperado e os envolvidos acabam diante de acontecimentos perturbadores, que abrem caminho para fenômenos estranhos e consequências difíceis de compreender.'
},

{
    id: 'one-piece',
    type: 'manga',
    title: 'One Piece',
    series: 'One Piece',
    volume: '1',
    author: 'Eiichiro Oda',
    genre: ['Ação', 'Aventura', 'Fantasia'],
    cover: 'img/one piece.jpeg',
    year: '1997',
    publisher: 'Panini / Planet Mangá',
    pages: 'A definir',
    language: 'Português',
    isbn: 'A definir',
    rating: '—',
    age: 'Consultar edição',

    pdf: 'mangás/One piece/One Piece - VOL. 1.pdf',
    chapters: [
        {
            number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'One Piece Vol 1', 
            pdf: 'mangás/One piece/One Piece - VOL. 1.pdf'
        },
        {
             number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'One Piece Vol 2', 
            pdf: 'mangás/One piece/One Piece - VOL. 2.pdf'
        },
        {
             number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'One Piece Vol 3', 
            pdf: 'mangás/One piece/One Piece - VOL. 3.pdf'
        },
        {
             number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'One Piece Vol 3', 
            pdf: 'mangás/One piece/One Piece - VOL. 3.pdf'
        },
        {
             number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'One Piece Vol 4', 
            pdf: 'mangás/One piece/One Piece - VOL. 4.pdf'
        },
        {
             number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'One Piece Vol 5', 
            pdf: 'mangás/One piece/One Piece - VOL. 5.pdf'
        }
    ],

    description:
        'Uma aventura de piratas sobre amizade, liberdade e a busca pelo maior tesouro do mundo.',

    synopsis:
        'Monkey D. Luffy sonha em encontrar o lendário tesouro One Piece e se tornar o Rei dos Piratas. Com o poder de esticar o corpo após comer uma Fruta do Diabo, ele parte em uma jornada pelos mares, conhece aliados e enfrenta inimigos enquanto procura formar uma tripulação capaz de atravessar a perigosa Grand Line.'
},

{
    id: 'saint-seiya',
    type: 'manga',
    title: 'Os Cavaleiros do Zodíaco: Saint Seiya',
    series: 'Saint Seiya',
    volume: '1',
    author: 'Masami Kurumada',
    genre: ['Ação', 'Aventura', 'Fantasia'],
    cover: 'img/cavalhe zodia.jpeg',
    year: '2016',
    publisher: 'JBC',
    pages: '240',
    language: 'Português',
    isbn: '9788545702443',
    rating: '—',
    age: '14 anos',

    pdf: 'mangás/seiya/Volume 01.pdf',
    chapters: [
        {
             number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Saint Seiya Vol 1', 
            pdf: 'mangás/seiya/Volume 01.pdf'
        },
        {
              number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Saint Seiya Vol 2', 
            pdf: 'mangás/seiya/Volume 02.pdf'
        },
        {
              number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Saint Seiya Vol 3', 
            pdf: 'mangás/seiya/Volume 03.pdf'
        },
        {
              number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Saint Seiya Vol 4', 
            pdf: 'mangás/seiya/Volume 04.pdf'
        },
        {
            number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Saint Seiya Vol 5', 
            pdf: 'mangás/seiya/Volume 05.pdf'
        }
    ],

    description:
        'Uma saga de guerreiros que utilizam armaduras e poderes cósmicos para proteger a deusa Atena.',

    synopsis:
        'Seiya e outros jovens guerreiros tornam-se Cavaleiros de Atena e recebem a missão de defender a Terra contra forças que ameaçam a paz. Entre torneios, combates e disputas contra guerreiros poderosos, eles precisam fortalecer suas habilidades e demonstrar lealdade à deusa que juraram proteger.'
},


    {
        id: 'a-bela-casa-no-lago',
        type: 'manga',
        title: 'A Bela Casa no Lago',
        series: 'A Bela Casa no Lago',
        volume: '1',
        author: 'James Tynion IV e Álvaro Martínez Bueno',
        genre: ['Terror', 'Mistério', 'Ficção científica'],
        cover: 'img/bela casa do lago.jpeg',
        year: '2021',
        publisher: 'Panini Comics / DC Black Label',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: 'mangás/bela casa no lago/A Bela Casa no Lago 001.pdf',
        chapters: [
            {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'A Bela Casa no Lago 1', 
            pdf: 'mangás/bela casa no lago/A Bela Casa no Lago 001.pdf'
            },
            {
                  number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'A Bela Casa no Lago 2', 
            pdf: 'mangás/bela casa no lago/A Bela Casa no Lago 002.pdf'
            },
            {
                  number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'A Bela Casa no Lago 3', 
            pdf: 'mangás/bela casa no lago/A Bela Casa no Lago 003.pdf'
            },
            {
                  number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'A Bela Casa no Lago 4', 
            pdf: 'mangás/bela casa no lago/A Bela Casa no Lago 004.pdf'
            },
            {
                  number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'A Bela Casa no Lago 5', 
            pdf: 'mangás/bela casa no lago/A Bela Casa no Lago 005.pdf'
            }
        ],

       
        description: 'Uma HQ de suspense e terror psicológico sobre um grupo de amigos reunidos em uma casa isolada.',

        synopsis: 'Um grupo de dez amigos aceita o convite de uma antiga conhecida para passar um período em uma casa luxuosa à beira de um lago. O local parece perfeito, mas acontecimentos inexplicáveis revelam que eles estão presos em uma situação muito maior e mais assustadora do que imaginavam. Aos poucos, segredos e conflitos vêm à tona enquanto os convidados tentam compreender quem realmente os levou até ali.'
    },

    {
        id: 'blue-lock',
        type: 'manga',
        title: 'Blue Lock',
        series: 'Blue Lock',
        volume: '1',
        author: 'Muneyuki Kaneshiro e Yusuke Nomura',
        genre: ['Esporte', 'Drama', 'Ação'],
        cover: 'img/blue lock.jpeg',
        year: '2018',
        publisher: 'Panini / Planet Mangá',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: 'mangás/blue lock/Volume 01 (1).pdf',
        chapters: [
            {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Blue Lock Vol 1', 
            pdf: 'mangás/blue lock/Volume 01 (1).pdf'
            },
            {
                number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Blue Lock Vol 2', 
            pdf: 'mangás/blue lock/Volume 02 (2).pdf'
            },
            {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Blue Lock Vol 3', 
            pdf: 'mangás/blue lock/Volume 03 (1).pdf'
            },
            {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Blue Lock Vol 4', 
            pdf: 'mangás/blue lock/Volume 04 (1).pdf'
            },
            {
                number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Blue Lock Vol 5', 
            pdf: 'mangás/blue lock/Volume 05 (2).pdf'
            }
        ],

        description: 'Um mangá de futebol que transforma a busca pelo melhor atacante do Japão em uma competição extrema.',

        synopsis: 'Após uma derrota da seleção japonesa, o misterioso Jinpachi Ego cria o projeto Blue Lock, reunindo trezentos jovens atacantes em uma instalação de treinamento rigorosa. Entre desafios, rivalidades e eliminações, Yoichi Isagi precisa desenvolver seu talento, descobrir suas próprias armas e aprender a tomar decisões decisivas dentro de campo para se tornar o atacante definitivo.'
    },



    {
        id: 'demon-slayer',
        type: 'manga',
        title: 'Demon Slayer: Kimetsu no Yaiba',
        series: 'Demon Slayer',
        volume: '1',
        author: 'Koyoharu Gotouge',
        genre: ['Ação', 'Fantasia sombria', 'Aventura'],
        cover: 'img/kimetsu.jpeg',
        year: '2016',
        publisher: 'Panini / Planet Mangá',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: 'mangás/demon slayer/Volume 01.pdf',
        chapters: [
            {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Demon Slayer Vol 1', 
            pdf: 'mangás/demon slayer/Volume 01.pdf'
            },
            {
                number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Demon Slayer Vol 2', 
            pdf: 'mangás/demon slayer/Volume 02.pdf'
            },
            {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Demon Slayer Vol 3', 
            pdf: 'mangás/demon slayer/Volume 03.pdf'
            },
            {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Demon Slayer Vol 4', 
            pdf: 'mangás/demon slayer/Volume 04.pdf'
            },
            {
                number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Demon Slayer Vol 5', 
            pdf: 'mangás/demon slayer/Volume 05.pdf'
            },
            {
                number: 6, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Demon Slayer Vol 6', 
            pdf: 'mangás/demon slayer/Volume 06.pdf'
            },
            {
                number: 7, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Demon Slayer Vol 7', 
            pdf: 'mangás/demon slayer/Volume 07.pdf'
            },
            {
                number: 8, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Demon Slayer Vol 8', 
            pdf: 'mangás/demon slayer/Volume 08.pdf'
            },
            {
                number: 9, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Demon Slayer Vol 9', 
            pdf: 'mangás/demon slayer/Volume 09.pdf'
            },
            {
                number: 10, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Demon Slayer Vol 10', 
            pdf: 'mangás/demon slayer/Volume 10.pdf'
            }
        ],

        description: 'Uma aventura de ação sobre caçadores de demônios, técnicas de espada e laços familiares.',

        synopsis: 'Tanjiro Kamado retorna para casa e encontra sua família massacrada por demônios. Sua irmã Nezuko sobrevive, mas também é transformada em uma dessas criaturas. Determinado a encontrar uma cura para ela e vingar sua família, Tanjiro começa a treinar para integrar o Corpo de Caçadores de Demônios, enfrentando inimigos perigosos em uma jornada marcada por coragem, sofrimento e esperança.'
    },

    {
        id: 'diario-de-uma-apotecaria',
        type: 'manga',
        title: 'Diário de uma Apotecária',
        series: 'Diário de uma Apotecária',
        volume: '1',
        author: 'Natsu Hyuuga, Itsuki Nanao e Nekokurage',
        genre: ['Mistério', 'Drama', 'Histórico'],
        cover: 'img/apotecaria.jpeg',
        year: '2024',
        publisher: 'Panini Comics',
        pages: '178',
        language: 'Português',
        isbn: '9786525921570',
        rating: '—',
        age: 'Consultar edição',
        pdf: 'mangás/Diario de uma apotecaria/Volume 01.pdf',
        chapters: [
            {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Diário de uma apotecaria Vol 1', 
            pdf: 'mangás/Diario de uma apotecaria/Volume 01.pdf'
            },
            {
              number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Diário de uma apotecaria Vol 2', 
            pdf: 'mangás/Diario de uma apotecaria/Volume 02.pdf'
            },
            {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Diário de uma apotecaria Vol 3', 
            pdf: 'mangás/Diario de uma apotecaria/Volume 03.pdf'
            },
            {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Diário de uma apotecaria Vol 4', 
            pdf: 'mangás/Diario de uma apotecaria/Volume 04.pdf'
            },
            {
                number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Diário de uma apotecaria Vol 5', 
            pdf: 'mangás/Diario de uma apotecaria/Volume 05.pdf'
            }
        ],


        description: 'Uma jovem especialista em medicamentos resolve mistérios na corte imperial.',

        synopsis: 'Maomao é uma jovem criada no distrito das diversões que acaba trabalhando no palácio imperial. Graças ao seu conhecimento sobre ervas, venenos e remédios, ela chama a atenção de Jinshi e passa a investigar doenças, incidentes e segredos da corte. Sua curiosidade e seu raciocínio lógico a colocam no centro de intrigas políticas e mistérios cada vez mais complexos.'
    },

    {
        id: 'dorohedoro',
        type: 'manga',
        title: 'Dorohedoro',
        series: 'Dorohedoro',
        volume: '1',
        author: 'Q Hayashida',
        genre: ['Ação', 'Fantasia sombria', 'Terror'],
        cover: 'img/dorodoro.jpeg',
        year: '2020',
        publisher: 'Panini Comics',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: 'mangás/dorohedoro/Volume 01 (2).pdf',
        chapters: [
            {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Dorohedoro Vol 1', 
            pdf: 'mangás/dorohedoro/Volume 01 (2).pdf'
            },
            {
               number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Dorohedoro Vol 2', 
            pdf: 'mangás/dorohedoro/Volume 02 (3).pdf'
            },
            {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Dorohedoro Vol 3', 
            pdf: 'mangás/dorohedoro/Volume 03 (2).pdf'
            },
            {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Dorohedoro Vol 4', 
            pdf: 'mangás/dorohedoro/Volume 04 (2).pdf'
            },
            {
               number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Dorohedoro Vol 5', 
            pdf: 'mangás/dorohedoro/Volume 05 (3).pdf'
            }
        ],
        description: 'Uma fantasia sombria ambientada em uma cidade decadente dominada por experimentos mágicos.',

        synopsis: 'Caiman é um homem com cabeça de lagarto que perdeu a memória após ser vítima de magia. Ao lado de Nikaido, ele caça feiticeiros em busca daquele que o transformou e da verdade sobre sua identidade. Enquanto investiga os responsáveis, Caiman se envolve em conflitos violentos entre os habitantes da cidade e o mundo dos feiticeiros, onde a magia costuma ter consequências brutais.'
    },



    {
        id: 'dr-stone',
        type: 'manga',
        title: 'Dr. Stone',
        series: 'Dr. Stone',
        volume: '1',
        author: 'Riichiro Inagaki e Boichi',
        genre: ['Aventura', 'Ficção científica', 'Comédia'],
        cover: 'img/dr stone.jpeg',
        year: 'A definir',
        publisher: 'Panini / Planet Mangá',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: 'mangás/dr stone/Volume 01 (3).pdf',
        chapters: [
            {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Dr. Stone Vol 1', 
            pdf: 'mangás/dr stone/Volume 01 (3).pdf'
            },
            {
                number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Dr. Stone Vol 2', 
            pdf: 'mangás/dr stone/Volume 02 (4).pdf'
            },
            {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Dr. Stone Vol 3', 
            pdf: 'mangás/dr stone/Volume 03 (3).pdf'
            },
            {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Dr. Stone Vol 04', 
            pdf: 'mangás/dr stone/Volume 04 (3).pdf'
            },
            {
                number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Dr. Stone Vol 05', 
            pdf: 'mangás/dr stone/Volume 05 (4).pdf'
            }
        ],
        description: 'Uma aventura científica em que o conhecimento humano é a principal ferramenta para reconstruir a civilização.',

        synopsis: 'Um fenômeno misterioso transforma toda a humanidade em pedra. Milhares de anos depois, Senku Ishigami desperta e decide reconstruir a civilização usando ciência e experimentação. Com a ajuda de Taiju e de outros aliados, ele cria ferramentas, medicamentos e tecnologias enquanto enfrenta pessoas que discordam de sua visão para o futuro do mundo.'
    },

    {
        id: 'frieren',
        type: 'manga',
        title: 'Frieren e a Jornada para o Além',
        series: 'Frieren',
        volume: '1',
        author: 'Kanehito Yamada e Tsukasa Abe',
        genre: ['Fantasia', 'Aventura', 'Drama'],
        cover: 'img/frieren.jpeg',
        year: '2020',
        publisher: 'Panini Comics',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: 'mangás/frieren/FRIEREN VOL.01.pdf',
        chapters: [
            {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Frieren Volume 1', 
            pdf: 'mangás/frieren/FRIEREN VOL.01.pdf'
            },
            {
                number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Frieren Volume 2', 
            pdf: 'mangás/frieren/FRIEREN VOL.02.pdf'
            },
            {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Frieren Volume 3', 
            pdf: 'mangás/frieren/FRIEREN VOL.03.pdf'
            },
            {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Frieren Volume 4', 
            pdf: 'mangás/frieren/FRIEREN VOL.04.pdf'
            },
            {
                number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Frieren Volume 5', 
            pdf: 'mangás/frieren/FRIEREN VOL.05.pdf'
            }

        ],
        description: 'Uma fantasia contemplativa sobre a passagem do tempo, a memória e os vínculos entre pessoas.',

        synopsis: 'Depois que o grupo de heróis derrota o Rei Demônio, a elfa maga Frieren segue sua vida, sabendo que viverá muito mais tempo do que seus antigos companheiros. Quando percebe o quanto conhece pouco sobre as pessoas que viajaram ao seu lado, ela inicia uma nova jornada. Ao lado de jovens companheiros, Frieren revisita lugares do passado e aprende a compreender melhor os sentimentos humanos.'
    },

    {
        id: 'hells-paradise',
        type: 'manga',
        title: "Hell's Paradise: Jigokuraku",
        series: "Hell's Paradise",
        volume: '1',
        author: 'Yuji Kaku',
        genre: ['Ação', 'Aventura', 'Fantasia sombria'],
        cover: 'img/hells paradise.jpeg',
        year: '2023',
        publisher: 'Panini Comics',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: 'mangás/hells paradise/Hells Paradise Vol.01.pdf',
        chapters: [
            {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Hells Paradise Volume 1', 
            pdf: 'mangás/hells paradise/Hells Paradise Vol.01.pdf'
            },
            {
                number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Hells Paradise Volume 2', 
            pdf: 'mangás/hells paradise/Hells Paradise Vol.02.pdf'
            },
            {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Hells Paradise Volume 3', 
            pdf: 'mangás/hells paradise/Hells Paradise Vol.03.pdf'
            },
            {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Hells Paradise Volume 4', 
            pdf: 'mangás/hells paradise/Hells Paradise Vol.04.pdf'
            },
            {
                number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Hells Paradise Volume 5', 
            pdf: 'mangás/hells paradise/Hells Paradise Vol.05.pdf'
            }
        ],
        description: 'Um mangá de ação brutal sobre criminosos enviados a uma ilha misteriosa em busca do elixir da imortalidade.',

        synopsis: 'Gabimaru, um ninja condenado à morte, recebe a oportunidade de obter o perdão caso encontre o elixir da imortalidade em uma ilha desconhecida. Acompanhado pela executora Sagiri, ele se junta a outros condenados em uma missão repleta de criaturas extraordinárias, perigos sobrenaturais e segredos perturbadores. Para sobreviver, Gabimaru precisa confrontar seu passado e descobrir o que realmente deseja proteger.'
    },



    {
        id: 'homunculus',
        type: 'manga',
        title: 'Homunculus',
        series: 'Homunculus',
        volume: '1',
        author: 'Hideo Yamamoto',
        genre: ['Suspense psicológico', 'Terror', 'Drama'],
        cover: 'img/homunculus.jpeg',
        year: '2003',
        publisher: 'Panini Comics',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: 'mangás/homunculus/Volume 1.pdf',
        chapters: [
            {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Homunculus Volume 1', 
            pdf: 'mangás/homunculus/Volume 1.pdf'
            },
            {
                number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Homunculus Volume 2', 
            pdf: 'mangás/homunculus/Volume 2.pdf'
            },
            {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Homunculus Volume 3', 
            pdf: 'mangás/homunculus/Volume 3.pdf'
            },
            {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Homunculus Volume 4', 
            pdf: 'mangás/homunculus/Volume 4.pdf'
            },
            {
                number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Homunculus Volume 5', 
            pdf: 'mangás/homunculus/Volume 5.pdf'
            }
        ],
        description: 'Um suspense psicológico que explora a percepção, a identidade e os aspectos ocultos da mente humana.',

        synopsis: 'Susumu Nakoshi vive em seu carro e mantém distância da sociedade até aceitar participar de um experimento médico envolvendo trepanação, um procedimento que cria uma abertura no crânio. Após a experiência, ele começa a enxergar formas estranhas nas pessoas, manifestações que parecem revelar seus traumas e conflitos internos. À medida que investiga essas visões, sua própria percepção da realidade se torna cada vez mais instável.'
    },


    {
        id: 'jojo',
        type: 'manga',
        title: "JoJo's Bizarre Adventure - Phantom Blood",
        series: "JoJo's Bizarre Adventure - Phantom Blood",
        volume: '1',
        author: 'Hirohiko Araki',
        genre: ['Ação', 'Aventura', 'Sobrenatural'],
        cover: 'img/jojo part1.jpg',
        year: 'A definir',
        publisher: 'A definir',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: '',
        chapters: [

             {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 1 Volume 1', 
            pdf: ''
            },
              {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 1 Volume 2', 
            pdf: 'mangás/jojo/'
            },
              {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 1 Volume 3', 
            pdf: 'mangás/jojo/'
            },
              {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 1 Volume 4', 
            pdf: 'mangás/jojo/'
            },
           
        ],
        description: 'Uma saga de ação que acompanha gerações da família Joestar em confrontos extraordinários.',
        synopsis: 'A história acompanha diferentes integrantes da família Joestar, cada um enfrentando ameaças e adversários em épocas e lugares distintos. Entre poderes sobrenaturais, estratégias improváveis e batalhas cheias de criatividade, os protagonistas precisam superar inimigos poderosos e lidar com um legado familiar que atravessa gerações. A trama e os personagens específicos dependem da parte escolhida da série.'
    },


    {
        id: 'jojo2',
        type: 'manga',
        title: "JoJo's Bizarre Adventure - Battle Tendency",
        series: "JoJo's Bizarre Adventure - Battle Tendency",
        volume: '1',
        author: 'Hirohiko Araki',
        genre: ['Ação', 'Aventura', 'Sobrenatural'],
        cover: 'img/jojo part2.jpg',
        year: 'A definir',
        publisher: 'A definir',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: '',
        chapters: [

            {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 2 Volume 1', 
            pdf: 'mangás/jojo/jojo 2/Vol 01.pdf'
            },
            {
                number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 2 Volume 2', 
            pdf: 'mangás/jojo/jojo 2/Vol 02.pdf'
            },
            {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 2 Volume 3', 
            pdf: 'mangás/jojo/jojo 2/Vol 03.pdf'
            },
            {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 2 Volume 4', 
            pdf: 'mangás/jojo/jojo 2/Vol 04.pdf'
            },
        ],
        description: 'Uma saga de ação que acompanha gerações da família Joestar em confrontos extraordinários.',
        synopsis: 'Cinquenta anos após a primeira parte, o rebelde e astuto Joseph Joestar descobre que os Homens do Pilar uma raça antiga de seres imortais e poderosos despertaram de seu sono milenar. Para impedir que eles conquistem a Pedra de Aja (que os tornaria imunes ao sol e donos do mundo), Joseph viaja pela Europa, une forças com o rival Caesar Zeppeli e treina sob a tutela da mestre Lisa Lisa para dominar o Hamon em uma corrida desesperada contra o tempo.'
    },


    {
        id: 'jojo3',
        type: 'manga',
        title: "JoJo's Bizarre Adventure - Stardust Crusaders ",
        series: "JoJo's Bizarre Adventure - Stardust Crusaders ",
        volume: '1',
        author: 'Hirohiko Araki',
        genre: ['Ação', 'Aventura', 'Sobrenatural'],
        cover: 'img/jojo part3.jpg',
        year: 'A definir',
        publisher: 'A definir',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: '',
        chapters: [

               {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 3 Volume 1', 
            pdf: 'mangás/jojo'
            },   {
                number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 3 Volume 2', 
            pdf: 'mangás/jojo'
            },   {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 3 Volume 3', 
            pdf: 'mangás/jojo'
            },   {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 3 Volume 4', 
            pdf: 'mangás/jojo'
            },
        ],
        description: 'Uma saga de ação que acompanha gerações da família Joestar em confrontos extraordinários.',
        synopsis: 'O terrível vampiro DIO desperta após um século preso no fundo do mar usando o corpo roubado de Jonathan Joestar. Esse retorno ativa Stands na linhagem Joestar, mas a mãe do jovem delinquente Jotaro Kujo não aguenta essa energia e cai gravemente doente. Para salvá-la, Jotaro, seu avô Joseph Joestar (agora idoso) e um grupo de aliados partem em uma jornada épica de 50 dias do Japão até o Egito, enfrentando perigosos usuários de Stand leais a DIO'
    },


    {
        id: 'jojo4',
        type: 'manga',
        title: "JoJo's Bizarre Adventure - Diamond is Unbreakable",
        series: "JoJo's Bizarre Adventure - Diamond is Unbreakable",
        volume: '1',
        author: 'Hirohiko Araki',
        genre: ['Ação', 'Aventura', 'Sobrenatural'],
        cover: 'img/jojo part4.jpg',
        year: 'A definir',
        publisher: 'A definir',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: '',
        chapters: [

               {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 4 Volume 1', 
            pdf: 'mangás/jojo'
            },

               {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 4 Volume 2', 
            pdf: 'mangás/jojo'
            },

               {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 4 Volume 3', 
            pdf: 'mangás/jojo'
            },

               {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 4 Volume 4', 
            pdf: 'mangás/jojo'
            },
        ],
        description: 'Uma saga de ação que acompanha gerações da família Joestar em confrontos extraordinários.',
        synopsis: 'Jotaro Kujo viaja até a cidade de Morioh para encontrar Josuke Higashikata, o filho ilegítimo de seu avô Joseph Joestar. Ao chegar, ele descobre que um misterioso Artefato (o Arco e a Flecha) está criando novos usuários de Stand pela região, tirando a paz da cidade. A situação atinge o ápice quando Josuke e seus amigos descobrem que Morioh esconde um segredo terrível: Yoshikage Kira, um assassino em série calculista com fetiche por mãos, que vive disfarçado como um cidadão comum. Unidos, os heróis iniciam uma caçada suburbana para deter o psicopata antes que ele continue a fazer novas vítimas.'
    },



    {
        id: 'jojo5',
        type: 'manga',
        title: "JoJo's Bizarre Adventure - Golden Wind",
        series: "JoJo's Bizarre Adventure - Golden Wind",
        volume: '1',
        author: 'Hirohiko Araki',
        genre: ['Ação', 'Aventura', 'Sobrenatural'],
        cover: 'img/jojo part5.jpeg',
        year: 'A definir',
        publisher: 'A definir',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: '',
        chapters: [

               {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 5 Volume 1', 
            pdf: 'mangás/jojo/jojo 5/Vol 02.pdf'
            },

               {
                number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 5 Volume 2', 
            pdf: 'mangás/jojo/jojo 5/Vol 02.pdf'
            },

               {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 5 Volume 3', 
            pdf: 'mangás/jojo/jojo 5/Vol 03.pdf'
            },

               {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 5 Volume 4', 
            pdf: 'mangás/jojo/jojo 5/Vol 04.pdf'
            },

               {
                number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 5 Volume 5', 
            pdf: 'mangás/jojo/jojo 5/Vol 05.pdf'
            },
        ],
        description: 'Uma saga de ação que acompanha gerações da família Joestar em confrontos extraordinários.',
        synopsis: 'Giorno Giovanna é um jovem mafioso de Nápoles que possui um segredo genético único: ele é o filho biológico de DIO (gerado com o corpo de Jonathan Joestar). Movido pelo sonho de erradicar o tráfico de drogas que destrói a juventude de sua cidade, Giorno decide se infiltrar na poderosa máfia Passione. Aliando-se ao idealista Bruno Bucciarati e sua equipe de renegados, o grupo recebe a missão de escoltar a filha do misterioso Chefe da máfia, Diavolo. Contudo, a missão logo se transforma em uma rebelião sangrenta quando eles descobrem as verdadeiras e cruéis intenções do líder, iniciando uma caçada brutal por toda a Itália para derrubar o império criminoso.'
    },


    {
        id: 'jojo6',
        type: 'manga',
        title: "JoJo's Bizarre Adventure - Stone Ocean",
        series: "JoJo's Bizarre Adventure - Stone Ocean",
        volume: '1',
        author: 'Hirohiko Araki',
        genre: ['Ação', 'Aventura', 'Sobrenatural'],
        cover: 'img/jojo part6.jpg',
        year: 'A definir',
        publisher: 'A definir',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: '',
        chapters: [

              {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 6 Volume 1', 
            pdf: 'mangás/jojo/jojo 6/Vol 01.pdf'
            },

              {
                number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 6 Volume 2', 
            pdf: 'mangás/jojo/jojo 6/Vol 02.pdf'
            },

              {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 6 Volume 3', 
            pdf: 'mangás/jojo/jojo 6/Vol 03.pdf'
            },

              {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 6 Volume 4', 
            pdf: 'mangás/jojo/jojo 6/Vol 04.pdf'
            },

              {
                number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 6 Volume 5', 
            pdf: 'mangás/jojo/jojo 6/Vol 05.pdf'
            },
        ],
        description: 'Uma saga de ação que acompanha gerações da família Joestar em confrontos extraordinários.',
        synopsis: 'Jolyne Cujoh, a filha de Jotaro Kujo, é vítima de uma emboscada e acaba condenada a 15 anos de prisão por um assassinato que não cometeu. Na Prisão Green Dolphin Street, um amuleto enviado por seu pai desperta seu Stand, o Stone Free. A situação piora drasticamente quando o vilão Enrico Pucci, o capelão da prisão e leal discípulo de DIO, rouba as memórias e o Stand de Jotaro. Para salvar a vida de seu pai e impedir que Pucci execute um plano catastrófico de reescrever a própria realidade, Jolyne precisa se aliar a outros detentos e travar uma batalha brutal dentro e fora das grades.'
    },



    {
        id: 'jojo7',
        type: 'manga',
        title: "JoJo's Bizarre Adventure - Steel Ball Run",
        series: "JoJo's Bizarre Adventure - Steel Ball Run",
        volume: '1',
        author: 'Hirohiko Araki',
        genre: ['Ação', 'Aventura', 'Sobrenatural'],
        cover: 'img/jojo part7.jpg',
        year: 'A definir',
        publisher: 'A definir',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: '',
        chapters: [

              {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 5 Volume 5', 
            pdf: 'mangás/jojo/jojo 7/Vol 01.pdf'
            },

              {
                number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 5 Volume 5', 
            pdf: 'mangás/jojo/jojo 7/Vol 02.pdf'
            },

              {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 5 Volume 5', 
            pdf: 'mangás/jojo/jojo 7/Vol 03.pdf'
            },

              {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 5 Volume 5', 
            pdf: 'mangás/jojo/jojo 7/Vol 04.pdf'
            },

              {
                number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 5 Volume 5', 
            pdf: 'mangás/jojo/jojo 7/Vol 05.pdf'
            },

              {
                number: 6, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 7 Volume 5', 
            pdf: 'mangás/jojo/jojo 7/Vol 06.pdf'
            },

              {
                number: 7, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 7 Volume 5', 
            pdf: 'mangás/jojo/jojo 7/Vol 07.pdf'
            },

              {
                number: 8, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 7 Volume 5', 
            pdf: 'mangás/jojo/jojo 7/Vol 08.pdf'
            },

              {
                number: 9, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 7 Volume 5', 
            pdf: 'mangás/jojo/jojo 7/Vol 09.pdf'
            },

              {
                number: 10, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 7 Volume 5', 
            pdf: 'mangás/jojo/jojo 7/Vol 10.pdf'
            },

              {
                number: 11, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Jojo - Parte 5 Volume 5', 
            pdf: 'mangás/jojo/jojo 5/Vol 11.pdf'
            },
        ],
        description: 'Uma saga de ação que acompanha gerações da família Joestar em confrontos extraordinários.',
        synopsis: 'Johnny Joestar, um ex-jóquei prodígio que ficou paraplégico após um tiroteio, encontra uma nova esperança ao conhecer o misterioso guerreiro Gyro Zeppeli. Ao tocar nas esferas de aço giratórias de Gyro, as pernas de Johnny reagem por um instante. Determinado a descobrir o segredo dessa técnica (o Spin), Johnny entra na Steel Ball Run uma colossal corrida de cavalos que cruza a América valendo um prêmio de 50 milhões de dólares. Porém, os dois logo descobrem que a corrida é uma fachada organizada pelo Presidente dos EUA, Funny Valentine, para reunir as partes de um "Corpo Santo" místico capaz de conceder Stands e dar poder absoluto à nação, transformando a competição em uma caçada sangrenta e política.'
    },

    {
        id: 'kuroko-no-basket',
        type: 'manga',
        title: 'Kuroko no Basket',
        series: 'Kuroko no Basket',
        volume: '1',
        author: 'Tadatoshi Fujimaki',
        genre: ['Esporte', 'Drama', 'Comédia'],
        cover: 'img/kuroku.jpeg',
        year: '2008',
        publisher: 'Panini Comics',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: 'mangás/kuroko no basket/Volume 01.pdf',
        chapters: [
            {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Kuroko no Basket Volume 1', 
            pdf: 'mangás/kuroko no basket/Volume 01.pdf'
            },
            {
                number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Kuroko no Basket Volume 2', 
            pdf: 'mangás/kuroko no basket/Volume 02.pdf'
            },
            {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Kuroko no Basket Volume 3', 
            pdf: 'mangás/kuroko no basket/Volume 03.pdf'
            },
            {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Kuroko no Basket Volume 4', 
            pdf: 'mangás/kuroko no basket/Volume 04.pdf'
            },
            {
                number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Kuroko no Basket Volume 5', 
            pdf: 'mangás/kuroko no basket/Volume 05.pdf'
            }

        ],
        description: 'Um mangá esportivo sobre basquete, trabalho em equipe e rivalidade entre jovens atletas.',
        synopsis: 'Após a formatura da lendária equipe conhecida como Geração dos Milagres, seus antigos integrantes seguem caminhos diferentes. Tetsuya Kuroko, um jogador discreto que se destaca por sua capacidade de passar despercebido, entra para o time da escola Seirin e conhece Taiga Kagami. Juntos, eles tentam superar os antigos colegas de Kuroko e levar sua equipe ao topo do basquete escolar.'
    },

    {
        id: 'o-verao-em-que-hikaru-morreu',
        type: 'manga',
        title: 'O Verão em que Hikaru Morreu',
        series: 'O Verão em que Hikaru Morreu',
        volume: '1',
        author: 'Mokumokuren',
        genre: ['Terror', 'Mistério', 'Drama psicológico'],
        cover: 'img/hikaru morreu.jpeg',
        year: '2023',
        publisher: 'Panini Comics',
        pages: 'A definir',
        language: 'Português',
        isbn: '9786525914459',
        rating: '—',
        age: 'Consultar edição',
        pdf: 'mangás/hikaru morreu/hikaru 1.pdf',
        chapters: [
            {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'O Verão que Hikaru morreu Volume 1', 
            pdf: 'mangás/hikaru morreu/hikaru 1.pdf'
            },
            {
                number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'O Verão que Hikaru morreu Volume 2', 
            pdf: 'mangás/hikaru morreu/hikaru 1.pdf'
            },
            { 
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'O Verão que Hikaru morreu Volume 3', 
            pdf: 'mangás/hikaru morreu/hikaru 3.pdf'
            },
            {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'O Verão que Hikaru morreu Volume 4', 
            pdf: 'mangás/hikaru morreu/hikaru 4.pdf'
            },
            { 
                number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'O Verão que Hikaru morreu Volume 5', 
            pdf: 'mangás/hikaru morreu/hikaru 5.pdf'
            }
        ],


        description: 'Uma história de terror psicológico sobre amizade, luto e uma presença que imita alguém querido.',

        synopsis: 'Yoshiki percebe que seu melhor amigo Hikaru já não é exatamente a mesma pessoa, embora mantenha sua aparência e suas lembranças. Algo desconhecido parece ter tomado seu lugar. Mesmo assustado, Yoshiki não consegue simplesmente abandonar a figura que está diante dele. Enquanto fenômenos estranhos começam a acontecer na região, a amizade entre os dois passa a ser marcada por segredos, medo e uma inquietante dúvida sobre a identidade de Hikaru.'
    },

    {
        id: 're-zero',
        type: 'manga',
        title: 'Re:Zero − Starting Life in Another World',
        series: 'Re:Zero',
        volume: '1',
        author: 'Tappei Nagatsuki',
        genre: ['Fantasia', 'Aventura', 'Drama psicológico'],
        cover: 'img/rezero.jpeg',
        year: 'A definir',
        publisher: 'A definir',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: 'mangás/re zero/Vol 1.pdf',
        chapters: [
            {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Re Zero Volume 1', 
            pdf: 'mangás/re zero/Vol 1.pdf'
            },
            {
                number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Re Zero Volume 2', 
            pdf: 'mangás/re zero/Vol 2.pdf'
            },
            {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Re Zero Volume 3', 
            pdf: 'mangás/re zero/Vol 3.pdf'
            },
            {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Re Zero Volume 4', 
            pdf: 'mangás/re zero/Vol 4.pdf'
            },
            {
                number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Re Zero Volume 5', 
            pdf: 'mangás/re zero/Vol 5.pdf'
            }

        ],
        description: 'Uma fantasia sombria sobre um jovem que precisa enfrentar acontecimentos fatais em um mundo desconhecido.',

        synopsis: 'Subaru Natsuki é transportado para um mundo de fantasia sem compreender como chegou ali. Depois de conhecer Emilia e se envolver em situações perigosas, ele descobre que pode retornar a um ponto anterior após morrer. Esse poder, porém, não elimina o sofrimento nem garante que consiga salvar todos ao seu redor. Preso a ciclos de tentativas e perdas, Subaru precisa encontrar maneiras de alterar acontecimentos trágicos.'
    },

    {
        id: 'sakamoto-days',
        type: 'manga',
        title: 'Sakamoto Days',
        series: 'Sakamoto Days',
        volume: '1',
        author: 'Yuto Suzuki',
        genre: ['Ação', 'Comédia', 'Crime'],
        cover: 'img/sakamoto.jpeg',
        year: 'A definir',
        publisher: 'Panini / Planet Mangá',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: 'mangás/sakamoto days/Volume 01.pdf ',
        chapters: [
            {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'sakamoto days Volume 1', 
            pdf: 'mangás/sakamoto days/Volume 01.pdf'
            },
            { 
                number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'sakamoto days Volume 2', 
            pdf: 'mangás/sakamoto days/Volume 02.pdf'
            },
            {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'sakamoto days Volume 3', 
            pdf: 'mangás/sakamoto days/Volume 03.pdf'
            },
            {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'sakamoto days Volume 4', 
            pdf: 'mangás/sakamoto days/Volume 04.pdf'
            },
            {
                number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'sakamoto days Volume 5', 
            pdf: 'mangás/sakamoto days/Volume 05.pdf'
            }
        ],
        description: 'Uma comédia de ação sobre um lendário assassino que tenta levar uma vida tranquila como comerciante.',
        synopsis: 'Taro Sakamoto já foi considerado um dos assassinos mais perigosos do mundo, mas abandonou sua antiga profissão depois de se apaixonar e formar uma família. Agora, administra uma pequena loja e deseja viver em paz. Seu passado, porém, não o deixa descansar: antigos inimigos e ameaças inesperadas surgem, obrigando Sakamoto e seus aliados a enfrentar perigos usando habilidades extraordinárias.'
    },

    {
        id: 'slam-dunk',
        type: 'manga',
        title: 'Slam Dunk',
        series: 'Slam Dunk',
        volume: '1',
        author: 'Takehiko Inoue',
        genre: ['Esporte', 'Comédia', 'Drama'],
        cover: 'img/slam dunk.jpeg',
        year: 'A definir',
        publisher: 'Panini Comics',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: 'mangás/slam dunk/Volume 01.pdf',
        chapters: [
            {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Slam Duck Volume 1', 
            pdf: 'mangás/slam dunk/Volume 01.pdf'
            },
            { 
                number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Slam Dunk Volume 2', 
            pdf: 'mangás/slam dunk/Volume 02.pdf'
            },
            {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Slam Dunk Volume 3', 
            pdf: 'mangás/slam dunk/Volume 03.pdf'
            },
            {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Slam Dunk Volume 4', 
            pdf: 'mangás/slam dunk/Volume 04.pdf'
            },
            { 
                number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Slam Dunk Volume 5', 
            pdf: 'mangás/slam dunk/Volume 05.pdf'
            }
        ],
        description: 'Um clássico do basquete que combina humor, rivalidade e amadurecimento pessoal.',

        synopsis: 'Hanamichi Sakuragi é um estudante conhecido por seu temperamento explosivo e por seus fracassos amorosos. Ao entrar no ensino médio, ele conhece Haruko e acaba se aproximando do basquete, apesar de não ter experiência no esporte. No time do colégio Shohoku, Sakuragi aprende os fundamentos do jogo e passa a enfrentar desafios que testam sua disciplina, seu orgulho e sua capacidade de trabalhar em equipe.'
    },

    {
        id: 'soul-eater',
        type: 'manga',
        title: 'Soul Eater',
        series: 'Soul Eater',
        volume: '1',
        author: 'Atsushi Ohkubo',
        genre: ['Ação', 'Fantasia sombria', 'Comédia'],
        cover: 'img/soul eater.jpeg',
        year: 'A definir',
        publisher: 'JBC',
        pages: '304',
        language: 'Português',
        isbn: '9786555942323',
        rating: '—',
        age: '14 anos',
        pdf: 'mangás/soul eater/Volume 01.pdf',
        chapters: [
            { 
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Soul Eater Volume 1', 
            pdf: 'mangás/soul eater/Volume 01.pdf'
            },
            {
               number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Soul Eater Volume 2', 
            pdf: 'mangás/soul eater/Volume 02.pdf'
            },
            {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Soul Eater Volume 3', 
            pdf: 'mangás/soul eater/Volume 03.pdf'
            },
            {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Soul Eater Volume 4', 
            pdf: 'mangás/soul eater/Volume 04.pdf'
            },
            {
                number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Soul Eater Volume 5', 
            pdf: 'mangás/soul eater/Volume 05.pdf'
            }
        ],
        description: 'Uma aventura sobrenatural sobre estudantes que combatem ameaças usando armas capazes de assumir forma humana.',
        synopsis: 'Na escola Shibusen, artesãos e armas humanas treinam em duplas para combater ameaças que colocam o mundo em perigo. Maka Albarn e sua arma Soul Eater, Black Star e Tsubaki, além de Death the Kid e suas parceiras, precisam derrotar inimigos e coletar almas para cumprir suas missões. Entre batalhas, humor e conflitos pessoais, os estudantes enfrentam perigos ligados à loucura e ao poder das almas.'
    },

    {
        id: 'spy-x-family',
        type: 'manga',
        title: 'Spy × Family',
        series: 'Spy × Family',
        volume: '1',
        author: 'Tatsuya Endo',
        genre: ['Comédia', 'Ação', 'Espionagem'],
        cover: 'img/spy family.jpeg',
        year: 'A definir',
        publisher: 'Panini Comics',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: 'mangás/spy family/SPY X FAMILY VOL.1.PDF',
        chapters: [
            {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Soul Eater Volume 1', 
            pdf: 'mangás/spy family/SPY X FAMILY VOL.01.PDF'
            },
            {
                number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Soul Eater Volume 2', 
            pdf: 'mangás/spy family/SPY X FAMILY VOL.02.PDF'
            },
            {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Soul Eater Volume 3', 
            pdf: 'mangás/spy family/SPY X FAMILY VOL.03.PDF'
            },
            {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Soul Eater Volume 4', 
            pdf: 'mangás/spy family/SPY X FAMILY VOL.04.PDF'
            }
        ],


        description: 'Uma comédia de espionagem sobre uma família falsa que esconde segredos extraordinários.',

        synopsis: 'Para cumprir uma missão secreta e impedir um conflito entre nações, o espião Twilight precisa formar uma família de fachada. Ele adota Anya, uma menina que consegue ler pensamentos, e se casa com Yor, uma mulher que leva uma vida dupla como assassina profissional. Sem conhecerem completamente os segredos uns dos outros, os três tentam manter as aparências enquanto enfrentam situações perigosas e momentos inesperadamente afetuosos.'
    },

    {
        id: 'the-climber',
        type: 'manga',
        title: 'The Climber',
        series: 'The Climber',
        volume: '1',
        author: 'Shinichi Sakamoto',
        genre: ['Drama psicológico', 'Esporte', 'Aventura'],
        cover: 'img/climber.jpeg',
        year: 'A definir',
        publisher: 'A definir',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: 'mangás/the climber/Volume 01.pdf',
        chapters: [
            {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'The Climber Volume 1', 
            pdf: 'mangás/the climber/Volume 01.pdf'
            },
            {
                 number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'The Climber Volume 2', 
            pdf: 'mangás/the climber/Volume 02.pdf'
            },
            {
                 number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'The Climber Volume 3', 
            pdf: 'mangás/the climber/Volume 03.pdf'
            },
            {
                 number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'The Climber Volume 4', 
            pdf: 'mangás/the climber/Volume 04.pdf'
            },
            {
                number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'The Climber Volume 5', 
            pdf: 'mangás/the climber/Volume 05.pdf'
            },
            {
                number: 6, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'The Climber Volume 6', 
            pdf: 'mangás/the climber/Volume 06.pdf'
            },
            {
                number: 7, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'The Climber Volume 7', 
            pdf: 'mangás/the climber/Volume 07.pdf'
            },
            {
                number: 8, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'The Climber Volume 8', 
            pdf: 'mangás/the climber/Volume 08.pdf'
            },
            {
                 number: 9, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'The Climber Volume 9', 
            pdf: 'mangás/the climber/Volume 09.pdf'
            },
            {
                number: 10, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'The Climber Volume 10', 
            pdf: 'mangás/the climber/Volume 10.pdf'
            }

        ],
        description: 'Um drama intenso sobre escalada, solidão e a busca por significado diante de desafios extremos.',
        synopsis: 'Buntarou Mori é um estudante reservado que descobre na escalada uma forma singular de enfrentar o mundo. O que começa como uma atividade inesperada se transforma em uma busca pessoal cada vez mais exigente. Conforme enfrenta paredes rochosas e montanhas perigosas, Mori precisa lidar com seus limites físicos e emocionais, questionando o que o leva a continuar subindo mesmo quando está sozinho.'
    },

    {
        id: 'tokyo-ghoul',
        type: 'manga',
        title: 'Tokyo Ghoul',
        series: 'Tokyo Ghoul',
        volume: '1',
        author: 'Sui Ishida',
        genre: ['Terror', 'Ação', 'Drama psicológico'],
        cover: 'img/tokyo ghoul.jpeg',
        year: 'A definir',
        publisher: 'Panini Comics',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: 'mangás/tokyo ghoul/Volume 1.pdf',
        chapters: [
            {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Tokyo Ghoul Volume 1', 
            pdf: 'mangás/tokyo ghoul/Volume 1.pdf'
            },
            {
                number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Tokyo Ghoul Volume 2', 
            pdf: 'mangás/tokyo ghoul/Volume 2.pdf'
            },
            {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Tokyo Ghoul Volume 3', 
            pdf: 'mangás/tokyo ghoul/Volume 3.pdf'
            },
            {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Tokyo Ghoul Volume 4', 
            pdf: 'mangás/tokyo ghoul/Volume 4.pdf'
            },
            {
                number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Tokyo Ghoul Volume 5', 
            pdf: 'mangás/tokyo ghoul/Volume 5.pdf'
            }


        ],
        description: 'Uma história sombria sobre identidade e sobrevivência em uma cidade onde criaturas se alimentam de humanos.',

        synopsis: 'Ken Kaneki é um universitário tímido que sofre uma transformação após um encontro terrível com uma criatura conhecida como ghoul. Agora, preso entre o mundo humano e o dos seres que precisam consumir carne humana para sobreviver, ele luta para compreender sua nova natureza. Enquanto conhece outros ghouls e enfrenta investigadores que os caçam, Kaneki precisa decidir onde pertence e até que ponto está disposto a mudar para continuar vivo.'
    },

    {
        id: 'vagabond',
        type: 'manga',
        title: 'Vagabond',
        series: 'Vagabond',
        volume: '1',
        author: 'Takehiko Inoue, baseado na obra de Eiji Yoshikawa',
        genre: ['Ação', 'Drama histórico', 'Artes marciais'],
        cover: 'img/vagabond.jpeg',
        year: 'A definir',
        publisher: 'Panini Comics',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: 'mangás/vagabond/Volume 01.pdf',
        chapters: [
            {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Vagabond Volume 1', 
            pdf: 'mangás/vagabond/Volume 01.pdf'
            },
            {
                number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Vagabond Volume 2', 
            pdf: 'mangás/vagabond/Volume 02.pdf'
            },
            {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Vagabond Volume 3', 
            pdf: 'mangás/vagabond/Volume 03.pdf'
            },
            {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Vagabond Volume 4', 
            pdf: 'mangás/vagabond/Volume 04.pdf'
            },
            {
                number: 5, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Vagabond Volume 5', 
            pdf: 'mangás/vagabond/Volume 05.pdf'
            }
        ],
        description: 'Um mangá histórico sobre a jornada de um espadachim em busca de força, propósito e autoconhecimento.',
        synopsis: 'Inspirado na vida lendária de Miyamoto Musashi, Vagabond acompanha a transformação de um jovem guerreiro impulsivo em um espadachim que busca compreender o verdadeiro significado da força. Em meio a duelos, viagens e encontros com outros guerreiros, ele enfrenta os próprios medos, a violência e suas contradições. A jornada é tanto física quanto espiritual, explorando o preço da ambição e o sentido de se tornar invencível.'
    },




    {
    id: 'sense-life',
    type: 'manga',
    title: 'Sense Life',
    series: 'Sense Life',
    volume: '1',
    author: 'Yusuke Kishi',
    genre: ['Drama', 'Escolar', 'Sobrenatural'],
    cover: 'img/sense life.jpeg',
    year: 'A definir',
    publisher: 'Panini / Planet Mangá',
    pages: 'A definir',
    language: 'Português',
    isbn: 'A definir',
    rating: '—',
    age: 'Consultar edição',

    pdf: '',
    chapters: [],

    description:
        'Um mangá de drama e mistério sobre um jovem que descobre uma habilidade incomum relacionada às emoções das pessoas ao seu redor.',

    synopsis:
        'A vida de Aoi muda completamente quando ele começa a perceber as emoções das pessoas ao seu redor. O que antes parecia apenas uma sensibilidade maior se transforma em uma habilidade que o coloca em situações perigosas, revelando segredos, dores e verdades que ele não estava preparado para enfrentar. Enquanto tenta entender e controlar essa capacidade, Aoi precisa lidar com o peso das emoções alheias e decidir até onde está disposto a ir para proteger quem ama.'
},



{
    id: 'lampiao',
    type: 'hq',
    title: 'Lampião: O Rei do Cangaço',
    series: 'Lampião: O Rei do Cangaço',
    volume: '1',
    author: 'Marcelo D’Salete',
    genre: ['Histórico', 'Aventura', 'Drama'],
    cover: 'img/lampião.jpeg',
    year: 'A definir',
    publisher: 'Veneta',
    pages: 'A definir',
    language: 'Português',
    isbn: 'A definir',
    rating: '—',
    age: 'Consultar edição',

    pdf: '',
    chapters: [],

    description:
        'Uma HQ histórica que retrata a trajetória de Lampião e o impacto do cangaço no sertão nordestino.',

    synopsis:
        'A história acompanha a trajetória de Virgulino Ferreira da Silva, conhecido como Lampião, uma das figuras mais conhecidas do cangaço brasileiro. A narrativa explora a formação de seu bando, os conflitos com as forças policiais e a vida no sertão nordestino. Em meio à violência, às alianças e às disputas de poder, a obra apresenta aspectos do contexto social e histórico que marcou esse período da história do Brasil.'
},


 {
        id: 'Toyko Revengers',
        type: 'manga',
        title: 'Toyko Revengers',
        series: 'Toyko Revengers',
        volume: '1',
        author: 'Ken Wakui',
        genre: ['Comédia', 'Ação', 'gangster', 'Ficção Científica'],
        cover: 'img/toyko.jpg',
        year: 'A definir',
        publisher: 'Panini Comics',
        pages: 'A definir',
        language: 'Português',
        isbn: 'A definir',
        rating: '—',
        age: 'Consultar edição',
        pdf: 'mangás/spy family/SPY X FAMILY VOL.1.PDF',
        chapters: [
            {
                number: 1, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Soul Eater Volume 1', 
            pdf: 'mangás/spy family/SPY X FAMILY VOL.01.PDF'
            },
            {
                number: 2, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Soul Eater Volume 2', 
            pdf: 'mangás/spy family/SPY X FAMILY VOL.02.PDF'
            },
            {
                number: 3, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Soul Eater Volume 3', 
            pdf: 'mangás/spy family/SPY X FAMILY VOL.03.PDF'
            },
            {
                number: 4, // O seu código usa isso para gerar o "Capítulo 01"
            title: 'Soul Eater Volume 4', 
            pdf: 'mangás/spy family/SPY X FAMILY VOL.04.PDF'
            }
        ],


        description: 'Uma comédia de espionagem sobre uma família falsa que esconde segredos extraordinários.',

        synopsis: 'Para cumprir uma missão secreta e impedir um conflito entre nações, o espião Twilight precisa formar uma família de fachada. Ele adota Anya, uma menina que consegue ler pensamentos, e se casa com Yor, uma mulher que leva uma vida dupla como assassina profissional. Sem conhecerem completamente os segredos uns dos outros, os três tentam manter as aparências enquanto enfrentam situações perigosas e momentos inesperadamente afetuosos.'
    },




];



/* =========================================================
   FAVORITOS
========================================================= */

const getFavorites = () =>
    JSON.parse(
        localStorage.getItem('bibliotech-favorites') || '[]'
    );


const setFavorites = value =>
    localStorage.setItem(
        'bibliotech-favorites',
        JSON.stringify(value)
    );


function toggleFavorite(id) {

    const current = getFavorites();

    const updated = current.includes(id)
        ? current.filter(item => item !== id)
        : [...current, id];

    setFavorites(updated);

    renderBooks();
    renderDetail();
}


/* =========================================================
   CARD DA LISTAGEM
========================================================= */


function card(book) {
    const saved = getFavorites().includes(book.id);

    return `
        <article class="book-card">
            <button
                class="favorite ${saved ? 'saved' : ''}"
                data-favorite="${book.id}"
                aria-label="${saved ? 'Remover dos' : 'Adicionar aos'} favoritos"
                aria-pressed="${saved}"
                type="button"
            >
                ${saved ? '♥' : '♡'}
            </button>

            <a
                class="book-card-link"
                href="card2.html?id=${encodeURIComponent(book.id)}"
            >
                <div
                    class="book-cover"
                    style="--cover: ${book.color || '#174b83'}"
                >
                    ${
                        book.cover
                            ? `<img
                                src="${book.cover}"
                                alt="Capa de ${book.title}"
                                loading="lazy"
                            >`
                            : ''
                    }
                    <span>${book.title}</span>
                </div>

                <h2>${book.title}</h2>
                <p>${book.author}</p>

                <span class="tag">${book.genre}</span>

                <span class="tag catalog-type-tag">
                    ${(book.type || 'livro') === 'manga' ? 'Mangá' : 'Livro'}
                </span>
            </a>
        </article>
    `;
}



/* =========================================================
   RENDERIZAÇÃO DO ACERVO
========================================================= */

function renderBooks() {

    const grid =
        document.querySelector('#book-grid');

    if (!grid) return;


    const term =
        (
            document.querySelector('#book-search')?.value ||
            ''
        ).toLowerCase();


    const genre =
        document.querySelector('#genre-filter')?.value ||
        '';

    const contentType =
        document.querySelector('#content-type-filter')?.value ||
        '';

    let shown = books
    .filter(book =>
        !contentType ||
        (book.type || 'livro') === contentType
    )
    .filter(book => {
        if (!genre) return true;

        const genres = Array.isArray(book.genre)
            ? book.genre
            : String(book.genre || '').split(/\s*[,/]\s*/);

        return genres.some(item =>
            item.trim().toLowerCase() === genre.trim().toLowerCase()
        );
    })
    .filter(book =>
        `${book.title} ${book.author}`
            .toLowerCase()
            .includes(term)
    );


    if (
        location.pathname.endsWith(
            'favoritos.html'
        )
    ) {

        shown = shown.filter(book =>
            getFavorites().includes(book.id)
        );

    }


    grid.innerHTML = shown.length
        ? shown.map(card).join('')
        : `
            <p class="empty">
                Nenhum título encontrado.
                Tente outra busca ou altere os filtros.
            </p>
        `;

    
grid.querySelectorAll('.book-cover img').forEach(imagem => {
    imagem.addEventListener('error', () => {
        imagem.remove();
        imagem.parentElement?.classList.add('cover-fallback');
    }, { once: true });
});

}


/* =========================================================
   PÁGINA DE DETALHES DO LIVRO
========================================================= */

function renderDetail() {

    const target =
        document.querySelector('#book-detail');

    if (!target) return;


    const params =
        new URLSearchParams(location.search);


    const id =
        params.get('id') ||
        books[0].id;


    const book =
        books.find(item => item.id === id) ||
        books[0];


    const saved =
        getFavorites().includes(book.id);


    target.innerHTML = `

        <div class="book-detail-main">
<div
    class="detail-cover"
    style="--cover:${book.color || '#174b83'}"
    aria-label="Capa de ${book.title}"
>
    ${
        book.cover
            ? `<img
                src="${book.cover}"
                alt="Capa de ${book.title}"
                onerror="this.style.display='none'"
            >`
            : ''
    }
    <span>${book.title}</span>
</div>


            <div class="detail-content">

                <span class="detail-genre">
                    ${(book.type || 'livro') === 'manga' ? 'Mangá · ' : ''}${book.genre}
                </span>


                <h1>
                    ${book.title}
                </h1>


                <p class="detail-author">
                    por <strong>${book.author}</strong>
                </p>


                <div class="detail-rating">

                    <span class="stars">
                        ★★★★★
                    </span>

                    <strong>
                        ${book.rating}
                    </strong>

                    <span>
                        / 5
                    </span>

                </div>


                <p class="detail-description">
                    ${book.description}
                </p>


                <div class="detail-actions">

                    <!-- BOTÃO DE LEITURA -->

                    <button
                        class="button button-primary read-book-button"
                        type="button"
                        data-read-book="${book.id}"
                        aria-label="Ler ${book.title}"
                    >
                        <span aria-hidden="true">▶</span>
                        ${(book.type || 'livro') === 'manga' ? 'Ler volume completo' : 'Ler livro'}
                    </button>


                    <!-- FAVORITO -->

                    <button
                        class="button favorite-detail ${saved ? 'saved' : ''}"
                        data-favorite="${book.id}"
                        type="button"
                        aria-pressed="${saved}"
                    >
                        ${
                            saved
                                ? '♥ Salvo nos favoritos'
                                : '♡ Adicionar aos favoritos'
                        }
                    </button>


                    <!-- BAIXAR -->

                    <a
                        class="button button-secondary download-book-button"
                        href="${book.pdf}"
                        download
                        aria-label="Baixar ${book.title}"
                    >
                        <span aria-hidden="true">⇩</span>
                        Baixar
                    </a>


                    <!-- VOLTAR -->

                    <a
                        href="livros.html"
                        class="button button-secondary"
                    >
                        ← Voltar ao acervo
                    </a>

                </div>

            </div>

        </div>


        <div class="book-info">

            <div class="section-heading">

                <span>
                    INFORMAÇÕES
                </span>

                <h2>
                    ${(book.type || 'livro') === 'manga' ? 'Ficha do mangá' : 'Ficha do livro'}
                </h2>

            </div>


            <div class="info-grid">

                <div class="info-item">
                    <span>Autor</span>
                    <strong>${book.author}</strong>
                </div>

                <div class="info-item">
                    <span>Gênero</span>
                    <strong>${book.genre}</strong>
                </div>

                ${(book.type || 'livro') === 'manga' ? `
                <div class="info-item">
                    <span>Série</span>
                    <strong>${book.series || book.title}</strong>
                </div>
                <div class="info-item">
                    <span>Volume</span>
                    <strong>${book.volume || 'Não informado'}</strong>
                </div>` : ''}

                <div class="info-item">
                    <span>Ano de publicação</span>
                    <strong>${book.year}</strong>
                </div>

                <div class="info-item">
                    <span>Editora</span>
                    <strong>${book.publisher}</strong>
                </div>

                <div class="info-item">
                    <span>Número de páginas</span>
                    <strong>${book.pages}</strong>
                </div>

                <div class="info-item">
                    <span>Idioma</span>
                    <strong>${book.language}</strong>
                </div>

                <div class="info-item">
                    <span>ISBN</span>
                    <strong>${book.isbn}</strong>
                </div>

                <div class="info-item">
                    <span>Classificação</span>
                    <strong>${book.age}</strong>
                </div>

            </div>

        </div>


        <div class="book-synopsis">

            <div class="section-heading">

                <span>
                    ${(book.type || 'livro') === 'manga' ? 'SOBRE O MANGÁ' : 'SOBRE A OBRA'}
                </span>

                <h2>
                    Sinopse
                </h2>

            </div>

            <p>
                ${book.synopsis}
            </p>

        </div>

        ${(book.type || 'livro') === 'manga' ? `
        <section class="manga-chapters" aria-labelledby="manga-chapters-title">
            <div class="section-heading">
                <span>LEITURA</span>
                <h2 id="manga-chapters-title">Capítulos de ${book.series || book.title}</h2>
            </div>
            <p class="chapters-help">Todos os capítulos deste mangá ficam reunidos aqui, sem criar um card separado para cada capítulo.</p>
            <div class="manga-chapter-list">
                ${(book.chapters || []).map(chapter => `
                    <article class="manga-chapter-item">
                        <div class="manga-chapter-info">
                            <strong>Capítulo ${String(chapter.number).padStart(2, '0')}</strong>
                            <span>${chapter.title || `Capítulo ${chapter.number}`}</span>
                        </div>
                        <button class="button button-primary" type="button" data-read-chapter="${book.id}" data-chapter-number="${chapter.number}">▶ Ler capítulo</button>
                    </article>
                `).join('')}
            </div>
        </section>
        ` : ''}

    `;
}


/* =========================================================
   FORMULÁRIOS
========================================================= */

/* =========================================================
   LEITOR DE PDF — ativo somente na página de detalhes
========================================================= */

function openPdfReader(book, chapter = null) {
    const modal = document.querySelector('#pdf-reader-modal');
    const frame = document.querySelector('#pdf-reader-frame');
    const title = document.querySelector('#pdf-reader-title');
    const download = document.querySelector('#pdf-reader-download');

    // Nas outras páginas o modal não existe, então nada é alterado.
    if (!modal || !frame || !title || !download) return;

    const pdfPath = chapter ? chapter.pdf : book?.pdf;
    if (!book || !pdfPath) {
        alert('O arquivo de leitura deste título/capítulo ainda não foi configurado.');
        return;
    }

    title.textContent = chapter
        ? `${book.series || book.title} — Capítulo ${chapter.number}: ${chapter.title || ''}`
        : `${(book.type || 'livro') === 'manga' ? 'Lendo mangá' : 'Lendo livro'}: ${book.title}`;
    frame.src = pdfPath;
    download.href = pdfPath;
    download.setAttribute('download', chapter ? `capitulo-${String(chapter.number).padStart(3, '0')}.pdf` : '');
    modal.hidden = false;
    document.body.classList.add('pdf-reader-open');
    modal.querySelector('.pdf-reader-close')?.focus();
}

function closePdfReader() {
    const modal = document.querySelector('#pdf-reader-modal');
    const frame = document.querySelector('#pdf-reader-frame');

    if (!modal) return;

    modal.hidden = true;
    document.body.classList.remove('pdf-reader-open');
    if (frame) frame.src = 'about:blank';
}

function setupForms() {

    document
        .querySelectorAll(
            'form[data-static-form]'
        )
        .forEach(form => {

            form.addEventListener(
                'submit',
                event => {

                    event.preventDefault();


                    const note =
                        form.querySelector(
                            '.notice'
                        ) ||
                        Object.assign(
                            document.createElement('p'),
                            {
                                className: 'notice'
                            }
                        );


                    note.textContent =
                        form.dataset.message ||
                        'Dados salvos neste navegador.';


                    form.prepend(note);


                    if (
                        form.dataset.reset === 'true'
                    ) {

                        form.reset();

                    }

                }
            );

        });
}


/* =========================================================
   PREFERÊNCIAS GLOBAIS
   As configurações funcionam em TODAS as páginas.
========================================================= */

function setupPreferences() {

    const body =
        document.body;

    const root =
        document.documentElement;


    /* =====================================================
       FUNÇÃO AUXILIAR
    ===================================================== */

    function applyPreference(
        storageKey,
        className,
        enabled
    ) {

        localStorage.setItem(
            storageKey,
            enabled ? 'true' : 'false'
        );

        body.classList.toggle(
            className,
            enabled
        );

    }


    /* =====================================================
       MODO ESCURO
    ===================================================== */

    const darkMode =
        localStorage.getItem(
            'bibliotech-dark'
        ) === 'true';


    body.classList.toggle(
        'dark',
        darkMode
    );


    const darkInput =
        document.querySelector(
            '#dark-mode'
        );


    if (darkInput) {

        darkInput.checked =
            darkMode;


        darkInput.addEventListener(
            'change',
            () => {

                applyPreference(
                    'bibliotech-dark',
                    'dark',
                    darkInput.checked
                );

            }
        );

    }


    /* =====================================================
       TAMANHO DA FONTE
    ===================================================== */

    const fontInput =
        document.querySelector(
            '#font-size'
        );


    const fontValue =
        document.querySelector(
            '#font-size-value'
        );


    const savedFont =
        localStorage.getItem(
            'bibliotech-font'
        ) || '100';


    root.style.fontSize =
        `${savedFont}%`;


    if (fontInput) {

        fontInput.value =
            savedFont;


        if (fontValue) {

            fontValue.textContent =
                `${savedFont}%`;

        }


        fontInput.addEventListener(
            'input',
            () => {

                const value =
                    fontInput.value;


                localStorage.setItem(
                    'bibliotech-font',
                    value
                );


                root.style.fontSize =
                    `${value}%`;


                if (fontValue) {

                    fontValue.textContent =
                        `${value}%`;

                }

            }
        );

    }


    /* =====================================================
       ALTO CONTRASTE
    ===================================================== */

    const highContrast =
        localStorage.getItem(
            'bibliotech-contrast'
        ) === 'true';


    body.classList.toggle(
        'high-contrast',
        highContrast
    );


    const contrastInput =
        document.querySelector(
            '#high-contrast'
        );


    if (contrastInput) {

        contrastInput.checked =
            highContrast;


        contrastInput.addEventListener(
            'change',
            () => {

                applyPreference(
                    'bibliotech-contrast',
                    'high-contrast',
                    contrastInput.checked
                );

            }
        );

    }


    /* =====================================================
       REDUZIR ANIMAÇÕES
    ===================================================== */

    const reduceMotion =
        localStorage.getItem(
            'bibliotech-motion'
        ) === 'true';


    body.classList.toggle(
        'reduce-motion',
        reduceMotion
    );


    const motionInput =
        document.querySelector(
            '#reduce-motion'
        );


    if (motionInput) {

        motionInput.checked =
            reduceMotion;


        motionInput.addEventListener(
            'change',
            () => {

                applyPreference(
                    'bibliotech-motion',
                    'reduce-motion',
                    motionInput.checked
                );

            }
        );

    }


    /* =====================================================
       DESTACAR LINKS
    ===================================================== */

    const highlightLinks =
        localStorage.getItem(
            'bibliotech-links'
        ) === 'true';


    body.classList.toggle(
        'highlight-links',
        highlightLinks
    );


    const linksInput =
        document.querySelector(
            '#highlight-links'
        );


    if (linksInput) {

        linksInput.checked =
            highlightLinks;


        linksInput.addEventListener(
            'change',
            () => {

                applyPreference(
                    'bibliotech-links',
                    'highlight-links',
                    linksInput.checked
                );

            }
        );

    }


    /* =====================================================
       RESTAURAR CONFIGURAÇÕES
    ===================================================== */

    const resetButton =
        document.querySelector(
            '#reset-settings'
        );


    const notice =
        document.querySelector(
            '#settings-notice'
        );


    if (resetButton) {

        resetButton.addEventListener(
            'click',
            () => {

                localStorage.removeItem(
                    'bibliotech-dark'
                );

                localStorage.removeItem(
                    'bibliotech-font'
                );

                localStorage.removeItem(
                    'bibliotech-contrast'
                );

                localStorage.removeItem(
                    'bibliotech-motion'
                );

                localStorage.removeItem(
                    'bibliotech-links'
                );


                body.classList.remove(
                    'dark',
                    'high-contrast',
                    'reduce-motion',
                    'highlight-links'
                );


                root.style.fontSize =
                    '100%';


                if (darkInput) {
                    darkInput.checked = false;
                }


                if (fontInput) {
                    fontInput.value = '100';
                }


                if (fontValue) {
                    fontValue.textContent = '100%';
                }


                if (contrastInput) {
                    contrastInput.checked = false;
                }


                if (motionInput) {
                    motionInput.checked = false;
                }


                if (linksInput) {
                    linksInput.checked = false;
                }


                if (notice) {

                    notice.textContent =
                        'Configurações restauradas com sucesso.';


                    setTimeout(
                        () => {
                            notice.textContent = '';
                        },
                        3000
                    );

                }

            }
        );

    }

}


/* =========================================================
   NAVEGAÇÃO
========================================================= */

function setupNavigation() {

    document
        .querySelectorAll('.primary-nav')
        .forEach(nav => {

            if (
                nav.querySelector(
                    '[href="configura.html"]'
                )
            ) {
                return;
            }


            const link =
                document.createElement('a');


            link.href =
                'configura.html';


            link.textContent =
                'Configurações';


            if (
                location.pathname.endsWith(
                    'configura.html'
                )
            ) {

                link.className =
                    'active';

            }


            nav.append(link);

        });

}



/* =========================================================
   CONTA E PERFIL DO LEITOR
========================================================= */

function setupAccountAndProfile() {
    const SESSION_KEY = 'usuario_logado';
    const PROFILE_PREFIX = 'bibliotech-profile-';

    let session = null;
    try {
        session = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
    } catch (_) {
        session = null;
    }

    // Atualiza o cabeçalho: usuários autenticados não veem Entrar/Criar conta.
    document.querySelectorAll('.header-actions').forEach(actions => {
        if (!session?.id) return;

        actions.innerHTML = `
            <a href="perfil.html">Meu perfil</a>
            <button type="button" class="button button-small" data-account-logout>Sair</button>
        `;

        actions.querySelector('[data-account-logout]')?.addEventListener('click', () => {
            localStorage.removeItem(SESSION_KEY);
            location.assign('login.html');
        });
    });

    const profileForm = document.querySelector('.profile-form');
    if (!profileForm) return;

    if (!session?.id) {
        location.replace('login.html?returnTo=perfil.html');
        return;
    }

    const nameInput = document.getElementById('profile-name');
    const emailInput = document.getElementById('profile-email');
    const bioInput = document.getElementById('profile-bio');
    const avatar = document.querySelector('.profile-avatar span');
    const heading = document.querySelector('.profile-header-content h1');

    let saved = {};
    try {
        saved = JSON.parse(localStorage.getItem(PROFILE_PREFIX + session.id) || '{}');
    } catch (_) {
        saved = {};
    }

    const displayName = saved.nome || session.nome || 'Leitor';
    if (nameInput) nameInput.value = displayName;
    if (emailInput) emailInput.value = saved.email || session.email || '';
    if (bioInput) bioInput.value = saved.bio || '';
    if (heading) heading.textContent = displayName;
    if (avatar) {
        const initials = displayName.trim().split(/\s+/).slice(0, 2)
            .map(part => part.charAt(0).toUpperCase()).join('');
        avatar.textContent = initials || 'BT';
    }

    profileForm.addEventListener('submit', event => {
        event.preventDefault();

        const profile = {
            nome: nameInput?.value.trim() || session.nome || 'Leitor',
            email: emailInput?.value.trim().toLowerCase() || session.email || '',
            bio: bioInput?.value.trim() || ''
        };

        try {
            localStorage.setItem(PROFILE_PREFIX + session.id, JSON.stringify(profile));

            // Mantém os dados básicos sincronizados com a sessão local.
            session.nome = profile.nome;
            session.email = profile.email;
            localStorage.setItem(SESSION_KEY, JSON.stringify(session));

            if (heading) heading.textContent = profile.nome;
            if (avatar) {
                avatar.textContent = profile.nome.trim().split(/\s+/).slice(0, 2)
                    .map(part => part.charAt(0).toUpperCase()).join('') || 'BT';
            }

            let note = profileForm.querySelector('.notice');
            if (!note) {
                note = document.createElement('p');
                note.className = 'notice';
                profileForm.prepend(note);
            }
            note.textContent = 'Informações do perfil salvas neste navegador.';
        } catch (error) {
            console.error('Erro ao salvar perfil:', error);
            alert('Não foi possível salvar as informações do perfil neste navegador.');
        }
    });
}

/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    'DOMContentLoaded',
    () => {

        setupPreferences();

        setupNavigation();

        renderBooks();

        renderDetail();

        setupForms();
        setupAccountAndProfile();

        // Fechamento do leitor de PDF; não altera páginas sem o modal.
        document.querySelector('#pdf-reader-close')?.addEventListener(
            'click', closePdfReader
        );

        // Tela cheia nativa do navegador para o leitor de PDF.
        const fullscreenButton = document.querySelector('#pdf-reader-fullscreen');
        const readerDialog = document.querySelector('.pdf-reader-dialog');

        fullscreenButton?.addEventListener('click', async () => {
            if (!readerDialog) return;

            try {
                if (document.fullscreenElement) {
                    await document.exitFullscreen();
                } else if (readerDialog.requestFullscreen) {
                    await readerDialog.requestFullscreen();
                } else {
                    // Alternativa visual para navegadores sem Fullscreen API.
                    readerDialog.classList.toggle('pdf-reader-forced-fullscreen');
                }
            } catch (error) {
                readerDialog.classList.toggle('pdf-reader-forced-fullscreen');
            }
        });

        document.addEventListener('fullscreenchange', () => {
            const isFullscreen = document.fullscreenElement === readerDialog;
            if (fullscreenButton) {
                fullscreenButton.textContent = isFullscreen ? '⛶ Sair da tela cheia' : '⛶ Tela cheia';
                fullscreenButton.setAttribute('aria-pressed', String(isFullscreen));
            }
        });

        document.querySelector('#pdf-reader-modal')?.addEventListener(
            'click', event => {
                if (event.target.matches('[data-close-pdf-reader]')) {
                    closePdfReader();
                }
            }
        );

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                // Ao sair da tela cheia, não feche também o leitor.
                if (document.fullscreenElement) return;
                closePdfReader();
            }
        });

        /* =================================================
           FAVORITOS
        ================================================= */

        document.addEventListener(
            'click',
            event => {

                const chapterButton = event.target.closest('[data-read-chapter]');
                if (chapterButton) {
                    event.preventDefault();
                    const selectedBook = books.find(item => item.id === chapterButton.dataset.readChapter);
                    const selectedChapter = selectedBook?.chapters?.find(
                        item => String(item.number) === chapterButton.dataset.chapterNumber
                    );
                    openPdfReader(selectedBook, selectedChapter);
                    return;
                }

                const readButton = event.target.closest('[data-read-book]');
                if (readButton) {
                    event.preventDefault();
                    const selectedBook = books.find(
                        item => item.id === readButton.dataset.readBook
                    );
                    openPdfReader(selectedBook);
                    return;
                }

                const button =
                    event.target.closest(
                        '[data-favorite]'
                    );


                if (button) {

                    event.preventDefault();

                    toggleFavorite(
                        button.dataset.favorite
                    );

                    return;
                }


                // Permite clicar em qualquer área vazia do card
                // para abrir a página do livro.
                const cardElement =
                    event.target.closest('.book-card');

                if (!cardElement) return;

                if (event.target.closest('a')) return;

                const cardLink =
                    cardElement.querySelector('.book-card-link');

                if (cardLink) {
                    window.location.href = cardLink.href;
                }

            }
        );


        /* =================================================
           PESQUISA
        ================================================= */

        document
            .querySelector(
                '#book-search'
            )
            ?.addEventListener(
                'input',
                renderBooks
            );


/* =================================================
   FILTRO POR GÊNERO E TIPO DE CONTEÚDO
================================================= */

const genreFilter = document.querySelector('#genre-filter');
const contentTypeFilter = document.querySelector('#content-type-filter');

genreFilter?.addEventListener('change', renderBooks);
contentTypeFilter?.addEventListener('change', renderBooks);

    }
);
