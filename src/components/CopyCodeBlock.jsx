"use client";

import { useState } from "react";

export default function CopyCodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access denied — nothing more we can do silently.
    }
  }

  return (
    <div className="relative rounded-xl border border-slate-800 bg-slate-950 p-4">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-semibold text-cyan-400 hover:bg-slate-700"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className="overflow-x-auto pr-20 text-xs text-slate-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}
