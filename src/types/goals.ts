// Tipos para Goals (gols/placar)

export interface Goals {
  home: number;
  away: number;
}

export interface ScoreDetail {
  home: number | null;
  away: number | null;
}

export interface Score {
  halftime: ScoreDetail;
  fulltime: ScoreDetail;
  extratime: ScoreDetail;
  penalty: ScoreDetail;
}