import { useEffect, useState } from "react";

interface RewardAdProps {
  onComplete: () => void;
}

const RewardAd = ({ onComplete }: RewardAdProps) => {
  const [countdown, setCountdown] = useState(5);
  const [canClose, setCanClose] = useState(false);

  useEffect(() => {
    if (countdown <= 0) {
      setCanClose(true);
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4 animate-fade-in">
      <div className="bg-quiz-card border border-quiz-border rounded-2xl p-6 max-w-sm w-full text-center">
        <p className="text-quiz-muted text-sm mb-4">Anúncio recompensado</p>
        <div className="w-full h-40 bg-quiz-card-hover rounded-xl flex items-center justify-center mb-4 border border-quiz-border">
          <span className="text-quiz-muted text-sm">Espaço publicitário</span>
        </div>

        {canClose ? (
          <button
            onClick={onComplete}
            className="w-full bg-gradient-to-r from-quiz-accent to-quiz-accent2 text-quiz-bg font-bold rounded-2xl p-4 transition-all hover-scale"
          >
            ✅ Ver resultado completo
          </button>
        ) : (
          <p className="text-quiz-muted text-sm">
            Aguarde <span className="text-quiz-accent font-bold text-lg">{countdown}s</span> para desbloquear
          </p>
        )}
      </div>
    </div>
  );
};

export default RewardAd;
