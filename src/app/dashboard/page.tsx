"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Dumbbell,
  Utensils,
  Flame,
  Activity,
  Trophy,
  Calendar,
  CheckCircle2,
  TrendingUp,
  User,
  Plus,
  Sparkles,
  ChevronRight,
  Clock,
  Award,
  BarChart3,
  ShieldCheck,
  Check,
  Search,
  Bell,
  LogOut,
  LayoutDashboard,
  Settings,
  Home,
  Menu,
  X,
} from "lucide-react";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import confetti from "canvas-confetti";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "workouts" | "nutrition" | "coaching">("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // In-Dashboard Booking Modal state
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingCoach, setBookingCoach] = useState("Ahmad Hudzaifah");
  const [bookingDate, setBookingDate] = useState("2026-08-12");
  const [bookingTime, setBookingTime] = useState("10:00 AM");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // State for logged workout items
  const [loggedSets, setLoggedSets] = useState<{ [key: number]: boolean }>({
    0: true,
  });

  const toggleSetCompleted = (index: number) => {
    setLoggedSets((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleInDashboardBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const navItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "workouts", label: "Workout Tracker", icon: Dumbbell },
    { id: "nutrition", label: "Nutrition & Macros", icon: Utensils },
    { id: "coaching", label: "1-on-1 Coaching", icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-mad-bg text-white flex flex-col md:flex-row">
      {/* Mobile Top App Bar */}
      <div className="md:hidden bg-mad-surface border-b border-white/10 p-4 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-mad-lime flex items-center justify-center text-mad-bg font-black">
            <Dumbbell className="w-5 h-5 stroke-[2.5]" />
          </div>
          <span className="font-spartan font-black text-lg tracking-tighter uppercase">
            MAD<span className="text-mad-lime">ROCK</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-xl bg-mad-bg border border-white/10 text-white"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Standalone Dashboard Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-40 h-screen w-64 bg-mad-surface border-r border-white/10 p-6 flex flex-col justify-between transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="space-y-8">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2.5 group pt-2">
            <div className="w-10 h-10 rounded-xl bg-mad-lime flex items-center justify-center text-mad-bg shadow-lg shadow-mad-lime/20">
              <Dumbbell className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-spartan font-black text-xl tracking-tighter text-white uppercase leading-none">
                MAD<span className="text-mad-lime">ROCK</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-mad-lime uppercase font-bold mt-0.5">
                ATHLETE PORTAL
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-mad-gray block mb-2 px-3">
              MENU DASHBOARD
            </span>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id as any);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold uppercase transition-all ${
                  activeTab === item.id
                    ? "bg-mad-lime text-mad-bg font-extrabold shadow-lg shadow-mad-lime/20"
                    : "text-mad-gray hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </button>
            ))}

            <Link
              href="/ai-coach"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold uppercase text-mad-lime bg-mad-lime/10 border border-mad-lime/30 hover:bg-mad-lime/20 transition-all mt-4"
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>AI Coach Assistant</span>
            </Link>
          </nav>
        </div>

        {/* Bottom Sidebar User Info & Logout */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-mad-gray hover:text-white font-mono px-2 transition-colors"
          >
            <Home className="w-4 h-4 text-mad-lime" />
            <span>Back to Main Web</span>
          </Link>

          <div className="p-3.5 rounded-2xl bg-mad-bg border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-mad-lime text-mad-bg font-extrabold flex items-center justify-center text-sm font-spartan">
                MR
              </div>
              <div className="text-left">
                <h5 className="font-bold text-white text-xs leading-none">Marcus Rock</h5>
                <span className="text-[10px] text-mad-lime font-mono">Athlete Member</span>
              </div>
            </div>
            <Link href="/login" title="Log Out">
              <LogOut className="w-4 h-4 text-mad-gray hover:text-rose-400 transition-colors" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Workspace Canvas */}
      <div className="flex-1 min-w-0 flex flex-col min-h-screen">
        {/* Top Workplace Header Bar */}
        <header className="hidden md:flex items-center justify-between px-8 py-5 bg-mad-surface/50 border-b border-white/10 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-black font-spartan text-white uppercase tracking-wide">
              {activeTab === "overview" && "Athlete Overview"}
              {activeTab === "workouts" && "Active Workout Tracker"}
              {activeTab === "nutrition" && "Nutrition & Macros Target"}
              {activeTab === "coaching" && "1-on-1 Coaching Desk"}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mad-gray" />
              <input
                type="text"
                placeholder="Search workouts or meals..."
                className="bg-mad-bg border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-mad-gray focus:outline-none focus:border-mad-lime font-mono w-64"
              />
            </div>

            <button className="p-2.5 rounded-xl bg-mad-bg border border-white/10 text-mad-gray hover:text-mad-lime relative">
              <Bell className="w-4 h-4" />
              <span className="w-2 h-2 rounded-full bg-mad-lime absolute top-2 right-2 animate-pulse" />
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-4 sm:p-8 space-y-8 flex-1">
          {/* User Welcome Banner */}
          <div className="rounded-3xl bg-mad-surface border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-mad-lime/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-4 z-10">
              <div className="w-16 h-16 rounded-2xl bg-mad-lime text-mad-bg flex items-center justify-center font-black text-2xl font-spartan shadow-lg shadow-mad-lime/20 shrink-0">
                MR
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full bg-mad-lime/10 border border-mad-lime/30 text-mad-lime font-mono text-[10px] font-bold uppercase">
                    VIP ATHLETE MEMBER
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black font-spartan text-white uppercase mt-1">
                  WELCOME BACK, ATHLETE
                </h1>
                <p className="text-xs text-mad-gray font-mono mt-0.5">
                  Current Protocol: <strong className="text-white">12-Week Hypertrophy Masterclass</strong> • Week 4, Day 2
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 z-10">
              <div className="px-4 py-2.5 rounded-2xl bg-mad-bg border border-white/10 text-xs font-mono text-mad-gray flex items-center gap-2">
                <Flame className="w-4 h-4 text-mad-lime fill-mad-lime" />
                <span>Streak: <strong className="text-mad-lime">14 Days 🔥</strong></span>
              </div>
            </div>
          </div>

          {/* Overview Tab Content */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Top Metric Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-mad-surface border border-white/10 space-y-1">
                  <span className="text-[11px] text-mad-gray font-mono uppercase">Daily Calories</span>
                  <div className="text-2xl font-black font-spartan text-mad-lime">2,450 / 2,600</div>
                  <div className="w-full h-1.5 rounded-full bg-mad-bg overflow-hidden mt-2">
                    <div className="w-[94%] h-full bg-mad-lime" />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-mad-surface border border-white/10 space-y-1">
                  <span className="text-[11px] text-mad-gray font-mono uppercase">Protein Consumed</span>
                  <div className="text-2xl font-black font-spartan text-white">165g / 180g</div>
                  <div className="w-full h-1.5 rounded-full bg-mad-bg overflow-hidden mt-2">
                    <div className="w-[90%] h-full bg-mad-lime" />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-mad-surface border border-white/10 space-y-1">
                  <span className="text-[11px] text-mad-gray font-mono uppercase">Current Weight</span>
                  <div className="text-2xl font-black font-spartan text-white">78.4 KG</div>
                  <span className="text-[10px] text-emerald-400 font-mono">-1.2 kg this month</span>
                </div>

                <div className="p-5 rounded-2xl bg-mad-surface border border-white/10 space-y-1">
                  <span className="text-[11px] text-mad-gray font-mono uppercase">Next Session</span>
                  <div className="text-lg font-bold font-spartan text-white">Tomorrow, 10 AM</div>
                  <span className="text-[10px] text-mad-lime font-mono">1-on-1 with Coach Ahmad Hudzaifah</span>
                </div>
              </div>

              {/* Dashboard Grid Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Today's Workout */}
                <div className="lg:col-span-7 rounded-3xl bg-mad-surface border border-white/10 p-6 sm:p-8 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <h3 className="text-xl font-bold font-spartan text-white uppercase flex items-center gap-2">
                      <Dumbbell className="w-5 h-5 text-mad-lime" />
                      <span>TODAY'S WORKOUT PROTOCOL</span>
                    </h3>
                    <span className="text-xs text-mad-lime font-mono uppercase font-bold">Chest & Triceps Power</span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { name: "Incline Barbell Bench Press", sets: "4 Sets x 6-8 Reps", weight: "85 KG" },
                      { name: "Flat Dumbbell Press", sets: "3 Sets x 10 Reps", weight: "32 KG" },
                      { name: "Weighted Dips", sets: "3 Sets x 10 Reps", weight: "+15 KG" },
                      { name: "Cable Tricep Rope Pushdown", sets: "4 Sets x 12 Reps", weight: "35 KG" },
                    ].map((ex, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-mad-bg border border-white/5 flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-bold text-sm font-spartan">{ex.name}</h4>
                          <span className="text-xs text-mad-gray font-mono">{ex.sets}</span>
                        </div>
                        <span className="text-xs text-mad-lime font-mono font-bold bg-mad-lime/10 px-3 py-1 rounded-lg">
                          {ex.weight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Today's Meals */}
                <div className="lg:col-span-5 rounded-3xl bg-mad-surface border border-white/10 p-6 sm:p-8 space-y-6">
                  <h3 className="text-xl font-bold font-spartan text-white uppercase border-b border-white/10 pb-4 flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-mad-lime" />
                    <span>TODAY'S MEAL TARGETS</span>
                  </h3>

                  <div className="space-y-3">
                    {[
                      { meal: "Meal 1: Oats & Whey", cals: "520 kcal", protein: "40g P" },
                      { meal: "Meal 2: Chicken & Rice", cals: "680 kcal", protein: "50g P" },
                      { meal: "Meal 3: Salmon & Asparagus", cals: "610 kcal", protein: "45g P" },
                      { meal: "Meal 4: Casein & Almonds", cals: "350 kcal", protein: "30g P" },
                    ].map((m, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-mad-bg border border-white/5 flex items-center justify-between text-xs">
                        <span className="text-white font-semibold">{m.meal}</span>
                        <div className="flex gap-2">
                          <span className="text-mad-gray font-mono">{m.cals}</span>
                          <span className="text-mad-lime font-mono font-bold">{m.protein}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Workouts Tab Content */}
          {activeTab === "workouts" && (
            <div className="rounded-3xl bg-mad-surface border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold font-spartan text-white uppercase">
                    ACTIVE LOG: UPPER BODY HYPERTROPHY
                  </h3>
                  <p className="text-xs text-mad-gray font-mono mt-1">Week 4 • Day 2 • Progressive Overload Focus</p>
                </div>

                <span className="px-3 py-1 rounded-full bg-mad-lime/10 border border-mad-lime/30 text-mad-lime font-mono text-xs font-bold">
                  COMPLETED: {Object.keys(loggedSets).filter(k => loggedSets[Number(k)]).length} / 4 EXERCISES
                </span>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Barbell Incline Press", target: "4 Sets x 8 Reps", weight: "85 KG", rpe: "RPE 8" },
                  { name: "Weighted Chest Dips", target: "3 Sets x 10 Reps", weight: "+15 KG", rpe: "RPE 9" },
                  { name: "Standing Overhead Press", target: "4 Sets x 8 Reps", weight: "55 KG", rpe: "RPE 8.5" },
                  { name: "Cable Lateral Raises", target: "4 Sets x 15 Reps", weight: "12.5 KG", rpe: "RPE 9.5" },
                ].map((ex, idx) => {
                  const isDone = !!loggedSets[idx];
                  return (
                    <div
                      key={idx}
                      className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                        isDone
                          ? "bg-mad-lime/5 border-mad-lime/40"
                          : "bg-mad-bg border-white/10"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold font-spartan text-lg text-white uppercase">{ex.name}</h4>
                          {isDone && <CheckCircle2 className="w-4 h-4 text-mad-lime" />}
                        </div>
                        <p className="text-xs text-mad-gray font-mono">
                          Target: {ex.target} • Working Weight: <strong className="text-mad-lime">{ex.weight}</strong>
                        </p>
                      </div>

                      <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                        <span className="px-3 py-1 rounded-lg bg-mad-surface text-xs font-mono text-mad-gray">
                          {ex.rpe}
                        </span>
                        <button
                          onClick={() => toggleSetCompleted(idx)}
                          className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase font-mono transition-all ${
                            isDone
                              ? "bg-mad-lime text-mad-bg font-extrabold"
                              : "bg-mad-surface text-white border border-white/10 hover:border-mad-lime"
                          }`}
                        >
                          {isDone ? "✓ COMPLETED" : "MARK COMPLETE"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Nutrition Tab Content */}
          {activeTab === "nutrition" && (
            <div className="rounded-3xl bg-mad-surface border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold font-spartan text-white uppercase">
                    NUTRITION & MACRO PLANNER
                  </h3>
                  <p className="text-xs text-mad-lime font-mono mt-1">Goal: Lean Muscle Gain • Target: 2,600 kcal/day</p>
                </div>

                <Link
                  href="/meal-planner"
                  className="px-4 py-2 rounded-xl bg-mad-lime/10 border border-mad-lime/30 text-mad-lime text-xs font-mono font-bold uppercase hover:bg-mad-lime/20 transition-all"
                >
                  Open Meal Generator →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-mad-bg border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-mad-gray uppercase">Protein (Target: 180g)</span>
                  <div className="text-3xl font-black font-spartan text-mad-lime">165g</div>
                  <div className="w-full h-2 rounded-full bg-mad-surface overflow-hidden">
                    <div className="w-[91%] h-full bg-mad-lime" />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-mad-bg border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-mad-gray uppercase">Carbohydrates (Target: 310g)</span>
                  <div className="text-3xl font-black font-spartan text-white">290g</div>
                  <div className="w-full h-2 rounded-full bg-mad-surface overflow-hidden">
                    <div className="w-[93%] h-full bg-white" />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-mad-bg border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-mad-gray uppercase">Dietary Fats (Target: 65g)</span>
                  <div className="text-3xl font-black font-spartan text-white">58g</div>
                  <div className="w-full h-2 rounded-full bg-mad-surface overflow-hidden">
                    <div className="w-[89%] h-full bg-amber-400" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Coaching Tab Content */}
          {activeTab === "coaching" && (
            <div className="rounded-3xl bg-mad-surface border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold font-spartan text-white uppercase">
                    1-ON-1 COACHING SESSIONS
                  </h3>
                  <p className="text-xs text-mad-gray font-mono mt-1">Assigned Head Coach: Ahmad Hudzaifah</p>
                </div>

                {/* In-Dashboard Booking Trigger */}
                <button
                  onClick={() => {
                    setBookingSuccess(false);
                    setBookingModalOpen(true);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-xs uppercase hover:bg-mad-lime-hover transition-all shadow-lg shadow-mad-lime/20"
                >
                  Book New Session
                </button>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-mad-bg border border-mad-lime/30 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="px-2.5 py-0.5 rounded bg-mad-lime/10 text-mad-lime font-mono text-[10px] font-bold uppercase">
                      CONFIRMED UPCOMING
                    </span>
                    <h4 className="font-bold text-white text-base">Weekly Technique & Form Video Review</h4>
                    <p className="text-xs text-mad-gray font-mono">Tomorrow at 10:00 AM • Zoom Video Call</p>
                  </div>

                  <button
                    onClick={() => {
                      setBookingSuccess(false);
                      setBookingModalOpen(true);
                    }}
                    className="px-4 py-2 rounded-xl bg-mad-surface border border-white/10 text-xs font-mono text-white hover:text-mad-lime"
                  >
                    Reschedule
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* In-Dashboard Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-3xl bg-mad-surface border border-white/10 p-6 sm:p-8 space-y-6 relative shadow-2xl animate-fadeIn">
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-mad-bg text-mad-gray hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingSuccess ? (
              <form onSubmit={handleInDashboardBooking} className="space-y-5">
                <div className="pb-3 border-b border-white/10">
                  <span className="px-3 py-1 rounded-full bg-mad-lime/10 text-mad-lime font-mono text-[10px] font-bold uppercase">
                    IN-DASHBOARD BOOKING
                  </span>
                  <h3 className="text-2xl font-black font-spartan text-white uppercase mt-1">
                    BOOK COACHING SESSION
                  </h3>
                </div>

                <div>
                  <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Select Head Coach</label>
                  <select
                    value={bookingCoach}
                    onChange={(e) => setBookingCoach(e.target.value)}
                    className="w-full bg-mad-bg border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                  >
                    <option value="Ahmad Hudzaifah">Coach Ahmad Hudzaifah (Head Coach)</option>
                    <option value="Elena Vance">Elena Vance (Nutrition Specialist)</option>
                    <option value="David Vance">David Vance (Powerlifting Coach)</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Session Date</label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full bg-mad-bg border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-mad-lime font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Time Slot</label>
                    <select
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full bg-mad-bg border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-mad-lime font-mono"
                    >
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-mad-lime text-mad-bg font-extrabold text-sm uppercase tracking-wider hover:bg-mad-lime-hover shadow-lg shadow-mad-lime/20"
                >
                  CONFIRM IN-DASHBOARD BOOKING NOW
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4 py-4">
                <div className="w-16 h-16 rounded-full bg-mad-lime text-mad-bg flex items-center justify-center mx-auto text-2xl">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>

                <h3 className="text-2xl font-black font-spartan uppercase text-white">
                  SESSION BOOKED IN DASHBOARD!
                </h3>

                <p className="text-xs text-mad-gray">
                  Your 1-on-1 session with <strong>{bookingCoach}</strong> is confirmed for <strong>{bookingDate} at {bookingTime}</strong>.
                </p>

                <button
                  onClick={() => setBookingModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-xs uppercase"
                >
                  Close & View Sessions
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
