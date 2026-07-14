import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://studycalc.vercel.app"),

  title: {
    default: "StudyCalc - Free Student Calculators",
    template: "%s | StudyCalc",
  },

  description:
    "Free GPA, CGPA, Attendance, Percentage and Grade Calculators for students.",

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
    url: "https://studycalc.vercel.app",
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
  <Navbar />
  {children}


        <Footer />
</body>
    </html>



  );
}
