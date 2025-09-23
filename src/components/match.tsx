import { FixtureData } from "@/types/fixture";

import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MatchHeader } from "./match-header";
import { MatchLineups } from "./match-lineups";
import { MatchEvents } from "./match-events";
import { MatchStatistics } from "./match-statistics";
import { MatchPredictions } from "./match-predictions";
import { MatchGols } from "./match-gols";
import { MatchCards } from "./match-cards";
import { MacthH2H } from "./match-h2h";

// mockup-data
import headtoheadData from "@/data/fixtures-headtohead.json";
import lineupsData from "@/data/fixtures-lineups.json";
import statisticsData from "@/data/fixtures-statistics.json";
import predictionsData from "@/data/predictions.json";

export function Match({ className }: { className?: string }) {
  const currentMatch: FixtureData =
    headtoheadData.response[headtoheadData.response.length - 1];

  const { h2h, teams, predictions } = predictionsData.response[0];

  const prediction = {
    teams: { ...teams },
    predictions: { ...predictions },
  };

  return (
    <section className={cn(className)}>
      <Card>
        <CardContent>
          <MatchHeader />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Tabs defaultValue="formations">
            <TabsList className="w-full">
              <TabsTrigger value="formations">Formações</TabsTrigger>
              <TabsTrigger value="events">Eventos</TabsTrigger>
              <TabsTrigger value="statistics">Estatísticas</TabsTrigger>
              <TabsTrigger value="prediction">Previsões</TabsTrigger>
              <TabsTrigger value="gols">Gols (TL)</TabsTrigger>
              <TabsTrigger value="cards">Cartões (TL)</TabsTrigger>
              <TabsTrigger value="h2h">H2H</TabsTrigger>
            </TabsList>
            <TabsContent value="formations">
              <MatchLineups data={lineupsData.response} />
            </TabsContent>
            <TabsContent value="events">
              <MatchEvents teams={currentMatch.teams} />
            </TabsContent>
            <TabsContent value="statistics">
              <MatchStatistics data={statisticsData.response} />
            </TabsContent>
            <TabsContent value="prediction">
              <MatchPredictions data={prediction} />
            </TabsContent>
            <TabsContent value="gols">
              <MatchGols data={teams} />
            </TabsContent>
            <TabsContent value="cards">
              <MatchCards data={teams} />
            </TabsContent>
            <TabsContent value="h2h">
              <MacthH2H data={h2h} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
}
