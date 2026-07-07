export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="text-center">

        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>

        <p className="mt-6 text-slate-300 text-lg">
          Loading Calculator...
        </p>

      </div>

    </main>
  );
}