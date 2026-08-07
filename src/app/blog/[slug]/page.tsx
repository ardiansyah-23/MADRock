import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, User, Share2, Dumbbell } from "lucide-react";

export default function BlogDetailPage() {
  return (
    <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-mad-gray hover:text-mad-lime uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>

        <div className="space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-mad-lime/10 border border-mad-lime/30 text-mad-lime font-mono text-xs uppercase font-bold">
            Workout Science
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-spartan text-white uppercase leading-tight">
            The Biomechanics of Hypertrophy: How Mechanical Tension Drives Muscle Mass
          </h1>
          <div className="flex items-center gap-6 text-xs text-mad-gray font-mono border-b border-white/10 pb-6">
            <span>By Coach Marcus Rock</span>
            <span>•</span>
            <span>August 5, 2026</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-mad-lime">
              <Clock className="w-3.5 h-3.5" />
              6 Min Read
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[400px] sm:h-[480px] w-full rounded-3xl overflow-hidden border border-white/10">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
            alt="Biomechanics of Hypertrophy"
            fill
            className="object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none text-mad-gray text-base leading-relaxed space-y-6 font-normal">
          <p className="text-lg text-white font-medium">
            For decades, bodybuilding culture advocated chasing the "pump" or burning out muscle fibers with excessive reps. However, modern sports science has conclusively established that **mechanical tension** is the primary driver of skeletal muscle hypertrophy.
          </p>

          <h3 className="text-2xl font-bold font-spartan text-white uppercase pt-4">
            1. What is Mechanical Tension?
          </h3>
          <p>
            Mechanical tension occurs when a muscle contracts against resistance, stretching muscle fibers under load. High tension activates mechanosensors located inside the muscle cell membrane, triggering intracellular signaling cascades (specifically the mTORC1 pathway) that stimulate muscle protein synthesis.
          </p>

          <h3 className="text-2xl font-bold font-spartan text-white uppercase pt-4">
            2. Progressive Overload Framework
          </h3>
          <p>
            To continuously force mechanosensors to initiate protein synthesis, the tension applied must progressively increase over time. This can be achieved through:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>Increasing load (weight) while maintaining strict form.</li>
            <li>Increasing repetitions with a given load within RPE 7-9 ranges.</li>
            <li>Improving control over the eccentric (lowering) phase of the lift.</li>
          </ul>

          <div className="p-6 rounded-2xl bg-mad-surface border border-mad-lime/30 text-xs font-mono text-mad-lime my-8">
            <strong>COACH TIP:</strong> Focus on compound exercises like Barbell Squats, Incline Presses, and Bent Rows as your primary tension drivers before moving into isolation work.
          </div>
        </div>

        {/* CTA Box */}
        <div className="p-8 rounded-3xl bg-mad-surface border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold font-spartan text-white uppercase">WANT A CUSTOM PROTOCOL?</h4>
            <p className="text-xs text-mad-gray">Get a periodized 12-week program built for your biomechanics.</p>
          </div>
          <Link
            href="/booking"
            className="px-6 py-3.5 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-xs uppercase shadow-lg hover:bg-mad-lime-hover transition-all"
          >
            Start Training
          </Link>
        </div>
      </div>
    </main>
  );
}
