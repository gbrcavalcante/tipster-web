import { getTotalCards } from "@/utils/get-total-cards";

import { TeamsPrediction } from "@/types/predictions";
import { TypographySmall } from "@/components/ui/typography";
import { OrDivider } from "@/components/ui/or-divider";

export function MatchCards({ data }: { data: TeamsPrediction }) {
  const { away, home } = data;

  // Totais de cartões
  const cardTotalsMetrics = [
    {
      homeValue: getTotalCards(home.league.cards.yellow),
      label: "Total de cartões amarelos",
      awayValue: getTotalCards(away.league.cards.yellow),
    },
    {
      homeValue: getTotalCards(home.league.cards.red),
      label: "Total de cartões vermelhos",
      awayValue: getTotalCards(away.league.cards.red),
    },
  ];

  const yellowCardTimelineMetrics = [
    {
      homeValue: `${home.league.cards.yellow["0-15"]?.total || 0} (${
        home.league.cards.yellow["0-15"]?.percentage || "0%"
      })`,
      label: "0-15min",
      awayValue: `${away.league.cards.yellow["0-15"]?.total || 0} (${
        away.league.cards.yellow["0-15"]?.percentage || "0%"
      })`,
    },
    {
      homeValue: `${home.league.cards.yellow["16-30"]?.total || 0} (${
        home.league.cards.yellow["16-30"]?.percentage || "0%"
      })`,
      label: "16-30min",
      awayValue: `${away.league.cards.yellow["16-30"]?.total || 0} (${
        away.league.cards.yellow["16-30"]?.percentage || "0%"
      })`,
    },
    {
      homeValue: `${home.league.cards.yellow["31-45"]?.total || 0} (${
        home.league.cards.yellow["31-45"]?.percentage || "0%"
      })`,
      label: "31-45min",
      awayValue: `${away.league.cards.yellow["31-45"]?.total || 0} (${
        away.league.cards.yellow["31-45"]?.percentage || "0%"
      })`,
    },
    {
      homeValue: `${home.league.cards.yellow["46-60"]?.total || 0} (${
        home.league.cards.yellow["46-60"]?.percentage || "0%"
      })`,
      label: "46-60min",
      awayValue: `${away.league.cards.yellow["46-60"]?.total || 0} (${
        away.league.cards.yellow["46-60"]?.percentage || "0%"
      })`,
    },
    {
      homeValue: `${home.league.cards.yellow["61-75"]?.total || 0} (${
        home.league.cards.yellow["61-75"]?.percentage || "0%"
      })`,
      label: "61-75min",
      awayValue: `${away.league.cards.yellow["61-75"]?.total || 0} (${
        away.league.cards.yellow["61-75"]?.percentage || "0%"
      })`,
    },
    {
      homeValue: `${home.league.cards.yellow["76-90"]?.total || 0} (${
        home.league.cards.yellow["76-90"]?.percentage || "0%"
      })`,
      label: "76-90min",
      awayValue: `${away.league.cards.yellow["76-90"]?.total || 0} (${
        away.league.cards.yellow["76-90"]?.percentage || "0%"
      })`,
    },
    {
      homeValue: `${home.league.cards.yellow["91-105"]?.total || 0} (${
        home.league.cards.yellow["91-105"]?.percentage || "0%"
      })`,
      label: "90min+",
      awayValue: `${away.league.cards.yellow["91-105"]?.total || 0} (${
        away.league.cards.yellow["91-105"]?.percentage || "0%"
      })`,
    },
  ].filter(
    (metric) => parseInt(metric.homeValue) > 0 || parseInt(metric.awayValue) > 0
  );

  const redCardTimelineMetrics = [
    {
      homeValue: `${home.league.cards.red["0-15"]?.total || 0} (${
        home.league.cards.red["0-15"]?.percentage || "0%"
      })`,
      label: "0-15min",
      awayValue: `${away.league.cards.red["0-15"]?.total || 0} (${
        away.league.cards.red["0-15"]?.percentage || "0%"
      })`,
    },
    {
      homeValue: `${home.league.cards.red["16-30"]?.total || 0} (${
        home.league.cards.red["16-30"]?.percentage || "0%"
      })`,
      label: "16-30min",
      awayValue: `${away.league.cards.red["16-30"]?.total || 0} (${
        away.league.cards.red["16-30"]?.percentage || "0%"
      })`,
    },
    {
      homeValue: `${home.league.cards.red["31-45"]?.total || 0} (${
        home.league.cards.red["31-45"]?.percentage || "0%"
      })`,
      label: "31-45min",
      awayValue: `${away.league.cards.red["31-45"]?.total || 0} (${
        away.league.cards.red["31-45"]?.percentage || "0%"
      })`,
    },
    {
      homeValue: `${home.league.cards.red["46-60"]?.total || 0} (${
        home.league.cards.red["46-60"]?.percentage || "0%"
      })`,
      label: "46-60min",
      awayValue: `${away.league.cards.red["46-60"]?.total || 0} (${
        away.league.cards.red["46-60"]?.percentage || "0%"
      })`,
    },
    {
      homeValue: `${home.league.cards.red["61-75"]?.total || 0} (${
        home.league.cards.red["61-75"]?.percentage || "0%"
      })`,
      label: "61-75min",
      awayValue: `${away.league.cards.red["61-75"]?.total || 0} (${
        away.league.cards.red["61-75"]?.percentage || "0%"
      })`,
    },
    {
      homeValue: `${home.league.cards.red["76-90"]?.total || 0} (${
        home.league.cards.red["76-90"]?.percentage || "0%"
      })`,
      label: "76-90min",
      awayValue: `${away.league.cards.red["76-90"]?.total || 0} (${
        away.league.cards.red["76-90"]?.percentage || "0%"
      })`,
    },
    {
      homeValue: `${home.league.cards.red["91-105"]?.total || 0} (${
        home.league.cards.red["91-105"]?.percentage || "0%"
      })`,
      label: "90min+",
      awayValue: `${away.league.cards.red["91-105"]?.total || 0} (${
        away.league.cards.red["91-105"]?.percentage || "0%"
      })`,
    },
  ].filter(
    (metric) => parseInt(metric.homeValue) > 0 || parseInt(metric.awayValue) > 0
  );

  const teamMetrics = {
    "Total de cartões": cardTotalsMetrics,
    "Timeline de cartões amarelos": yellowCardTimelineMetrics,
    "Timeline de cartões vermelhos": redCardTimelineMetrics,
  };

  return (
    <div className="mt-6 space-y-6">
      {Object.entries(teamMetrics).map(([key, value], index) => (
        <div key={index}>
          <OrDivider>{key}</OrDivider>
          {value.map((team, index) => (
            <div className="flex justify-between items-center mt-3" key={index}>
              <div className="w-[100px]">
                <TypographySmall>{team.homeValue}</TypographySmall>
              </div>
              <TypographySmall>{team.label}</TypographySmall>
              <div className="w-[100px] text-end">
                <TypographySmall>{team.awayValue}</TypographySmall>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
