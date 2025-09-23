// Tipos para Fixture (dados completos de uma partida)
import { Match } from './match';
import { League } from './league';
import { Teams } from './team';
import { Goals, Score } from './goals';

export interface FixtureData {
  fixture: Match;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
}

export interface FixturesApiResponse {
  parameters: {
    league: string;
    season: string;
    round: string;
  };
  errors: { message: string }[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: FixtureData[];
}
