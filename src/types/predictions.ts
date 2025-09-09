// Interfaces baseadas na estrutura real do JSON predictions.json
import { Match } from './match';
import { Teams } from './team';
import { Goals, Score } from './goals';
import { LeagueBasic } from './league';

// ===== INTERFACES BÁSICAS =====

export interface Winner {
  id: number;
  name: string;
  comment: string | null;
}

export interface GoalsPrediction {
  home: string;
  away: string;
}

export interface Percent {
  home: string;
  draw: string;
  away: string;
}

export interface PredictionsData {
  winner: Winner;
  win_or_draw: boolean;
  under_over: string | null;
  goals: GoalsPrediction;
  advice: string;
  percent: Percent;
}

// ===== INTERFACES DE ESTATÍSTICAS =====

export interface Last5Goals {
  total: number;
  average: string;
}

export interface Last5 {
  played: number;
  form: string;
  att: string;
  def: string;
  goals: {
    for: Last5Goals;
    against: Last5Goals;
  };
}

export interface FixturesStats {
  played: {
    home: number;
    away: number;
    total: number;
  };
  wins: {
    home: number;
    away: number;
    total: number;
  };
  draws: {
    home: number;
    away: number;
    total: number;
  };
  loses: {
    home: number;
    away: number;
    total: number;
  };
}

export interface GoalsTotal {
  home: number;
  away: number;
  total: number;
}

export interface GoalsAverage {
  home: string;
  away: string;
  total: string;
}

export interface MinuteStats {
  total: number | null;
  percentage: string | null;
}

export interface MinuteDistribution {
  "0-15": MinuteStats;
  "16-30": MinuteStats;
  "31-45": MinuteStats;
  "46-60": MinuteStats;
  "61-75": MinuteStats;
  "76-90": MinuteStats;
  "91-105": MinuteStats;
  "106-120": MinuteStats;
}

export interface UnderOver {
  over: number;
  under: number;
}

export interface UnderOverDistribution {
  "0.5": UnderOver;
  "1.5": UnderOver;
  "2.5": UnderOver;
  "3.5": UnderOver;
  "4.5": UnderOver;
}

export interface GoalsFor {
  total: GoalsTotal;
  average: GoalsAverage;
  minute?: MinuteDistribution;
  under_over?: UnderOverDistribution;
}

export interface GoalsAgainst {
  total: GoalsTotal;
  average: GoalsAverage;
  minute?: MinuteDistribution;
  under_over?: UnderOverDistribution;
}

export interface GoalsStats {
  for: GoalsFor;
  against: GoalsAgainst;
}

export interface Streak {
  wins: number;
  draws: number;
  loses: number;
}

export interface ScoreResult {
  home: string;
  away: string;
}

export interface GoalsResult {
  home: number;
  away: number;
}

export interface Biggest {
  streak: Streak;
  wins: ScoreResult;
  loses: ScoreResult;
  goals: {
    for: GoalsResult;
    against: GoalsResult;
  };
}

export interface CleanSheet {
  home: number;
  away: number;
  total: number;
}

export interface FailedToScore {
  home: number;
  away: number;
  total: number;
}

export interface PenaltyStats {
  scored: {
    total: number;
    percentage: string;
  };
  missed: {
    total: number;
    percentage: string;
  };
  total: number;
}

export interface Lineup {
  formation: string;
  played: number;
}

export interface CardStats {
  total: number | null;
  percentage: string | null;
}

export interface CardDistribution {
  "0-15": CardStats;
  "16-30": CardStats;
  "31-45": CardStats;
  "46-60": CardStats;
  "61-75": CardStats;
  "76-90": CardStats;
  "91-105": CardStats;
  "106-120": CardStats;
}

export interface Cards {
  yellow: CardDistribution;
  red: CardDistribution;
}

export interface TeamLeagueStats {
  form: string;
  fixtures: FixturesStats;
  goals: GoalsStats;
  biggest?: Biggest;
  clean_sheet?: CleanSheet;
  failed_to_score?: FailedToScore;
  penalty?: PenaltyStats;
  lineups?: Lineup[];
  cards?: Cards;
}

export interface TeamPrediction {
  id: number;
  name: string;
  logo: string;
  last_5: Last5;
  league: TeamLeagueStats;
}

export interface TeamsPrediction {
  home: TeamPrediction;
  away: TeamPrediction;
}

export interface Comparison {
  form: {
    home: string;
    away: string;
  };
  att: {
    home: string;
    away: string;
  };
  def: {
    home: string;
    away: string;
  };
  poisson_distribution: {
    home: string;
    away: string;
  };
  h2h: {
    home: string;
    away: string;
  };
  goals: {
    home: string;
    away: string;
  };
  total: {
    home: string;
    away: string;
  };
}

// ===== INTERFACES DE LIGA E MATCH =====

export interface LeagueWithRound {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
  standings: boolean;
}

export interface H2HMatch {
  fixture: Match;
  league: LeagueWithRound;
  teams: Teams;
  goals: Goals;
  score: Score;
}

export interface Prediction {
  predictions: PredictionsData;
  league: LeagueBasic;
  teams: TeamsPrediction;
  comparison: Comparison;
  h2h: H2HMatch[];
}

// Interface de resposta da API
export interface PredictionsApiResponse {
  get: string;
  parameters: {
    fixture: string;
  };
  errors: { message: string }[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: Prediction[];
}
