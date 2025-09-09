
import { FixtureData } from "@/types/fixture";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MatchEvents } from "@/components/match-events";
import { MatchLineups } from "@/components/match-lineups";
import { MatchStatistics } from "@/components/match-statistics";

export function MatchFixture({ data }: { data: FixtureData[] }) {
  const currentMatch = data[data.length - 1];

  return (
    <Tabs defaultValue="formations">
      <TabsList>
        <TabsTrigger value="formations">Formações</TabsTrigger>
        <TabsTrigger value="events">Eventos</TabsTrigger>
        <TabsTrigger value="statistics">Estatísticas</TabsTrigger>
      </TabsList>
      <TabsContent value="events">
        <MatchEvents teams={currentMatch.teams} />
      </TabsContent>
      <TabsContent value="formations">
        <MatchLineups />
      </TabsContent>
      <TabsContent value="statistics">
        <MatchStatistics />
      </TabsContent>
    </Tabs>
  );
}
