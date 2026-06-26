export default function GPACalculator() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <div className="max-w-5xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-black text-center">
          GPA Calculator
        </h1>

        <p className="text-center text-slate-400 mt-4">
          Calculate your semester GPA accurately using credit hours and grades.
        </p>

        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <div className="grid grid-cols-3 gap-4 font-semibold text-slate-300 mb-4">
            <div>Subject</div>
            <div>Credit Hours</div>
            <div>Grade</div>
          </div>

          <div className="grid grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Programming Fundamentals"
              className="rounded-lg bg-slate-800 p-3 outline-none"
            />

            <input
              type="number"
              placeholder="3"
              className="rounded-lg bg-slate-800 p-3 outline-none"
            />

            <select className="rounded-lg bg-slate-800 p-3">
              <option>A (4.0)</option>
              <option>A- (3.7)</option>
              <option>B+ (3.3)</option>
              <option>B (3.0)</option>
              <option>C (2.0)</option>
              <option>D (1.0)</option>
              <option>F (0.0)</option>
            </select>

          </div>

          <button className="mt-8 w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold hover:bg-cyan-600 transition">
            Calculate GPA
          </button>

        </div>

      </div>

    </main>
  );
}