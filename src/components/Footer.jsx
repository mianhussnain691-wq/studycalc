import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-4">

          <div>
            <h2 className="text-2xl font-black text-cyan-400">
              StudyCalc
            </h2>
            <p className="mt-4 text-slate-400">
              Free academic calculators for students worldwide.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">Calculators</h3>
            <ul className="mt-4 space-y-2 text-slate-400">
              <li><Link href="/gpa-calculator" className="hover:text-cyan-400 transition">GPA</Link></li>
              <li><Link href="/cgpa-calculator" className="hover:text-cyan-400 transition">CGPA</Link></li>
              <li><Link href="/attendance-calculator" className="hover:text-cyan-400 transition">Attendance</Link></li>
              <li><Link href="/percentage-calculator" className="hover:text-cyan-400 transition">Percentage</Link></li>
              <li><Link href="/grade-calculator" className="hover:text-cyan-400 transition">Grade</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-slate-400">
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-cyan-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-cyan-400 transition">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white">Version</h3>
            <p className="mt-4 text-slate-400">
              StudyCalc v1.0
            </p>
          </div>

        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-slate-500">
          © 2026 StudyCalc. All rights reserved.
        </div>

      </div>
    </footer>
  );
}