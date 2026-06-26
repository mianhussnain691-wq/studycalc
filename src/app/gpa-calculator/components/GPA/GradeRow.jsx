export default function GradeRow() {
  return (
    <div className="grid grid-cols-12 gap-3 mb-4">

      <input
        type="text"
        placeholder="Subject Name"
        className="col-span-5 rounded-xl border border-slate-700 bg-slate-900 p-3 text-white outline-none focus:border-cyan-400"
      />

      <input
        type="number"
        placeholder="Credits"
        className="col-span-2 rounded-xl border border-slate-700 bg-slate-900 p-3 text-white outline-none focus:border-cyan-400"
      />

      <select
        className="col-span-3 rounded-xl border border-slate-700 bg-slate-900 p-3 text-white outline-none focus:border-cyan-400"
      >
        <option value="4">A (4.00)</option>
        <option value="3.7">A- (3.70)</option>
        <option value="3.3">B+ (3.30)</option>
        <option value="3">B (3.00)</option>
        <option value="2.7">B- (2.70)</option>
        <option value="2.3">C+ (2.30)</option>
        <option value="2">C (2.00)</option>
        <option value="1">D (1.00)</option>
        <option value="0">F (0.00)</option>
      </select>

      <button
        className="col-span-2 rounded-xl bg-red-600 hover:bg-red-700 transition"
      >
        Remove
      </button>

    </div>
  );
}