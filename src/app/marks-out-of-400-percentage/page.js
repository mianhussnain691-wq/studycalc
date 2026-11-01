"use client";

import MarksOutOfCalculator from "@/components/MarksOutOfCalculator";
import MarksOutOf400Guide from "@/components/calculator-guides/MarksOutOf400Guide";

export default function MarksOutOf400Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          Marks Out of 400 to Percentage
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Enter your marks out of 400 to get the exact percentage instantly.
        </p>

        <MarksOutOfCalculator total={400} />

        <MarksOutOf400Guide />

      </div>
    </main>
  );
}
