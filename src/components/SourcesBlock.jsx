// Lightweight E-E-A-T transparency block: states the exact convention a
// calculator uses and points to the full explanation/FAQ, so a reader (and
// a search engine) can see the methodology isn't a black box. Deliberately
// not a long citation list — most of these conventions are widely-used
// standards, not single-source facts, and the per-page guide already links
// out to anything that does need an external source (e.g. AAMC, HEC).
import Link from "next/link";

export default function SourcesBlock({ formula, note, guideHref, guideLabel }) {
  return (
    <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-400">
      <p className="font-semibold text-slate-300">How we calculate this</p>
      {formula && <p className="mt-2 font-mono text-cyan-400/90">{formula}</p>}
      {note && <p className="mt-2 leading-6">{note}</p>}
      {guideHref && (
        <p className="mt-2">
          <Link href={guideHref} className="text-cyan-400 hover:underline">
            {guideLabel || "See the full explanation and FAQ"}
          </Link>
        </p>
      )}
    </div>
  );
}
