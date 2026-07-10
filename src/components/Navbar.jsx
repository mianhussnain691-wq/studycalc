"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
 const [menuOpen, setMenuOpen] = useState(false);
 const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
<div className="relative max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}

       <Link
  href="/"
  className="flex items-center gap-3 group"
>
 
  <h1 className="text-3xl font-extrabold tracking-tight">
    <span className="text-cyan-400">Study</span>
    <span className="text-white">Calc</span>
  </h1>



</Link>

        {/* Menu */}
<div className="hidden md:flex items-center gap-8 font-semibold">

        <Link
  href="/"
  className={`transition hover:text-cyan-400 ${
    pathname === "/"
      ?"text-cyan-400 border-b-[3px] border-cyan-400 pb-1"
      : "text-white"
  }`}
>
  Home
</Link>

          <Link
  href="/calculators"
  className={`transition hover:text-cyan-400 ${
   pathname === "/calculators"
  ? "text-cyan-400 border-b-[3px] border-cyan-400 pb-1"
  : "text-white"
  }`}
>
  Calculators
</Link>

          <Link
  href="/contact"
  className={`transition hover:text-cyan-400 ${
    pathname === "/contact"
      ? "text-cyan-400 border-b-[3px] border-cyan-400 pb-1"
      : "text-white"
  }`}
>
  Contact
</Link>

         <Link
  href="/about"
  className={`transition hover:text-cyan-400 ${
   pathname === "/about"
  ? "text-cyan-400 border-b-[3px] border-cyan-400 pb-1"
  : "text-white"
  }`}
>
  About
</Link>


        </div>

       <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-3xl text-white transition"
>
  {menuOpen ? "✕" : "☰"}
</button>

{menuOpen && (
  <div className="absolute left-0 top-full w-full border-t border-slate-800 bg-slate-900 md:hidden">

    <div className="flex flex-col p-6 gap-5 font-semibold">

      <Link
        href="/"
        onClick={() => setMenuOpen(false)}
        className="hover:text-cyan-400"
      >
        Home
      </Link>

      <Link
        href="/calculators"
        onClick={() => setMenuOpen(false)}
        className="hover:text-cyan-400"
      >
        Calculators
      </Link>

      <Link
        href="/about"
        onClick={() => setMenuOpen(false)}
        className="hover:text-cyan-400"
      >
        About
      </Link>

      <Link
        href="/contact"
        onClick={() => setMenuOpen(false)}
        className="hover:text-cyan-400"
      >
        Contact
      </Link>

    </div>

  </div>
)}



      </div>
    </nav>
  );
}