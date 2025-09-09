"use client"

import { type ReactNode } from "react"
import { TypographyMuted, TypographySmall } from "@/components/ui/typography"
import { TeamsPrediction } from "@/types/predictions"

const firstHalf = ["0-15", "16-30", "31-45"] as const;
const secondHalf = ["46-60", "61-75", "76-90"] as const;

export function PredictionStats({ teams }: { teams: TeamsPrediction }) {
  const {
    home: { league: homeLeague },
    away: { league: awayLeague },
  } = teams;

  // Calcula a média de gols em um intervalo específico de tempo
  const calculateGoalsAvgInPeriod = (league: typeof homeLeague, periods: readonly string[]) => {
    const total = periods.reduce((sum, period) => {
      return sum + (league.goals.for.minute?.[period as keyof typeof league.goals.for.minute]?.total ?? 0);
    }, 0);
    return (total / league.fixtures.played.total).toFixed(2);
  };

  // Calcula a média de cartões em um intervalo específico de tempo
  const calculateCardsAvgInPeriod = (
    league: typeof homeLeague, 
    periods: readonly string[], 
    type: 'yellow' | 'red'
  ) => {
    if (!league.cards?.[type]) return "0.00";
    const total = periods.reduce((sum, period) => {
      return sum + (league.cards?.[type]?.[period as keyof typeof league.cards.yellow]?.total ?? 0);
    }, 0);
    return (total / league.fixtures.played.total).toFixed(2);
  };

  // Retorna as estatísticas de clean sheets
  const getCleanSheetsStats = (league: typeof homeLeague) => {
    const cleanSheets = league.clean_sheet?.total ?? 0;
    const totalGames = league.fixtures.played.total;
    return {
      total: cleanSheets,
      games: totalGames,
      percent: ((cleanSheets / totalGames) * 100).toFixed(1)
    };
  };

  // Calcula a média de pênaltis
  const calculatePenaltyStats = (league: typeof homeLeague) => ({
    scored: league.penalty?.scored?.total ?? 0,
    missed: league.penalty?.missed?.total ?? 0,
    total: (league.penalty?.scored?.total ?? 0) + (league.penalty?.missed?.total ?? 0),
  });

  type Stat = {
    label: ReactNode;
    home: ReactNode;
    away: ReactNode;
  };

  const stats: Stat[] = [
    {
      label: (
        <div className="flex flex-col space-y-0.5">
          <TypographyMuted>1º Tempo</TypographyMuted>
          <TypographySmall>Média de gols</TypographySmall>
        </div>
      ),
      home: <span>{calculateGoalsAvgInPeriod(homeLeague, firstHalf)}</span>,
      away: <span>{calculateGoalsAvgInPeriod(awayLeague, firstHalf)}</span>,
    },
    {
      label: (
        <div className="flex flex-col space-y-0.5">
          <TypographyMuted>1º Tempo</TypographyMuted>
          <TypographySmall>Cartões amarelos</TypographySmall>
        </div>
      ),
      home: <span>{calculateCardsAvgInPeriod(homeLeague, firstHalf, 'yellow')}</span>,
      away: <span>{calculateCardsAvgInPeriod(awayLeague, firstHalf, 'yellow')}</span>,
    },
    {
      label: (
        <div className="flex flex-col space-y-0.5">
          <TypographyMuted>1º Tempo</TypographyMuted>
          <TypographySmall>Cartões vermelhos</TypographySmall>
        </div>
      ),
      home: <span>{calculateCardsAvgInPeriod(homeLeague, firstHalf, 'red')}</span>,
      away: <span>{calculateCardsAvgInPeriod(awayLeague, firstHalf, 'red')}</span>,
    },
    {
      label: (
        <div className="flex flex-col space-y-0.5">
          <TypographyMuted>2º Tempo</TypographyMuted>
          <TypographySmall>Média de gols</TypographySmall>
        </div>
      ),
      home: <span>{calculateGoalsAvgInPeriod(homeLeague, secondHalf)}</span>,
      away: <span>{calculateGoalsAvgInPeriod(awayLeague, secondHalf)}</span>,
    },
    {
      label: (
        <div className="flex flex-col space-y-0.5">
          <TypographyMuted>2º Tempo</TypographyMuted>
          <TypographySmall>Cartões amarelos</TypographySmall>
        </div>
      ),
      home: <span>{calculateCardsAvgInPeriod(homeLeague, secondHalf, 'yellow')}</span>,
      away: <span>{calculateCardsAvgInPeriod(awayLeague, secondHalf, 'yellow')}</span>,
    },
    {
      label: (
        <div className="flex flex-col space-y-0.5">
          <TypographyMuted>2º Tempo</TypographyMuted>
          <TypographySmall>Cartões vermelhos</TypographySmall>
        </div>
      ),
      home: <span>{calculateCardsAvgInPeriod(homeLeague, secondHalf, 'red')}</span>,
      away: <span>{calculateCardsAvgInPeriod(awayLeague, secondHalf, 'red')}</span>,
    },
    {
      label: (
        <div className="flex flex-col space-y-0.5">
          <TypographyMuted>Clean sheets</TypographyMuted>
          <TypographySmall>Total de jogos</TypographySmall>
        </div>
      ),
      home: <span>{getCleanSheetsStats(homeLeague).total}</span>,
      away: <span>{getCleanSheetsStats(awayLeague).total}</span>,
    },
    {
      label: (
        <div className="flex flex-col space-y-0.5">
          <TypographyMuted>Clean sheets</TypographyMuted>
          <TypographySmall>Porcentagem</TypographySmall>
        </div>
      ),
      home: <span>{getCleanSheetsStats(homeLeague).percent}%</span>,
      away: <span>{getCleanSheetsStats(awayLeague).percent}%</span>,
    },
    {
      label: (
        <div className="flex flex-col space-y-0.5">
          <TypographyMuted>Pênaltis</TypographyMuted>
          <TypographySmall>Convertidos</TypographySmall>
        </div>
      ),
      home: <span>{calculatePenaltyStats(homeLeague).scored}</span>,
      away: <span>{calculatePenaltyStats(awayLeague).scored}</span>,
    },
    {
      label: (
        <div className="flex flex-col space-y-0.5">
          <TypographyMuted>Pênaltis</TypographyMuted>
          <TypographySmall>Perdidos</TypographySmall>
        </div>
      ),
      home: <span>{calculatePenaltyStats(homeLeague).missed}</span>,
      away: <span>{calculatePenaltyStats(awayLeague).missed}</span>,
    }
  ];

  return (
    <div className="mt-6 divide-y">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-2"
        >
          <span className="w-20 text-start">
            <TypographySmall>{stat.home}</TypographySmall>
          </span>
          <span className="flex-1 text-center">
            {stat.label}
          </span>
          <span className="w-20 text-end">
            <TypographySmall>{stat.away}</TypographySmall>
          </span>
        </div>
      ))}
    </div>
  );
}
