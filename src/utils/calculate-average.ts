export function calculateAverage(
  total: number,
  matchs: number
) {
  if (!total || !matchs) return 0;
  return Number((total / matchs).toFixed(2));
}