import Image from "next/image";

import {
  Percent,
  Prediction,
  PredictionsApiResponse,
} from "@/types/predictions";

import { Stat, StatDescription, StatTitle } from "@/components/ui/stat";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PredictionTeamsGoals } from "@/components/prediction-gols";
import { PredictionTeamsLeague } from "@/components/prediction-league";
import { PredictionTeamsComparison } from "@/components/prediction-comparison";
import { PredictionTeamsCards } from "@/components/prediction-cards";
import { PredictionTeamsGoalsMinute } from "@/components/prediction-gols-minute";

import { PredictionH2H } from "@/components/prediction-h2h";
import data from "@/data/predictions.json";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { PredictionStats } from "./prediction-stats";

const percentLabels = {
  home: "Casa",
  draw: "Empate",
  away: "Fora",
} as const;

export function Predictions() {
  const predictionsData = data as PredictionsApiResponse;
  const dataPredictions: Prediction[] = predictionsData.response;
  const matchData = dataPredictions[0];
  const { predictions, teams, comparison, h2h } = matchData;

  return (
    <div className="hidden md:flex flex-col gap-3">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Previsões da partida</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <Image
              src={teams.home.logo}
              width={50}
              height={50}
              className="w-[50px] h-[50px]"
              alt={`Logo do ${teams.home.name}`}
            />
            <Image
              src={teams.away.logo}
              width={50}
              height={50}
              className="w-[50px] h-[50px]"
              alt={`Logo do ${teams.away.name}`}
            />
          </div>
          <div className="flex justify-between">
            {Object.entries(predictions.percent).map(([key, value]) => {
              return (
                <Stat key={key} className="text-center">
                  <StatTitle>{percentLabels[key as keyof Percent]}</StatTitle>
                  <StatDescription>{value}</StatDescription>
                </Stat>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Tabs defaultValue="h2h">
            <TabsList>
              <TabsTrigger value="h2h">H2H</TabsTrigger>
              <TabsTrigger value="stats">Estatísticas</TabsTrigger>
              <TabsTrigger value="comparison">Análise</TabsTrigger>
              <TabsTrigger value="league">Liga</TabsTrigger>
              <TabsTrigger value="gols">Gols</TabsTrigger>
              <TabsTrigger value="gols-minute">Timeline Gols</TabsTrigger>
              <TabsTrigger value="cards">Cartões</TabsTrigger>
            </TabsList>
            <TabsContent value="h2h">
              <PredictionH2H matches={h2h} />
            </TabsContent>
            <TabsContent value="league">
              <PredictionTeamsLeague teams={teams} />
            </TabsContent>
            <TabsContent value="gols">
              <PredictionTeamsGoals teams={teams} />
            </TabsContent>
            <TabsContent value="gols-minute">
              <PredictionTeamsGoalsMinute teams={teams} />
            </TabsContent>
            <TabsContent value="comparison">
              <PredictionTeamsComparison comparison={comparison} />
            </TabsContent>
            <TabsContent value="cards">
              <PredictionTeamsCards teams={teams} />
            </TabsContent>
               <TabsContent value="stats">
              <PredictionStats teams={teams} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
