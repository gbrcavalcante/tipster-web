import { Comparison } from "@/types/predictions";
import { Progress } from "@/components/ui/progress";
import { TypographyMuted, TypographySmall } from "@/components/ui/typography";

const comparisonLabels = {
  form: "Momento Atual",
  att: "Força Ofensiva", 
  def: "Solidez Defensiva",
  poisson_distribution: "Análise Estatística",
  h2h: "Histórico de Confrontos",
  goals: "Capacidade de Gols",
  total: "Probabilidade Geral",
} as const;

export function PredictionTeamsComparison({
  comparison,
}: {
  comparison: Comparison;
}) {
  return (
    <div className="space-y-2 mt-6">
      {Object.entries(comparison).map(([key, value]) => {
        const { home, away } = value;
        const valueClear = home.replace(/\D/g, "").slice(0, 2);
        return (
          <div key={key} className="text-center space-y-1">
            <TypographyMuted>
              {comparisonLabels[key as keyof Comparison]}
            </TypographyMuted>
            <div className="flex items-center gap-3">
              <TypographySmall>{home}</TypographySmall>
              <Progress value={Number(valueClear)} />
              <TypographySmall>{away}</TypographySmall>
            </div>
          </div>
        );
      })}
    </div>
  );
}