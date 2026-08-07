"use client";

import { useState } from "react";
import Link from "next/link";
import { Dumbbell, Mail, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setMsg(null);

    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
    } else {
      setMsg("Password reset link sent! Check your inbox.");
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
            RESET PASSWORD
          </h1>
          <p className="text-xs text-mad-gray">
            Enter your email to receive a password reset link.
          </p>
        </div>

        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {msg && (
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span>{msg}</span>
          </div>
        )}

        <form onSubmit={handleResetPassword} className="space-y-4">
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

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-sm uppercase tracking-wider hover:bg-mad-lime-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-mad-lime/20"
          >
            <span>{loading ? "SENDING LINK..." : "SEND RESET LINK"}</span>
          </button>
        </form>

        <p className="text-center text-xs text-mad-gray pt-2">
          <Link href="/login" className="inline-flex items-center gap-1 text-mad-lime font-bold hover:underline">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Login</span>
          </Link>
        </p>
      </div>
    </main>
  );
}
