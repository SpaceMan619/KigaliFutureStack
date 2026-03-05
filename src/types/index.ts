export type Locale = 'en' | 'rw';
export type AudienceMode = 'investor_partner' | 'founder_builder';

// Re-export quiz types
export * from './quiz';

export interface NST2Metric {
  value: number;
  unit: string;
  baseline?: number;
  target2026?: number;
  target2029?: number;
  source: string;
  page?: number;
  confidence?: 'high' | 'medium' | 'low';
  notes?: string;
}

export interface NST2Pillar {
  id: string;
  name: string;
  nameRw: string;
  color: string;
  icon: string;
  description: string;
  descriptionRw: string;
  priorities: NST2Priority[];
}

export interface NST2Priority {
  id: string;
  name: string;
  nameRw: string;
  target: string;
  targetRw: string;
}

export interface Opportunity {
  id: string;
  name: string;
  nameRw: string;
  sector: string;
  pillar: string;
  readiness: 'low' | 'medium' | 'high';
  impact: 'low' | 'medium' | 'high';
  horizon: 'immediate' | 'short' | 'medium' | 'long';
  capitalIntensity: 'low' | 'medium' | 'high';
  marketAdoption: 'low' | 'medium' | 'high';
  description: string;
  descriptionRw: string;
  businessModels: string[];
  riskLevel: 'low' | 'medium' | 'high';
  returnPotential: 'low' | 'medium' | 'high' | 'very-high';
  investmentRange: string;
  keyMetrics: {
    tam: string;
    growthRate: string;
    jobsPotential: string;
  };
  nst2Alignment: string[];
  skillsNeeded: string[];
}

export interface ChartDataPoint {
  name: string;
  value: number;
  baseline?: number;
  target?: number;
  color?: string;
}

export interface SourceCitation {
  source: string;
  page?: number;
  year?: number;
  url?: string;
}

export interface TranslationDictionary {
  [key: string]: string | TranslationDictionary;
}

export interface WaitlistSubmission {
  email: string;
  name?: string;
  entryPath: string;
  audienceMode: AudienceMode;
  selectedSector?: string;
  referrerPage?: string;
  timestamp: string;
}

export interface ChartThemeToken {
  primary: string;
  secondary: string;
  tertiary: string;
  background: string;
  grid: string;
  text: string;
}

export interface OpportunityScoreInput {
  readiness: number;
  impact: number;
  marketSize: number;
  competition: number;
  capitalEfficiency: number;
}
