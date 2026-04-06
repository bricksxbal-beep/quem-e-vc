export interface QuizOption {
  text: string;
  textEn: string;
  points: number;
}

export interface QuizQuestion {
  text: string;
  textEn: string;
  options: QuizOption[];
}

export interface QuizResult {
  minScore: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  emoji: string;
  detailedDescription: string;
  detailedDescriptionEn: string;
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
        textEn: "When you like someone, what do you do first? 😍",
        options: [
          { text: "💬 Mando mensagem na hora", textEn: "💬 I text them right away", points: 3 },
          { text: "👀 Fico observando de longe", textEn: "👀 I watch from afar", points: 1 },
          { text: "😏 Dou indiretas sutis", textEn: "😏 I drop subtle hints", points: 2 },
        ],
      },
      {
        text: "Seu crush não respondeu há 2 horas. O que você pensa? 😰",
        textEn: "Your crush hasn't replied in 2 hours. What do you think? 😰",
        options: [
          { text: "😭 Já acho que não gosta de mim", textEn: "😭 They probably don't like me", points: 3 },
          { text: "😌 Deve estar ocupado(a)", textEn: "😌 They're probably busy", points: 1 },
          { text: "😤 Fico irritado(a) mas disfarço", textEn: "😤 I get annoyed but hide it", points: 2 },
        ],
      },
      {
        text: "O que mais importa num relacionamento? 💑",
        textEn: "What matters most in a relationship? 💑",
        options: [
          { text: "🔥 Paixão intensa", textEn: "🔥 Intense passion", points: 3 },
          { text: "🤝 Companheirismo", textEn: "🤝 Companionship", points: 1 },
          { text: "💋 Atração física", textEn: "💋 Physical attraction", points: 2 },
        ],
      },
      {
        text: "Como você demonstra amor? 💕",
        textEn: "How do you show love? 💕",
        options: [
          { text: "🎁 Presentes e surpresas", textEn: "🎁 Gifts and surprises", points: 2 },
          { text: "🤗 Abraços e carinho o tempo todo", textEn: "🤗 Hugs and affection all the time", points: 3 },
          { text: "📝 Palavras e mensagens fofas", textEn: "📝 Sweet words and messages", points: 1 },
        ],
      },
      {
        text: "Seu ex te manda mensagem. O que faz? 📱",
        textEn: "Your ex texts you. What do you do? 📱",
        options: [
          { text: "🚫 Bloqueio na hora", textEn: "🚫 Block immediately", points: 1 },
          { text: "👀 Leio mas não respondo", textEn: "👀 Read but don't reply", points: 2 },
          { text: "💬 Respondo pra ver o que quer", textEn: "💬 Reply to see what they want", points: 3 },
        ],
      },
      {
        text: "Você acredita em amor à primeira vista? ✨",
        textEn: "Do you believe in love at first sight? ✨",
        options: [
          { text: "😍 Com certeza!", textEn: "😍 Absolutely!", points: 3 },
          { text: "🤔 Talvez, depende", textEn: "🤔 Maybe, depends", points: 2 },
          { text: "🙄 Isso não existe", textEn: "🙄 That doesn't exist", points: 1 },
        ],
      },
      {
        text: "Numa briga de casal, você... 😤",
        textEn: "In a couple's fight, you... 😤",
        options: [
          { text: "🗣️ Grito e falo tudo que penso", textEn: "🗣️ Yell and say everything I think", points: 3 },
          { text: "🤐 Fico em silêncio", textEn: "🤐 Stay silent", points: 1 },
          { text: "😢 Choro e peço desculpa", textEn: "😢 Cry and apologize", points: 2 },
        ],
      },
      {
        text: "Quantos relacionamentos sérios você já teve? 💍",
        textEn: "How many serious relationships have you had? 💍",
        options: [
          { text: "0️⃣ Nenhum ainda", textEn: "0️⃣ None yet", points: 1 },
          { text: "1️⃣ Um ou dois", textEn: "1️⃣ One or two", points: 2 },
          { text: "🔢 Vários", textEn: "🔢 Several", points: 3 },
        ],
      },
      {
        text: "O que te faz apaixonar? 😻",
        textEn: "What makes you fall in love? 😻",
        options: [
          { text: "😄 O jeito de sorrir", textEn: "😄 Their smile", points: 3 },
          { text: "🧠 A inteligência", textEn: "🧠 Their intelligence", points: 1 },
          { text: "💪 A atitude e confiança", textEn: "💪 Their attitude and confidence", points: 2 },
        ],
      },
      {
        text: "Você largaria tudo por amor? 🌍",
        textEn: "Would you leave everything for love? 🌍",
        options: [
          { text: "✈️ Sem pensar duas vezes", textEn: "✈️ Without thinking twice", points: 3 },
          { text: "🤔 Dependendo da situação", textEn: "🤔 Depending on the situation", points: 2 },
          { text: "🚫 Nunca, tenho prioridades", textEn: "🚫 Never, I have priorities", points: 1 },
        ],
      },
    ],
    results: [
      {
        minScore: 25,
        title: "Amante Intenso(a) 🔥",
        titleEn: "Intense Lover 🔥",
        description: "Você ama com tudo que tem. Quando se apaixona, é de verdade!",
        descriptionEn: "You love with everything you have. When you fall in love, it's for real!",
        emoji: "🔥",
        detailedDescription: "Você é o tipo de pessoa que entrega o coração por completo. Sua paixão é avassaladora e contagiante. Quando ama, faz o outro se sentir a pessoa mais especial do mundo. Cuidado apenas para não se perder no processo — seu coração é precioso demais.",
        detailedDescriptionEn: "You're the type who gives your heart completely. Your passion is overwhelming and contagious. When you love, you make the other person feel like the most special in the world. Just be careful not to lose yourself in the process — your heart is too precious.",
      },
      {
        minScore: 20,
        title: "Romântico(a) Apaixonado(a) 💕",
        titleEn: "Passionate Romantic 💕",
        description: "Você acredita no amor verdadeiro e faz de tudo pela pessoa amada.",
        descriptionEn: "You believe in true love and do everything for the one you love.",
        emoji: "💕",
        detailedDescription: "Você tem um coração enorme e uma capacidade incrível de amar. Sonha com o relacionamento perfeito e se dedica ao máximo. As pessoas ao seu redor admiram sua entrega e carinho. Você merece alguém que valorize cada gesto seu.",
        detailedDescriptionEn: "You have a huge heart and an incredible capacity to love. You dream of the perfect relationship and give your all. People around you admire your dedication and affection. You deserve someone who values every gesture.",
      },
      {
        minScore: 15,
        title: "Cauteloso(a) no Amor 🛡️",
        titleEn: "Cautious in Love 🛡️",
        description: "Você protege seu coração, mas quando confia, ama profundamente.",
        descriptionEn: "You protect your heart, but when you trust, you love deeply.",
        emoji: "🛡️",
        detailedDescription: "Você não se entrega facilmente, e isso é uma qualidade. Quando alguém conquista sua confiança, recebe o melhor de você. Sua forma de amar é madura e equilibrada. Poucos têm a sorte de ver seu lado mais vulnerável.",
        detailedDescriptionEn: "You don't give yourself easily, and that's a quality. When someone earns your trust, they get the best of you. Your way of loving is mature and balanced. Few are lucky enough to see your vulnerable side.",
      },
      {
        minScore: 0,
        title: "Independente Emocional 🧊",
        titleEn: "Emotionally Independent 🧊",
        description: "Amor é importante, mas você não depende dele pra ser feliz.",
        descriptionEn: "Love is important, but you don't depend on it to be happy.",
        emoji: "🧊",
        detailedDescription: "Você valoriza sua liberdade e independência acima de tudo. Isso não significa que não ama — apenas que sabe viver bem sozinho(a). Quando encontrar alguém à sua altura, será uma conexão poderosa e equilibrada.",
        detailedDescriptionEn: "You value your freedom and independence above all. This doesn't mean you don't love — just that you know how to live well on your own. When you find someone at your level, it will be a powerful and balanced connection.",
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
        textEn: "Your partner gets a late night text. What do you do? 📱",
        options: [
          { text: "😡 Quero ver na hora!", textEn: "😡 I want to see it now!", points: 3 },
          { text: "🤔 Pergunto quem é com calma", textEn: "🤔 I calmly ask who it is", points: 2 },
          { text: "😌 Nem ligo, confio", textEn: "😌 Don't care, I trust them", points: 1 },
        ],
      },
      {
        text: "Alguém bonito(a) puxa assunto com seu par. Sua reação? 👀",
        textEn: "Someone attractive starts chatting with your partner. Your reaction? 👀",
        options: [
          { text: "🔥 Marco território na hora", textEn: "🔥 I mark my territory immediately", points: 3 },
          { text: "😒 Fico observando de longe", textEn: "😒 I watch from a distance", points: 2 },
          { text: "😄 Fico de boa, confio", textEn: "😄 I'm cool, I trust them", points: 1 },
        ],
      },
      {
        text: "Você checa o celular do(a) parceiro(a)? 🔍",
        textEn: "Do you check your partner's phone? 🔍",
        options: [
          { text: "📱 Sempre que posso", textEn: "📱 Whenever I can", points: 3 },
          { text: "🤷 Já chequei uma vez", textEn: "🤷 I've checked once", points: 2 },
          { text: "🚫 Nunca, é invasão", textEn: "🚫 Never, it's invasion of privacy", points: 1 },
        ],
      },
      {
        text: "Seu par curtiu a foto de um(a) ex. O que faz? ❤️",
        textEn: "Your partner liked their ex's photo. What do you do? ❤️",
        options: [
          { text: "💀 É briga na certa", textEn: "💀 It's definitely a fight", points: 3 },
          { text: "😤 Fico chateado(a) mas guardo", textEn: "😤 I'm upset but keep it in", points: 2 },
          { text: "🤷 Nem reparo nisso", textEn: "🤷 I don't even notice that", points: 1 },
        ],
      },
      {
        text: "Ele(a) sai com amigos sem você. Sua reação? 🍻",
        textEn: "They go out with friends without you. Your reaction? 🍻",
        options: [
          { text: "😠 Fico ligando toda hora", textEn: "😠 I call every hour", points: 3 },
          { text: "📲 Mando uma mensagem pra saber", textEn: "📲 I send a text to check", points: 2 },
          { text: "😎 Aproveito meu tempo livre", textEn: "😎 I enjoy my free time", points: 1 },
        ],
      },
      {
        text: "Alguém comenta 🔥 na foto do(a) seu/sua parceiro(a). E aí? 🔥",
        textEn: "Someone comments 🔥 on your partner's photo. What now? 🔥",
        options: [
          { text: "😡 Vou no perfil da pessoa", textEn: "😡 I check that person's profile", points: 3 },
          { text: "😒 Fico incomodado(a)", textEn: "😒 I feel uncomfortable", points: 2 },
          { text: "😂 Concordo, é gato(a) mesmo", textEn: "😂 I agree, they are hot", points: 1 },
        ],
      },
      {
        text: "Seu par menciona que um colega é bonito(a). Sua reação? 😳",
        textEn: "Your partner mentions a colleague is attractive. Your reaction? 😳",
        options: [
          { text: "💢 Fico com raiva na hora", textEn: "💢 I get angry immediately", points: 3 },
          { text: "😕 Não gosto mas disfarço", textEn: "😕 Don't like it but I hide it", points: 2 },
          { text: "😄 Normal, todo mundo tem olhos", textEn: "😄 Normal, everyone has eyes", points: 1 },
        ],
      },
      {
        text: "Você stalkeou o perfil de alguém por ciúmes? 🕵️",
        textEn: "Have you ever stalked someone's profile out of jealousy? 🕵️",
        options: [
          { text: "🔍 Stalkeo sempre", textEn: "🔍 I always stalk", points: 3 },
          { text: "👀 Já stalkeei uma vez", textEn: "👀 I've stalked once", points: 2 },
          { text: "🚫 Nunca fiz isso", textEn: "🚫 Never done that", points: 1 },
        ],
      },
      {
        text: "Seu parceiro(a) tem amizade próxima com alguém do sexo oposto. OK? 🤝",
        textEn: "Your partner has a close friendship with someone of the opposite sex. OK? 🤝",
        options: [
          { text: "❌ Não aceito de jeito nenhum", textEn: "❌ Absolutely not acceptable", points: 3 },
          { text: "😕 Aceito mas fico de olho", textEn: "😕 I accept but keep an eye", points: 2 },
          { text: "✅ Tranquilo, confio", textEn: "✅ Totally fine, I trust them", points: 1 },
        ],
      },
      {
        text: "Ele(a) esqueceu de te responder o dia todo. O que pensa? 📵",
        textEn: "They forgot to reply all day. What do you think? 📵",
        options: [
          { text: "😱 Tá com outra pessoa!", textEn: "😱 They're with someone else!", points: 3 },
          { text: "😢 Fico triste mas espero", textEn: "😢 I feel sad but wait", points: 2 },
          { text: "😌 Acontece, tudo bem", textEn: "😌 It happens, it's fine", points: 1 },
        ],
      },
    ],
    results: [
      {
        minScore: 25,
        title: "Ciúmes Extremo 🌋",
        titleEn: "Extreme Jealousy 🌋",
        description: "Você é MUITO ciumento(a)! Cuidado pra não sufocar quem ama 😳",
        descriptionEn: "You're VERY jealous! Be careful not to suffocate who you love 😳",
        emoji: "🌋",
        detailedDescription: "Seu nível de ciúmes está no máximo. Você sente necessidade de controlar e saber de tudo. Isso pode afastar as pessoas que ama. Trabalhar a confiança vai transformar seus relacionamentos.",
        detailedDescriptionEn: "Your jealousy level is at maximum. You feel the need to control and know everything. This can push away the people you love. Working on trust will transform your relationships.",
      },
      {
        minScore: 20,
        title: "Bastante Ciumento(a) 😤",
        titleEn: "Quite Jealous 😤",
        description: "Ciúmes é forte em você, mas ainda dá pra controlar.",
        descriptionEn: "Jealousy is strong in you, but you can still control it.",
        emoji: "😤",
        detailedDescription: "Você sente ciúmes com frequência e isso afeta seu dia a dia. Porém, você ainda tem consciência disso e pode trabalhar esse sentimento. A chave é a comunicação honesta.",
        detailedDescriptionEn: "You feel jealous frequently and it affects your daily life. However, you're still aware of it and can work on it. The key is honest communication.",
      },
      {
        minScore: 15,
        title: "Ciúmes Normal 😊",
        titleEn: "Normal Jealousy 😊",
        description: "Você sente ciúmes na medida certa. Equilíbrio é tudo!",
        descriptionEn: "You feel jealousy in the right measure. Balance is everything!",
        emoji: "😊",
        detailedDescription: "Parabéns! Você tem um nível saudável de ciúmes. Sente quando algo não está certo, mas não deixa isso dominar sua vida. Esse equilíbrio é raro e mostra maturidade emocional.",
        detailedDescriptionEn: "Congratulations! You have a healthy level of jealousy. You sense when something isn't right, but don't let it dominate your life. This balance is rare and shows emotional maturity.",
      },
      {
        minScore: 0,
        title: "Zero Ciúmes 😎",
        titleEn: "Zero Jealousy 😎",
        description: "Você confia demais ou simplesmente não liga? 🤔",
        descriptionEn: "Do you trust too much or simply don't care? 🤔",
        emoji: "😎",
        detailedDescription: "Você raramente sente ciúmes, o que pode ser ótimo — ou preocupante. Se é confiança genuína, parabéns! Se é indiferença, pode ser hora de refletir.",
        detailedDescriptionEn: "You rarely feel jealous, which can be great — or concerning. If it's genuine trust, congrats! If it's indifference, it might be time to reflect.",
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
        textEn: "What do you do when nobody's watching? 👀",
        options: [
          { text: "😈 Coisas que ninguém imagina", textEn: "😈 Things nobody would imagine", points: 3 },
          { text: "📱 Fico no celular por horas", textEn: "📱 I stay on my phone for hours", points: 2 },
          { text: "😇 Nada demais", textEn: "😇 Nothing special", points: 1 },
        ],
      },
      {
        text: "Já mentiu pra alguém que ama? 🤥",
        textEn: "Have you lied to someone you love? 🤥",
        options: [
          { text: "😬 Várias vezes", textEn: "😬 Many times", points: 3 },
          { text: "😕 Só mentiras pequenas", textEn: "😕 Only small lies", points: 2 },
          { text: "😇 Nunca, sou honesto(a)", textEn: "😇 Never, I'm honest", points: 1 },
        ],
      },
      {
        text: "Se pudesse fazer algo proibido sem consequências, faria? ⚡",
        textEn: "If you could do something forbidden with no consequences, would you? ⚡",
        options: [
          { text: "😈 Com certeza!", textEn: "😈 Absolutely!", points: 3 },
          { text: "🤔 Depende do que fosse", textEn: "🤔 Depends on what it was", points: 2 },
          { text: "🚫 Não, tenho princípios", textEn: "🚫 No, I have principles", points: 1 },
        ],
      },
      {
        text: "Qual seu pensamento mais sombrio? 🌑",
        textEn: "What's your darkest thought? 🌑",
        options: [
          { text: "💀 Prefiro não dizer", textEn: "💀 I'd rather not say", points: 3 },
          { text: "😤 Vingança de alguém", textEn: "😤 Revenge on someone", points: 2 },
          { text: "😌 Não tenho pensamentos ruins", textEn: "😌 I don't have bad thoughts", points: 1 },
        ],
      },
      {
        text: "Você guarda segredos pesados? 🤫",
        textEn: "Do you keep heavy secrets? 🤫",
        options: [
          { text: "🔒 Muitos, ninguém sabe", textEn: "🔒 Many, nobody knows", points: 3 },
          { text: "🤐 Alguns sim", textEn: "🤐 Some yes", points: 2 },
          { text: "📢 Sou livro aberto", textEn: "📢 I'm an open book", points: 1 },
        ],
      },
      {
        text: "Já sentiu prazer com o fracasso de alguém? 😏",
        textEn: "Have you ever felt pleasure in someone's failure? 😏",
        options: [
          { text: "😈 Sim, várias vezes", textEn: "😈 Yes, many times", points: 3 },
          { text: "😬 Uma vez ou outra", textEn: "😬 Once or twice", points: 2 },
          { text: "😇 Nunca, torço por todos", textEn: "😇 Never, I root for everyone", points: 1 },
        ],
      },
      {
        text: "Consegue manipular pessoas facilmente? 🎭",
        textEn: "Can you manipulate people easily? 🎭",
        options: [
          { text: "🎯 Sou expert nisso", textEn: "🎯 I'm an expert at it", points: 3 },
          { text: "😅 Às vezes sem querer", textEn: "😅 Sometimes unintentionally", points: 2 },
          { text: "🚫 Não sei e não quero", textEn: "🚫 I can't and don't want to", points: 1 },
        ],
      },
      {
        text: "Se ninguém soubesse, trairia? 💔",
        textEn: "If nobody would find out, would you cheat? 💔",
        options: [
          { text: "😈 Provavelmente sim", textEn: "😈 Probably yes", points: 3 },
          { text: "🤔 Seria tentador...", textEn: "🤔 It would be tempting...", points: 2 },
          { text: "❌ Jamais!", textEn: "❌ Never!", points: 1 },
        ],
      },
      {
        text: "Qual máscara você usa no dia a dia? 🎭",
        textEn: "What mask do you wear daily? 🎭",
        options: [
          { text: "😄 A de pessoa feliz", textEn: "😄 The happy person", points: 2 },
          { text: "💪 A de pessoa forte", textEn: "💪 The strong person", points: 3 },
          { text: "🤷 Sou eu mesmo(a) sempre", textEn: "🤷 I'm always myself", points: 1 },
        ],
      },
      {
        text: "Tem algo que fez e se arrepende profundamente? 😔",
        textEn: "Is there something you did that you deeply regret? 😔",
        options: [
          { text: "😭 Sim, me assombra até hoje", textEn: "😭 Yes, it haunts me to this day", points: 3 },
          { text: "😕 Tenho alguns arrependimentos", textEn: "😕 I have some regrets", points: 2 },
          { text: "😌 Não me arrependo de nada", textEn: "😌 I regret nothing", points: 1 },
        ],
      },
    ],
    results: [
      {
        minScore: 25,
        title: "Alma Sombria 🖤",
        titleEn: "Dark Soul 🖤",
        description: "Você tem um lado muito intenso e obscuro. Poucos te conhecem de verdade.",
        descriptionEn: "You have a very intense and dark side. Few truly know you.",
        emoji: "🖤",
        detailedDescription: "Dentro de você existe uma complexidade que assusta. Você é capaz de coisas que ninguém imagina — para o bem e para o mal. Seu lado oculto é poderoso e magnético.",
        detailedDescriptionEn: "Inside you exists a complexity that scares. You're capable of things nobody imagines — for better or worse. Your hidden side is powerful and magnetic.",
      },
      {
        minScore: 20,
        title: "Misterioso(a) 🌙",
        titleEn: "Mysterious 🌙",
        description: "Você esconde mais do que mostra. Há camadas que ninguém vê.",
        descriptionEn: "You hide more than you show. There are layers nobody sees.",
        emoji: "🌙",
        detailedDescription: "Você tem uma dualidade fascinante. Na superfície parece uma pessoa comum, mas por dentro existe um mundo inteiro que ninguém conhece.",
        detailedDescriptionEn: "You have a fascinating duality. On the surface you seem ordinary, but inside there's a whole world nobody knows.",
      },
      {
        minScore: 15,
        title: "Levemente Sombrio(a) 🌓",
        titleEn: "Slightly Dark 🌓",
        description: "Você tem seus momentos, mas nada muito preocupante.",
        descriptionEn: "You have your moments, but nothing too concerning.",
        emoji: "🌓",
        detailedDescription: "Todo mundo tem um lado B, e o seu é relativamente leve. Você tem pensamentos questionáveis de vez em quando, mas sua consciência é forte o suficiente.",
        detailedDescriptionEn: "Everyone has a dark side, and yours is relatively light. You have questionable thoughts sometimes, but your conscience is strong enough.",
      },
      {
        minScore: 0,
        title: "Puro(a) Coração 😇",
        titleEn: "Pure Heart 😇",
        description: "Se você tem um lado oculto, ele é bem discreto!",
        descriptionEn: "If you have a hidden side, it's very discreet!",
        emoji: "😇",
        detailedDescription: "Ou você é realmente uma pessoa de coração puro, ou é muito bom(a) em esconder. De qualquer forma, sua essência parece genuinamente boa.",
        detailedDescriptionEn: "Either you're truly a pure-hearted person, or you're very good at hiding. Either way, your essence seems genuinely good.",
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
        textEn: "Someone criticizes you in front of everyone. What do you do? 😤",
        options: [
          { text: "🧘 Respiro fundo e ignoro", textEn: "🧘 I take a deep breath and ignore", points: 3 },
          { text: "🗣️ Respondo na hora", textEn: "🗣️ I respond immediately", points: 1 },
          { text: "😔 Fico mal por dentro", textEn: "😔 I feel bad inside", points: 2 },
        ],
      },
      {
        text: "Você consegue controlar suas emoções? 🎭",
        textEn: "Can you control your emotions? 🎭",
        options: [
          { text: "💪 Na maioria das vezes sim", textEn: "💪 Most of the time yes", points: 3 },
          { text: "😅 Depende da situação", textEn: "😅 Depends on the situation", points: 2 },
          { text: "😢 Não, sou explosivo(a)", textEn: "😢 No, I'm explosive", points: 1 },
        ],
      },
      {
        text: "Quando algo dá errado, qual sua reação? 💥",
        textEn: "When something goes wrong, what's your reaction? 💥",
        options: [
          { text: "🧠 Penso em soluções", textEn: "🧠 I think of solutions", points: 3 },
          { text: "😤 Fico irritado(a) primeiro", textEn: "😤 I get angry first", points: 1 },
          { text: "😰 Entro em pânico", textEn: "😰 I panic", points: 2 },
        ],
      },
      {
        text: "Você perdoa facilmente? 🤝",
        textEn: "Do you forgive easily? 🤝",
        options: [
          { text: "😇 Sim, não guardo rancor", textEn: "😇 Yes, I don't hold grudges", points: 3 },
          { text: "🤔 Depende da gravidade", textEn: "🤔 Depends on how serious it was", points: 2 },
          { text: "😡 Nunca esqueço", textEn: "😡 I never forget", points: 1 },
        ],
      },
      {
        text: "Como lida com a solidão? 🌙",
        textEn: "How do you deal with loneliness? 🌙",
        options: [
          { text: "😌 Me sinto bem sozinho(a)", textEn: "😌 I feel good alone", points: 3 },
          { text: "📱 Procuro distração", textEn: "📱 I look for distraction", points: 2 },
          { text: "😢 Sofro muito", textEn: "😢 I suffer a lot", points: 1 },
        ],
      },
      {
        text: "Alguém te desrespeita. Qual sua reação? 😠",
        textEn: "Someone disrespects you. What's your reaction? 😠",
        options: [
          { text: "🧊 Corto a pessoa da minha vida", textEn: "🧊 I cut them out of my life", points: 3 },
          { text: "🗣️ Falo o que penso na hora", textEn: "🗣️ I speak my mind immediately", points: 2 },
          { text: "😢 Aceito calado(a)", textEn: "😢 I accept silently", points: 1 },
        ],
      },
      {
        text: "Você se compara com os outros? 📊",
        textEn: "Do you compare yourself to others? 📊",
        options: [
          { text: "🚫 Nunca, foco em mim", textEn: "🚫 Never, I focus on myself", points: 3 },
          { text: "😅 Às vezes sem querer", textEn: "😅 Sometimes unintentionally", points: 2 },
          { text: "😔 O tempo todo", textEn: "😔 All the time", points: 1 },
        ],
      },
      {
        text: "Consegue dizer NÃO sem culpa? 🛑",
        textEn: "Can you say NO without guilt? 🛑",
        options: [
          { text: "✅ Sim, com tranquilidade", textEn: "✅ Yes, comfortably", points: 3 },
          { text: "😬 Com dificuldade", textEn: "😬 With difficulty", points: 2 },
          { text: "😢 Não, sempre cedo", textEn: "😢 No, I always give in", points: 1 },
        ],
      },
      {
        text: "O que faz quando está ansioso(a)? 😰",
        textEn: "What do you do when you're anxious? 😰",
        options: [
          { text: "🧘 Medito ou exercito", textEn: "🧘 I meditate or exercise", points: 3 },
          { text: "📱 Distraio com redes", textEn: "📱 I distract with social media", points: 2 },
          { text: "😫 Fico paralisado(a)", textEn: "😫 I freeze up", points: 1 },
        ],
      },
      {
        text: "Você aceita críticas construtivas? 📝",
        textEn: "Do you accept constructive criticism? 📝",
        options: [
          { text: "👍 Sim, uso pra crescer", textEn: "👍 Yes, I use it to grow", points: 3 },
          { text: "😕 Aceito mas dói", textEn: "😕 I accept but it hurts", points: 2 },
          { text: "😤 Levo pro pessoal", textEn: "😤 I take it personally", points: 1 },
        ],
      },
    ],
    results: [
      {
        minScore: 25,
        title: "Mente de Aço 🏆",
        titleEn: "Steel Mind 🏆",
        description: "Sua inteligência emocional é impressionante! Poucos chegam a esse nível.",
        descriptionEn: "Your emotional intelligence is impressive! Few reach this level.",
        emoji: "🏆",
        detailedDescription: "Você desenvolveu uma resiliência emocional rara. Consegue manter a calma em situações extremas, perdoa com facilidade e não se deixa abalar por opiniões alheias.",
        detailedDescriptionEn: "You've developed a rare emotional resilience. You can stay calm in extreme situations, forgive easily, and don't let others' opinions shake you.",
      },
      {
        minScore: 20,
        title: "Mente Forte 💪",
        titleEn: "Strong Mind 💪",
        description: "Você é emocionalmente forte, com pequenos pontos a melhorar.",
        descriptionEn: "You're emotionally strong, with small areas to improve.",
        emoji: "💪",
        detailedDescription: "Sua mente é resistente e você lida bem com a maioria dos desafios. Tem momentos de fraqueza, como todo ser humano, mas se recupera rápido.",
        detailedDescriptionEn: "Your mind is resilient and you handle most challenges well. You have moments of weakness, like everyone, but recover quickly.",
      },
      {
        minScore: 15,
        title: "Em Desenvolvimento 🌱",
        titleEn: "Growing 🌱",
        description: "Sua mente está crescendo. Tem potencial, mas precisa de treino.",
        descriptionEn: "Your mind is growing. You have potential, but need training.",
        emoji: "🌱",
        detailedDescription: "Você está numa fase de crescimento emocional. Ainda se deixa afetar por muitas coisas, mas já tem consciência disso — e isso é metade do caminho.",
        detailedDescriptionEn: "You're in a phase of emotional growth. You still let many things affect you, but you're aware of it — and that's half the battle.",
      },
      {
        minScore: 0,
        title: "Mente Sensível 🌊",
        titleEn: "Sensitive Mind 🌊",
        description: "Suas emoções dominam você. Hora de fortalecer sua mente!",
        descriptionEn: "Your emotions dominate you. Time to strengthen your mind!",
        emoji: "🌊",
        detailedDescription: "Você sente tudo intensamente e isso é tanto uma bênção quanto um desafio. Suas emoções frequentemente tomam o controle das suas decisões.",
        detailedDescriptionEn: "You feel everything intensely and that's both a blessing and a challenge. Your emotions often take control of your decisions.",
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
        textEn: "Do people usually look at you on the street? 👀",
        options: [
          { text: "😏 Sempre, estou acostumado(a)", textEn: "😏 Always, I'm used to it", points: 3 },
          { text: "🤔 Às vezes percebo", textEn: "🤔 Sometimes I notice", points: 2 },
          { text: "😅 Raramente", textEn: "😅 Rarely", points: 1 },
        ],
      },
      {
        text: "Como é seu nível de confiança? 💎",
        textEn: "What's your confidence level? 💎",
        options: [
          { text: "👑 Alto demais", textEn: "👑 Very high", points: 3 },
          { text: "😊 Bom, na maioria dos dias", textEn: "😊 Good, most days", points: 2 },
          { text: "😔 Bem baixo", textEn: "😔 Pretty low", points: 1 },
        ],
      },
      {
        text: "Você cuida da sua aparência? 💅",
        textEn: "Do you take care of your appearance? 💅",
        options: [
          { text: "✨ Sempre impecável", textEn: "✨ Always impeccable", points: 3 },
          { text: "😊 Cuido sim, o básico", textEn: "😊 Yes, the basics", points: 2 },
          { text: "🤷 Nem tanto", textEn: "🤷 Not really", points: 1 },
        ],
      },
      {
        text: "Já fizeram elogios inesperados sobre você? 😍",
        textEn: "Have you received unexpected compliments? 😍",
        options: [
          { text: "🥰 Sempre recebo", textEn: "🥰 I always get them", points: 3 },
          { text: "😊 De vez em quando", textEn: "😊 Once in a while", points: 2 },
          { text: "😕 Quase nunca", textEn: "😕 Almost never", points: 1 },
        ],
      },
      {
        text: "Qual seu tipo de energia? ⚡",
        textEn: "What's your energy type? ⚡",
        options: [
          { text: "🔥 Magnética e intensa", textEn: "🔥 Magnetic and intense", points: 3 },
          { text: "😄 Leve e divertida", textEn: "😄 Light and fun", points: 2 },
          { text: "😶 Discreta e reservada", textEn: "😶 Discreet and reserved", points: 1 },
        ],
      },
      {
        text: "Você faz as pessoas rirem? 😂",
        textEn: "Do you make people laugh? 😂",
        options: [
          { text: "🤣 Sou o(a) comediante do grupo", textEn: "🤣 I'm the group comedian", points: 3 },
          { text: "😊 Consigo arrancar sorrisos", textEn: "😊 I can get smiles", points: 2 },
          { text: "😐 Não sou muito engraçado(a)", textEn: "😐 I'm not very funny", points: 1 },
        ],
      },
      {
        text: "Como você se sente em fotos? 📸",
        textEn: "How do you feel in photos? 📸",
        options: [
          { text: "😍 Fico ótimo(a)!", textEn: "😍 I look great!", points: 3 },
          { text: "🤷 Depende do ângulo", textEn: "🤷 Depends on the angle", points: 2 },
          { text: "😩 Odeio tirar foto", textEn: "😩 I hate taking photos", points: 1 },
        ],
      },
      {
        text: "As pessoas ficam nervosas perto de você? 😳",
        textEn: "Do people get nervous around you? 😳",
        options: [
          { text: "😏 Sempre, intimido", textEn: "😏 Always, I intimidate", points: 3 },
          { text: "🤔 Alguns sim", textEn: "🤔 Some do", points: 2 },
          { text: "😅 Ninguém liga pra mim", textEn: "😅 Nobody cares about me", points: 1 },
        ],
      },
      {
        text: "Seu estilo é único? 👗",
        textEn: "Is your style unique? 👗",
        options: [
          { text: "🔥 Completamente original", textEn: "🔥 Completely original", points: 3 },
          { text: "👍 Sigo tendências com estilo", textEn: "👍 I follow trends with style", points: 2 },
          { text: "👕 Uso o que é confortável", textEn: "👕 I wear what's comfortable", points: 1 },
        ],
      },
      {
        text: "Já disseram que você é inesquecível? 💫",
        textEn: "Have people said you're unforgettable? 💫",
        options: [
          { text: "😏 Várias vezes", textEn: "😏 Many times", points: 3 },
          { text: "🥰 Uma vez ou outra", textEn: "🥰 Once or twice", points: 2 },
          { text: "😕 Nunca ouvi isso", textEn: "😕 Never heard that", points: 1 },
        ],
      },
    ],
    results: [
      {
        minScore: 25,
        title: "Irresistível 🔥",
        titleEn: "Irresistible 🔥",
        description: "Você é magnético(a)! As pessoas não conseguem tirar os olhos de você.",
        descriptionEn: "You're magnetic! People can't take their eyes off you.",
        emoji: "🔥",
        detailedDescription: "Sua atração vai muito além do físico. Você tem uma energia que hipnotiza, um carisma que conquista e uma presença que marca. Use esse poder com responsabilidade!",
        detailedDescriptionEn: "Your attraction goes far beyond the physical. You have an energy that hypnotizes, a charisma that conquers, and a presence that leaves a mark. Use this power responsibly!",
      },
      {
        minScore: 20,
        title: "Muito Atraente 😍",
        titleEn: "Very Attractive 😍",
        description: "Você chama atenção por onde passa. Tem algo especial!",
        descriptionEn: "You turn heads wherever you go. There's something special about you!",
        emoji: "😍",
        detailedDescription: "Você tem um charme natural que atrai as pessoas. Sua combinação de aparência, personalidade e energia te torna muito desejável.",
        detailedDescriptionEn: "You have a natural charm that attracts people. Your combination of appearance, personality, and energy makes you very desirable.",
      },
      {
        minScore: 15,
        title: "Charme Discreto ✨",
        titleEn: "Subtle Charm ✨",
        description: "Sua beleza é sutil mas poderosa. Conquista aos poucos.",
        descriptionEn: "Your beauty is subtle but powerful. You conquer gradually.",
        emoji: "✨",
        detailedDescription: "Você não é do tipo que chama atenção de longe, mas quando alguém te conhece de perto, se encanta completamente.",
        detailedDescriptionEn: "You're not the type that catches attention from afar, but when someone gets to know you up close, they're completely enchanted.",
      },
      {
        minScore: 0,
        title: "Diamante Bruto 💎",
        titleEn: "Rough Diamond 💎",
        description: "Você tem potencial escondido. Hora de brilhar!",
        descriptionEn: "You have hidden potential. Time to shine!",
        emoji: "💎",
        detailedDescription: "Sua atração está guardada dentro de você esperando pra sair. Trabalhar sua autoconfiança pode revelar uma versão sua que ninguém esperava.",
        detailedDescriptionEn: "Your attraction is stored inside you waiting to come out. Working on your self-confidence can reveal a version of you nobody expected.",
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
        textEn: "First impression you make? 🤝",
        options: [
          { text: "😎 Confiante e forte", textEn: "😎 Confident and strong", points: 3 },
          { text: "😊 Simpático(a) e amigável", textEn: "😊 Friendly and approachable", points: 2 },
          { text: "😶 Tímido(a) e reservado(a)", textEn: "😶 Shy and reserved", points: 1 },
        ],
      },
      {
        text: "Em grupo, qual seu papel? 👥",
        textEn: "In a group, what's your role? 👥",
        options: [
          { text: "👑 O líder natural", textEn: "👑 The natural leader", points: 3 },
          { text: "😄 O que anima tudo", textEn: "😄 The one who energizes everyone", points: 2 },
          { text: "👂 O que ouve mais que fala", textEn: "👂 The one who listens more than talks", points: 1 },
        ],
      },
      {
        text: "Seus amigos te descrevem como... 💬",
        textEn: "Your friends describe you as... 💬",
        options: [
          { text: "🔥 Intenso(a) e marcante", textEn: "🔥 Intense and memorable", points: 3 },
          { text: "🤗 Carinhoso(a) e leal", textEn: "🤗 Caring and loyal", points: 2 },
          { text: "🧊 Misterioso(a) e distante", textEn: "🧊 Mysterious and distant", points: 1 },
        ],
      },
      {
        text: "Como você se comporta em festas? 🎉",
        textEn: "How do you behave at parties? 🎉",
        options: [
          { text: "💃 Sou o centro das atenções", textEn: "💃 I'm the center of attention", points: 3 },
          { text: "😊 Converso com todo mundo", textEn: "😊 I talk to everyone", points: 2 },
          { text: "🤫 Fico no canto com poucas pessoas", textEn: "🤫 I stay in a corner with few people", points: 1 },
        ],
      },
      {
        text: "As pessoas pedem seus conselhos? 💡",
        textEn: "Do people ask for your advice? 💡",
        options: [
          { text: "🧠 Sempre, sou referência", textEn: "🧠 Always, I'm a reference", points: 3 },
          { text: "🤝 Às vezes sim", textEn: "🤝 Sometimes yes", points: 2 },
          { text: "🤷 Nunca me procuram", textEn: "🤷 They never come to me", points: 1 },
        ],
      },
      {
        text: "Você fala o que pensa? 🗣️",
        textEn: "Do you speak your mind? 🗣️",
        options: [
          { text: "💣 Sempre, sem filtro", textEn: "💣 Always, no filter", points: 3 },
          { text: "🤔 Depende da situação", textEn: "🤔 Depends on the situation", points: 2 },
          { text: "🤐 Guardo pra mim", textEn: "🤐 I keep it to myself", points: 1 },
        ],
      },
      {
        text: "Já te chamaram de intimidador(a)? 😈",
        textEn: "Have you been called intimidating? 😈",
        options: [
          { text: "😏 Sempre", textEn: "😏 Always", points: 3 },
          { text: "🤔 Uma vez ou outra", textEn: "🤔 Once or twice", points: 2 },
          { text: "😅 Nunca, sou inofensivo(a)", textEn: "😅 Never, I'm harmless", points: 1 },
        ],
      },
      {
        text: "Quando você entra num ambiente, o que acontece? 🚪",
        textEn: "When you walk into a room, what happens? 🚪",
        options: [
          { text: "👀 Todo mundo olha", textEn: "👀 Everyone looks", points: 3 },
          { text: "😊 Alguns cumprimentam", textEn: "😊 Some greet me", points: 2 },
          { text: "😶 Ninguém percebe", textEn: "😶 Nobody notices", points: 1 },
        ],
      },
      {
        text: "Quantos amigos verdadeiros você tem? 💎",
        textEn: "How many true friends do you have? 💎",
        options: [
          { text: "🤚 Poucos mas leais", textEn: "🤚 Few but loyal", points: 2 },
          { text: "👥 Muitos!", textEn: "👥 Many!", points: 3 },
          { text: "😔 Quase nenhum", textEn: "😔 Almost none", points: 1 },
        ],
      },
      {
        text: "As pessoas sentem falta de você quando não está? 🥺",
        textEn: "Do people miss you when you're not around? 🥺",
        options: [
          { text: "😏 Com certeza, faço falta", textEn: "😏 Definitely, they miss me", points: 3 },
          { text: "🤷 Acho que sim", textEn: "🤷 I think so", points: 2 },
          { text: "😕 Duvido que percebam", textEn: "😕 I doubt they notice", points: 1 },
        ],
      },
    ],
    results: [
      {
        minScore: 25,
        title: "Presença Magnética 👑",
        titleEn: "Magnetic Presence 👑",
        description: "Você é impossível de ignorar. As pessoas te admiram e respeitam!",
        descriptionEn: "You're impossible to ignore. People admire and respect you!",
        emoji: "👑",
        detailedDescription: "Você tem uma presença que domina qualquer ambiente. As pessoas te veem como alguém forte, confiante e inspirador. Poucos têm esse dom natural.",
        detailedDescriptionEn: "You have a presence that dominates any room. People see you as someone strong, confident, and inspiring. Few have this natural gift.",
      },
      {
        minScore: 20,
        title: "Pessoa Cativante 🌟",
        titleEn: "Captivating Person 🌟",
        description: "As pessoas gostam de estar perto de você. Você transmite algo bom!",
        descriptionEn: "People like being around you. You transmit something good!",
        emoji: "🌟",
        detailedDescription: "Você é visto(a) como alguém agradável, confiável e carismático. As pessoas se sentem bem na sua presença e confiam em você.",
        detailedDescriptionEn: "You're seen as someone pleasant, reliable, and charismatic. People feel good in your presence and trust you.",
      },
      {
        minScore: 15,
        title: "Enigma Ambulante 🌙",
        titleEn: "Walking Enigma 🌙",
        description: "As pessoas não te entendem completamente — e isso fascina.",
        descriptionEn: "People don't fully understand you — and that fascinates them.",
        emoji: "🌙",
        detailedDescription: "Você passa uma imagem misteriosa e intrigante. As pessoas querem te conhecer melhor mas sentem que há muito mais por trás da superfície.",
        detailedDescriptionEn: "You project a mysterious and intriguing image. People want to know you better but feel there's much more beneath the surface.",
      },
      {
        minScore: 0,
        title: "Sombra Silenciosa 🌫️",
        titleEn: "Silent Shadow 🌫️",
        description: "Você passa despercebido(a), mas isso pode mudar!",
        descriptionEn: "You go unnoticed, but that can change!",
        emoji: "🌫️",
        detailedDescription: "As pessoas muitas vezes não te notam. Isso não significa que você não tem valor. Trabalhar sua presença e comunicação pode revelar ao mundo o quão especial você é.",
        detailedDescriptionEn: "People often don't notice you. That doesn't mean you have no value. Working on your presence and communication can reveal to the world how special you are.",
      },
    ],
  },
];
