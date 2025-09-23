"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { FixtureLineup } from "@/types/events";

import { TypographyMuted, TypographySmall } from "@/components/ui/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { OrDivider } from "@/components/ui/or-divider";

const positionLabels: Record<string, { label: string; bg: string }> = {
  G: {
    label: "G",
    bg: "bg-orange-400 dark:bg-orange-300",
  },
  D: {
    label: "D",
    bg: "bg-blue-400 dark:bg-blue-300",
  },
  M: {
    label: "M",
    bg: "bg-green-400 dark:bg-green-300",
  },
  F: {
    label: "A",
    bg: "bg-red-400 dark:bg-red-300",
  },
};

export function MatchLineups({ data }: { data: FixtureLineup[] }) {
  const home = data[0];
  const away = data[1];

  return (
    <div className="mt-3 space-y-3">
      <OrDivider>Treinadores</OrDivider>
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={home.coach.photo} />
            <AvatarFallback className="uppercase">
              {home.coach.name.slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div>
            <Link href="#">
              <TypographySmall>{home.coach.name}</TypographySmall>
            </Link>
            <TypographyMuted>{home.formation}</TypographyMuted>
          </div>
        </div>

        <div className="justify-end text-end">
          <div className="flex items-center gap-3">
            <div>
              <Link href="#">
                <TypographySmall>{away.coach.name}</TypographySmall>
              </Link>
              <TypographyMuted>{away.formation}</TypographyMuted>
            </div>
            <Avatar>
              <AvatarImage src={away.coach.photo} />
              <AvatarFallback className="uppercase">
                {away.coach.name.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      <Divider>Titulares</Divider>
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          {Object.values(home.startXI).map((value) => {
            const { player } = value;

            return (
              <div className="flex items-center gap-2" key={player.id}>
                <span
                  className={cn(
                    positionLabels[player.pos].bg,
                    "text-primary-foreground text-sm w-5 h-5 text-center rounded-sm"
                  )}
                >
                  {positionLabels[player.pos].label}
                </span>
                <TypographyMuted>{player.number}</TypographyMuted>
                <Link href="#">
                  <TypographySmall>{player.name}</TypographySmall>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-end gap-1">
          {Object.values(away.startXI).map((value) => {
            const { player } = value;

            return (
              <div className="flex items-center gap-2" key={player.id}>
                <Link href="#">
                  <TypographySmall>{player.name}</TypographySmall>
                </Link>
                <TypographyMuted>{player.number}</TypographyMuted>
                <span
                  className={cn(
                    positionLabels[player.pos].bg,
                    "text-primary-foreground text-sm w-5 h-5 text-center rounded-sm"
                  )}
                >
                  {positionLabels[player.pos].label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <Divider>Reservas</Divider>
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          {Object.values(home.substitutes).map((value) => {
            const { player } = value;

            return (
              <div className="flex items-center gap-2" key={player.id}>
                <span
                  className={cn(
                    positionLabels[player.pos].bg,
                    "text-primary-foreground text-sm w-5 h-5 text-center rounded-sm"
                  )}
                >
                  {positionLabels[player.pos].label}
                </span>
                <TypographyMuted>{player.number}</TypographyMuted>
                <Link href="#">
                  <TypographySmall>{player.name}</TypographySmall>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-end gap-1">
          {Object.values(away.substitutes).map((value) => {
            const { player } = value;

            return (
              <div className="flex items-center gap-2" key={player.id}>
                <Link href="#">
                  <TypographySmall>{player.name}</TypographySmall>
                </Link>
                <TypographyMuted>{player.number}</TypographyMuted>
                <span
                  className={cn(
                    positionLabels[player.pos].bg,
                    "text-primary-foreground text-sm w-5 h-5 text-center rounded-sm"
                  )}
                >
                  {positionLabels[player.pos].label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
