export const metadata = {
  title: "Semester Planning Dashboard",
  description: "See the GPA you need this semester, your credit load status, and whether you're on track for your target CGPA — all in one dashboard, free using StudyCalc.",
  alternates: {
    canonical: "https://www.studycalc.co/semester-planner",
  },
  openGraph: {
    title: "Semester Planning Dashboard | StudyCalc",
    description: "See the GPA you need this semester and your credit load status together, in one place.",
    url: "https://www.studycalc.co/semester-planner",
    siteName: "StudyCalc",
    type: "website",
  },
};

export default function SemesterPlannerLayout({ children }) {
  return children;
}
