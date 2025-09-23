import { getTotalCards } from "@/utils/get-total-cards";
import { calculateAverage } from "@/utils/calculate-average";

import { PredictionsData, TeamsPrediction } from "@/types/predictions";

import { TypographySmall } from "@/components/ui/typography";
import { OrDivider } from "@/components/ui/or-divider";
import { Stat, StatDescription, StatTitle } from "@/components/ui/stat";

const percentLabels: Record<string, string> = {
  home: "Casa",
  draw: "Empate",
  away: "Visitante",
};

type dataProps = {
  teams: TeamsPrediction;
  predictions: PredictionsData;
};

export function MatchPredictions({ data }: { data: dataProps }) {
  const { teams, predictions } = data;

  const goalMetrics = [
    {
      homeValue: teams.home.league.goals.for.average.total,
      label: "Média de gols marcados",
      awayValue: teams.away.league.goals.for.average.total,
    },
    {
      homeValue: teams.home.league.goals.against.average.total,
      label: "Média de gols sofridos",
      awayValue: teams.away.league.goals.against.average.total,
    },
  ];

  const defenseMetrics = [
    {
      homeValue: teams.home.league.clean_sheet.total || 0,
      label: "Total de jogos sem levar gol",
      awayValue: teams.away.league.clean_sheet.total || 0,
    },
    {
      homeValue: calculateAverage(
        teams.home.league.clean_sheet.total,
        teams.home.league.fixtures.played.total
      ),
      label: "Média de jogos sem levar gol",
      awayValue: calculateAverage(
        teams.away.league.clean_sheet.total,
        teams.away.league.fixtures.played.total
      ),
    },
  ];

  const penaltyMetrics = [
    {
      homeValue: teams.home.league.penalty.total || 0,
      label: "Total de pênaltis",
      awayValue: teams.away.league.penalty.total || 0,
    },
    {
      homeValue: calculateAverage(
        teams.home.league.penalty.total,
        teams.home.league.fixtures.played.total
      ),
      label: "Média de pênaltis por jogo",
      awayValue: calculateAverage(
        teams.away.league.penalty.total,
        teams.away.league.fixtures.played.total
      ),
    },
    {
      homeValue: teams.home.league.penalty.scored.total || 0,
      label: "Pênaltis convertidos",
      awayValue: teams.away.league.penalty.scored.total || 0,
    },
    {
      homeValue: teams.home.league.penalty.missed.total || 0,
      label: "Pênaltis desperdiçados",
      awayValue: teams.away.league.penalty.missed.total || 0,
    },
    {
      homeValue: teams.home.league.penalty.scored.percentage || "0%",
      label: "Taxa de conversão de pênaltis",
      awayValue: teams.away.league.penalty.scored.percentage || "0%",
    },
  ];

  const cardMetrics = [
    {
      homeValue: calculateAverage(
        getTotalCards(teams.home.league.cards.yellow),
        teams.home.league.fixtures.played.total
      ),
      label: "Cartões amarelos por jogo",
      awayValue: calculateAverage(
        getTotalCards(teams.away.league.cards.yellow),
        teams.away.league.fixtures.played.total
      ),
    },
    {
      homeValue: calculateAverage(
        getTotalCards(teams.home.league.cards.red),
        teams.home.league.fixtures.played.total
      ),
      label: "Cartões vermelhos por jogo",
      awayValue: calculateAverage(
        getTotalCards(teams.away.league.cards.red),
        teams.away.league.fixtures.played.total
      ),
    },
  ];

  const teamMetrics = {
    Gols: goalMetrics,
    "Clean Sheet": defenseMetrics,
    Pênaltis: penaltyMetrics,
    Cartões: cardMetrics,
  };

  return (
    <div className="mt-6 space-y-6">
      <OrDivider>Resultado</OrDivider>
      <div className="flex gap-3 justify-between">
        {Object.entries(predictions.percent).map(([key, value], index) => (
          <Stat
            className="text-center border p-4 w-full rounded-2xl"
            key={index}
          >
            <StatTitle>{percentLabels[key]}</StatTitle>
            <StatDescription>{value}</StatDescription>
          </Stat>
        ))}
      </div>
      {Object.entries(teamMetrics).map(([key, value], index) => (
        <div key={index}>
          <OrDivider>{key}</OrDivider>
          {value.map((team, index) => (
            <div className="flex justify-between items-center mt-3" key={index}>
              <TypographySmall>{team.homeValue}</TypographySmall>
              <TypographySmall>{team.label}</TypographySmall>
              <TypographySmall>{team.awayValue}</TypographySmall>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
