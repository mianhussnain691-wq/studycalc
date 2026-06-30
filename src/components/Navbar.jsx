export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-cyan-400">
          StudyCalc
        </h1>

        <div className="space-x-6">
          <button className="hover:text-cyan-400">Home</button>
          <button className="hover:text-cyan-400">GPA</button>
          <button className="hover:text-cyan-400">CGPA</button>
        </div>

      </div>
    </nav>
  );
}