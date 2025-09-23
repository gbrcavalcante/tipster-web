import { CardDistribution } from "@/types/predictions";

export function getTotalCards(cards: CardDistribution | undefined) {
  if (!cards) return 0;

  return Object.values(cards).reduce(
    (acc, currValue) => acc + currValue.total,
    0
  );
}
