

# "Quem é você de verdade?" - Personality Quiz App

## Overview
Build a dark-themed, mobile-first personality quiz app with 6 complete tests (10 questions each), scoring system, monetization (simulated ads), and engaging UX with animations.

## Architecture

Single-page app with state-driven views: Home → Quiz → Interstitial → Result

### Files to Create/Modify

1. **`src/data/quizzes.ts`** — All 6 quizzes with 10 questions each, 4 result tiers per quiz (~60 questions, ~24 results total)

2. **`src/components/QuizHome.tsx`** — Home screen with quiz list cards (dark theme, emojis, animated entry)

3. **`src/components/QuizQuestion.tsx`** — Question screen with progress bar, options, fade/slide transitions

4. **`src/components/QuizResult.tsx`** — Result screen with basic/detailed result, fake stats, reward button, retry/home buttons

5. **`src/components/InterstitialAd.tsx`** — Simulated 3-second ad countdown before results

6. **`src/components/RewardAd.tsx`** — Simulated reward ad modal for detailed results

7. **`src/components/BannerAd.tsx`** — Fixed bottom banner

8. **`src/pages/Index.tsx`** — Main controller managing app state/flow

9. **`src/index.css`** — Add dark theme colors, custom animations (fade-in, slide-up)

10. **`tailwind.config.ts`** — Add animation keyframes

## Quiz Data Structure

```typescript
interface Quiz {
  id: string;
  title: string;
  emoji: string;
  questions: {
    text: string;
    options: { text: string; points: number }[];
  }[];
  results: {
    minScore: number;
    title: string;
    description: string;
    emoji: string;
    detailedDescription: string; // unlocked via reward
  }[];
}
```

## Flow

1. **Home** → User picks a quiz
2. **Questions** → Progress bar (X/10), 2-3 options per question, points accumulate, slide transitions
3. **Interstitial** → "Anúncio... continuando em 3s" countdown
4. **Result** → Basic result shown; "🔍 Ver resultado completo" button triggers reward ad → shows detailed result
5. **Loop** → "Refazer teste" / "Escolher outro teste" buttons

## 6 Complete Quizzes (Portuguese)

1. ❤️ Como você ama? — attachment styles, romantic behavior
2. 💔 Nível de ciúmes — jealousy levels
3. 😈 Seu lado oculto — hidden personality traits
4. 🧠 Sua mente é forte? — emotional intelligence/resilience
5. 🔥 Você é atraente? — charisma/attraction style
6. 👀 Como as pessoas te veem? — external perception

## Design Details

- Background: `#121212`, cards: `#1E1E1E`, accent: gradient purples/pinks
- Large rounded buttons with emoji prefixes
- Progress bar with smooth width transition
- Fake engagement stats: "Apenas X% das pessoas têm esse resultado" (random 8-18%)
- Banner ad fixed at bottom (simulated gray bar)

## Animations

- Questions: fade-in + slide-up on enter
- Progress bar: CSS transition on width
- Result: scale-in animation
- Interstitial: countdown with pulse effect

