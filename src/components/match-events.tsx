"use client";

import { Teams } from "@/types/team";

import {
  goal,
  injury,
  missedPenalty,
  ownGoal,
  penalty,
  redCard,
  substitution,
  VARIcon,
  yellowCard,
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

const eventsMap: Record<string, React.ReactElement> = {
  Injury: injury,
  "Missed Penalty": missedPenalty,
  "Normal Goal": goal,
  "Own Goal": ownGoal,
  Penalty: penalty,
  "Red Card": redCard,
  "Substitution 1": substitution,
  "Substitution 2": substitution,
  "Substitution 3": substitution,
  "Substitution 4": substitution,
  "Substitution 5": substitution,
  "Goal confirmed": VARIcon,
  "Yellow Card": yellowCard,
};

const eventDetailMap: Record<string, string> = {
  "Normal Goal": "Gol",
  "Goal confirmed": "Gol confirmado",
  "Own Goal": "Gol contra",
  Penalty: "Pênalti",
  "Missed Penalty": "Pênalti perdido",
  "Red Card": "Cartão vermelho",
  "Yellow Card": "Cartão amarelo",
  "Substitution 1": "Substituição",
  "Substitution 2": "Substituição",
  "Substitution 3": "Substituição",
  "Substitution 4": "Substituição",
  "Substitution 5": "Substituição",
  Injury: "Lesão",
  VAR: "VAR",
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
                <TypographyMuted>{item.time.elapsed}{" '"}</TypographyMuted>
                <Tooltip>
                  <TooltipTrigger>{eventsMap[item.detail]}</TooltipTrigger>
                  <TooltipContent>
                    {eventDetailMap[item.detail] ?? item.detail}
                  </TooltipContent>
                </Tooltip>
                {item.type === "subst" ? (
                  <div className="flex flex-col gap-1">
                    <TypographyMuted>{item.player.name}</TypographyMuted>
                    {item.assist.name && (
                      <TypographySmall>
                        {item.assist.name}
                      </TypographySmall>
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
                      <TypographySmall>
                        {item.assist.name}
                      </TypographySmall>
                    )}
                  </div>
                ) : (
                  <TypographySmall>{item.player.name}</TypographySmall>
                )}
                <Tooltip>
                  <TooltipTrigger>{eventsMap[item.detail]}</TooltipTrigger>
                  <TooltipContent>
                    {eventDetailMap[item.detail] ?? item.detail}
                  </TooltipContent>
                </Tooltip>
                <TypographyMuted>{"' "}{item.time.elapsed}</TypographyMuted>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}