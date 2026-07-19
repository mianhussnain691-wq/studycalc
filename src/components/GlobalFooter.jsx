import Link from "next/link";

export default function GlobalFooter() {
  const calculationsTools = [
    { name: "Grade Calculator 🚀", href: "/grade-calculator" },
    { name: "CGPA Calculation Engine 📊", href: "/how-to-calculate-cgpa" },
    { name: "Attendance Optimizer 📅", href: "/attendance-percentage-formula" }
  ];

  const academicGuides = [
    { name: "Percentage Formula Explained", href: "/percentage-formula-explained" },
    { name: "Global GPA Scale Guide", href: "/gpa-scale-explained" },
    { name: "How to Calculate CGPA", href: "/how-to-calculate-cgpa" }
  ];

  return (
    <footer className="mt-24 border-t border-slate-800 bg-slate-950/80 backdrop-blur-md py-12 text-sm text-slate-400">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white font-black text-lg tracking-tight">
            <span>🔢</span> StudyCalc<span className="text-cyan-400">.co</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-500">
            Production-grade academic evaluation calculators and transcript verification frameworks engineered for higher education compliance standards.
          </p>
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} StudyCalc. All rights reserved.
          </p>
        </div>

        {/* Dynamic Tools Column */}
        <div>
          <h4 className="text-white font-bold tracking-wider uppercase text-xs mb-4 text-cyan-400">
            Calculation Engines
          </h4>
          <ul className="space-y-2.5">
            {calculationsTools.map((tool, idx) => (
              <li key={idx}>
                <Link href={tool.href} className="hover:text-white transition-colors">
                  {tool.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Academic Core Articles Column */}
        <div>
          <h4 className="text-white font-bold tracking-wider uppercase text-xs mb-4 text-violet-400">
            Academic Reference Logs
          </h4>
          <ul className="space-y-2.5">
            {academicGuides.map((guide, idx) => (
              <li key={idx}>
                <Link href={guide.href} className="hover:text-white transition-colors">
                  {guide.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}