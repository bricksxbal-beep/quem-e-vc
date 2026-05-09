import { useState, useCallback, useMemo } from "react";
import { quizzes } from "@/data/quizzes";
import { Language, detectLanguage } from "@/data/i18n";
import { addToHistory } from "@/data/history";
import QuizHome from "@/components/QuizHome";
import QuizQuestion from "@/components/QuizQuestion";
import QuizResult from "@/components/QuizResult";
import InterstitialAd from "@/components/InterstitialAd";
import RewardAd from "@/components/RewardAd";
import BannerAd from "@/components/BannerAd";
import AppMenu from "@/components/AppMenu";
import WelcomeScreen from "@/components/WelcomeScreen";

type Screen = "welcome" | "home" | "quiz" | "interstitial" | "result";

const Index = () => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("quiz_lang");
    return saved === "en" || saved === "pt" ? saved : detectLanguage();
  });
  const [screen, setScreen] = useState<Screen>("welcome");
  const [currentQuizId, setCurrentQuizId] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [quizCount, setQuizCount] = useState(0);

  const currentQuiz = quizzes.find((q) => q.id === currentQuizId);

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("quiz_lang", newLang);
  };

  const handleSelectQuiz = (quizId: string) => {
    setCurrentQuizId(quizId);
    setQuestionIndex(0);
    setScore(0);
    setScreen("quiz");
  };

  const handleAnswer = (points: number) => {
    const newScore = score + points;
    setScore(newScore);

    if (currentQuiz && questionIndex + 1 >= currentQuiz.questions.length) {
      const newCount = quizCount + 1;
      setQuizCount(newCount);

      // Save to history
      const sorted = [...currentQuiz.results].sort((a, b) => b.minScore - a.minScore);
      const result = sorted.find((r) => newScore >= r.minScore) || sorted[sorted.length - 1];
      addToHistory({
        quizId: currentQuiz.id,
        quizEmoji: currentQuiz.emoji,
        resultTitle: lang === "en" ? result.titleEn : result.title,
        resultEmoji: result.emoji,
        score: newScore,
        date: new Date().toLocaleDateString(lang === "en" ? "en-US" : "pt-BR"),
      });

      if (newCount % 2 === 0) {
        setScreen("interstitial");
      } else {
        setScreen("result");
      }
    } else {
      setQuestionIndex((i) => i + 1);
    }
  };

  const handleInterstitialComplete = useCallback(() => {
    setScreen("result");
  }, []);

  const handleRetry = () => {
    setQuestionIndex(0);
    setScore(0);
    setScreen("quiz");
  };

  const handleHome = () => {
    setScreen("home");
    setCurrentQuizId("");
    setQuestionIndex(0);
    setScore(0);
  };

  const handleBack = () => {
    if (questionIndex > 0) setQuestionIndex((i) => i - 1);
    else handleHome();
  };

  return (
    <div className="pb-14">
      <AppMenu lang={lang} onChangeLang={handleLangChange} />

      {screen === "welcome" && <WelcomeScreen onStart={() => setScreen("home")} lang={lang} />}

      {screen === "home" && <QuizHome onSelectQuiz={handleSelectQuiz} lang={lang} />}

      {screen === "quiz" && currentQuiz && (
        <QuizQuestion quiz={currentQuiz} questionIndex={questionIndex} onAnswer={handleAnswer} onBack={handleBack} lang={lang} />
      )}

      {screen === "interstitial" && <InterstitialAd onComplete={handleInterstitialComplete} lang={lang} />}

      {screen === "result" && currentQuiz && (
        <QuizResult quiz={currentQuiz} score={score} onRetry={handleRetry} onHome={handleHome} onShowReward={() => setShowReward(true)} lang={lang} />
      )}

      {showReward && <RewardAd onComplete={() => setShowReward(false)} lang={lang} />}

      <BannerAd lang={lang} />
    </div>
  );
};

export default Index;
