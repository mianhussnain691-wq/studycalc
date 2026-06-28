import Link from "next/link";
export default function Home() {
  const tools = [
    {
      title: "GPA Calculator",
      desc: "Calculate your semester GPA accurately."
    },
    {
      title: "CGPA Calculator",
      desc: "Track your overall academic performance."
    },
    {
      title: "Attendance Calculator",
      desc: "Know how many classes you can miss."
    },
    {
      title: "Percentage Calculator",
      desc: "Convert marks into percentages instantly."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}

      <header className="border-b border-slate-800 sticky top-0 bg-slate-950/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-3xl font-black text-cyan-400">
            StudyCalc
          </h1>

          <nav className="hidden md:flex gap-8 text-slate-300">
            <a href="#">Home</a>
            <a href="#">Tools</a>
            <a href="#">Blog</a>
            <a href="#">About</a>
          </nav>

        </div>
      </header>

      {/* Hero */}

      <section className="max-w-6xl mx-auto text-center px-6 py-24">

        <span className="bg-cyan-500/20 text-cyan-300 px-5 py-2 rounded-full">
          Free Student Calculators
        </span>

        <h2 className="text-5xl md:text-7xl font-black mt-8 leading-tight">

          Calculate Smarter.
          <br />
          Study Better.

        </h2>

        <p className="text-slate-400 mt-8 text-lg max-w-2xl mx-auto">

          Professional calculators for university and school students.
          Fast, accurate and completely free.

        </p>

        <input
          type="text"
          placeholder="Search a calculator..."
          className="mt-10 w-full md:w-[650px] p-5 rounded-xl bg-slate-900 border border-slate-700 outline-none"
        />

      </section>

      {/* Popular Tools */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h3 className="text-3xl font-bold mb-10">
          Popular Tools
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

         <Link href="/gpa-calculator">

<div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-cyan-500/20 shadow-lg duration-300 transition cursor-pointer">
    <span className="inline-block mb-4 rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-400">
Popular
</span>
    <h2 className="text-2xl font-bold">
      GPA Calculator
    </h2>

    <p className="text-slate-400 mt-3">
      Calculate semester GPA quickly and accurately.
    </p>
<div className="mt-6 text-cyan-400 font-semibold">
  Open →
</div>
  </div>

</Link>

        </div>

      </section>

    </main>
  );
}