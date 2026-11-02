"use client";

import MarksOutOfCalculator from "@/components/MarksOutOfCalculator";
import MarksOutOf1100Guide from "@/components/calculator-guides/MarksOutOf1100Guide";

export default function MarksOutOf1100Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          Marks Out of 1100 to Percentage
        </h1>

        <p className="mt-4 text-center text-slate-400">
          The total Pakistani Intermediate (FSc/HSSC) boards use — enter your combined Part I + Part II marks.
        </p>

        <MarksOutOfCalculator total={1100} />

        <MarksOutOf1100Guide />

      </div>
    </main>
  );
}
