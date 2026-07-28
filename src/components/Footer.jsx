// src/components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800 bg-[#070b19] relative">
      
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 py-16 relative z-10">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-white tracking-tight">
              Study<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Calc</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Free academic calculators and expert conversion guides for students worldwide.
            </p>
          </div>

          {/* Calculators Column */}
          <div>
            <h3 className="font-bold text-white text-xs tracking-wider uppercase">Calculators</h3>
            <ul className="mt-4 space-y-3 text-slate-400 text-sm">
              <li><Link href="/gpa-calculator" className="hover:text-cyan-400 transition-colors">GPA Calculator</Link></li>
              <li><Link href="/cgpa-calculator" className="hover:text-cyan-400 transition-colors">CGPA Calculator</Link></li>
              <li><Link href="/attendance-calculator" className="hover:text-cyan-400 transition-colors">Attendance Calculator</Link></li>
              <li><Link href="/percentage-calculator" className="hover:text-cyan-400 transition-colors">Percentage Calculator</Link></li>
              <li><Link href="/grade-calculator" className="hover:text-cyan-400 transition-colors">Grade Calculator</Link></li>
            </ul>
          </div>

          {/* Academic Guides Column */}
          <div>
            <h3 className="font-bold text-white text-xs tracking-wider uppercase">Academic Guides</h3>
            <ul className="mt-4 space-y-3 text-slate-400 text-sm">
              <li>
                <Link href="/percentage-formula-explained" className="hover:text-cyan-400 transition-colors">
                  Percentage Formula
                </Link>
              </li>
              <li>
                <Link href="/how-to-calculate-cgpa" className="hover:text-cyan-400 transition-colors">
                  How to Calculate CGPA
                </Link>
              </li>
              <li>
                <Link href="/gpa-scale-explained" className="hover:text-cyan-400 transition-colors">
                  GPA Scale Guide
                </Link>
              </li>
              <li>
                <Link href="/attendance-percentage-formula" className="hover:text-cyan-400 transition-colors">
                  Attendance Formula
                </Link>
              </li>
              <li className="pt-2">
                <Link 
                  href="/guides" 
                  className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-xs uppercase tracking-wider hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 shadow-lg shadow-cyan-500/10"
                >
                  Explore →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-bold text-white text-xs tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-3 text-slate-400 text-sm">
              <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-cyan-400 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="mt-16 border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} StudyCalc. All rights reserved.</p>
          <p className="mt-4 sm:mt-0 text-slate-400 font-medium">Designed for Academic Excellence 🚀</p>
        </div>

      </div>
    </footer>
  );
}