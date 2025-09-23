export interface Team {
  id: number;
  name: string;
  logo: string;
  winner: boolean;
}

export interface TeamBasic {
  id: number;
  name: string;
  logo: string;
}

export interface Teams {
  home: Team;
  away: Team;
}