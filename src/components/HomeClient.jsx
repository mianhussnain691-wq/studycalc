"use client";

import { useState } from "react";
import Link from "next/link";
import { Inter, Dancing_Script } from "next/font/google";
import tools from "@/data/tools";
import categories from "@/data/categories";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-dancing",
});

// Real tools curated for the default "Popular Tools" view — one from each
// real category plus GPA/CGPA as the flagship pair. The moment a search or
// category filter is active, the grid switches to every real matching tool
// from the full list below (see isFiltering), not just these six.
const CURATED_HREFS = [
  "/gpa-calculator",
  "/cgpa-calculator",
  "/attendance-calculator",
  "/semester-credit-load-checker",
  "/scholarship-gpa-checker",
  "/time-value-of-money-calculator",
];

// Real tools represented in the hero's floating-card illustration — replaces
// the reference's fake "Study Planner" / "Focus Timer" labels.
const FLOATING_CARDS = [
  { label: "GPA Calculator", icon: "🧮", accent: "#3b82f6", pos: { top: 0, left: 10 }, delay: "animate-float" },
  { label: "Attendance Tracker", icon: "📅", accent: "#10b981", pos: { top: 0, right: 0 }, delay: "animate-float-2" },
  { label: "Your Grades", icon: "📊", accent: "#f59e0b", pos: { bottom: 30, left: 0 }, delay: "animate-float-3" },
  { label: "Academic Planning", icon: "📋", accent: "#14b8a6", pos: { bottom: 30, right: 0 }, delay: "animate-float-4" },
];

// Verbatim from the approved reference — generic/aspirational, doesn't name
// a specific tool we don't have. Step 3's color only was changed off purple.
const JOURNEY_STEPS = [
  { icon: "🧮", step: "1. Calculate", desc: "Use our smart tools to get accurate results.", color: "#3b82f6" },
  { icon: "📅", step: "2. Plan", desc: "Organize your time, set your goals.", color: "#10b981" },
  { icon: "📖", step: "3. Study", desc: "Stay focused and build good habits.", color: "#f59e0b" },
  { icon: "🏆", step: "4. Succeed", desc: "Achieve your goals and go further.", color: "#14b8a6" },
];

const TWINKLE_DOTS = [
  { x: 20, y: 60, dur: "2.1s", del: "0s", size: 3 },
  { x: 55, y: 30, dur: "3.3s", del: "0.6s", size: 2 },
  { x: 90, y: 80, dur: "2.7s", del: "1.2s", size: 2.5 },
  { x: 130, y: 20, dur: "4s", del: "0.3s", size: 2 },
  { x: 180, y: 70, dur: "2.5s", del: "0.9s", size: 3 },
  { x: 30, y: 140, dur: "3.1s", del: "1.5s", size: 2 },
  { x: 160, y: 130, dur: "2.8s", del: "0.4s", size: 2.5 },
  { x: 80, y: 170, dur: "3.5s", del: "0.7s", size: 2 },
];

// Scattered background glow dots — one was purple in the reference, swapped
// for emerald.
const SCATTERED_DOTS = [
  { x: 100, y: 180, c: "#2dd4bf", s: 3.5 },
  { x: 70, y: 380, c: "#0ea5e9", s: 2.5 },
  { x: 320, y: 90, c: "#10b981", s: 2 },
  { x: 260, y: 460, c: "#2dd4bf", s: 3 },
  { x: 60, y: 560, c: "#0ea5e9", s: 2 },
  { x: 450, y: 200, c: "#14b8a6", s: 2.5 },
];

