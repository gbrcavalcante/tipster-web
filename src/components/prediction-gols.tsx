import { TeamsPrediction } from "@/types/predictions";
import { TypographyMuted, TypographySmall } from "@/components/ui/typography";

const goalsLabels = {
    for: {
      total: {
        home: "Gols marcados em casa",
        away: "Gols marcados fora",
        total: "Total de gols marcados",
      },
      average: {
        home: "Média de gols por jogo (casa)",
        away: "Média de gols por jogo (fora)",
        total: "Média geral de gols por jogo",
      },
    },
    against: {
      total: {
        home: "Gols sofridos em casa",
        away: "Gols sofridos fora",
        total: "Total de gols sofridos",
      },
      average: {
        home: "Média de gols sofridos (casa)",
        away: "Média de gols sofridos (fora)",
        total: "Média geral de gols sofridos",
      },
    },
  } as const;

export function PredictionTeamsGoals({ teams }: { teams: TeamsPrediction }) {
    const {
      home: {
        league: { goals: homeGoals },
      },
      away: {
        league: { goals: awayGoals },
      },
    } = teams;
  
    const goalsStats = [
      // Gols marcados - Totais
      {
        homeValue: homeGoals.for.total.total,
        awayValue: awayGoals.for.total.total,
        label: goalsLabels.for.total.total,
      },
      {
        homeValue: homeGoals.for.total.home,
        awayValue: awayGoals.for.total.home,
        label: goalsLabels.for.total.home,
      },
      {
        homeValue: homeGoals.for.total.away,
        awayValue: awayGoals.for.total.away,
        label: goalsLabels.for.total.away,
      },
  
      // Gols marcados - Médias
      {
        homeValue: homeGoals.for.average.total,
        awayValue: awayGoals.for.average.total,
        label: goalsLabels.for.average.total,
      },
      {
        homeValue: homeGoals.for.average.home,
        awayValue: awayGoals.for.average.home,
        label: goalsLabels.for.average.home,
      },
      {
        homeValue: homeGoals.for.average.away,
        awayValue: awayGoals.for.average.away,
        label: goalsLabels.for.average.away,
      },
  
      // Gols sofridos - Totais
      {
        homeValue: homeGoals.against.total.total,
        awayValue: awayGoals.against.total.total,
        label: goalsLabels.against.total.total,
      },
      {
        homeValue: homeGoals.against.total.home,
        awayValue: awayGoals.against.total.home,
        label: goalsLabels.against.total.home,
      },
      {
        homeValue: homeGoals.against.total.away,
        awayValue: awayGoals.against.total.away,
        label: goalsLabels.against.total.away,
      },
  
      // Gols sofridos - Médias
      {
        homeValue: homeGoals.against.average.total,
        awayValue: awayGoals.against.average.total,
        label: goalsLabels.against.average.total,
      },
      {
        homeValue: homeGoals.against.average.home,
        awayValue: awayGoals.against.average.home,
        label: goalsLabels.against.average.home,
      },
      {
        homeValue: homeGoals.against.average.away,
        awayValue: awayGoals.against.average.away,
        label: goalsLabels.against.average.away,
      },
    ];
  
    return (
      <div className="space-y-2 mt-6">
        {goalsStats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center justify-between pb-1 ${
              index < goalsStats.length - 1 ? "border-b" : ""
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
  