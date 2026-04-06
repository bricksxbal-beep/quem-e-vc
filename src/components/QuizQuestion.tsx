import { useState, useMemo } from "react";
import { Quiz } from "@/data/quizzes";
import { Language, t, getQuizMeta } from "@/data/i18n";
import { Progress } from "@/components/ui/progress";

interface QuizQuestionProps {
  quiz: Quiz;
  questionIndex: number;
  onAnswer: (points: number) => void;
  onBack: () => void;
  lang: Language;
}

const QuizQuestion = ({ quiz, questionIndex, onAnswer, onBack, lang }: QuizQuestionProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const question = quiz.questions[questionIndex];
  const progress = ((questionIndex + 1) / quiz.questions.length) * 100;
  const meta = getQuizMeta(lang, quiz.id);
  const fakeStat = useMemo(() => Math.floor(Math.random() * 40 + 35), [questionIndex]);

  const handleSelect = (points: number, idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setTimeout(() => {
      onAnswer(points);
      setSelected(null);
    }, 400);
  };

  return (
    <div key={questionIndex} className="min-h-screen bg-quiz-bg px-4 py-6 animate-fade-in">
      <div className="max-w-md mx-auto">
        <button onClick={onBack} className="text-quiz-muted text-sm mb-4 hover:text-quiz-text transition-colors">
          {t(lang, "back")}
        </button>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{quiz.emoji}</span>
          <span className="text-quiz-muted text-sm font-medium">{meta.title}</span>
        </div>

        <div className="mb-1 flex justify-between text-xs text-quiz-muted">
          <span>{t(lang, "question")} {questionIndex + 1}/{quiz.questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2 mb-6 bg-quiz-card [&>div]:bg-quiz-accent" />

        <h2 className="text-xl font-bold text-quiz-text mb-6 leading-tight">
          {lang === "en" ? question.textEn : question.text}
        </h2>

        <div className="space-y-3">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(option.points, idx)}
              className={`w-full text-left rounded-2xl p-4 border transition-all duration-200 text-base font-medium ${
                selected === idx
                  ? "bg-quiz-accent/20 border-quiz-accent text-quiz-text scale-[0.97]"
                  : "bg-quiz-card border-quiz-border text-quiz-text hover:bg-quiz-card-hover hover:border-quiz-accent/50"
              }`}
            >
              {lang === "en" ? option.textEn : option.text}
            </button>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-quiz-muted text-xs">
            {t(lang, "boldOption", { n: fakeStat })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
