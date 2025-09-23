// Tipos para Match (partida/jogo)

export interface Periods {
  first: number;
  second: number;
}

export interface Venue {
  id: number | null;
  name: string;
  city: string;
}

export interface Status {
  long: string;
  short: string;
  elapsed: number;
  extra: number | null;
}

export interface Match {
  id: number;
  referee: string | null;
  timezone: string;
  date: string;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
}