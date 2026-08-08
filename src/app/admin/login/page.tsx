"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Mail, ArrowRight, KeyRound, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("admin@madrock.fit");
  const [password, setPassword] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    setTimeout(() => {
      if (password === "admin123" || password.length >= 6) {
        // Successful Admin Auth Simulation
        setLoading(false);
        window.location.href = "/admin/dashboard";
      } else {
        setLoading(false);
        setErrorMsg("Invalid Admin Credentials or Access Key.");
      }
    }, 800);
  };

  return (
    <main className="min-h-screen bg-mad-bg text-white flex items-center justify-center p-4 pt-28 pb-16">
      <div className="w-full max-w-md space-y-8 rounded-3xl bg-mad-surface border border-rose-500/20 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Top Glow Accent */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-rose-500 via-mad-lime to-rose-500" />

        <div className="text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mx-auto">
            <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
          </div>

          <div>
            <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-[10px] uppercase font-bold tracking-wider">
              RESTRICTED ACCESS PORTAL
            </span>
            <h1 className="text-2xl font-black font-spartan uppercase text-white mt-2">
              MADROCK ADMIN LOGIN
            </h1>
            <p className="text-xs text-mad-gray mt-1 font-mono">
              Management portal for coaches & platform administrators.
            </p>
          </div>
        </div>

        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Quick Demo Hint */}
        <div className="p-3 rounded-xl bg-mad-bg border border-white/5 text-[11px] font-mono text-mad-gray space-y-1">
          <p className="text-mad-lime font-bold">🔐 Demo Admin Credentials:</p>
          <p>Email: <span className="text-white">admin@madrock.fit</span></p>
          <p>Password: <span className="text-white">admin123</span></p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleAdminLogin} className="space-y-4">
          <div>
            <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Admin Email</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mad-gray" />
              <input
                type="email"
                required
                placeholder="admin@madrock.fit"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-mad-bg border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-mad-gray focus:outline-none focus:border-rose-500 font-mono"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Admin Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mad-gray" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-mad-bg border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-mad-gray focus:outline-none focus:border-rose-500 font-mono"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Secret Access Key (Optional)</label>
            <div className="relative">
              <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mad-gray" />
              <input
                type="password"
                placeholder="MADROCK-KEY-2026"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                className="w-full bg-mad-bg border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-mad-gray focus:outline-none focus:border-rose-500 font-mono"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-rose-500 text-white font-extrabold text-sm uppercase tracking-wider hover:bg-rose-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-rose-500/20"
          >
            <span>{loading ? "AUTHENTICATING..." : "ENTER ADMIN CONSOLE"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center pt-2">
          <Link href="/login" className="text-xs text-mad-gray hover:text-mad-lime transition-colors font-mono">
            ← Switch to Athlete/Member Login
          </Link>
        </div>
      </div>
    </main>
  );
}
