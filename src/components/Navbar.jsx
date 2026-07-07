import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

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

        <div className="flex items-center gap-8 font-semibold">

          <Link href="/" className="transition hover:text-cyan-400">
            Home
          </Link>

          <Link href="/calculators" className="transition hover:text-cyan-400">
            Calculators
          </Link>

          <Link href="/contact" className="transition hover:text-cyan-400">
  Contact
</Link>

          <Link href="/about">
  About
</Link>


        </div>

      </div>
    </nav>
  );
}