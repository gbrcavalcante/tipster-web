import Link from "next/link";
import Image from "next/image";

import { MapPin, Star } from "lucide-react";
import { FixtureData } from "@/types/fixture";

import {
  TypographyH4,
  TypographyLarge,
  TypographyMuted,
} from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components//ui/button";

import data from "@/data/fixtures-headtohead.json";

const fixtureStatusLabel: Record<string, string> = {
  TBD: "A definir",
  NS: "Não iniciado",
  "1H": "Primeiro tempo",
  HT: "Intervalo",
  "2H": "Segundo tempo",
  ET: "Prorrogação",
  BT: "Intervalo da prorrogação",
  P: "Disputa de pênaltis",
  SUSP: "Suspenso",
  INT: "Interrompido",
  FT: "Encerrado",
  AET: "Encerrado após prorrogação",
  PEN: "Encerrado nos pênaltis",
  PST: "Adiado",
  CANC: "Cancelado",
  ABD: "Abandonado",
  AWD: "W.O. (decisão técnica)",
  WO: "W.O. (walkover)",
  LIVE: "Ao vivo",
};

export function MatchHeader() {
  const currentMatch: FixtureData = data.response[data.response.length - 1];

  const { fixture, goals, league, teams } = currentMatch;

  return (
    <section className="flex flex-col gap-8">
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Star />
          </Button>
          <div className="flex flex-col gap-1 items-center">
            <Image
              src={teams.home.logo}
              width={75}
              height={75}
              className="w-[75px] h-[75px]"
              alt={`Logo do ${teams.home.name}`}
            />
            <Link
              href={`/leagues/${league.id}/${teams.home.id}`}
              className="underline-offset-4 hover:underline transition"
            >
              <TypographyH4>{teams.home.name}</TypographyH4>
            </Link>
          </div>
        </div>

        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <Badge variant="outline" className="rounded-2xl">
              <MapPin />
              {fixture.venue.name}
            </Badge>
          </div>
          <TypographyLarge>
            {goals.home} - {goals.away}
          </TypographyLarge>
          <TypographyMuted>
            {fixtureStatusLabel[fixture.status.short]}
          </TypographyMuted>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-1 items-center">
            <Image
              src={teams.away.logo}
              width={75}
              height={75}
              className="w-[75px] h-[75px]"
              alt={`Logo do ${teams.away.name}`}
            />
            <Link
              href={`/leagues/${league.id}/${teams.away.id}`}
              className="underline-offset-4 hover:underline transition"
            >
              <TypographyH4>{teams.away.name}</TypographyH4>
            </Link>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Star />
          </Button>
        </div>
      </div>
    </section>
  );
}
