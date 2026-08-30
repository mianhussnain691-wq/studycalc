export default function ResultCard({
  title,
  value,
  status,
  children,
}) {
  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">

      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      {/* keyed on the value so each recalculation replays the reveal */}
      <p
        key={value}
        className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-cyan-400 animate-fade-in-up"
      >
        {value}
      </p>

      {status && (
        <p className="mt-4 text-xl font-semibold text-slate-300">
          {status}
        </p>
      )}

      {children}

    </div>
  );
}