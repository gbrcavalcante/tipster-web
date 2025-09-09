import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { TypographyMuted, TypographySmall } from "@/components/ui/typography";
import { H2HMatch } from "@/types/predictions";

interface PredictionH2HProps {
  matches: H2HMatch[];
}

export function PredictionH2H({ matches }: PredictionH2HProps) {
  return (
    <div className="mt-6">
      {matches.map((match, index) => {
        const { fixture, teams, goals } = match;
        return (
          <div
            key={index}
            className={`flex justify-between items-center px-1 py-2 ${
              index < matches.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="flex flex-col text-center space-y-1 min-w-[60px]">
                <TypographyMuted>
                  {new Date(fixture.date).toLocaleDateString("pt-BR")}
                </TypographyMuted>
                <span className="text-xs">{fixture.status.short}</span>
              </div>

              <Separator orientation="vertical" className="min-h-12" />

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Image
                    src={teams.home.logo}
                    alt={`Logo do ${teams.home.name}`}
                    width={24}
                    height={24}
                    style={{ width: "24px", height: "24px" }}
                  />
                  <TypographySmall>{teams.home.name}</TypographySmall>
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    src={teams.away.logo}
                    alt={`Logo do ${teams.away.name}`}
                    width={24}
                    height={24}
                    style={{ width: "24px", height: "24px" }}
                  />
                  <TypographySmall>{teams.away.name}</TypographySmall>
                </div>
              </div>
            </div>

            {goals.home !== null && goals.away !== null && (
              <div className="flex flex-col space-y-1">
                <span>{goals.home}</span>
                <span>{goals.away}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
