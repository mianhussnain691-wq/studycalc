// icon = lucide-react component name, resolved via a lookup map where rendered
// (used by ToolCard.jsx on /calculators). emoji/glow/iconBg are used by the
// homepage's own bespoke card markup (HomeClient.jsx), ported from the
// approved Figma reference. Class strings are written out in full (not built
// from a bare color key) so Tailwind's build-time scanner can see them as
// literal text — matches the `badgeColor` convention already used in tools.js.
const categories = [
  {
    title: "GPA & Grades",
    description: "GPA, CGPA, percentage and grade conversion calculators.",
    icon: "Calculator",
    badgeColor: "bg-cyan-500/20 text-cyan-400",
    iconColor: "bg-cyan-500/20 text-cyan-400",
    ringColor: "border-cyan-500/30",
    emoji: "🎓",
    glow: "#3b82f6",
    iconBg: "linear-gradient(135deg,#3b82f6,#1d4ed8)",
  },
  {
    title: "Academic Planning",
    description: "Credit load, class rank, curves, and standing checkers.",
    icon: "ClipboardList",
    badgeColor: "bg-emerald-500/20 text-emerald-400",
    iconColor: "bg-emerald-500/20 text-emerald-400",
    ringColor: "border-emerald-500/30",
    emoji: "📋",
    glow: "#14b8a6",
    iconBg: "linear-gradient(135deg,#14b8a6,#0d9488)",
  },
  {
    title: "Admissions",
    description: "AMCAS, LSAC, and scholarship GPA calculators.",
    icon: "GraduationCap",
    badgeColor: "bg-blue-500/20 text-blue-400",
    iconColor: "bg-blue-500/20 text-blue-400",
    ringColor: "border-blue-500/30",
    emoji: "🏛️",
    glow: "#10b981",
    iconBg: "linear-gradient(135deg,#10b981,#047857)",
  },
  {
    title: "Attendance",
    description: "Track attendance and required classes.",
    icon: "CalendarCheck",
    badgeColor: "bg-amber-500/20 text-amber-400",
    iconColor: "bg-amber-500/20 text-amber-400",
    ringColor: "border-amber-500/30",
    emoji: "📅",
    glow: "#94a3b8",
    iconBg: "linear-gradient(135deg,#94a3b8,#64748b)",
  },
  {
    title: "Finance",
    description: "Present value, future value, and annuity calculators.",
    icon: "PiggyBank",
    badgeColor: "bg-rose-500/20 text-rose-400",
    iconColor: "bg-rose-500/20 text-rose-400",
    ringColor: "border-rose-500/30",
    emoji: "💰",
    glow: "#f59e0b",
    iconBg: "linear-gradient(135deg,#f59e0b,#d97706)",
  },
];

export default categories;
