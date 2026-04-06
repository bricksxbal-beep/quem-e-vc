export interface QuizOption {
  text: string;
  points: number;
}

export interface QuizQuestion {
  text: string;
  options: QuizOption[];
}

export interface QuizResult {
  minScore: number;
  title: string;
  description: string;
  emoji: string;
  detailedDescription: string;
}

export interface Quiz {
  id: string;
  title: string;
  emoji: string;
  description: string;
  questions: QuizQuestion[];
  results: QuizResult[];
}

export const quizzes: Quiz[] = [
  {
    id: "amor",
    title: "Como você ama?",
    emoji: "❤️",
    description: "Descubra seu estilo de amar",
    questions: [
      {
        text: "Quando você gosta de alguém, o que faz primeiro? 😍",
        options: [
          { text: "💬 Mando mensagem na hora", points: 3 },
          { text: "👀 Fico observando de longe", points: 1 },
          { text: "😏 Dou indiretas sutis", points: 2 },
        ],
      },
      {
        text: "Seu crush não respondeu há 2 horas. O que você pensa? 😰",
        options: [
          { text: "😭 Já acho que não gosta de mim", points: 3 },
          { text: "😌 Deve estar ocupado(a)", points: 1 },
          { text: "😤 Fico irritado(a) mas disfarço", points: 2 },
        ],
      },
      {
        text: "O que mais importa num relacionamento? 💑",
        options: [
          { text: "🔥 Paixão intensa", points: 3 },
          { text: "🤝 Companheirismo", points: 1 },
          { text: "💋 Atração física", points: 2 },
        ],
      },
      {
        text: "Como você demonstra amor? 💕",
        options: [
          { text: "🎁 Presentes e surpresas", points: 2 },
          { text: "🤗 Abraços e carinho o tempo todo", points: 3 },
          { text: "📝 Palavras e mensagens fofas", points: 1 },
        ],
      },
      {
        text: "Seu ex te manda mensagem. O que faz? 📱",
        options: [
          { text: "🚫 Bloqueio na hora", points: 1 },
          { text: "👀 Leio mas não respondo", points: 2 },
          { text: "💬 Respondo pra ver o que quer", points: 3 },
        ],
      },
      {
        text: "Você acredita em amor à primeira vista? ✨",
        options: [
          { text: "😍 Com certeza!", points: 3 },
          { text: "🤔 Talvez, depende", points: 2 },
          { text: "🙄 Isso não existe", points: 1 },
        ],
      },
      {
        text: "Numa briga de casal, você... 😤",
        options: [
          { text: "🗣️ Grito e falo tudo que penso", points: 3 },
          { text: "🤐 Fico em silêncio", points: 1 },
          { text: "😢 Choro e peço desculpa", points: 2 },
        ],
      },
      {
        text: "Quantos relacionamentos sérios você já teve? 💍",
        options: [
          { text: "0️⃣ Nenhum ainda", points: 1 },
          { text: "1️⃣ Um ou dois", points: 2 },
          { text: "🔢 Vários", points: 3 },
        ],
      },
      {
        text: "O que te faz apaixonar? 😻",
        options: [
          { text: "😄 O jeito de sorrir", points: 3 },
          { text: "🧠 A inteligência", points: 1 },
          { text: "💪 A atitude e confiança", points: 2 },
        ],
      },
      {
        text: "Você largaria tudo por amor? 🌍",
        options: [
          { text: "✈️ Sem pensar duas vezes", points: 3 },
          { text: "🤔 Dependendo da situação", points: 2 },
          { text: "🚫 Nunca, tenho prioridades", points: 1 },
        ],
      },
    ],
    results: [
      {
        minScore: 25,
        title: "Amante Intenso(a) 🔥",
        description: "Você ama com tudo que tem. Quando se apaixona, é de verdade!",
        emoji: "🔥",
        detailedDescription: "Você é o tipo de pessoa que entrega o coração por completo. Sua paixão é avassaladora e contagiante. Quando ama, faz o outro se sentir a pessoa mais especial do mundo. Cuidado apenas para não se perder no processo — seu coração é precioso demais.",
      },
      {
        minScore: 20,
        title: "Romântico(a) Apaixonado(a) 💕",
        description: "Você acredita no amor verdadeiro e faz de tudo pela pessoa amada.",
        emoji: "💕",
        detailedDescription: "Você tem um coração enorme e uma capacidade incrível de amar. Sonha com o relacionamento perfeito e se dedica ao máximo. As pessoas ao seu redor admiram sua entrega e carinho. Você merece alguém que valorize cada gesto seu.",
      },
      {
        minScore: 15,
        title: "Cauteloso(a) no Amor 🛡️",
        description: "Você protege seu coração, mas quando confia, ama profundamente.",
        emoji: "🛡️",
        detailedDescription: "Você não se entrega facilmente, e isso é uma qualidade. Quando alguém conquista sua confiança, recebe o melhor de você. Sua forma de amar é madura e equilibrada. Poucos têm a sorte de ver seu lado mais vulnerável.",
      },
      {
        minScore: 0,
        title: "Independente Emocional 🧊",
        description: "Amor é importante, mas você não depende dele pra ser feliz.",
        emoji: "🧊",
        detailedDescription: "Você valoriza sua liberdade e independência acima de tudo. Isso não significa que não ama — apenas que sabe viver bem sozinho(a). Quando encontrar alguém à sua altura, será uma conexão poderosa e equilibrada.",
      },
    ],
  },
  {
    id: "ciumes",
    title: "Nível de ciúmes",
    emoji: "💔",
    description: "Qual seu nível de ciúmes real?",
    questions: [
      {
        text: "Seu parceiro(a) recebe uma mensagem tarde da noite. O que faz? 📱",
        options: [
          { text: "😡 Quero ver na hora!", points: 3 },
          { text: "🤔 Pergunto quem é com calma", points: 2 },
          { text: "😌 Nem ligo, confio", points: 1 },
        ],
      },
      {
        text: "Alguém bonito(a) puxa assunto com seu par. Sua reação? 👀",
        options: [
          { text: "🔥 Marco território na hora", points: 3 },
          { text: "😒 Fico observando de longe", points: 2 },
          { text: "😄 Fico de boa, confio", points: 1 },
        ],
      },
      {
        text: "Você checa o celular do(a) parceiro(a)? 🔍",
        options: [
          { text: "📱 Sempre que posso", points: 3 },
          { text: "🤷 Já chequei uma vez", points: 2 },
          { text: "🚫 Nunca, é invasão", points: 1 },
        ],
      },
      {
        text: "Seu par curtiu a foto de um(a) ex. O que faz? ❤️",
        options: [
          { text: "💀 É briga na certa", points: 3 },
          { text: "😤 Fico chateado(a) mas guardo", points: 2 },
          { text: "🤷 Nem reparo nisso", points: 1 },
        ],
      },
      {
        text: "Ele(a) sai com amigos sem você. Sua reação? 🍻",
        options: [
          { text: "😠 Fico ligando toda hora", points: 3 },
          { text: "📲 Mando uma mensagem pra saber", points: 2 },
          { text: "😎 Aproveito meu tempo livre", points: 1 },
        ],
      },
      {
        text: "Alguém comenta 🔥 na foto do(a) seu/sua parceiro(a). E aí? 🔥",
        options: [
          { text: "😡 Vou no perfil da pessoa", points: 3 },
          { text: "😒 Fico incomodado(a)", points: 2 },
          { text: "😂 Concordo, é gato(a) mesmo", points: 1 },
        ],
      },
      {
        text: "Seu par menciona que um colega é bonito(a). Sua reação? 😳",
        options: [
          { text: "💢 Fico com raiva na hora", points: 3 },
          { text: "😕 Não gosto mas disfarço", points: 2 },
          { text: "😄 Normal, todo mundo tem olhos", points: 1 },
        ],
      },
      {
        text: "Você stalkeou o perfil de alguém por ciúmes? 🕵️",
        options: [
          { text: "🔍 Stalkeo sempre", points: 3 },
          { text: "👀 Já stalkeei uma vez", points: 2 },
          { text: "🚫 Nunca fiz isso", points: 1 },
        ],
      },
      {
        text: "Seu parceiro(a) tem amizade próxima com alguém do sexo oposto. OK? 🤝",
        options: [
          { text: "❌ Não aceito de jeito nenhum", points: 3 },
          { text: "😕 Aceito mas fico de olho", points: 2 },
          { text: "✅ Tranquilo, confio", points: 1 },
        ],
      },
      {
        text: "Ele(a) esqueceu de te responder o dia todo. O que pensa? 📵",
        options: [
          { text: "😱 Tá com outra pessoa!", points: 3 },
          { text: "😢 Fico triste mas espero", points: 2 },
          { text: "😌 Acontece, tudo bem", points: 1 },
        ],
      },
    ],
    results: [
      {
        minScore: 25,
        title: "Ciúmes Extremo 🌋",
        description: "Você é MUITO ciumento(a)! Cuidado pra não sufocar quem ama 😳",
        emoji: "🌋",
        detailedDescription: "Seu nível de ciúmes está no máximo. Você sente necessidade de controlar e saber de tudo. Isso pode afastar as pessoas que ama. Trabalhar a confiança vai transformar seus relacionamentos. O amor precisa de espaço pra respirar.",
      },
      {
        minScore: 20,
        title: "Bastante Ciumento(a) 😤",
        description: "Ciúmes é forte em você, mas ainda dá pra controlar.",
        emoji: "😤",
        detailedDescription: "Você sente ciúmes com frequência e isso afeta seu dia a dia. Porém, você ainda tem consciência disso e pode trabalhar esse sentimento. A chave é a comunicação honesta com seu parceiro(a). Nem tudo é ameaça.",
      },
      {
        minScore: 15,
        title: "Ciúmes Normal 😊",
        description: "Você sente ciúmes na medida certa. Equilíbrio é tudo!",
        emoji: "😊",
        detailedDescription: "Parabéns! Você tem um nível saudável de ciúmes. Sente quando algo não está certo, mas não deixa isso dominar sua vida. Esse equilíbrio é raro e mostra maturidade emocional. Continue assim!",
      },
      {
        minScore: 0,
        title: "Zero Ciúmes 😎",
        description: "Você confia demais ou simplesmente não liga? 🤔",
        emoji: "😎",
        detailedDescription: "Você raramente sente ciúmes, o que pode ser ótimo — ou preocupante. Se é confiança genuína, parabéns! Se é indiferença, pode ser hora de refletir sobre seus sentimentos reais. A ausência total de ciúmes às vezes esconde algo mais profundo.",
      },
    ],
  },
  {
    id: "lado-oculto",
    title: "Seu lado oculto",
    emoji: "😈",
    description: "O que você esconde de todo mundo?",
    questions: [
      {
        text: "O que você faz quando ninguém está vendo? 👀",
        options: [
          { text: "😈 Coisas que ninguém imagina", points: 3 },
          { text: "📱 Fico no celular por horas", points: 2 },
          { text: "😇 Nada demais", points: 1 },
        ],
      },
      {
        text: "Já mentiu pra alguém que ama? 🤥",
        options: [
          { text: "😬 Várias vezes", points: 3 },
          { text: "😕 Só mentiras pequenas", points: 2 },
          { text: "😇 Nunca, sou honesto(a)", points: 1 },
        ],
      },
      {
        text: "Se pudesse fazer algo proibido sem consequências, faria? ⚡",
        options: [
          { text: "😈 Com certeza!", points: 3 },
          { text: "🤔 Depende do que fosse", points: 2 },
          { text: "🚫 Não, tenho princípios", points: 1 },
        ],
      },
      {
        text: "Qual seu pensamento mais sombrio? 🌑",
        options: [
          { text: "💀 Prefiro não dizer", points: 3 },
          { text: "😤 Vingança de alguém", points: 2 },
          { text: "😌 Não tenho pensamentos ruins", points: 1 },
        ],
      },
      {
        text: "Você guarda segredos pesados? 🤫",
        options: [
          { text: "🔒 Muitos, ninguém sabe", points: 3 },
          { text: "🤐 Alguns sim", points: 2 },
          { text: "📢 Sou livro aberto", points: 1 },
        ],
      },
      {
        text: "Já sentiu prazer com o fracasso de alguém? 😏",
        options: [
          { text: "😈 Sim, várias vezes", points: 3 },
          { text: "😬 Uma vez ou outra", points: 2 },
          { text: "😇 Nunca, torço por todos", points: 1 },
        ],
      },
      {
        text: "Consegue manipular pessoas facilmente? 🎭",
        options: [
          { text: "🎯 Sou expert nisso", points: 3 },
          { text: "😅 Às vezes sem querer", points: 2 },
          { text: "🚫 Não sei e não quero", points: 1 },
        ],
      },
      {
        text: "Se ninguém soubesse, trairia? 💔",
        options: [
          { text: "😈 Provavelmente sim", points: 3 },
          { text: "🤔 Seria tentador...", points: 2 },
          { text: "❌ Jamais!", points: 1 },
        ],
      },
      {
        text: "Qual máscara você usa no dia a dia? 🎭",
        options: [
          { text: "😄 A de pessoa feliz", points: 2 },
          { text: "💪 A de pessoa forte", points: 3 },
          { text: "🤷 Sou eu mesmo(a) sempre", points: 1 },
        ],
      },
      {
        text: "Tem algo que fez e se arrepende profundamente? 😔",
        options: [
          { text: "😭 Sim, me assombra até hoje", points: 3 },
          { text: "😕 Tenho alguns arrependimentos", points: 2 },
          { text: "😌 Não me arrependo de nada", points: 1 },
        ],
      },
    ],
    results: [
      {
        minScore: 25,
        title: "Alma Sombria 🖤",
        description: "Você tem um lado muito intenso e obscuro. Poucos te conhecem de verdade.",
        emoji: "🖤",
        detailedDescription: "Dentro de você existe uma complexidade que assusta. Você é capaz de coisas que ninguém imagina — para o bem e para o mal. Seu lado oculto é poderoso e magnético. Use essa intensidade com sabedoria, pois ela pode ser sua maior força ou sua perdição.",
      },
      {
        minScore: 20,
        title: "Misterioso(a) 🌙",
        description: "Você esconde mais do que mostra. Há camadas que ninguém vê.",
        emoji: "🌙",
        detailedDescription: "Você tem uma dualidade fascinante. Na superfície parece uma pessoa comum, mas por dentro existe um mundo inteiro que ninguém conhece. Seus segredos te protegem, mas também te isolam. Encontrar alguém em quem confiar pode ser libertador.",
      },
      {
        minScore: 15,
        title: "Levemente Sombrio(a) 🌓",
        description: "Você tem seus momentos, mas nada muito preocupante.",
        emoji: "🌓",
        detailedDescription: "Todo mundo tem um lado B, e o seu é relativamente leve. Você tem pensamentos questionáveis de vez em quando, mas sua consciência é forte o suficiente para te manter no caminho certo. Sua sombra é controlável e humana.",
      },
      {
        minScore: 0,
        title: "Puro(a) Coração 😇",
        description: "Se você tem um lado oculto, ele é bem discreto!",
        emoji: "😇",
        detailedDescription: "Ou você é realmente uma pessoa de coração puro, ou é muito bom(a) em esconder. De qualquer forma, sua essência parece genuinamente boa. As pessoas se sentem seguras ao seu redor. Mas cuidado: não deixe ninguém se aproveitar dessa bondade.",
      },
    ],
  },
  {
    id: "mente",
    title: "Sua mente é forte?",
    emoji: "🧠",
    description: "Teste sua inteligência emocional",
    questions: [
      {
        text: "Alguém te critica na frente de todos. O que faz? 😤",
        options: [
          { text: "🧘 Respiro fundo e ignoro", points: 3 },
          { text: "🗣️ Respondo na hora", points: 1 },
          { text: "😔 Fico mal por dentro", points: 2 },
        ],
      },
      {
        text: "Você consegue controlar suas emoções? 🎭",
        options: [
          { text: "💪 Na maioria das vezes sim", points: 3 },
          { text: "😅 Depende da situação", points: 2 },
          { text: "😢 Não, sou explosivo(a)", points: 1 },
        ],
      },
      {
        text: "Quando algo dá errado, qual sua reação? 💥",
        options: [
          { text: "🧠 Penso em soluções", points: 3 },
          { text: "😤 Fico irritado(a) primeiro", points: 1 },
          { text: "😰 Entro em pânico", points: 2 },
        ],
      },
      {
        text: "Você perdoa facilmente? 🤝",
        options: [
          { text: "😇 Sim, não guardo rancor", points: 3 },
          { text: "🤔 Depende da gravidade", points: 2 },
          { text: "😡 Nunca esqueço", points: 1 },
        ],
      },
      {
        text: "Como lida com a solidão? 🌙",
        options: [
          { text: "😌 Me sinto bem sozinho(a)", points: 3 },
          { text: "📱 Procuro distração", points: 2 },
          { text: "😢 Sofro muito", points: 1 },
        ],
      },
      {
        text: "Alguém te desrespeita. Qual sua reação? 😠",
        options: [
          { text: "🧊 Corto a pessoa da minha vida", points: 3 },
          { text: "🗣️ Falo o que penso na hora", points: 2 },
          { text: "😢 Aceito calado(a)", points: 1 },
        ],
      },
      {
        text: "Você se compara com os outros? 📊",
        options: [
          { text: "🚫 Nunca, foco em mim", points: 3 },
          { text: "😅 Às vezes sem querer", points: 2 },
          { text: "😔 O tempo todo", points: 1 },
        ],
      },
      {
        text: "Consegue dizer NÃO sem culpa? 🛑",
        options: [
          { text: "✅ Sim, com tranquilidade", points: 3 },
          { text: "😬 Com dificuldade", points: 2 },
          { text: "😢 Não, sempre cedo", points: 1 },
        ],
      },
      {
        text: "O que faz quando está ansioso(a)? 😰",
        options: [
          { text: "🧘 Medito ou exercito", points: 3 },
          { text: "📱 Distraio com redes", points: 2 },
          { text: "😫 Fico paralisado(a)", points: 1 },
        ],
      },
      {
        text: "Você aceita críticas construtivas? 📝",
        options: [
          { text: "👍 Sim, uso pra crescer", points: 3 },
          { text: "😕 Aceito mas dói", points: 2 },
          { text: "😤 Levo pro pessoal", points: 1 },
        ],
      },
    ],
    results: [
      {
        minScore: 25,
        title: "Mente de Aço 🏆",
        description: "Sua inteligência emocional é impressionante! Poucos chegam a esse nível.",
        emoji: "🏆",
        detailedDescription: "Você desenvolveu uma resiliência emocional rara. Consegue manter a calma em situações extremas, perdoa com facilidade e não se deixa abalar por opiniões alheias. Sua mente é sua maior arma. Continue cultivando essa força interior — ela é seu superpoder.",
      },
      {
        minScore: 20,
        title: "Mente Forte 💪",
        description: "Você é emocionalmente forte, com pequenos pontos a melhorar.",
        emoji: "💪",
        detailedDescription: "Sua mente é resistente e você lida bem com a maioria dos desafios. Tem momentos de fraqueza, como todo ser humano, mas se recupera rápido. Está no caminho certo para uma inteligência emocional excepcional. Continue evoluindo!",
      },
      {
        minScore: 15,
        title: "Em Desenvolvimento 🌱",
        description: "Sua mente está crescendo. Tem potencial, mas precisa de treino.",
        emoji: "🌱",
        detailedDescription: "Você está numa fase de crescimento emocional. Ainda se deixa afetar por muitas coisas, mas já tem consciência disso — e isso é metade do caminho. Pratique o autoconhecimento diariamente e verá uma transformação incrível em poucos meses.",
      },
      {
        minScore: 0,
        title: "Mente Sensível 🌊",
        description: "Suas emoções dominam você. Hora de fortalecer sua mente!",
        emoji: "🌊",
        detailedDescription: "Você sente tudo intensamente e isso é tanto uma bênção quanto um desafio. Suas emoções frequentemente tomam o controle das suas decisões. Buscar autoconhecimento e práticas de mindfulness pode transformar sua vida completamente. O primeiro passo é reconhecer que precisa mudar.",
      },
    ],
  },
  {
    id: "atracao",
    title: "Você é atraente?",
    emoji: "🔥",
    description: "Descubra seu nível de atração",
    questions: [
      {
        text: "As pessoas costumam te olhar na rua? 👀",
        options: [
          { text: "😏 Sempre, estou acostumado(a)", points: 3 },
          { text: "🤔 Às vezes percebo", points: 2 },
          { text: "😅 Raramente", points: 1 },
        ],
      },
      {
        text: "Como é seu nível de confiança? 💎",
        options: [
          { text: "👑 Alto demais", points: 3 },
          { text: "😊 Bom, na maioria dos dias", points: 2 },
          { text: "😔 Bem baixo", points: 1 },
        ],
      },
      {
        text: "Você cuida da sua aparência? 💅",
        options: [
          { text: "✨ Sempre impecável", points: 3 },
          { text: "😊 Cuido sim, o básico", points: 2 },
          { text: "🤷 Nem tanto", points: 1 },
        ],
      },
      {
        text: "Já fizeram elogios inesperados sobre você? 😍",
        options: [
          { text: "🥰 Sempre recebo", points: 3 },
          { text: "😊 De vez em quando", points: 2 },
          { text: "😕 Quase nunca", points: 1 },
        ],
      },
      {
        text: "Qual seu tipo de energia? ⚡",
        options: [
          { text: "🔥 Magnética e intensa", points: 3 },
          { text: "😄 Leve e divertida", points: 2 },
          { text: "😶 Discreta e reservada", points: 1 },
        ],
      },
      {
        text: "Você faz as pessoas rirem? 😂",
        options: [
          { text: "🤣 Sou o(a) comediante do grupo", points: 3 },
          { text: "😊 Consigo arrancar sorrisos", points: 2 },
          { text: "😐 Não sou muito engraçado(a)", points: 1 },
        ],
      },
      {
        text: "Como você se sente em fotos? 📸",
        options: [
          { text: "😍 Fico ótimo(a)!", points: 3 },
          { text: "🤷 Depende do ângulo", points: 2 },
          { text: "😩 Odeio tirar foto", points: 1 },
        ],
      },
      {
        text: "As pessoas ficam nervosas perto de você? 😳",
        options: [
          { text: "😏 Sempre, intimido", points: 3 },
          { text: "🤔 Alguns sim", points: 2 },
          { text: "😅 Ninguém liga pra mim", points: 1 },
        ],
      },
      {
        text: "Seu estilo é único? 👗",
        options: [
          { text: "🔥 Completamente original", points: 3 },
          { text: "👍 Sigo tendências com estilo", points: 2 },
          { text: "👕 Uso o que é confortável", points: 1 },
        ],
      },
      {
        text: "Já disseram que você é inesquecível? 💫",
        options: [
          { text: "😏 Várias vezes", points: 3 },
          { text: "🥰 Uma vez ou outra", points: 2 },
          { text: "😕 Nunca ouvi isso", points: 1 },
        ],
      },
    ],
    results: [
      {
        minScore: 25,
        title: "Irresistível 🔥",
        description: "Você é magnético(a)! As pessoas não conseguem tirar os olhos de você.",
        emoji: "🔥",
        detailedDescription: "Sua atração vai muito além do físico. Você tem uma energia que hipnotiza, um carisma que conquista e uma presença que marca. As pessoas se sentem atraídas por você naturalmente. Você é daqueles que entra num lugar e todos percebem. Use esse poder com responsabilidade!",
      },
      {
        minScore: 20,
        title: "Muito Atraente 😍",
        description: "Você chama atenção por onde passa. Tem algo especial!",
        emoji: "😍",
        detailedDescription: "Você tem um charme natural que atrai as pessoas. Sua combinação de aparência, personalidade e energia te torna muito desejável. Algumas pessoas podem sentir inveja da sua presença. Continue sendo autêntico(a) — é isso que te faz brilhar.",
      },
      {
        minScore: 15,
        title: "Charme Discreto ✨",
        description: "Sua beleza é sutil mas poderosa. Conquista aos poucos.",
        emoji: "✨",
        detailedDescription: "Você não é do tipo que chama atenção de longe, mas quando alguém te conhece de perto, se encanta completamente. Sua atração é como um bom vinho — fica melhor com o tempo. Quem tem a chance de te conhecer descobre um tesouro.",
      },
      {
        minScore: 0,
        title: "Diamante Bruto 💎",
        description: "Você tem potencial escondido. Hora de brilhar!",
        emoji: "💎",
        detailedDescription: "Sua atração está guardada dentro de você esperando pra sair. Trabalhar sua autoconfiança e cuidar mais de si pode revelar uma versão sua que ninguém esperava. O diamante está lá — só precisa ser lapidado. Acredite mais em você!",
      },
    ],
  },
  {
    id: "percepcao",
    title: "Como as pessoas te veem?",
    emoji: "👀",
    description: "A verdade sobre a imagem que você passa",
    questions: [
      {
        text: "Primeira impressão que você causa? 🤝",
        options: [
          { text: "😎 Confiante e forte", points: 3 },
          { text: "😊 Simpático(a) e amigável", points: 2 },
          { text: "😶 Tímido(a) e reservado(a)", points: 1 },
        ],
      },
      {
        text: "Em grupo, qual seu papel? 👥",
        options: [
          { text: "👑 O líder natural", points: 3 },
          { text: "😄 O que anima tudo", points: 2 },
          { text: "👂 O que ouve mais que fala", points: 1 },
        ],
      },
      {
        text: "Seus amigos te descrevem como... 💬",
        options: [
          { text: "🔥 Intenso(a) e marcante", points: 3 },
          { text: "🤗 Carinhoso(a) e leal", points: 2 },
          { text: "🧊 Misterioso(a) e distante", points: 1 },
        ],
      },
      {
        text: "Como você se comporta em festas? 🎉",
        options: [
          { text: "💃 Sou o centro das atenções", points: 3 },
          { text: "😊 Converso com todo mundo", points: 2 },
          { text: "🤫 Fico no canto com poucas pessoas", points: 1 },
        ],
      },
      {
        text: "As pessoas pedem seus conselhos? 💡",
        options: [
          { text: "🧠 Sempre, sou referência", points: 3 },
          { text: "🤝 Às vezes sim", points: 2 },
          { text: "🤷 Nunca me procuram", points: 1 },
        ],
      },
      {
        text: "Você fala o que pensa? 🗣️",
        options: [
          { text: "💣 Sempre, sem filtro", points: 3 },
          { text: "🤔 Depende da situação", points: 2 },
          { text: "🤐 Guardo pra mim", points: 1 },
        ],
      },
      {
        text: "Já te chamaram de intimidador(a)? 😈",
        options: [
          { text: "😏 Sempre", points: 3 },
          { text: "🤔 Uma vez ou outra", points: 2 },
          { text: "😅 Nunca, sou inofensivo(a)", points: 1 },
        ],
      },
      {
        text: "Quando você entra num ambiente, o que acontece? 🚪",
        options: [
          { text: "👀 Todo mundo olha", points: 3 },
          { text: "😊 Alguns cumprimentam", points: 2 },
          { text: "😶 Ninguém percebe", points: 1 },
        ],
      },
      {
        text: "Quantos amigos verdadeiros você tem? 💎",
        options: [
          { text: "🤚 Poucos mas leais", points: 2 },
          { text: "👥 Muitos!", points: 3 },
          { text: "😔 Quase nenhum", points: 1 },
        ],
      },
      {
        text: "As pessoas sentem falta de você quando não está? 🥺",
        options: [
          { text: "😏 Com certeza, faço falta", points: 3 },
          { text: "🤷 Acho que sim", points: 2 },
          { text: "😕 Duvido que percebam", points: 1 },
        ],
      },
    ],
    results: [
      {
        minScore: 25,
        title: "Presença Magnética 👑",
        description: "Você é impossível de ignorar. As pessoas te admiram e respeitam!",
        emoji: "👑",
        detailedDescription: "Você tem uma presença que domina qualquer ambiente. As pessoas te veem como alguém forte, confiante e inspirador. Sua energia é contagiante e sua opinião é valorizada. Você é daqueles que as pessoas lembram pra sempre. Poucos têm esse dom natural de liderança e carisma.",
      },
      {
        minScore: 20,
        title: "Pessoa Cativante 🌟",
        description: "As pessoas gostam de estar perto de você. Você transmite algo bom!",
        emoji: "🌟",
        detailedDescription: "Você é visto(a) como alguém agradável, confiável e carismático. As pessoas se sentem bem na sua presença e confiam em você. Sua personalidade é acolhedora e genuína. Esse tipo de energia atrai pessoas boas para sua vida naturalmente.",
      },
      {
        minScore: 15,
        title: "Enigma Ambulante 🌙",
        description: "As pessoas não te entendem completamente — e isso fascina.",
        emoji: "🌙",
        detailedDescription: "Você passa uma imagem misteriosa e intrigante. As pessoas querem te conhecer melhor mas sentem que há muito mais por trás da superfície. Isso pode ser magnético para uns e intimidador para outros. Abrir-se um pouco mais pode criar conexões incríveis.",
      },
      {
        minScore: 0,
        title: "Sombra Silenciosa 🌫️",
        description: "Você passa despercebido(a), mas isso pode mudar!",
        emoji: "🌫️",
        detailedDescription: "As pessoas muitas vezes não te notam ou não te entendem bem. Isso não significa que você não tem valor — muito pelo contrário. Às vezes os maiores tesouros são os mais escondidos. Trabalhar sua presença e comunicação pode revelar ao mundo o quão especial você é.",
      },
    ],
  },
];
