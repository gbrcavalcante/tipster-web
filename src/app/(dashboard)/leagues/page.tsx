import Link from "next/link";
import Image from "next/image";

import { API_SPORTS_LEAGUES } from "@/constants/api-sports-league";

import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe } from "lucide-react";

export default function LeaguesPage() {
  return (
    <section className="flex flex-col gap-6">
      <header>
        <TypographyH3>Ligas de Futebol</TypographyH3>
        <TypographyP>
          Acompanhe as principais competições de futebol mundial. Ligas
          europeias, sul-americanas e competições continentais com dados
          atualizados de classificação e estatísticas.
        </TypographyP>
      </header>
      <Separator />

      <div>
        {Object.entries(API_SPORTS_LEAGUES).map(([country, leagues], index) => {
          return (
            <Accordion type="single" collapsible key={index}>
              <AccordionItem value={country}>
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    {leagues[0].flag ? (
                      <Image
                        src={leagues[0].flag}
                        alt={`Logo da ${leagues[0].name}`}
                        width={16}
                        height={16}
                        className="w-[16px] h-[16px]"
                      />
                    ) : (
                      <Globe size={18} className="text-muted-foreground" />
                    )}
                    {leagues[0].country}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-5 gap-6 mt-6">
                    {leagues.map((league) => (
                      <Link href={`/league/${league.id}`} key={league.id}>
                        <Card className="hover:border-primary transition h-full">
                          <CardHeader className="text-center">
                            <CardTitle>{league.name}</CardTitle>
                          </CardHeader>
                          <CardContent className="flex justify-center items-center">
                            <div className="bg-white py-4 px-6 rounded-2xl">
                              <Image
                                src={league.logo}
                                alt={`Logo da ${league.name}`}
                                width={80}
                                height={80}
                                className="w-[80px] h-[80px]"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </section>
  );
}
