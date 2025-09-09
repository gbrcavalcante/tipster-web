import { FixtureData } from "@/types/fixture";

import { Card, CardContent } from "@/components/ui/card";
import { MatchHeader } from "@/components/match-header";
import { MatchFixture } from "./macth-fixture";

export function Match({ data }: { data: FixtureData[] }) {
  const currentMatch = data[data.length - 1];

  return (
    <section className="hidden md:flex flex-col gap-3">
      <Card>
        <CardContent>
          <MatchHeader currentMatch={currentMatch} />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <MatchFixture data={data} />
        </CardContent>
      </Card>
    </section>
  );
}
