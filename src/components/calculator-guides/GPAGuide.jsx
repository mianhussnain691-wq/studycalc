import Link from "next/link";

export default function GPAGuide() {
  const faqs = [
    {
      q: "What is the difference between GPA and CGPA?",
      a: "GPA (Grade Point Average) calculates your academic performance for a single semester, whereas CGPA (Cumulative Grade Point Average) is the overall average of all semesters combined throughout your degree."
    },
    {
      q: "Do failing grades (F) count towards GPA calculation?",
      a: "Yes, an 'F' grade contributes 0.00 grade points, but the credit hours of that course are still added to your total credit hours, which can significantly drop your overall GPA."
    },
    {
      q: "Are non-credit or audit courses included in GPA?",
      a: "No, courses registered as non-credit, audit, or pass/fail typically do not carry grade points and are excluded from the GPA mathematical formula."
    }
  ];

  const mistakes = [
    { title: "Ignoring Credit Hours", desc: "Forgetting that a 4-credit course affects your GPA much more than a 1-credit course." },
    { title: "Miscalculating F Grades", desc: "Assuming failed courses don't count. They add zero points but increase total credit hours." },
    { title: "Using Percentages Directly", desc: "Directly averaging your marks percentage instead of first converting them into specific scale grade points." }
  ];

  return (
    <section className="mx-auto mt-20 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 text-left">
      
      {/* 1. Header Section */}
      <div className="border-b border-slate-800 pb-8">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
          Ultimate GPA Calculator Guide
        </h2>
        <p className="mt-4 text-base sm:text-lg leading-8 text-slate-300">
          Our free academic GPA Calculator helps students analyze their semester Grade Point Average accurately using customized credit hours and standard scales. Whether you are tracking academic status, applying for scholarships, or aiming for global admissions, this layout provides precise breakdowns.
        </p>
      </div>

      {/* 2. What is GPA */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400">01.</span> What is GPA?
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          GPA stands for **Grade Point Average**. It is a standardized numerical index that maps out your academic standing across a single term. Institutions globally process alphanumeric grades (A, B, C) by transforming them into equivalent point systems weighted directly against course magnitudes (credits).
        </p>
      </div>

      {/* 3. The Formula */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400">02.</span> The Mathematical Formula
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          To derive an accurate GPA index, the total accumulative grade points acquired must be divided by the total count of credit hours attempted during that specific cycle.
        </p>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center shadow-inner">
          <p className="text-xl sm:text-2xl font-black text-cyan-400">
            GPA = Total Grade Points ÷ Total Credit Hours
          </p>
        </div>
      </div>

      {/* 4. Example Calculation Table */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400">03.</span> Step-by-Step Practical Example
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          Suppose a student attempts 4 courses during a standard university semester. Here is exactly how the system calculates the final result:
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/50">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-4 py-3.5 text-left">Subject</th>
                <th className="px-4 py-3.5 text-left">Credits (A)</th>
                <th className="px-4 py-3.5 text-left">Grade Point (B)</th>
                <th className="px-4 py-3.5 text-left">Total Points (A × B)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              <tr>
                <td className="px-4 py-3.5 font-medium text-white">Computer Science</td>
                <td className="px-4 py-3.5">3</td>
                <td className="px-4 py-3.5">4.0 (A)</td>
                <td className="px-4 py-3.5 text-cyan-400 font-semibold">12.0</td>
              </tr>
              <tr>
                <td className="px-4 py-3.5 font-medium text-white">Calculus & Algebra</td>
                <td className="px-4 py-3.5">4</td>
                <td className="px-4 py-3.5">3.7 (A-)</td>
                <td className="px-4 py-3.5 text-cyan-400 font-semibold">14.8</td>
              </tr>
              <tr>
                <td className="px-4 py-3.5 font-medium text-white">Quantum Physics</td>
                <td className="px-4 py-3.5">3</td>
                <td className="px-4 py-3.5">3.0 (B)</td>
                <td className="px-4 py-3.5 text-cyan-400 font-semibold">9.0</td>
              </tr>
              <tr>
                <td className="px-4 py-3.5 font-medium text-white">Technical Writing</td>
                <td className="px-4 py-3.5">2</td>
                <td className="px-4 py-3.5">3.3 (B+)</td>
                <td className="px-4 py-3.5 text-cyan-400 font-semibold">6.6</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-400 italic">
          Calculation: 42.4 Total Points ÷ 12 Total Credits = **3.53 GPA**
        </p>
      </div>

      {/* 5. Standard Grade Point Matrix */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400">04.</span> Standard Grade Scale Reference
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          Most global educational frameworks rely on this specific 4.0 scale configuration to match values:
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
          {[
            { g: "A (4.0)", p: "93–100%" },
            { g: "A- (3.7)", p: "90–92%" },
            { g: "B+ (3.3)", p: "87–89%" },
            { g: "B (3.0)", p: "83–86%" },
            { g: "B- (2.7)", p: "80–82%" },
            { g: "C+ (2.3)", p: "77–79%" },
            { g: "C (2.0)", p: "73–76%" },
            { g: "F (0.0)", p: "Below 60%" }
          ].map((item, idx) => (
            <div key={idx} className="rounded-lg bg-slate-950 p-3 border border-slate-800/60">
              <div className="font-bold text-white">{item.g}</div>
              <div className="text-xs text-slate-400 mt-1">{item.p}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Common Mistakes */}
      <div className="mt-16 border-t border-slate-800/60 pt-12">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          ⚠️ Common Calculation Pitfalls
        </h3>
        <div className="mt-6 grid sm:grid-cols-3 gap-6">
          {mistakes.map((m, idx) => (
            <div key={idx} className="rounded-xl border border-red-950/30 bg-red-950/10 p-5">
              <h4 className="font-bold text-red-400 text-base">{m.title}</h4>
              <p className="mt-2 text-sm text-slate-300 leading-6">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. FAQ Section */}
      <div className="mt-16 border-t border-slate-800/60 pt-12">
        <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl bg-slate-950/40 p-5 border border-slate-800/40">
              <h4 className="text-base font-semibold text-white flex items-start gap-2">
                <span className="text-cyan-400 font-mono">Q:</span> {faq.q}
              </h4>
              <p className="mt-2 text-sm text-slate-300 pl-6 leading-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 8. Related Articles & CTA Hub */}
      <div className="mt-16 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
        <div>
          <h4 className="text-lg font-bold text-white">Need Cumulative Tracking?</h4>
          <p className="text-sm text-slate-400 mt-1">Easily switch to calculate your multi-semester CGPA metrics instantly.</p>
        </div>
        <div className="mt-4 sm:mt-0 flex flex-wrap justify-center gap-3">
          <Link 
            href="/cgpa-calculator" 
            className="rounded-lg bg-cyan-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition shadow-md"
          >
            Calculate CGPA Now
          </Link>
          <Link 
            href="/blog/gpa-calculator-formula-explained" 
            className="rounded-lg bg-slate-800 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-700 transition border border-slate-700"
          >
            Read Deep Guide 📑
          </Link>
        </div>
      </div>

    </section>
  );
}