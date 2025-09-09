import { TeamsPrediction } from "@/types/predictions";
import { TypographyMuted, TypographySmall } from "@/components/ui/typography";

const leaguefixtureLabels = {
  wins: {
    total: "Vitórias",
    home: "Vitórias em casa",
    away: "Vitórias fora de casa",
  },
  draws: {
    total: "Empates",
    home: "Empates em casa",
    away: "Empates fora de casa",
  },
  loses: {
    total: "Derrotas",
    home: "Derrotas em casa",
    away: "Derrotas fora de casa",
  },
} as const;

export function PredictionTeamsLeague({ teams }: { teams: TeamsPrediction }) {
  const {
    home: {
      league: { fixtures: homeFixtures },
    },
    away: {
      league: { fixtures: awayFixtures },
    },
  } = teams;

  const fixtureStats = [
    {
      homeValue: homeFixtures.wins.total,
      awayValue: awayFixtures.wins.total,
      label: leaguefixtureLabels.wins.total,
    },
    {
      homeValue: homeFixtures.wins.home,
      awayValue: awayFixtures.wins.home,
      label: leaguefixtureLabels.wins.home,
    },
    {
      homeValue: homeFixtures.wins.away,
      awayValue: awayFixtures.wins.away,
      label: leaguefixtureLabels.wins.away,
    },

    {
      homeValue: homeFixtures.draws.total,
      awayValue: awayFixtures.draws.total,
      label: leaguefixtureLabels.draws.total,
    },
    {
      homeValue: homeFixtures.draws.home,
      awayValue: awayFixtures.draws.home,
      label: leaguefixtureLabels.draws.home,
    },
    {
      homeValue: homeFixtures.draws.away,
      awayValue: awayFixtures.draws.away,
      label: leaguefixtureLabels.draws.away,
    },
    {
      homeValue: homeFixtures.loses.total,
      awayValue: awayFixtures.loses.total,
      label: leaguefixtureLabels.loses.total,
    },
    {
      homeValue: homeFixtures.loses.home,
      awayValue: awayFixtures.loses.home,
      label: leaguefixtureLabels.loses.home,
    },
    {
      homeValue: homeFixtures.loses.away,
      awayValue: awayFixtures.loses.away,
      label: leaguefixtureLabels.loses.away,
    },
  ];

  return (
    <div className="space-y-2 mt-6">
      {fixtureStats.map((stat, index) => (
        <div
          key={index}
          className={`flex items-center justify-between pb-1 ${
            index !== fixtureStats.length - 1 ? "border-b" : ""
          }`}
        >
          <TypographySmall>{stat.homeValue}</TypographySmall>
          <TypographyMuted>{stat.label}</TypographyMuted>
          <TypographySmall>{stat.awayValue}</TypographySmall>
        </div>
      ))}
    </div>
  );
}
