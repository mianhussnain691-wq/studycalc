import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white px-6">

      <h1 className="text-8xl font-black text-cyan-400">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-4 text-slate-400 text-center max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-950 hover:bg-cyan-400 transition"
      >
        Go Home
      </Link>

    </main>
  );
}