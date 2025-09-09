"use client";

import Link from "next/link";
import dataLineups from "@/data/fixtures-lineups.json";

// Interface criada usando as entidades separadas
interface Player {
  id: number;
  name: string;
  number: number;
  pos: string;
  grid: string | null;
}

interface FixtureLineup {
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

// Removida interface não utilizada


import { TypographyMuted, TypographySmall } from "@/components/ui/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function PlayerPos({ player }: { player: Player }) {
  const playerPosMap: Record<string, { background: string; text: string }> = {
    G: {
      background: "bg-orange-400 dark:bg-orange-300",
      text: "G",
    },
    D: {
      background: "bg-blue-400 dark:bg-blue-300",
      text: "D",
    },
    M: {
      background: "bg-green-400 dark:bg-green-300",
      text: "M",
    },
    F: {
      background: "bg-red-400 dark:bg-red-300",
      text: "A",
    },
  };

  return (
    <span
      className={`${
        playerPosMap[player.pos].background
      } w-5 h-5 text-center text-sm rounded text-primary-foreground`}
    >
      {playerPosMap[player.pos].text}
    </span>
  );
}

function CoachInfo({
  team,
  justifyContent,
}: {
  team: FixtureLineup;
  justifyContent: "start" | "end";
}) {
  return (
    <div className={`flex items-center justify-${justifyContent} gap-2`}>
      {justifyContent === "end" && (
        <Link
          href={`/leagues/${team.team.id}/${team.coach.id}`}
          className="underline-offset-4 hover:underline transition"
        >
          <TypographySmall>{team.coach.name}</TypographySmall>
        </Link>
      )}
      <Avatar className="w-8 h-8">
        <AvatarImage src={team.coach.photo} alt={team.coach.name} />
        <AvatarFallback>{team.coach.name[0]}</AvatarFallback>
      </Avatar>
      {justifyContent === "start" && (
        <Link
          href={`/leagues/${team.team.id}/${team.coach.id}`}
          className="underline-offset-4 hover:underline transition"
        >
          <TypographySmall>{team.coach.name}</TypographySmall>
        </Link>
      )}
    </div>
  );
}

function StartXI({
  team,
  justifyContent,
}: {
  team: FixtureLineup;
  justifyContent: "start" | "end";
}) {
  return (
    <>
      {team.startXI.map(({ player }) => (
        <div
          key={player.id}
          className={`flex items-center justify-${justifyContent} gap-2`}
        >
          {justifyContent === "start" && <PlayerPos player={player} />}
          {justifyContent === "start" && (
            <TypographyMuted>{player.number}</TypographyMuted>
          )}
          <Link
            href={`/leagues/${team.team.id}/${player.id}`}
            className="underline-offset-4 hover:underline transition"
          >
            <TypographySmall>{player.name}</TypographySmall>
          </Link>
          {justifyContent === "end" && (
            <TypographyMuted>{player.number}</TypographyMuted>
          )}
          {justifyContent === "end" && <PlayerPos player={player} />}
        </div>
      ))}
    </>
  );
}

// Componente Substitutes removido pois não está sendo utilizado

export function MatchLineups() {
  const lineups = dataLineups.response as FixtureLineup[];

  const home = lineups[0];
  const away = lineups[1];

  return (
    <section className="flex gap-4 mt-6">
      {/* Time Casa */}
      <div className="flex flex-col gap-2 w-1/2">
        <div className="mb-2 space-y-2">
          <CoachInfo team={home} justifyContent="start" />
          <TypographyMuted>{home.formation}</TypographyMuted>
        </div>
        <StartXI team={home} justifyContent="start" />

        {/* Reservas - Time Casa */}
        {/* <div className="mt-4">
          <header className="mb-2">
            <TypographyMuted>Reservas</TypographyMuted>
          </header>
          <Substitutes team={home} justifyContent="start" />
        </div> */}
      </div>

      {/* Time Fora */}
      <div className="flex flex-col gap-2 w-1/2 items-end">
        <div className="mb-2 space-y-2 text-right">
          <CoachInfo team={away} justifyContent="end" />
          <TypographyMuted>{away.formation}</TypographyMuted>
        </div>
        <StartXI team={away} justifyContent="end" />

        {/* Reservas - Time Fora */}
        {/* <div className="mt-4 text-right">
          <header className="mb-2">
            <TypographyMuted>Reservas</TypographyMuted>
          </header>
          <Substitutes team={away} justifyContent="end" />
        </div> */}
      </div>
    </section>
  );
}
