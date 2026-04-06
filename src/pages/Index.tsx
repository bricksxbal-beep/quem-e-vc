import { useState, useCallback } from "react";
import { quizzes } from "@/data/quizzes";
import QuizHome from "@/components/QuizHome";
import QuizQuestion from "@/components/QuizQuestion";
import QuizResult from "@/components/QuizResult";
import InterstitialAd from "@/components/InterstitialAd";
import RewardAd from "@/components/RewardAd";
import BannerAd from "@/components/BannerAd";

type Screen = "home" | "quiz" | "interstitial" | "result";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("home");
  const [currentQuizId, setCurrentQuizId] = useState<string>("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [quizCount, setQuizCount] = useState(0);

  const currentQuiz = quizzes.find((q) => q.id === currentQuizId);

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
    if (questionIndex > 0) {
      setQuestionIndex((i) => i - 1);
    } else {
      handleHome();
    }
  };

  return (
    <div className="pb-14">
      {screen === "home" && <QuizHome onSelectQuiz={handleSelectQuiz} />}

      {screen === "quiz" && currentQuiz && (
        <QuizQuestion
          quiz={currentQuiz}
          questionIndex={questionIndex}
          onAnswer={handleAnswer}
          onBack={handleBack}
        />
      )}

      {screen === "interstitial" && (
        <InterstitialAd onComplete={handleInterstitialComplete} />
      )}

      {screen === "result" && currentQuiz && (
        <QuizResult
          quiz={currentQuiz}
          score={score}
          onRetry={handleRetry}
          onHome={handleHome}
          onShowReward={() => setShowReward(true)}
        />
      )}

      {showReward && (
        <RewardAd onComplete={() => setShowReward(false)} />
      )}

      <BannerAd />
    </div>
  );
};

export default Index;
