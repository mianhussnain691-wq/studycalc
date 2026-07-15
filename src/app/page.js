"use client";

import { useState } from "react";
import ToolCard from "@/components/ToolCard";
import tools from "@/data/tools";
import categories from "@/data/categories";
import stats from "@/data/stats";
import Link from "next/link";
import { Search } from "lucide-react";

export default function Home() {
 
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTools = tools.filter((tool) => {
    const matchesSearch = tool.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      tool.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const suggestedTools =
    search.trim() === ""
      ? []
      : filteredTools.slice(0, 5);

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="max-w-6xl mx-auto text-center px-6 py-24">

        <span className="bg-cyan-500/20 text-cyan-300 px-5 py-2 rounded-full font-semibold">
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

        <div className="relative mx-auto w-full md:w-[650px] mt-8">
          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search a calculator..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 py-5 pl-14 pr-5 outline-none text-white"
          />

          {suggestedTools.length > 0 && (
            <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl shadow-cyan-500/10">
              {suggestedTools.map((tool) => (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className="block border-b border-slate-800 px-5 py-4 transition-all duration-200 hover:bg-cyan-500/10 last:border-b-0 text-left"
                >
                  <p className="font-semibold text-white">
                    {tool.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    {tool.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["All", "University", "School", "Attendance"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2 font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30"
                  : "bg-slate-800 text-white hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#popular-tools"
            className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-950 hover:bg-cyan-400 transition text-center"
          >
            Explore Tools
          </a>

          <a
            href="/gpa-calculator"
            className="rounded-xl border border-slate-700 px-8 py-4 font-bold hover:border-cyan-400 hover:text-cyan-400 transition text-center text-white"
          >
            Try GPA Calculator
          </a>
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-slate-900 p-10">
          <span className="inline-block rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-400 font-semibold">
            ⭐ Featured Calculator
          </span>

          <h2 className="mt-6 text-4xl font-black text-white">
            GPA Calculator
          </h2>

          <p className="mt-4 max-w-2xl text-slate-300">
            Our most popular calculator. Calculate your semester GPA instantly with
            grade points, credit hours and real-time results.
          </p>

          <a
            href="/gpa-calculator"
            className="mt-8 inline-block rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-950 hover:bg-cyan-400 transition"
          >
            Open GPA Calculator →
          </a>
        </div>
      </section>

      {/* Popular Tools */}
      <section id="popular-tools" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-10 text-white">
          Popular Tools
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <ToolCard
                key={tool.title}
                {...tool}
              />
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <h3 className="text-2xl font-bold text-slate-300">
                No calculator found 😔
              </h3>
              <p className="mt-2 text-slate-500">
                Try another search keyword.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Browse by Category */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-10">
          Browse by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:border-cyan-500 cursor-pointer"
            >
              <h3 className="text-xl font-bold text-cyan-400">
                {category.title}
              </h3>
              <p className="text-slate-400 mt-2">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Trusted By Students
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
            >
              <h3 className="text-5xl font-black text-cyan-400">
                {stat.number}
              </h3>
              <p className="mt-4 text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}