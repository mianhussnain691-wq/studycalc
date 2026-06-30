
import ToolCard from "@/components/ToolCard";
export default function Home() {
 
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
<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
  <a
    href="#popular-tools"
    className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-950 hover:bg-cyan-400 transition text-center"
  >
    Explore Tools
  </a>

  <a
    href="/gpa-calculator"
    className="rounded-xl border border-slate-700 px-8 py-4 font-bold hover:border-cyan-400 hover:text-cyan-400 transition text-center"
  >
    Try GPA Calculator
  </a>
</div>
      </section>

      {/* Popular Tools */}

      <section id="popular-tools" className="max-w-6xl mx-auto px-6 py-20">

        <h3 className="text-3xl font-bold mb-10">
          Popular Tools
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 <ToolCard
    title="GPA Calculator"
    description="Calculate your semester GPA quickly and accurately."
    href="/gpa-calculator"
    badge="Popular"
    badgeColor="bg-cyan-500/20 text-cyan-400"
  />

  <ToolCard
    title="CGPA Calculator"
    description="Calculate your overall CGPA."
      href="/cgpa-calculator"

    badge="New"
    badgeColor="bg-green-500/20 text-green-400"
    
  />
<ToolCard
  title="Attendance Calculator"
  description="Check your attendance percentage."
  href="/attendance-calculator"
  badge="Useful"
  badgeColor="bg-orange-500/20 text-orange-400"
/>

<ToolCard
  title="Percentage Calculator"
  description="Convert marks into percentage."
  href="/percentage-calculator"
  badge="Coming Soon"
  badgeColor="bg-purple-500/20 text-purple-400"
/>
</div>
        

      </section>
      <section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="text-4xl font-bold text-white mb-10">
    Browse by Category
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    <div className="rounded-xl bg-slate-900 border border-slate-800 p-6 hover:border-cyan-500 transition cursor-pointer">
      <h3 className="text-xl font-bold text-cyan-400">
        University
      </h3>
      <p className="text-slate-400 mt-2">
        GPA, CGPA and Semester calculators.
      </p>
    </div>

    <div className="rounded-xl bg-slate-900 border border-slate-800 p-6 hover:border-cyan-500 transition cursor-pointer">
      <h3 className="text-xl font-bold text-cyan-400">
        School
      </h3>
      <p className="text-slate-400 mt-2">
        Percentage and Grade calculators.
      </p>
    </div>

    <div className="rounded-xl bg-slate-900 border border-slate-800 p-6 hover:border-cyan-500 transition cursor-pointer">
      <h3 className="text-xl font-bold text-cyan-400">
        Attendance
      </h3>
      <p className="text-slate-400 mt-2">
        Track attendance and required classes.
      </p>
    </div>

    <div className="rounded-xl bg-slate-900 border border-slate-800 p-6 hover:border-cyan-500 transition cursor-pointer">
      <h3 className="text-xl font-bold text-cyan-400">
        Finance
      </h3>
      <p className="text-slate-400 mt-2">
        Loan, EMI and savings calculators.
      </p>
    </div>

  </div>

</section>

<section className="max-w-6xl mx-auto px-6 py-24">

  <h2 className="text-4xl font-bold text-center mb-16">
    Trusted By Students
  </h2>

  <div className="grid md:grid-cols-4 gap-8 text-center">

    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8">
      <h3 className="text-5xl font-black text-cyan-400">
        10K+
      </h3>

      <p className="text-slate-400 mt-4">
        Calculations
      </p>
    </div>

    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8">
      <h3 className="text-5xl font-black text-cyan-400">
        99.9%
      </h3>

      <p className="text-slate-400 mt-4">
        Accuracy
      </p>
    </div>

    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8">
      <h3 className="text-5xl font-black text-cyan-400">
        100%
      </h3>

      <p className="text-slate-400 mt-4">
        Free
      </p>
    </div>

    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8">
      <h3 className="text-5xl font-black text-cyan-400">
        24/7
      </h3>

      <p className="text-slate-400 mt-4">
        Available
      </p>
    </div>

  </div>

</section>

<footer className="mt-28 border-t border-slate-800">
  <div className="max-w-7xl mx-auto px-6 py-14">

    <div className="grid md:grid-cols-4 gap-10">

      <div>
        <h2 className="text-3xl font-black text-cyan-400">
          StudyCalc
        </h2>

        <p className="text-slate-400 mt-4">
          Professional student calculators made for universities and schools.
        </p>
      </div>

      <div>
        <h3 className="font-bold mb-4">
          Calculators
        </h3>

        <ul className="space-y-2 text-slate-400">
          <li>GPA Calculator</li>
          <li>CGPA Calculator</li>
          <li>Attendance Calculator</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold mb-4">
          Company
        </h3>

        <ul className="space-y-2 text-slate-400">
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold mb-4">
          Legal
        </h3>

        <ul className="space-y-2 text-slate-400">
          <li>Privacy Policy</li>
          <li>Terms</li>
        </ul>
      </div>

    </div>

    <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-500">
      © 2026 StudyCalc. All Rights Reserved.
    </div>

  </div>
</footer>
    </main>
  );
}