export default function ResultCard({
  title,
  value,
  status,
  children,
}) {
  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-6 text-6xl font-black text-cyan-400">
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