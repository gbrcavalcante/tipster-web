"use client";
import { Teams } from "@/types/team";
import {
  GoalIcon,
  InjuryIcon,
  OwnGoalIcon,
  PenaltyGoalIcon,
  PenaltyMissedIcon,
  RedCardIcon,
  SubstitutionIcon,
  VarIcon,
  YellowCardIcon,
} from "@/assets/icons";
import { TypographyMuted, TypographySmall } from "@/components/ui/typography";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// mockup-data
import dataEvents from "@/data/fixtures-events.json";
import { FixtureEvent } from "@/types/events";

type IconComponent = React.ComponentType<{ size?: number; className?: string }>;

const eventsMap: Record<string, IconComponent> = {
  "Injury": InjuryIcon,
  "Missed Penalty": PenaltyMissedIcon,
  "Normal Goal": GoalIcon,
  "Own Goal": OwnGoalIcon,
  "Penalty": PenaltyGoalIcon,
  "Red Card": RedCardIcon,
  "Substitution 1": SubstitutionIcon,
  "Substitution 2": SubstitutionIcon,
  "Substitution 3": SubstitutionIcon,
  "Substitution 4": SubstitutionIcon,
  "Substitution 5": SubstitutionIcon,
  "Goal confirmed": VarIcon,
  "Yellow Card": YellowCardIcon,
};

const eventDetailMap: Record<string, string> = {
  "Normal Goal": "Gol",
  "Goal confirmed": "Gol confirmado",
  "Own Goal": "Gol contra",
  "Penalty": "Pênalti",
  "Missed Penalty": "Pênalti perdido",
  "Red Card": "Cartão vermelho",
  "Yellow Card": "Cartão amarelo",
  "Substitution 1": "Substituição",
  "Substitution 2": "Substituição",
  "Substitution 3": "Substituição",
  "Substitution 4": "Substituição",
  "Substitution 5": "Substituição",
  "Injury": "Lesão",
  "VAR": "VAR",
};

const renderEventIcon = (eventType: string) => {
  const IconComponent = eventsMap[eventType];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent size={16} />;
};

export function MatchEvents({ teams }: { teams: Teams }) {
  const events = [...(dataEvents.response as FixtureEvent[])].reverse();

  return (
    <ul className="space-y-4 mt-6">
      {events.map((item, index) => {
        return (
          <li key={index}>
            {item.team.name === teams.home.name ? (
              <div className="flex items-center gap-3">
                <TypographyMuted>
                  {item.time.elapsed}
                  {"'"}
                </TypographyMuted>
                <Tooltip>
                  <TooltipTrigger>
                    {renderEventIcon(item.detail)}
                  </TooltipTrigger>
                  <TooltipContent>
                    {eventDetailMap[item.detail] ?? item.detail}
                  </TooltipContent>
                </Tooltip>
                {item.type === "subst" ? (
                  <div className="flex flex-col gap-1">
                    <TypographyMuted>{item.player.name}</TypographyMuted>
                    {item.assist.name && (
                      <TypographySmall>{item.assist.name}</TypographySmall>
                    )}
                  </div>
                ) : (
                  <TypographySmall>{item.player.name}</TypographySmall>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3 justify-end">
                {item.type === "subst" ? (
                  <div className="flex flex-col gap-1 text-end">
                    <TypographyMuted>{item.player.name}</TypographyMuted>
                    {item.assist.name && (
                      <TypographySmall>{item.assist.name}</TypographySmall>
                    )}
                  </div>
                ) : (
                  <TypographySmall>{item.player.name}</TypographySmall>
                )}
                <Tooltip>
                  <TooltipTrigger>
                    {renderEventIcon(item.detail)}
                  </TooltipTrigger>
                  <TooltipContent>
                    {eventDetailMap[item.detail] ?? item.detail}
                  </TooltipContent>
                </Tooltip>
                <TypographyMuted>
                  {"'"}
                  {item.time.elapsed}
                </TypographyMuted>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}