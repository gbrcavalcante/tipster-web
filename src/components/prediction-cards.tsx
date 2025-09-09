import { ReactNode } from "react";
import { TeamsPrediction } from "@/types/predictions";
import { TypographySmall, TypographyMuted } from "@/components/ui/typography";
import { redCard, yellowCard } from "@/assets/icons";

// Labels para os períodos de tempo
const timePeriodsLabels = {
  "0-15": "0-15 min",
  "16-30": "16-30 min", 
  "31-45": "31-45 min",
  "46-60": "46-60 min",
  "61-75": "61-75 min",
  "76-90": "76-90 min",
  "91-105": "91-105 min (Acréscimos)",
  "106-120": "106-120 min (Prorrogação)",
} as const;

// Labels para tipos de cartão
const cardLabels = {
  yellow: yellowCard,
  red: redCard,
} as const;

// Tipo para as estatísticas de cartão
type CardStat = {
  homeValue: number;
  awayValue: number;
  label: string | ReactNode;
  isTotal: boolean;
  homePercentage?: string;
  awayPercentage?: string;
};

export function PredictionTeamsCards({ teams }: { teams: TeamsPrediction }) {
  const {
    home: {
      league: { cards: homeCards },
    },
    away: {
      league: { cards: awayCards },
    },
  } = teams;

  // Verificar se os dados de cartões existem
  if (!homeCards || !awayCards) {
    return (
      <div className="space-y-2 mt-6">
        <TypographyMuted>Dados de cartões não disponíveis</TypographyMuted>
      </div>
    );
  }

  // Criar estatísticas apenas para períodos com dados válidos
  const yellowCardStats = Object.entries(homeCards.yellow)
    .filter(([period, homeData]) => {
      const awayData = awayCards.yellow[period as keyof typeof awayCards.yellow];
      return (homeData.total || 0) > 0 || (awayData?.total || 0) > 0;
    })
    .map(([period, homeData]) => ({
      homeValue: homeData.total || 0,
      awayValue: awayCards.yellow[period as keyof typeof awayCards.yellow]?.total || 0,
      homePercentage: homeData.percentage || "0%",
      awayPercentage: awayCards.yellow[period as keyof typeof awayCards.yellow]?.percentage || "0%",
      label: <span className="flex items-center gap-2">
            {cardLabels.yellow}
            <span>{timePeriodsLabels[period as keyof typeof timePeriodsLabels]}</span>
          </span>,
      isTotal: false,
    }));

  const redCardStats = Object.entries(homeCards.red)
    .filter(([period, homeData]) => {
      const awayData = awayCards.red[period as keyof typeof awayCards.red];
      return (homeData.total || 0) > 0 || (awayData?.total || 0) > 0;
    })
    .map(([period, homeData]) => ({
      homeValue: homeData.total || 0,
      awayValue: awayCards.red[period as keyof typeof awayCards.red]?.total || 0,
      homePercentage: homeData.percentage || "0%",
      awayPercentage: awayCards.red[period as keyof typeof awayCards.red]?.percentage || "0%",
      label: <span className="flex items-center gap-2">
              {cardLabels.red}
              <span>{timePeriodsLabels[period as keyof typeof timePeriodsLabels]}</span>
            </span>,
      isTotal: false,
    }));

  // Calcular totais
  const yellowTotals = {
    home: homeCards ? Object.values(homeCards.yellow).reduce(
      (sum, data) => sum + (data.total || 0),
      0
    ) : 0,
    away: awayCards ? Object.values(awayCards.yellow).reduce(
      (sum, data) => sum + (data.total || 0),
      0
    ) : 0,
  };

  const redTotals = {
    home: homeCards ? Object.values(homeCards.red).reduce(
      (sum, data) => sum + (data.total || 0),
      0
    ) : 0,
    away: awayCards ? Object.values(awayCards.red).reduce(
      (sum, data) => sum + (data.total || 0),
      0
    ) : 0,
  };

  const allCardStats: CardStat[] = [
    // Totais primeiro
    {
      homeValue: yellowTotals.home,
      awayValue: yellowTotals.away,
      label: <span className="flex items-center gap-2">
              {cardLabels.yellow}
              <span>Total de Cartões Amarelos</span>
            </span>,
      isTotal: true,
    },
    {
      homeValue: redTotals.home,
      awayValue: redTotals.away,
      label: <span className="flex items-center gap-2">
              {cardLabels.red}
              <span>Total de Cartões Vermelhos</span>
            </span>,
      isTotal: true,
    },
    // Depois por período
    ...yellowCardStats,
    ...redCardStats,
  ];

  return (
    <div className="space-y-2 mt-6">
      {allCardStats.map((stat, index) => (
        <div key={index}>
          <div
            className={`flex items-center justify-between pb-1 ${
              index < allCardStats.length - 1 ? "border-b" : ""
            }`}
          >
            <div className="w-20 text-start">
              <TypographySmall>
                {stat.homeValue}
                {!stat.isTotal && stat.homePercentage && ` (${stat.homePercentage})`}
              </TypographySmall>
            </div>
            <TypographyMuted>{stat.label}</TypographyMuted>
            <div className="w-20 text-end">
              <TypographySmall>
                {stat.awayValue}
                {!stat.isTotal && stat.awayPercentage && ` (${stat.awayPercentage})`}
              </TypographySmall>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}