export default function HomeClient() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredTool, setHoveredTool] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const filteredTools = tools.filter((tool) => {
    const matchesSearch = tool.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !selectedCategory || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const suggestedTools = search.trim() === "" ? [] : filteredTools.slice(0, 5);

  const isFiltering = search.trim() !== "" || Boolean(selectedCategory);
  const curatedTools = CURATED_HREFS.map((href) => tools.find((t) => t.href === href)).filter(Boolean);
  const displayedTools = isFiltering ? filteredTools : curatedTools;

  function scrollToTools() {
    document.getElementById("popular-tools")?.scrollIntoView({ behavior: "smooth" });
  }

  function selectCategory(title) {
    setSelectedCategory((current) => (current === title ? null : title));
    scrollToTools();
  }

  function categoryVisual(tool) {
    return categories.find((c) => c.title === tool.category);
  }

  return (
    <div
      className={`${inter.className} min-h-screen relative overflow-x-hidden`}
      style={{ background: "linear-gradient(160deg, #050d1a 0%, #0a1a35 50%, #050d1a 100%)" }}
    >
      {/* Background layer */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="animate-pulse-glow absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, #14b8a6 0%, #0891b2 35%, transparent 70%)", filter: "blur(70px)", opacity: 0.22 }}
        />
        <div
          className="animate-pulse-glow absolute -bottom-60 -left-40 w-[550px] h-[550px] rounded-full"
          style={{ background: "radial-gradient(circle, #0ea5e9 0%, #1d4ed8 40%, transparent 70%)", filter: "blur(90px)", opacity: 0.16, animationDelay: "2s" }}
        />
        <div
          className="animate-pulse-glow absolute top-1/2 left-1/3 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)", filter: "blur(80px)", opacity: 0.08, animationDelay: "1s" }}
        />

        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.06 }}>
          <defs>
            <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#7dd3fc" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        <svg className="absolute top-8 right-0 opacity-[0.13]" width="540" height="540" viewBox="0 0 540 540" fill="none">
          <circle cx="410" cy="160" r="230" stroke="#2dd4bf" strokeWidth="1.5" />
          <circle cx="410" cy="160" r="175" stroke="#0ea5e9" strokeWidth="1" />
          <circle cx="410" cy="160" r="120" stroke="#2dd4bf" strokeWidth="0.7" />
        </svg>

        <div
          className="animate-spin-slow absolute top-20 right-20 opacity-[0.08]"
          style={{ width: 340, height: 340, border: "1px dashed #2dd4bf", borderRadius: "50%" }}
        />
        <div
          className="animate-spin-reverse absolute top-32 right-32 opacity-[0.05]"
          style={{ width: 260, height: 260, border: "1px dashed #0ea5e9", borderRadius: "50%" }}
        />

        {SCATTERED_DOTS.map((d, i) => (
          <svg
            key={i}
            className="absolute"
            style={{ left: d.x, top: d.y, animation: `twinkle ${2.5 + i * 0.4}s ease-in-out infinite ${i * 0.3}s` }}
            width={d.s * 2 + 10}
            height={d.s * 2 + 10}
          >
            <circle cx={d.s + 5} cy={d.s + 5} r={d.s} fill={d.c} style={{ filter: `drop-shadow(0 0 5px ${d.c})` }} />
          </svg>
        ))}

        <div
          className="absolute w-full"
          style={{ top: 560, height: 1, background: "linear-gradient(90deg, transparent, rgba(45,212,191,0.18), transparent)" }}
        />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center relative z-20">

        <div className="relative z-10">
          <div className="pointer-events-none absolute -left-10 -top-10 opacity-20">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              <circle cx="20" cy="20" r="160" stroke="#2dd4bf" strokeWidth="1" strokeDasharray="6 10" />
              <circle cx="20" cy="20" r="110" stroke="#0ea5e9" strokeWidth="0.7" strokeDasharray="4 14" />
            </svg>
          </div>

          <div className="pointer-events-none absolute inset-0">
            {TWINKLE_DOTS.map((d, i) => {
              const color = i % 3 === 0 ? "#2dd4bf" : i % 3 === 1 ? "#0ea5e9" : "#10b981";
              return (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    left: d.x,
                    top: d.y,
                    width: d.size * 2,
                    height: d.size * 2,
                    background: color,
                    boxShadow: `0 0 6px ${color}`,
                    animation: `twinkle ${d.dur} ease-in-out infinite ${d.del}`,
                  }}
                />
              );
            })}
          </div>

          <div
            className="animate-fade-up inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-teal-300 mb-6 animate-shimmer"
            style={{ border: "1px solid rgba(45,212,191,0.3)" }}
          >
            <span className="animate-pulse">⚡</span> Smart Tools for Smarter Students
          </div>

          <h1 className="animate-fade-up delay-100 text-4xl sm:text-5xl font-black text-white leading-tight mb-5 tracking-tight">
            Everything Students Need,<br />
            <span
              style={{
                background: "linear-gradient(90deg, #2dd4bf, #22d3ee, #10b981)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              In One Place.
            </span>
          </h1>

          <p className="animate-fade-up delay-200 text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
            Powerful calculators, helpful tools and easy-to-follow guides to make your academic journey simpler, faster and more productive.
          </p>

          <div
            className="relative animate-fade-up delay-300 flex items-center gap-2 rounded-2xl p-1.5 mb-6 max-w-lg"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <span className="pl-3 text-slate-400">🔍</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a tool (e.g. GPA Calculator...)"
              className="flex-1 bg-transparent text-sm text-slate-300 placeholder-slate-500 focus:outline-none px-2 py-2"
              style={{ color: "#e2e8f0", caretColor: "#2dd4bf" }}
            />
            <button
              onClick={scrollToTools}
              className="px-5 py-2 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(90deg, #2dd4bf, #22d3ee)", color: "#050d1a", boxShadow: "0 0 14px rgba(45,212,191,0.4)" }}
            >
              Search
            </button>

            {suggestedTools.length > 0 && (
              <div
                className="absolute left-0 right-0 top-full mt-2 z-50 max-h-80 overflow-y-auto overflow-x-hidden rounded-xl border border-white/10 shadow-2xl text-left"
                style={{ background: "rgba(10,22,52,0.97)", backdropFilter: "blur(16px)" }}
              >
                {suggestedTools.map((tool) => (
                  <Link
                    key={tool.title}
                    href={tool.href}
                    className="block border-b border-white/5 px-5 py-3 transition-all duration-200 hover:bg-teal-500/10 last:border-b-0"
                  >
                    <p className="font-semibold text-white text-sm">{tool.title}</p>
                    <p className="mt-0.5 text-xs text-slate-400">{tool.description}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="animate-fade-up delay-400 flex gap-6 mb-8">
            <div className="animate-pop" style={{ animationDelay: "0.4s" }}>
              <p
                className="text-xl font-black"
                style={{ background: "linear-gradient(90deg,#2dd4bf,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                {tools.length}+
              </p>
              <p className="text-slate-500 text-xs">Tools Available</p>
            </div>
          </div>

          <div className="animate-fade-up delay-500 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
            {[
              { icon: "🛡️", text: "Free to Use" },
              { icon: "👤", text: "No Registration" },
              { icon: "⚡", text: "Fast & Accurate" },
              { icon: "🖥️", text: "Works on All Devices" },
            ].map((b) => (
              <span key={b.text} className="flex items-center gap-1.5 hover:text-slate-300 transition-colors cursor-default">
                <span>{b.icon}</span> {b.text}
              </span>
            ))}
          </div>
        </div>

        {/* Right — floating cards */}
        <div className="hidden lg:block relative h-[440px] animate-fade-up delay-300">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div style={{ width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(20,184,166,0.18) 0%, rgba(14,165,233,0.10) 40%, transparent 70%)", filter: "blur(30px)" }} />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin-slow rounded-full" style={{ width: 300, height: 300, border: "1px dashed rgba(45,212,191,0.25)" }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin-reverse rounded-full" style={{ width: 210, height: 210, border: "1px dashed rgba(14,165,233,0.18)" }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin-slow rounded-full" style={{ width: 390, height: 390, border: "1px solid rgba(59,130,246,0.08)", animationDuration: "30s" }} />
          </div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.18 }}>
            <line x1="50%" y1="50%" x2="22%" y2="12%" stroke="#2dd4bf" strokeWidth="1" strokeDasharray="4 6" />
            <line x1="50%" y1="50%" x2="78%" y2="12%" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 6" />
            <line x1="50%" y1="50%" x2="16%" y2="82%" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 6" />
            <line x1="50%" y1="50%" x2="82%" y2="82%" stroke="#14b8a6" strokeWidth="1" strokeDasharray="4 6" />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div
              className="animate-float w-24 h-24 rounded-3xl flex items-center justify-center text-5xl shadow-2xl icon-glass"
              style={{ background: "linear-gradient(135deg, #0ea5e9, #14b8a6)", "--glow": "rgba(20,184,166,0.8)", boxShadow: "0 0 50px rgba(20,184,166,0.4), 0 0 100px rgba(20,184,166,0.15)" }}
            >
              🎓
            </div>
          </div>

          {FLOATING_CARDS.map((c) => (
            <Link
              key={c.label}
              href="/calculators"
              className={`floating-card absolute z-10 ${c.delay} rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl cursor-pointer`}
              style={{
                ...c.pos,
                background: "rgba(10,22,52,0.9)",
                border: `1px solid ${c.accent}33`,
                backdropFilter: "blur(16px)",
                minWidth: 155,
                transition: "box-shadow 0.3s, border-color 0.3s",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl icon-glass flex-shrink-0"
                style={{ background: `${c.accent}22`, border: `1px solid ${c.accent}44`, "--glow": c.accent + "99" }}
              >
                {c.icon}
              </div>
              <div>
                <p className="text-white text-sm font-bold leading-tight">{c.label}</p>
                <div className="h-1.5 w-14 rounded-full mt-1.5" style={{ background: `${c.accent}30` }} />
                <div className="h-1.5 w-9 rounded-full mt-1" style={{ background: `${c.accent}18` }} />
              </div>
            </Link>
          ))}

          <div className={`${dancingScript.className} absolute z-30 pointer-events-none`} style={{ left: 18, top: "50%", transform: "translateY(-50%)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L10 4L12 6L4 12H2V12Z" stroke="#2dd4bf" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
                <path d="M8 4L10 2L12 4L10 6L8 4Z" stroke="#2dd4bf" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
              </svg>
              <span style={{ fontSize: 15, color: "#5eead4", letterSpacing: "0.01em", lineHeight: 1.3, display: "block", textShadow: "0 0 16px rgba(45,212,191,0.55)" }}>
                Better Tools
              </span>
            </div>
            <span style={{ fontSize: 15, color: "#5eead4", letterSpacing: "0.01em", lineHeight: 1.3, display: "block", paddingLeft: 20, textShadow: "0 0 16px rgba(45,212,191,0.55)" }}>
              Brighter Future
            </span>
            <svg width="110" height="6" viewBox="0 0 110 6" fill="none" style={{ marginTop: 4, marginLeft: 20, opacity: 0.5 }}>
              <path d="M0 3 Q14 0 28 3 Q42 6 56 3 Q70 0 84 3 Q98 6 110 3" stroke="#2dd4bf" strokeWidth="1.2" fill="none" />
            </svg>
          </div>

          <div className={`${dancingScript.className} absolute z-30 pointer-events-none bottom-6 right-6 text-right`}>
            <span style={{ fontSize: 13, color: "#67e8f9", display: "block", lineHeight: 1.4, textShadow: "0 0 12px rgba(34,211,238,0.45)", opacity: 0.8 }}>
              Small Steps
            </span>
            <span style={{ fontSize: 13, color: "#67e8f9", display: "block", lineHeight: 1.4, textShadow: "0 0 12px rgba(34,211,238,0.45)", opacity: 0.8 }}>
              Big Goals
            </span>
            <svg width="70" height="5" viewBox="0 0 70 5" fill="none" style={{ marginTop: 3, marginLeft: "auto", opacity: 0.4 }}>
              <path d="M0 2.5 Q9 0 18 2.5 Q27 5 36 2.5 Q45 0 54 2.5 Q63 5 70 2.5" stroke="#67e8f9" strokeWidth="1" fill="none" />
            </svg>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div style={{ position: "relative", width: 390, height: 390 }}>
              <div
                className="animate-spin-slow absolute rounded-full"
                style={{ width: 8, height: 8, background: "#2dd4bf", top: -4, left: "50%", marginLeft: -4, boxShadow: "0 0 10px #2dd4bf", animationDuration: "30s" }}
              />
              <div
                className="animate-spin-reverse absolute rounded-full"
                style={{ width: 6, height: 6, background: "#10b981", bottom: -3, left: "50%", marginLeft: -3, boxShadow: "0 0 8px #10b981", animationDuration: "30s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tools */}
      <section id="popular-tools" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10 scroll-mt-16">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 animate-fade-up">
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-0.5" style={{ filter: "drop-shadow(0 0 8px #facc15)" }}>⭐</span>
            <div>
              <h2 className="text-2xl font-black text-white">
                {isFiltering ? (selectedCategory ? `${selectedCategory} Tools` : "Search Results") : "Popular Tools"}
              </h2>
              <p className="text-slate-400 text-sm">
                {isFiltering ? `${displayedTools.length} tool${displayedTools.length === 1 ? "" : "s"} found.` : "Most used tools by students, trusted by thousands."}
              </p>
            </div>
          </div>
          {isFiltering ? (
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory(null);
              }}
              className="text-teal-400 text-sm font-semibold hover:text-teal-300 transition-colors"
            >
              Clear filter ✕
            </button>
          ) : (
            <Link href="/calculators" className="text-teal-400 text-sm font-semibold hover:text-teal-300 flex items-center gap-1 transition-colors group">
              View All Tools <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Link>
          )}
        </div>

        {displayedTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedTools.map((t, i) => {
              const visual = categoryVisual(t) || {};
              return (
                <Link
                  key={t.title}
                  href={t.href}
                  className="tool-card relative block rounded-2xl p-5 cursor-pointer animate-fade-up"
                  style={{
                    background: "rgba(15,32,68,0.6)",
                    border: hoveredTool === t.title ? `1px solid ${visual.glow}55` : "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(8px)",
                    animationDelay: `${0.05 * i}s`,
                    boxShadow: hoveredTool === t.title ? `0 0 30px ${visual.glow}20` : "none",
                  }}
                  onMouseEnter={() => setHoveredTool(t.title)}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  {hoveredTool === t.title && (
                    <div
                      className="absolute top-0 left-4 right-4 h-px rounded-full pointer-events-none"
                      style={{ background: `linear-gradient(90deg, transparent, ${visual.glow}, transparent)` }}
                    />
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl icon-glass"
                      style={{ background: visual.iconBg, "--glow": (visual.glow || "#2dd4bf") + "99" }}
                    >
                      {visual.emoji}
                    </div>
                    {visual.title && (
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${visual.badgeColor}`}>{visual.title}</span>
                    )}
                  </div>
                  <h3 className="text-white font-bold mb-1.5 text-base">{t.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{t.description}</p>
                  <div className="flex justify-end">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                      style={{
                        background: hoveredTool === t.title ? visual.glow : "rgba(45,212,191,0.1)",
                        border: `1px solid ${hoveredTool === t.title ? visual.glow : "rgba(45,212,191,0.2)"}`,
                        color: hoveredTool === t.title ? "#050d1a" : "#2dd4bf",
                      }}
                    >
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="py-12 text-center">
            <h3 className="text-2xl font-bold text-slate-300">No calculator found 😔</h3>
            <p className="mt-2 text-slate-500">Try another search keyword.</p>
          </div>
        )}
      </section>

      {/* Browse by Category */}
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-20 scroll-mt-16">
        <div className="flex items-center gap-3 mb-6 animate-fade-up">
          <span className="text-teal-400 text-2xl">⊟</span>
          <div>
            <h2 className="text-2xl font-black text-white">Browse by Category</h2>
            <p className="text-slate-400 text-sm">Find the right tool for your needs.</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((c, i) => {
            const catTools = tools.filter((t) => t.category === c.title);
            return (
              <div
                key={c.title}
                className="relative"
                onMouseEnter={() => setHoveredCategory(c.title)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <button
                  onClick={() => selectCategory(c.title)}
                  className="cat-pill flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold animate-fade-up"
                  style={{
                    background: selectedCategory === c.title ? `${c.glow}22` : "rgba(255,255,255,0.03)",
                    border: `1px solid ${c.glow}59`,
                    color: c.glow,
                    animationDelay: `${0.06 * i}s`,
                    "--pill-glow": c.glow + "80",
                  }}
                >
                  <span>{c.emoji}</span>
                  {c.title}
                  <span className="opacity-60">→</span>
                </button>

                {hoveredCategory === c.title && (
                  <div
                    className="cat-dropdown absolute left-0 top-full mt-2 w-64 rounded-xl overflow-hidden z-30 shadow-2xl"
                    style={{ background: "rgba(10,22,52,0.97)", border: `1px solid ${c.glow}40`, backdropFilter: "blur(16px)" }}
                  >
                    <div
                      className="px-4 py-2.5 text-xs font-bold"
                      style={{ color: c.glow, borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      {catTools.length} tool{catTools.length === 1 ? "" : "s"} available
                    </div>
                    {catTools.slice(0, 3).map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        className="block px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
                      >
                        {t.title}
                      </Link>
                    ))}
                    {catTools.length > 3 && (
                      <button
                        onClick={() => selectCategory(c.title)}
                        className="block w-full text-left px-4 py-2 text-xs text-slate-400 border-t border-white/5 hover:bg-white/5 hover:text-white transition-colors"
                      >
                        +{catTools.length - 3} more — click to view all
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Your Student Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
        <div
          className="rounded-2xl px-8 py-10 grid grid-cols-1 md:grid-cols-5 gap-6 items-center animate-fade-up"
          style={{ background: "rgba(15,32,68,0.55)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(12px)" }}
        >
          <div className="md:col-span-1 flex items-center gap-3 md:border-r border-white/10 md:pr-6">
            <span className="text-3xl animate-float" style={{ filter: "drop-shadow(0 0 12px rgba(45,212,191,0.5))" }}>🚀</span>
            <div>
              <h3 className="text-white font-black text-lg leading-tight">Your Student Journey</h3>
              <p className="text-slate-400 text-sm">Simple steps. Big results.</p>
            </div>
          </div>

          {JOURNEY_STEPS.map((s, i) => (
            <div key={s.step} className="flex items-center gap-4 md:col-span-1">
              <div className="journey-step flex items-start gap-3 flex-1 group cursor-default">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 icon-glass transition-all duration-300"
                  style={{ background: `${s.color}18`, border: `1px solid ${s.color}40`, "--glow": s.color + "88" }}
                >
                  {s.icon}
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: s.color }}>{s.step}</p>
                  <p className="text-slate-400 text-xs leading-snug">{s.desc}</p>
                </div>
              </div>
              {i < JOURNEY_STEPS.length - 1 && (
                <span className="hidden md:block text-slate-600 flex-shrink-0 text-lg">→</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
