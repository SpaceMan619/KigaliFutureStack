export type QuizStep = 
  | { type: 'question'; id: number; question: QuizQuestion }
  | { type: 'email'; id: number }
  | { type: 'results'; id: number };

export interface QuizQuestion {
  id: number;
  question: string;
  questionRw: string;
  options: QuizOption[];
}

export interface QuizOption {
  id: string;
  label: string;
  labelRw: string;
  scores: Record<string, number>;
  tags?: string[];
}

export interface Archetype {
  id: string;
  name: string;
  nameRw: string;
  description: string;
  descriptionRw: string;
  strengths: string[];
  strengthsRw: string[];
  challenges: string[];
  challengesRw: string[];
  bestSectors: string[];
  icon: string;
}

export interface QuizResult {
  archetype: Archetype;
  matchedSectors: {
    id: string;
    name: string;
    nameRw: string;
    matchScore: number;
    why: string;
    whyRw: string;
  }[];
  answers: Record<number, string>;
  email?: string;
}

export type QuizState = 
  | { status: 'intro' }
  | { status: 'in-progress'; step: number; answers: Record<number, string> }
  | { status: 'submitting'; answers: Record<number, string>; email: string }
  | { status: 'complete'; result: QuizResult };
