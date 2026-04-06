import { useEffect, useState } from "react";
import { Language, t } from "@/data/i18n";

interface InterstitialAdProps {
  onComplete: () => void;
  lang: Language;
}

const InterstitialAd = ({ onComplete, lang }: InterstitialAdProps) => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown <= 0) { onComplete(); return; }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, onComplete]);

  return (
    <div className="min-h-screen bg-quiz-bg flex items-center justify-center px-4 animate-fade-in">
      <div className="text-center max-w-md">
        <div className="bg-quiz-card border border-quiz-border rounded-2xl p-8">
          <p className="text-quiz-muted text-sm mb-4">{t(lang, "ad")}</p>
          <div className="w-full h-48 bg-quiz-card-hover rounded-xl flex items-center justify-center mb-6 border border-quiz-border">
            <span className="text-quiz-muted text-sm">{t(lang, "adSpace")}</span>
          </div>
          <p className="text-quiz-text text-lg font-bold mb-2">{t(lang, "preparingResult")}</p>
          <p className="text-quiz-accent text-3xl font-bold animate-pulse">{countdown}</p>
          <p className="text-quiz-muted text-xs mt-2">{t(lang, "continuingAuto")}</p>
        </div>
      </div>
    </div>
  );
};

export default InterstitialAd;
