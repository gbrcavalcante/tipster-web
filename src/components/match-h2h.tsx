import Image from "next/image";

import { H2HMatch } from "@/types/predictions";
import { TypographyMuted, TypographySmall } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";

export function MacthH2H({ data }: { data: H2HMatch[] }) {
  return (
    <div className="mt-6">
      {data.map((match, index) => {
        const { fixture, teams, goals, league } = match;

        return (
          <div
            key={index}
            className="space-y-3 border-b last:border-none p-2"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col text-center space-y-2 min-w-[80px]">
                  <TypographyMuted>
                    {new Date(fixture.date).toLocaleDateString("pt-BR")}
                  </TypographyMuted>
                  <span className="text-xs font-medium">{league.name}</span>
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

              <div className="flex flex-col space-y-1">
                <span>{goals.home}</span>
                <span>{goals.away}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
