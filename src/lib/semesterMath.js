// Shared math for GPA/CGPA target planning and credit-load classification.
// Single source of truth for target-gpa-calculator, target-cgpa-calculator,
// semester-credit-load-checker, and semester-planner, so all four tools stay
// mathematically identical by construction rather than by copy-paste.

export function computeNeededGpa({ current, currentCredits, target, remainingCredits }) {
  return (target * (currentCredits + remainingCredits) - current * currentCredits) / remainingCredits;
}

export function getCreditLoadStatus(credits) {
  if (credits < 12) {
    return {
      label: "Part-Time",
      color: "text-sky-400",
      message: "Below the common 12-credit full-time threshold. This can affect financial aid, insurance, and visa status eligibility at many institutions.",
    };
  }
  if (credits <= 17) {
    return {
      label: "Full-Time",
      color: "text-cyan-400",
      message: "Within the typical 12-17 credit full-time range most US institutions use.",
    };
  }
  return {
    label: "Overload",
    color: "text-amber-400",
    message: "At or above 18 credits, most schools classify this as an overload and may require advisor or dean approval.",
  };
}
