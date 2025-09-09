// Types para a API de classificação da Premier League

export interface Goals {
  for: number;
  against: number;
}

export interface TeamStats {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface StandingTeam {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string | null;
  all: TeamStats;
  home: TeamStats;
  away: TeamStats;
  update: string;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: StandingTeam[];
}

export interface LeagueResponse {
  league: League;
}

export interface Parameters {
  league: string;
  season: string;
}

export interface Paging {
  current: number;
  total: number;
}

export interface LeagueStandingsResponse {
  get: string;
  parameters: Parameters;
  errors: { message: string }[];
  results: number;
  paging: Paging;
  response: LeagueResponse[];
}

// Types auxiliares para facilitar o uso
export type StandingsArray = StandingTeam[];
export type Form = 'W' | 'D' | 'L';
export type TeamStatus = 'same' | 'up' | 'down';

// Enum para descrições de classificação
export enum QualificationDescription {
  CHAMPIONS_LEAGUE = 'Promotion - Champions League (Group Stage: )',
  EUROPA_LEAGUE = 'Promotion - Europa League (Group Stage: )',
  EUROPA_CONFERENCE_LEAGUE = 'Promotion - Europa Conference League (Qualification: )',
  RELEGATION = 'Relegation - Championship'
}

// Interface para facilitar manipulação de dados individuais de time
export interface TeamData {
  rank: number;
  teamName: string;
  teamId: number;
  points: number;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  form: string;
  qualification?: string;
}

// Utility type para extrair apenas os dados essenciais
export type EssentialTeamData = Pick<StandingTeam, 'rank' | 'team' | 'points' | 'goalsDiff' | 'all' | 'form'>;

// Type guard para verificar se um time está em posição de rebaixamento
export const isRelegationZone = (rank: number): boolean => rank >= 18;

// Type guard para verificar se um time está em posição de Champions League
export const isChampionsLeagueZone = (rank: number): boolean => rank <= 4;

// Type guard para verificar se um time está em posição de Europa League
export const isEuropaLeagueZone = (rank: number): boolean => rank === 5 || rank === 8;

// Type guard para verificar se um time está em posição de Conference League
export const isConferenceLeagueZone = (rank: number): boolean => rank === 6;