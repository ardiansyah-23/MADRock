"use client";

import { useState } from "react";
import Link from "next/link";
import { Dumbbell, Mail, Lock, User, ArrowRight, AlertCircle, CheckCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [goal, setGoal] = useState("Muscle Building");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    const supabase = createClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          primary_goal: goal,
        },
      },
    });

    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
    } else {
      setSuccessMsg("Registration successful! Check your email to verify your account, or log in.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-mad-bg text-white flex items-center justify-center p-4 pt-28 pb-16">
      <div className="w-full max-w-md space-y-8 rounded-3xl bg-mad-surface border border-white/10 p-8 sm:p-10 shadow-2xl">
        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-mad-lime flex items-center justify-center text-mad-bg">
              <Dumbbell className="w-6 h-6 stroke-[2.5]" />
            </div>
            <span className="font-spartan font-black text-2xl tracking-tighter text-white uppercase">
              MAD<span className="text-mad-lime">ROCK</span>
            </span>
          </Link>

          <h1 className="text-2xl font-black font-spartan uppercase text-white">
            JOIN MADROCK ATHLETES
          </h1>
          <p className="text-xs text-mad-gray">
            Create your account to start custom periodized coaching.
          </p>
        </div>

        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {successMsg && (
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mad-gray" />
              <input
                type="text"
                required
                placeholder="Marcus Vance"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-mad-bg border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-mad-gray focus:outline-none focus:border-mad-lime font-mono"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mad-gray" />
              <input
                type="email"
                required
                placeholder="athlete@madrock.fit"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-mad-bg border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-mad-gray focus:outline-none focus:border-mad-lime font-mono"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mad-gray" />
              <input
                type="password"
                required
                minLength={6}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-mad-bg border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-mad-gray focus:outline-none focus:border-mad-lime font-mono"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Primary Fitness Goal</label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full bg-mad-bg border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
            >
              <option value="Fat Loss">Fat Loss Masterclass</option>
              <option value="Muscle Building">Hypertrophy Muscle Build</option>
              <option value="Body Recomposition">Body Recomposition</option>
              <option value="Strength">Max Strength & Power</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-sm uppercase tracking-wider hover:bg-mad-lime-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-mad-lime/20"
          >
            <span>{loading ? "CREATING ACCOUNT..." : "CREATE ATHLETE ACCOUNT"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-center text-xs text-mad-gray pt-2">
          Already have an account?{" "}
          <Link href="/login" className="text-mad-lime font-bold hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </main>
  );
}
