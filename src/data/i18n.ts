export type Language = "pt" | "en";

export function detectLanguage(): Language {
  const lang = navigator.language || (navigator as any).userLanguage || "pt";
  return lang.startsWith("en") ? "en" : "pt";
}

export const translations = {
  pt: {
    appTitle: "Quem é você de verdade? 🔮",
    appSubtitle: "Descubra verdades sobre você que ninguém conta",
    totalTests: "+2 milhões de testes realizados 🚀",
    welcomeTitle: "Descubra quem você é de verdade ✨",
    welcomeCta: "Comece agora — é rápido e revelador",
    startNow: "🚀 Começar agora",
    benefit1: "🎯 Respostas em segundos",
    benefit2: "🔒 100% anônimo",
    benefit3: "🧠 Baseado em psicologia",
    benefit4: "🔁 Novos testes toda semana",
    question: "Pergunta",
    back: "← Voltar",
    seeFullResult: "🔍 Ver resultado completo",
    retryTest: "🔄 Refazer teste",
    chooseAnother: "🏠 Escolher outro teste",
    onlyPercent: "Apenas {n}% das pessoas têm esse resultado 😳",
    fewPeopleDare: "Poucas pessoas têm coragem de ver o resultado completo 🔥",
    boldOption: "{n}% das pessoas escolhem a opção mais ousada 😏",
    fullResult: "🔓 RESULTADO COMPLETO",
    ad: "Anúncio",
    adSpace: "Espaço publicitário",
    preparingResult: "Preparando seu resultado... ✨",
    continuingAuto: "Continuando automaticamente",
    rewardAd: "Anúncio recompensado",
    waitToUnlock: "Aguarde {n}s para desbloquear",
    seeFullResultBtn: "✅ Ver resultado completo",
    bannerText: "Anúncio • Espaço publicitário",
    menu: "Menu",
    language: "Idioma",
    history: "📋 Histórico",
    clearHistory: "🗑️ Apagar histórico",
    clearHistoryConfirm: "Tem certeza que deseja apagar todo o histórico?",
    yes: "Sim",
    no: "Não",
    noHistory: "Nenhum teste realizado ainda",
    score: "Pontuação",
    close: "Fechar",
    portuguese: "Português",
    english: "English",
    quizDescriptions: {
      amor: { title: "Como você ama?", description: "Descubra seu estilo de amar" },
      ciumes: { title: "Nível de ciúmes", description: "Qual seu nível de ciúmes real?" },
      "lado-oculto": { title: "Seu lado oculto", description: "O que você esconde de todo mundo?" },
      mente: { title: "Sua mente é forte?", description: "Teste sua inteligência emocional" },
      atracao: { title: "Você é atraente?", description: "Descubra seu nível de atração" },
      percepcao: { title: "Como as pessoas te veem?", description: "A verdade sobre a imagem que você passa" },
    } as Record<string, { title: string; description: string }>,
  },
  en: {
    appTitle: "Who are you really? 🔮",
    appSubtitle: "Discover truths about yourself that nobody tells you",
    totalTests: "+2 million tests taken 🚀",
    welcomeTitle: "Discover who you really are ✨",
    welcomeCta: "Start now — it's fast and revealing",
    startNow: "🚀 Start now",
    benefit1: "🎯 Answers in seconds",
    benefit2: "🔒 100% anonymous",
    benefit3: "🧠 Psychology-based",
    benefit4: "🔁 New tests every week",
    question: "Question",
    back: "← Back",
    seeFullResult: "🔍 See full result",
    retryTest: "🔄 Retake test",
    chooseAnother: "🏠 Choose another test",
    onlyPercent: "Only {n}% of people get this result 😳",
    fewPeopleDare: "Few people have the courage to see the full result 🔥",
    boldOption: "{n}% of people choose the boldest option 😏",
    fullResult: "🔓 FULL RESULT",
    ad: "Ad",
    adSpace: "Ad space",
    preparingResult: "Preparing your result... ✨",
    continuingAuto: "Continuing automatically",
    rewardAd: "Rewarded ad",
    waitToUnlock: "Wait {n}s to unlock",
    seeFullResultBtn: "✅ See full result",
    bannerText: "Ad • Ad space",
    menu: "Menu",
    language: "Language",
    history: "📋 History",
    clearHistory: "🗑️ Clear history",
    clearHistoryConfirm: "Are you sure you want to clear all history?",
    yes: "Yes",
    no: "No",
    noHistory: "No tests taken yet",
    score: "Score",
    close: "Close",
    portuguese: "Português",
    english: "English",
    quizDescriptions: {
      amor: { title: "How do you love?", description: "Discover your love style" },
      ciumes: { title: "Jealousy level", description: "What's your real jealousy level?" },
      "lado-oculto": { title: "Your hidden side", description: "What do you hide from everyone?" },
      mente: { title: "Is your mind strong?", description: "Test your emotional intelligence" },
      atracao: { title: "Are you attractive?", description: "Discover your attraction level" },
      percepcao: { title: "How do people see you?", description: "The truth about the image you project" },
    } as Record<string, { title: string; description: string }>,
  },
} as const;

export type Translations = typeof translations.pt;

export function t(lang: Language, key: keyof Omit<Translations, "quizDescriptions">, replacements?: Record<string, string | number>): string {
  let text = translations[lang][key] as string;
  if (replacements) {
    Object.entries(replacements).forEach(([k, v]) => {
      text = text.replace(`{${k}}`, String(v));
    });
  }
  return text;
}

export function getQuizMeta(lang: Language, quizId: string) {
  return translations[lang].quizDescriptions[quizId] || { title: quizId, description: "" };
}
