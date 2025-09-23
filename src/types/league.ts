// Tipos para League (liga/campeonato)

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string | null;
  season: number;
  round: string;
  standings: boolean;
}

export interface LeagueBasic {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
}

export interface Country {
  id: string;
  name: string;
  flag?: string;
  leagues: LeagueBasic[];
}
