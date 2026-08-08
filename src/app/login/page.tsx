"use client";

import { useState } from "react";
import Link from "next/link";
import { Dumbbell, Mail, Lock, ArrowRight, Chrome, AlertCircle, ShieldCheck, UserCheck } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [role, setRole] = useState<"user" | "admin">("user");
  const [email, setEmail] = useState("athlete@madrock.fit");
  const [password, setPassword] = useState("athlete123");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleRoleChange = (selectedRole: "user" | "admin") => {
    setRole(selectedRole);
    setErrorMsg(null);
    if (selectedRole === "admin") {
      setEmail("admin@madrock.fit");
      setPassword("admin123");
    } else {
      setEmail("athlete@madrock.fit");
      setPassword("athlete123");
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    setTimeout(() => {
      setLoading(false);
      // Auto-detect role or handle login
      if (email.toLowerCase().includes("admin") || role === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/dashboard";
      }
    }, 600);
  };

  const handleQuickDemoLogin = (demoRole: "user" | "admin") => {
    setLoading(true);
    setTimeout(() => {
      if (demoRole === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/dashboard";
      }
    }, 400);
  };

  return (
    <main className="min-h-screen bg-mad-bg text-white flex items-center justify-center p-4 pt-28 pb-16">
      <div className="w-full max-w-lg space-y-8 rounded-3xl bg-mad-surface border border-white/10 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Top Accent Bar */}
        <div className={`absolute top-0 inset-x-0 h-1.5 transition-colors ${role === "admin" ? "bg-rose-500" : "bg-mad-lime"}`} />

        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black transition-colors ${role === "admin" ? "bg-rose-500 text-white" : "bg-mad-lime text-mad-bg"}`}>
              {role === "admin" ? <ShieldCheck className="w-6 h-6 stroke-[2.5]" /> : <Dumbbell className="w-6 h-6 stroke-[2.5]" />}
            </div>
            <span className="font-spartan font-black text-2xl tracking-tighter text-white uppercase">
              MAD<span className={role === "admin" ? "text-rose-400" : "text-mad-lime"}>ROCK</span>
            </span>
          </Link>

          <h1 className="text-2xl font-black font-spartan uppercase text-white">
            {role === "admin" ? "ADMIN & COACH PORTAL" : "ATHLETE MEMBER LOGIN"}
          </h1>
          <p className="text-xs text-mad-gray">
            Unified login portal for MADRock Athletes & Platform Administrators.
          </p>
        </div>

        {/* Role Switcher Tabs */}
        <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-mad-bg border border-white/10">
          <button
            type="button"
            onClick={() => handleRoleChange("user")}
            className={`py-3 rounded-xl text-xs font-extrabold uppercase transition-all flex items-center justify-center gap-2 ${
              role === "user"
                ? "bg-mad-lime text-mad-bg shadow-md"
                : "text-mad-gray hover:text-white"
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>ATHLETE USER</span>
          </button>

          <button
            type="button"
            onClick={() => handleRoleChange("admin")}
            className={`py-3 rounded-xl text-xs font-extrabold uppercase transition-all flex items-center justify-center gap-2 ${
              role === "admin"
                ? "bg-rose-500 text-white shadow-md"
                : "text-mad-gray hover:text-white"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>ADMIN / COACH</span>
          </button>
        </div>

        {/* 2 Demo Account Quick Selector Cards */}
        <div className="space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-mad-gray block text-center">
            SELECT A DEMO ACCOUNT TO TEST INSTANTLY:
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* User Demo Card */}
            <button
              type="button"
              onClick={() => handleQuickDemoLogin("user")}
              className="p-3.5 rounded-2xl bg-mad-bg border border-mad-lime/40 text-left hover:border-mad-lime transition-all space-y-1 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-mad-lime font-bold uppercase">1. USER DEMO</span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-mad-lime/10 text-mad-lime font-mono font-bold">ATHLETE</span>
              </div>
              <p className="text-xs font-bold text-white group-hover:text-mad-lime transition-colors">athlete@madrock.fit</p>
              <p className="text-[10px] text-mad-gray font-mono">Pass: athlete123</p>
            </button>

            {/* Admin Demo Card */}
            <button
              type="button"
              onClick={() => handleQuickDemoLogin("admin")}
              className="p-3.5 rounded-2xl bg-mad-bg border border-rose-500/40 text-left hover:border-rose-500 transition-all space-y-1 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-rose-400 font-bold uppercase">2. ADMIN DEMO</span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 font-mono font-bold">ADMIN</span>
              </div>
              <p className="text-xs font-bold text-white group-hover:text-rose-400 transition-colors">admin@madrock.fit</p>
              <p className="text-[10px] text-mad-gray font-mono">Pass: admin123</p>
            </button>
          </div>
        </div>

        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Custom Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mad-gray" />
              <input
                type="email"
                required
                placeholder="user@madrock.fit"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-mad-bg border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-mad-gray focus:outline-none focus:border-mad-lime font-mono"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-mono text-mad-gray uppercase">Password</label>
              <Link href="/forgot-password" className="text-xs text-mad-lime hover:underline font-mono">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mad-gray" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-mad-bg border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-mad-gray focus:outline-none focus:border-mad-lime font-mono"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl font-extrabold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg ${
              role === "admin"
                ? "bg-rose-500 text-white hover:bg-rose-600 shadow-rose-500/20"
                : "bg-mad-lime text-mad-bg hover:bg-mad-lime-hover shadow-mad-lime/20"
            }`}
          >
            <span>{loading ? "AUTHENTICATING..." : role === "admin" ? "ENTER ADMIN CONSOLE" : "LOG IN TO ATHLETE DASHBOARD"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="relative flex items-center justify-center my-4">
          <div className="border-t border-white/10 w-full" />
          <span className="bg-mad-surface px-3 text-[10px] font-mono text-mad-gray uppercase absolute">OR</span>
        </div>

        {/* Google OAuth Button */}
        <button
          onClick={() => handleQuickDemoLogin("user")}
          type="button"
          className="w-full py-3.5 rounded-xl bg-mad-bg border border-white/10 text-white font-bold text-xs uppercase hover:bg-white/5 transition-all flex items-center justify-center gap-2"
        >
          <Chrome className="w-4 h-4 text-mad-lime" />
          <span>Continue with Google</span>
        </button>

        <p className="text-center text-xs text-mad-gray pt-2">
          Don't have an account yet?{" "}
          <Link href="/register" className="text-mad-lime font-bold hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </main>
  );
}
