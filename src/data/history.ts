export interface HistoryEntry {
  quizId: string;
  quizEmoji: string;
  resultTitle: string;
  resultEmoji: string;
  score: number;
  date: string;
}

const HISTORY_KEY = "quiz_history";

export function getHistory(): HistoryEntry[] {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
  } catch {
    return [];
  }
}

export function addToHistory(entry: HistoryEntry) {
  const history = getHistory();
  history.unshift(entry);
  if (history.length > 50) history.length = 50;
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

export function clearHistory() {
  localStorage.removeItem(HISTORY_KEY);
}
