export default function ProgressBar({ value }) {
  return (
    <div className="mt-8 h-5 w-full overflow-hidden rounded-full bg-slate-700">
      <div
        className="h-full rounded-full bg-cyan-400 transition-all duration-500"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}