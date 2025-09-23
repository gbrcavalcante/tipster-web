import { Player } from "./player";
import { TeamBasic } from "./team";

export interface FixtureLineup {
  team: {
    id: number;
    name: string;
    logo: string;
    colors: {
      player: { primary: string; number: string; border: string };
      goalkeeper: { primary: string; number: string; border: string };
    };
  };
  coach: {
    id: number;
    name: string;
    photo: string;
  };
  formation: string;
  startXI: { player: Player }[];
  substitutes: { player: Player }[];
}

export interface EventTime {
  elapsed: number;
  extra: number | null;
}

export interface EventPlayer {
  id: number | null;
  name: string | null;
}

export interface FixtureEvent {
  time: EventTime;
  team: TeamBasic;
  player: EventPlayer;
  assist: EventPlayer;
  type: string;
  detail: string;
  comments: string | null;
}