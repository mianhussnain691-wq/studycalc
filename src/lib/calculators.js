// Pure credit-weighted-average math shared between the full calculator
// pages (GPA, CGPA) and their /embed/* counterparts, so the formula lives
// in exactly one place instead of being re-implemented per surface.
//
// GPA = Σ(Credit Hours × Grade Points) ÷ Σ(Credit Hours)
// CGPA = Σ(Semester GPA × Semester Credits) ÷ Σ(Semester Credits)
// Both are the same shape: a credit-weighted average.
export function weightedAverage(items) {
  // items: [{ value: number, weight: number }] — already-validated numbers.
  const totalWeight = items.reduce((sum, i) => sum + i.weight, 0);
  if (totalWeight === 0) return null;
  const totalWeighted = items.reduce((sum, i) => sum + i.value * i.weight, 0);
  return { average: totalWeighted / totalWeight, totalWeight, totalWeighted };
}
