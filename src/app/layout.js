import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.studycalc.co"),

  title: {
    default: "StudyCalc - Free Student Calculators",
    template: "%s | StudyCalc",
  },

  description:
    "Free GPA, CGPA, Attendance, Percentage, and Grade Calculators for students — instant results, no sign-up required, plus step-by-step guides and charts.",

  keywords: [
    "GPA Calculator",
    "CGPA Calculator",
    "Attendance Calculator",
    "Percentage Calculator",
    "Grade Calculator",
    "StudyCalc",
  ],

  authors: [{ name: "StudyCalc" }],

  openGraph: {
    title: "StudyCalc",
    description:
      "Free academic calculators for students worldwide.",
    url: "https://www.studycalc.co",
    siteName: "StudyCalc",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "StudyCalc",
    description:
      "Free academic calculators for students worldwide.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-slate-950 text-white">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}