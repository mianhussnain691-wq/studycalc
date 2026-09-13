"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import tools from "@/data/tools";

const NAV_LINKS = [
  { label: "Home", icon: "🏠", href: "/", match: (p) => p === "/" },
  { label: "Tools", icon: "⊞", href: "/calculators", match: (p) => p === "/calculators" },
  { label: "Guides", icon: "📋", href: "/guides", match: (p) => p.startsWith("/guides") },
  { label: "Categories", icon: "⊟", href: "/#categories", match: () => false },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navSearch, setNavSearch] = useState("");
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      const currentY = window.scrollY;
      setHidden(currentY > lastScrollY.current && currentY > 80);
      lastScrollY.current = currentY;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navSuggestions =
    navSearch.trim() === ""
      ? []
      : tools
          .filter((tool) =>
            tool.title.toLowerCase().includes(navSearch.toLowerCase())
          )
          .slice(0, 5);

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-white/5 transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ background: "rgba(5,12,24,0.95)", backdropFilter: "blur(16px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 animate-fade-up">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shadow-lg icon-glass"
              style={{ background: "linear-gradient(135deg, #0ea5e9, #14b8a6)", "--glow": "rgba(20,184,166,0.6)" }}
            >
              🎓
            </div>
            <div>
              <span className="font-black text-white text-lg leading-none tracking-tight">
                Study<span className="text-teal-400">Calc</span>
              </span>
              <p className="text-[10px] text-slate-500 leading-none mt-0.5">Calculate • Plan • Achieve</p>
            </div>
          </Link>

          {/* Nav links */}
          <div className="hidden lg:flex items-center gap-6 animate-fade-up delay-100">
            {NAV_LINKS.map((item) => {
              const active = item.match(pathname);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium flex items-center gap-1.5 transition-all duration-200 ${
                    active ? "text-teal-400" : "text-slate-400 hover:text-white"
                  }`}
                  style={active ? { borderBottom: "2px solid #2dd4bf", paddingBottom: 2 } : {}}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right controls */}
          <div className="hidden lg:flex items-center gap-3 animate-fade-up delay-200 flex-shrink-0">
            <div className="relative group">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
              <input
                type="text"
                placeholder="Search tools, guides..."
                value={navSearch}
                onChange={(e) => setNavSearch(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-2 text-sm text-slate-300 placeholder-slate-500 focus:outline-none focus:border-teal-500/50 w-52 transition-all duration-300 focus:w-64"
              />

              {navSuggestions.length > 0 && (
                <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-80 overflow-y-auto overflow-x-hidden rounded-xl border border-white/10 shadow-2xl" style={{ background: "rgba(10,22,52,0.97)", backdropFilter: "blur(16px)" }}>
                  {navSuggestions.map((tool) => (
                    <Link
                      key={tool.title}
                      href={tool.href}
                      onClick={() => setNavSearch("")}
                      className="block border-b border-white/5 px-4 py-3 text-sm transition-all duration-200 hover:bg-teal-500/10 last:border-b-0 text-left text-slate-200"
                    >
                      {tool.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/calculators"
              className="px-5 py-2 rounded-full text-sm font-bold flex items-center gap-1.5 transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
              style={{ background: "linear-gradient(90deg, #2dd4bf, #22d3ee)", color: "#050d1a", boxShadow: "0 0 18px rgba(45,212,191,0.35)" }}
            >
              Explore Tools →
            </Link>
          </div>

          <button
            className="lg:hidden text-slate-400 hover:text-white text-xl"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/5 px-4 py-4 flex flex-col gap-3 animate-fade-up" style={{ background: "rgba(5,13,26,0.97)" }}>
          {NAV_LINKS.map((item) => {
            const active = item.match(pathname);
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm flex items-center gap-2 transition-colors ${active ? "text-teal-400" : "text-slate-300 hover:text-teal-400"}`}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/calculators"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 inline-block rounded-full px-5 py-2.5 text-center text-sm font-bold"
            style={{ background: "linear-gradient(90deg, #2dd4bf, #22d3ee)", color: "#050d1a" }}
          >
            Explore Tools →
          </Link>
        </div>
      )}
    </nav>
  );
}
