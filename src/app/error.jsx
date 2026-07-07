"use client";

export default function Error({
  error,
  reset,
}) {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-5xl font-black text-red-500">
          Something went wrong
        </h1>

        <p className="mt-4 text-slate-400">
          Please try again.
        </p>

        <button
          onClick={reset}
          className="mt-8 rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-950"
        >
          Retry
        </button>

      </div>

    </main>
  );
}