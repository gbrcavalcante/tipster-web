import { TeamsPrediction } from "@/types/predictions";
import { TypographyMuted, TypographySmall } from "@/components/ui/typography";

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

const minutePeriods = [
  "0-15",
  "16-30",
  "31-45",
  "46-60",
  "61-75",
  "76-90",
  "91-105",
  "106-120",
] as const;

export function PredictionTeamsGoalsMinute({
  teams,
}: {
  teams: TeamsPrediction;
}) {
  const {
    home: {
      league: { goals: homeGoals },
    },
    away: {
      league: { goals: awayGoals },
    },
  } = teams;

  const renderPeriodStats = (type: "for" | "against") => {
    const minuteData =
      type === "for" ? homeGoals.for.minute : homeGoals.against.minute;
    const awayMinuteData =
      type === "for" ? awayGoals.for.minute : awayGoals.against.minute;

    if (!minuteData || !awayMinuteData) return null;

    const title =
      type === "for"
        ? "Gols marcados por período"
        : "Gols sofridos por período";

    return (
      <div className="space-y-2 mt-6">
        <div className="text-center border-b pb-2">
          <TypographySmall>{title}</TypographySmall>
        </div>
        {minutePeriods.map((period) => {
          const homeData = minuteData[period];
          const awayData = awayMinuteData[period];

          if (
            homeData &&
            awayData &&
            (homeData.total !== null || awayData.total !== null)
          ) {
            return (
              <div
                key={`${type}-${period}`}
                className="flex items-center justify-between text-center"
              >
                <div className="w-20 text-start">
                  <TypographySmall>{`${homeData.total || 0} (${
                    homeData.percentage || "0%"
                  })`}</TypographySmall>
                </div>

                <TypographyMuted>{timePeriodsLabels[period]}</TypographyMuted>
                <div className="w-20 text-end">
                  <TypographySmall>{`${awayData.total || 0} (${
                    awayData.percentage || "0%"
                  })`}</TypographySmall>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {renderPeriodStats("for")}
      {renderPeriodStats("against")}
    </div>
  );
}
