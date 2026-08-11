import Link from "next/link";
import { Dumbbell, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-mad-bg text-slate-900 flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-20 h-20 rounded-3xl bg-mad-lime/10 border border-mad-lime/30 flex items-center justify-center text-mad-lime mx-auto">
          <Dumbbell className="w-10 h-10 stroke-[2.5]" />
        </div>

        <span className="text-6xl font-black font-spartan text-mad-lime block">404</span>

        <h1 className="text-3xl font-black font-spartan uppercase text-slate-900">
          YOU'RE OUT OF BOUNDS
        </h1>

        <p className="text-sm text-mad-gray">
          The page or workout protocol you are looking for has been moved, deleted, or never existed in the training matrix.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-mad-lime text-mad-bg font-extrabold text-sm uppercase tracking-wider hover:bg-mad-lime-hover transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO HOMEPAGE</span>
        </Link>
      </div>
    </main>
  );
}
