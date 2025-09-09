"use client";

import { TypographyMuted, TypographySmall } from "@/components/ui/typography";
import { TeamBasic } from "@/types/team";

// Interface criada usando as entidades separadas
interface FixtureStatistic {
  type: string;
  value: number | string | null;
}

interface FixtureTeamStatistic {
  team: TeamBasic;
  statistics: FixtureStatistic[];
}

// Interface removida pois não está sendo utilizada

import dataStatistics from "@/data/fixtures-statistics.json";

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

export function MatchStatistics() {
  const stats = dataStatistics.response as FixtureTeamStatistic[];

  const home = stats[0];
  const away = stats[1];

  return (
    <div className="mt-6">
      <div className="space-y-2">
        {home.statistics.map((stat, index) => {
          const label = statsMap[stat.type] ?? stat.type;
          const homeValue = stat.value ?? "-";
          const awayValue = away.statistics[index]?.value ?? "-";

          return (
            <div
              key={stat.type}
              className={`flex justify-between text-sm pb-1 ${
                index < home.statistics.length - 1 ? "border-b" : ""
              }`}
            >
              <TypographySmall>{homeValue}</TypographySmall>
              <TypographyMuted>{label}</TypographyMuted>
              <TypographySmall>{awayValue}</TypographySmall>
            </div>
          );
        })}
      </div>
    </div>
  );
}
