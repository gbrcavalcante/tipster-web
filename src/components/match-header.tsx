import Link from "next/link";
import Image from "next/image";

import { FixtureData } from "@/types/fixture";
import { Calendar, CalendarDays, MapPin } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  TypographyH3,
  TypographyH4,
  TypographyLarge,
  TypographyMuted,
  TypographySmall,
} from "@/components/ui/typography";

export function MatchHeader({ currentMatch }: { currentMatch: FixtureData }) {
  return (
    <section className="flex flex-col gap-6">
      <header className="flex items-center gap-3">
        <Image
          src={currentMatch.league.logo}
          width={100}
          height={100}
          className="w-[100px] h-[100px]"
          alt={`Logo da ${currentMatch.league.name}`}
        />
        <div className="flex flex-col gap-2">
        <Badge variant="outline" className="-ml-0.5">{currentMatch.league.season}</Badge>
          <div className="flex items-center gap-2 mt-1 ml-0.5">
            {currentMatch.league.flag && (
              <Image
                src={currentMatch.league.flag}
                width={16}
                height={16}
                className="w-[16px] h-[16px]"
                alt={`Bandeira do país ${currentMatch.league.country}`}
              />
            )}
            <TypographySmall>{currentMatch.league.country}</TypographySmall>
          </div>
          <Link
            href={`/leagues/${currentMatch.league.id}`}
            className="underline-offset-4 hover:underline transition"
          >
            <TypographyH3>{currentMatch.league.name}</TypographyH3>
          </Link>
        </div>
      </header>
      <Separator />
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Calendar size={14} />
          <TypographyMuted>{currentMatch.league.round}</TypographyMuted>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={14} />
          <TypographyMuted>{currentMatch.fixture.venue.name}</TypographyMuted>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays size={14} />
          <TypographyMuted>
            {new Date(currentMatch.fixture.date).toLocaleString("pt-BR", {
              dateStyle: "full",
              timeStyle: "short",
            })}
          </TypographyMuted>
        </div>
      </div>

      <Separator />
      <div className="flex justify-between items-center px-2">
        <div className="flex flex-col items-center">
          <Image
            src={currentMatch.teams.home.logo}
            width={50}
            height={50}
            className="w-[50px] h-[50px]"
            alt={`Logo do ${currentMatch.teams.home.name}`}
          />
          <Link
            href={`/leagues/${currentMatch.league.id}/${currentMatch.teams.home.id}`}
            className="underline-offset-4 hover:underline transition"
          >
            <TypographyH4>{currentMatch.teams.home.name}</TypographyH4>
          </Link>
        </div>

        <div className="text-center">
          <TypographyLarge>
            {currentMatch.goals.home} - {currentMatch.goals.away}
          </TypographyLarge>
          <TypographyMuted>{currentMatch.fixture.status.short}</TypographyMuted>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={currentMatch.teams.away.logo}
            width={50}
            height={50}
            className="w-[50px] h-[50px]"
            alt={`Logo do ${currentMatch.teams.away.name}`}
          />
          <Link
            href={`/leagues/${currentMatch.league.id}/${currentMatch.teams.away.id}`}
            className="underline-offset-4 hover:underline transition"
          >
            <TypographyH4>{currentMatch.teams.away.name}</TypographyH4>
          </Link>
        </div>
      </div>
    </section>
  );
}
