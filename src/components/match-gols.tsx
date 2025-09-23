import { TeamsPrediction } from "@/types/predictions";
import { TypographySmall } from "@/components/ui/typography";
import { Divider } from "@/components/ui/divider";

export function MatchGols({ data }: { data: TeamsPrediction }) {
  const { away, home } = data;

  const goalTotalsMetrics = [
    {
      homeValue: home.league.goals.for.total.home || 0,
      label: "Total de gols marcados em casa",
      awayValue: away.league.goals.for.total.away || 0,
    },
    {
      homeValue: home.league.goals.for.total.away || 0,
      label: "Total de gols marcados fora",
      awayValue: away.league.goals.for.total.home || 0,
    },
    {
      homeValue: home.league.goals.for.total.total || 0,
      label: "Total de gols marcados",
      awayValue: away.league.goals.for.total.total || 0,
    },
    {
      homeValue: home.league.goals.against.total.home || 0,
      label: "Total de gols sofridos em casa",
      awayValue: away.league.goals.against.total.away || 0,
    },
    {
      homeValue: home.league.goals.against.total.away || 0,
      label: "Total de gols sofridos fora",
      awayValue: away.league.goals.against.total.home || 0,
    },
    {
      homeValue: home.league.goals.against.total.total || 0,
      label: "Total de gols sofridos",
      awayValue: away.league.goals.against.total.total || 0,
    },
  ];

  const goalTimelineMetrics = [
    {
      homeValue: `${home.league.goals.for.minute["0-15"]?.total || 0} (${
        home.league.goals.for.minute["0-15"]?.percentage || "0%"
      })`,
      label: "0-15min",
      awayValue: `${away.league.goals.for.minute["0-15"]?.total || 0} (${
        away.league.goals.for.minute["0-15"]?.percentage || "0%"
      })`,
    },
    {
      homeValue: `${home.league.goals.for.minute["16-30"]?.total || 0} (${
        home.league.goals.for.minute["16-30"]?.percentage || "0%"
      })`,
      label: "16-30min",
      awayValue: `${away.league.goals.for.minute["16-30"]?.total || 0} (${
        away.league.goals.for.minute["16-30"]?.percentage || "0%"
      })`,
    },
    {
      homeValue: `${home.league.goals.for.minute["31-45"]?.total || 0} (${
        home.league.goals.for.minute["31-45"]?.percentage || "0%"
      })`,
      label: "31-45min",
      awayValue: `${away.league.goals.for.minute["31-45"]?.total || 0} (${
        away.league.goals.for.minute["31-45"]?.percentage || "0%"
      })`,
    },
    {
      homeValue: `${home.league.goals.for.minute["46-60"]?.total || 0} (${
        home.league.goals.for.minute["46-60"]?.percentage || "0%"
      })`,
      label: "46-60min",
      awayValue: `${away.league.goals.for.minute["46-60"]?.total || 0} (${
        away.league.goals.for.minute["46-60"]?.percentage || "0%"
      })`,
    },
    {
      homeValue: `${home.league.goals.for.minute["61-75"]?.total || 0} (${
        home.league.goals.for.minute["61-75"]?.percentage || "0%"
      })`,
      label: "61-75min",
      awayValue: `${away.league.goals.for.minute["61-75"]?.total || 0} (${
        away.league.goals.for.minute["61-75"]?.percentage || "0%"
      })`,
    },
    {
      homeValue: `${home.league.goals.for.minute["76-90"]?.total || 0} (${
        home.league.goals.for.minute["76-90"]?.percentage || "0%"
      })`,
      label: "76-90min",
      awayValue: `${away.league.goals.for.minute["76-90"]?.total || 0} (${
        away.league.goals.for.minute["76-90"]?.percentage || "0%"
      })`,
    },
    {
      homeValue: `${home.league.goals.for.minute["91-105"]?.total || 0} (${
        home.league.goals.for.minute["91-105"]?.percentage || "0%"
      })`,
      label: "90min+",
      awayValue: `${away.league.goals.for.minute["91-105"]?.total || 0} (${
        away.league.goals.for.minute["91-105"]?.percentage || "0%"
      })`,
    },
  ].filter((metric) => {
    // Extrai o número total antes do parêntese para filtrar
    const homeTotal = parseInt(metric.homeValue.split(" ")[0]) || 0;
    const awayTotal = parseInt(metric.awayValue.split(" ")[0]) || 0;
    return homeTotal > 0 || awayTotal > 0;
  });

  const teamMetrics = {
    "Total de gols": goalTotalsMetrics,
    "Timeline de gols": goalTimelineMetrics,
  };

  return (
    <div className="mt-6 space-y-6">
      {Object.entries(teamMetrics).map(([key, value], index) => (
        <div key={index}>
          <Divider>{key}</Divider>
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
