import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TypographyH3, TypographyP } from "@/components/ui/typography";

import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { Match } from "@/components/match";
import { Predictions } from "@/components/predictions";

import dataRounds from "@/data/fixtures.json";
import dataHeadToHead from "@/data/fixtures-headtohead.json";

export default function Home() {
  return (
    <main className="flex flex-col gap-6">
      <div className="flex justify-between items-center gap-6">
        <header>
          <TypographyH3>Partidas de Hoje</TypographyH3>
          <TypographyP>
            Selecione os partidas para análise detalhada. Receba previsões
            precisas baseadas em estatísticas avançadas.
          </TypographyP>
        </header>
        <Button className="hidden md:block">Analisar Partidas</Button>
      </div>
      <Separator />
      <section className="grid gap-3 grid-cols-1 md:grid-cols-3 items-start">
        <Card>
          <CardContent>
            <DataTable columns={columns} data={dataRounds.response} />
          </CardContent>
        </Card>

        <Match data={dataHeadToHead.response} />
        <Predictions />
      </section>

      <Button className="hidden max-md:block">Analisar Partidas</Button>
    </main>
  );
}
