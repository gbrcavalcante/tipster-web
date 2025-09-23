"use client";

import { TypographyMuted, TypographySmall } from "@/components/ui/typography";
import { TeamBasic } from "@/types/team";

interface FixtureStatistic {
  type: string;
  value: number | string | null;
}

interface FixtureTeamStatistic {
  team: TeamBasic;
  statistics: FixtureStatistic[];
}
const statsMap: Record<string, string> = {
  "Shots on Goal": "Finalizações no Gol",
  "Shots off Goal": "Finalizações Fora do Gol",
  "Total Shots": "Total de Finalizações",
  "Blocked Shots": "Finalizações Bloqueadas",
  "Shots insidebox": "Finalizações na Área",
  "Shots outsidebox": "Finalizações Fora da Área",
  Fouls: "Faltas",
  "Corner Kicks": "Escanteios",
  Offsides: "Impedimentos",
  "Ball Possession": "Posse de Bola",
  "Yellow Cards": "Cartões Amarelos",
  "Red Cards": "Cartões Vermelhos",
  "Goalkeeper Saves": "Defesas do Goleiro",
  "Total passes": "Total de Passes",
  "Passes accurate": "Passes Precisos",
  "Passes %": "% de Passes Precisos",
  expected_goals: "Gols Esperados (xG)",
  goals_prevented: "Gols Evitados",
};

export function MatchStatistics({ data }: { data: FixtureTeamStatistic[] }) {
  const home = data[0];
  const away = data[1];

  return (
    <div className="space-y-1 mt-6">
      {home.statistics.map((stat, index) => {
        const label = statsMap[stat.type] ?? stat.type;
        const homeValue = stat.value ?? 0;
        const awayValue = away.statistics[index]?.value ?? 0;

        return (
          <div
            key={stat.type}
            className="flex justify-between items-center border-b last:border-none pb-1"
          >
            <TypographySmall>{homeValue}</TypographySmall>
            <TypographyMuted>{label}</TypographyMuted>
            <TypographySmall>{awayValue}</TypographySmall>
          </div>
        );
      })}
    </div>
  );
}
