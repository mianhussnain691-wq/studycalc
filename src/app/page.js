import HomeClient from "@/components/HomeClient";

export const metadata = {
  title: "StudyCalc - Free Student Calculators",
  description: "Free GPA, CGPA, Attendance, Percentage, and Grade Calculators for students — instant results, no sign-up required, plus step-by-step guides and charts.",
  alternates: {
    canonical: "https://www.studycalc.co/",
  },
  openGraph: {
    title: "StudyCalc - Free Student Calculators",
    description: "Free GPA, CGPA, Attendance, Percentage and Grade Calculators for students.",
    url: "https://www.studycalc.co/",
    siteName: "StudyCalc",
    type: "website",
  },
};

export default function Home() {
  return <HomeClient />;
}