export const metadata = {
  title: "Dean's List Calculator",
  description: "Check if your GPA qualifies for the Dean's List — common threshold is 3.5+ GPA with 12+ credits. Free by StudyCalc.",
  alternates: {
    canonical: "https://www.studycalc.co/deans-list-calculator",
  },
  openGraph: {
    title: "Dean's List Calculator | StudyCalc",
    description: "See how close your GPA is to the common Dean's List threshold.",
    url: "https://www.studycalc.co/deans-list-calculator",
    siteName: "StudyCalc",
    type: "website",
  },
};

export default function DeansListLayout({ children }) {
  return children;
}
