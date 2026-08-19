import Link from "next/link";

export default function AttendancePercentage() {
  const faqs = [
    {
      q: "What attendance percentage do I need to sit my exams?",
      a: "Most schools and universities set the bar at 75%, though some go as low as 65% or as high as 80%. If you drop below your school's threshold, you're usually blocked from the final exam for that course, no matter how well you've been doing in your assignments."
    },
    {
      q: "Does an excused absence still count against me?",
      a: "It depends on your institution, but most treat a properly excused absence (medical certificate, official leave) differently — it's typically removed from the total class count rather than counted as a miss, so it shouldn't drag your percentage down the way an unexcused absence would."
    },
    {
      q: "I have a 4.0 GPA — can that make up for low attendance?",
      a: "Almost never. Grades and attendance are tracked as two completely separate requirements. A perfect academic record doesn't override an attendance rule, and you can technically fail a course on attendance alone even with top marks in every assignment."
    },
    {
      q: "How do I figure out exactly how many classes I can afford to miss?",
      a: "Use this: Classes you can miss = Total classes minus (Total classes times your target percentage). So if your semester has 60 classes and you need 75%, you can miss up to 15 and still hit exactly 75%. Miss one more, and you're below the line."
    },
    {
      q: "Do online classes get counted the same way?",
      a: "Usually yes, just measured differently — instead of physical presence, most platforms track whether you watched the lecture, logged into the portal, or posted in a discussion thread. It still gets converted into the same kind of percentage at the end."
    },
    {
      q: "Can attendance affect my actual grade, not just exam eligibility?",
      a: "In a lot of courses, yes. It's common for 5-10% of your final grade to be tied directly to participation and attendance, separate from the eligibility cutoff. Missing classes can quietly cost you points even before you get near the exam-ban threshold."
    },
    {
      q: "My attendance just dropped below the cutoff — what now?",
      a: "Talk to your advisor or professor as soon as possible, not after the semester ends. Many departments have a formal appeal process, a chance to submit makeup work, or a documented-hardship exception — but almost all of them have deadlines, so don't wait."
    },
    {
      q: "Is there a quick way to check where I stand right now?",
      a: "Yes — plug your numbers into the attendance calculator below and it'll instantly tell you your current percentage and how many classes you have left to safely miss, or need to attend, to stay eligible."
    },
    {
      q: "Do universities and high schools use the same attendance rules?",
      a: "Not always. High schools often enforce stricter, daily-tracked attendance tied to parental notification, while universities tend to set a single semester-long percentage threshold per course, with less day-to-day monitoring but harsher exam-eligibility consequences."
    },
    {
      q: "What's a realistic attendance percentage to aim for if I want a safety buffer?",
      a: "If your minimum requirement is 75%, aim to stay around 85-90% through the first half of the semester. That buffer means one bad week — sickness, travel, an emergency — won't push you anywhere near the danger zone."
    },
    {
      q: "If I switch majors or transfer schools mid-year, does my attendance record carry over?",
      a: "No — attendance percentage almost always resets per course and per term, not per student across their whole academic history. A transfer or major change starts your attendance tracking fresh at the new institution or in the new course, so a past shortage won't follow you, but neither will a past buffer."
    },
    {
      q: "Does arriving late to class count as a full absence?",
      a: "It depends entirely on the instructor's own policy. Some count lateness beyond a set number of minutes as a full absence, others mark it separately as a partial or 'tardy' record that only becomes a problem after repeated occurrences. Check your syllabus, since this detail is rarely covered by the general school-wide attendance policy."
    }
  ];

  const categories = [
    { range: "90% – 100%", status: "Excellent", color: "text-emerald-400", impact: "Comfortably clear of any cutoff. You've got room to miss a class or two without any real risk." },
    { range: "80% – 89%", status: "Good standing", color: "text-cyan-400", impact: "Meets the requirement at almost every school, with a reasonable buffer left for the rest of the term." },
    { range: "75% – 79%", status: "Cutting it close", color: "text-yellow-400", impact: "You're technically eligible, but one more absence could put you at risk depending on your school's exact rule." },
    { range: "Below 75%", status: "At risk", color: "text-red-400", impact: "Likely below the standard exam eligibility line — talk to your advisor before this goes any further." }
  ];

  const frameworks = [
    { step: "1", title: "Count how many classes have actually happened", desc: "Check your syllabus or ask your instructor for the total number of sessions held so far this term — not the number scheduled for the whole semester, just what's happened up to today." },
    { step: "2", title: "Count how many of those you attended", desc: "Add up every session you were physically there for, or that you were officially marked present for online." },
    { step: "3", title: "Divide and multiply by 100", desc: "Attended divided by held, then multiply by 100. That's your current attendance percentage — the same number your school's system is tracking." }
  ];

  const scenarioTable = [
    { total: "30 classes", target: "75%", canMiss: "7 classes" },
    { total: "40 classes", target: "75%", canMiss: "10 classes" },
    { total: "60 classes", target: "75%", canMiss: "15 classes" },
    { total: "60 classes", target: "80%", canMiss: "12 classes" },
    { total: "100 classes", target: "75%", canMiss: "25 classes" },
  ];

  return (
    <article className="mx-auto mt-12 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 text-left">

      {/* Article Header */}
      <div className="border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/20 mb-4">
          Attendance Guide
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Attendance Percentage Formula: How Many Classes Can You Actually Miss?
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-8 text-slate-300">
          Almost every school and university has some version of the same rule: fall below a certain attendance percentage, and you lose the right to sit your exams, regardless of how good your grades are. This guide walks through exactly how that percentage is calculated, how many classes you can realistically miss before it becomes a problem, and what to do if you're already close to the line.
        </p>
      </div>

      {/* Section 1: Why it matters */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">01.</span> Why Attendance Percentage Actually Matters
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          Attendance percentage is simply the share of classes you've shown up to, out of every class that's been held so far. It sounds like a minor administrative detail, but at most institutions it's a hard eligibility gate, completely separate from your grades. You can be acing every quiz and still get barred from the final exam if your attendance drops too low.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          The logic behind it is straightforward: a lot of course material only really clicks when you're in the room for the explanation, the examples, and the questions other students ask. Missing too many sessions doesn't just look bad on paper, it tends to show up in your actual understanding, which is part of why so many schools treat it as non-negotiable. If you're also tracking how those missed points affect your overall marks, our <Link href="/percentage-calculator" className="text-cyan-400 hover:underline">Percentage Calculator</Link> can help you see the full picture.
        </p>
      </div>

      {/* Section 2: Mathematical Formula */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">02.</span> The Formula
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          There's really only one formula you need, and it's simple enough to do in your head once you know the two numbers:
        </p>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center shadow-inner">
          <p className="text-xl sm:text-2xl font-black text-cyan-400 tracking-wide">
            Attendance % = (Classes Attended ÷ Classes Held) × 100
          </p>
        </div>
        <p className="mt-4 leading-7 text-slate-300 text-sm">
          For example, if 40 classes have been held so far this term and you've attended 34 of them: 34 ÷ 40 = 0.85, times 100 gives you <strong className="text-white">85%</strong>.
        </p>
      </div>

      {/* Section 3: Procedural Steps */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">03.</span> How to Calculate Yours, Step by Step
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          If you want to check where you actually stand right now, here's the process:
        </p>
        <div className="mt-6 space-y-4">
          {frameworks.map((f) => (
            <div key={f.step} className="flex gap-4 rounded-xl bg-slate-950/50 p-5 border border-slate-800/60">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 font-mono text-sm font-bold text-cyan-400 border border-cyan-500/20">
                {f.step}
              </span>
              <div>
                <h4 className="text-base font-bold text-white">{f.title}</h4>
                <p className="mt-1 text-sm text-slate-400 leading-6">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: How many can you miss */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">04.</span> How Many Classes Can You Safely Miss?
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          This is usually the real question, not "what's my percentage" but "how much room do I actually have." The formula is a simple rearrangement of the one above:
        </p>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center shadow-inner">
          <p className="text-lg sm:text-xl font-black text-cyan-400 tracking-wide">
            Classes You Can Miss = Total Classes − (Total Classes × Target %)
          </p>
        </div>
        <p className="mt-4 leading-7 text-slate-300">
          Here's what that looks like across a few common scenarios, so you can find one close to your own course:
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">Total Classes This Term</th>
                <th className="px-5 py-3.5 text-left">Required Attendance</th>
                <th className="px-5 py-3.5 text-left">Max You Can Miss</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {scenarioTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-900/20 transition-colors">
                  <td className="px-5 py-3.5 font-bold text-white">{row.total}</td>
                  <td className="px-5 py-3.5 text-slate-200">{row.target}</td>
                  <td className="px-5 py-3.5 text-cyan-400 font-semibold">{row.canMiss}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 leading-7 text-slate-300 text-sm">
          One important catch: this number shrinks as the term goes on. Missing 3 classes out of 10 held so far is a very different risk than missing 3 out of 40 — the earlier in the term you're calculating, the more conservative you should be, since a rough patch later can still tip you under the line.
        </p>
      </div>

      {/* Section 5: What happens if you fall short */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">05.</span> What Actually Happens If You Fall Below the Cutoff
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          The consequences vary by institution, but they usually fall into one of three buckets. The mildest is a formal warning letter and a requirement to explain the absences to an advisor. The middle tier is exam debarment for that specific course — you keep your coursework grades, but you're not allowed to sit the final exam, which often means an automatic fail or an incomplete for the term. The most serious version, reserved for chronic or unexplained absence, can affect your overall academic standing or scholarship eligibility.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          If you're already below the line, the single most useful thing you can do is talk to someone before the deadline for appeals or makeup arrangements passes. Waiting until grades are finalized usually closes that door for good.
        </p>
      </div>

      {/* Section 6: Eligibility Matrix Table */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">06.</span> Quick Reference: Where Do You Stand?
        </h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">Attendance Range</th>
                <th className="px-5 py-3.5 text-left">Standing</th>
                <th className="px-5 py-3.5 text-left">What It Means</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {categories.map((cat, idx) => (
                <tr key={idx} className="hover:bg-slate-900/20 transition-colors">
                  <td className="px-5 py-3.5 font-bold text-white">{cat.range}</td>
                  <td className={`px-5 py-3.5 font-semibold ${cat.color}`}>{cat.status}</td>
                  <td className="px-5 py-3.5 text-slate-400">{cat.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 7: Protecting your attendance */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">07.</span> How to Protect Your Attendance Before It Becomes a Problem
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          A few habits make a bigger difference than most students expect. Check your actual percentage every few weeks instead of guessing — it's easy to assume you're fine when you're not, especially once a busy month blurs together. Build in a buffer early rather than late; being at 90% in week 3 gives you far more flexibility in week 10 than trying to recover from 74% right before finals. And if something genuine comes up, illness, a family emergency, a clash with another commitment, get it documented with your school immediately rather than after the fact, since most excused-absence policies require timely paperwork, not a retroactive explanation.
        </p>
      </div>

      {/* Section 8: Common mistakes */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">08.</span> Common Mistakes Students Make With Attendance Math
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          The most frequent mistake is using the total number of classes scheduled for the whole semester instead of the number actually held so far. Early in the term, this makes your percentage look artificially low; late in the term, after a professor cancels a few sessions, it can make it look artificially high. Always ask what the "classes held" number actually refers to before you calculate anything.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          The second common mistake is forgetting that a percentage recalculates with every new class, not just the ones you miss. Even if you attend a class, your percentage still moves, because the denominator (total classes held) grows every time. Students sometimes panic after missing two classes in a row without realizing their percentage barely moved because the total class count grew at the same time.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          A third mistake is assuming a lab, tutorial, or seminar counts the same as a lecture. Some institutions track these separately with their own individual attendance requirements, meaning you could be well above the line for lectures but quietly below it for labs. Always check whether your school tracks attendance per class type or as one combined number.
        </p>
      </div>

      {/* Section 9: Country-specific rules */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">09.</span> How Attendance Rules Differ Around the World
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          The 75% figure gets thrown around so often that it's easy to assume it's a universal rule, but the actual policy shifts quite a bit depending on where you're studying.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          In the <strong className="text-white">United States</strong>, attendance policy is usually set at the individual instructor or department level rather than by a single national or state rule. Some professors don't track it at all beyond a soft participation grade, while others enforce a strict cap on unexcused absences before you're automatically withdrawn from the course.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          In the <strong className="text-white">United Kingdom</strong>, universities generally expect somewhere around 70-80% engagement, though the language has shifted in recent years from strict physical attendance toward "engagement monitoring," which can include online activity, library access, and assignment submissions alongside in-person presence.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          In <strong className="text-white">Pakistan and India</strong>, the 75% threshold is close to a hard national norm at most universities, tied directly to board and university exam eligibility rules. It tends to be enforced more rigidly here than in the US or UK, with far less room for informal exceptions, which is part of why the shortage calculation matters so much to students in these systems specifically.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          The takeaway is simple: always check your own institution's actual written policy rather than assuming a number you saw online applies to you. The formula stays the same everywhere, but the threshold and the consequences for missing it don't.
        </p>
      </div>

      {/* Section 9: Worked example */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">10.</span> A Realistic Worked Example
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          Say you're eight weeks into a sixteen-week semester, with classes held three times a week. That's 24 classes held so far. You've missed 4 of them, some for a cold, one for a family event, so you've attended 20.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          20 ÷ 24 = 0.833, times 100 gives you <strong className="text-white">83.3%</strong> — comfortably above a 75% requirement. Using the "how many can I miss" formula for the rest of the term: if the course runs to 48 total classes and you still need 75% by the end, you can afford to miss up to 12 total across the whole semester. Since you've already used 4, you have 8 more in reserve for the remaining 24 classes.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          That's the kind of number worth actually writing down somewhere, rather than re-doing the math every time you're deciding whether to skip a class. A buffer you can see clearly is a lot easier to protect than a vague feeling of "I think I'm fine."
        </p>
      </div>

      {/* Section 11: FAQs */}
      <div className="mt-16 border-t border-slate-800/60 pt-12">
        <h2 className="text-2xl font-bold text-white mb-2"><span className="text-cyan-400 font-mono">11.</span> Frequently Asked Questions</h2>
        <p className="text-slate-400 text-sm mb-6">Common questions students ask about attendance rules, excused absences, and eligibility.</p>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl bg-slate-950/40 p-5 border border-slate-800/40">
              <h4 className="text-base font-semibold text-white flex items-start gap-2">
                <span className="text-cyan-400 font-mono">Q:</span> {faq.q}
              </h4>
              <p className="mt-2 text-sm text-slate-300 pl-6 leading-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Call to Action Section */}
      <div className="mt-16 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">Want to check your exact numbers right now?</h3>
          <p className="text-sm text-slate-400 mt-1">Enter your attended and total classes and see instantly how many more you can miss, or need to attend, to stay eligible.</p>
        </div>
        <div className="mt-4 sm:mt-0 flex flex-wrap justify-center gap-3 shrink-0">
          <Link
            href="/attendance-calculator"
            className="rounded-lg bg-cyan-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition shadow-md"
          >
            Open Attendance Calculator
          </Link>
          <Link
            href="/grade-calculator"
            className="rounded-lg bg-slate-800 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-700 transition border border-slate-700"
          >
            Check Grade Conversions
          </Link>
        </div>
      </div>

    </article>
  );
}