"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Dumbbell,
  Utensils,
  Flame,
  Calendar,
  CheckCircle2,
  Plus,
  Sparkles,
  Search,
  Bell,
  LogOut,
  LayoutDashboard,
  Home,
  Menu,
  X,
  Check,
} from "lucide-react";
import { LanguageToggle } from "@/components/common/LanguageToggle";
import { useLanguage } from "@/components/common/LanguageProvider";
import {
  BookingItem,
  CoachSlot,
  getSavedBookings,
  saveBookings,
  getSavedSlots,
} from "@/lib/adminDataStore";

export default function DashboardPage() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"overview" | "workouts" | "nutrition" | "coaching">("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Restore active tab on client mount
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const savedTab = localStorage.getItem("madrock_user_tab");
    const validTabs = ["overview", "workouts", "nutrition", "coaching"];

    if (hash && validTabs.includes(hash)) {
      setActiveTab(hash as any);
    } else if (savedTab && validTabs.includes(savedTab)) {
      setActiveTab(savedTab as any);
    }
  }, []);

  const changeTab = (tab: "overview" | "workouts" | "nutrition" | "coaching") => {
    setActiveTab(tab);
    localStorage.setItem("madrock_user_tab", tab);
    window.history.replaceState(null, "", `#${tab}`);
    setSidebarOpen(false);
  };

  // In-Dashboard Booking & Synchronized Coaching Session State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingCoach, setBookingCoach] = useState("Coach Ahmad Hudzaifah");
  const [bookingDate, setBookingDate] = useState("2026-08-12");
  const [bookingTime, setBookingTime] = useState("10:00 AM");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Persistent Booking & Time Slots State
  const [bookingsList, setBookingsList] = useState<BookingItem[]>([]);
  const [coachSlots, setCoachSlots] = useState<CoachSlot[]>([]);

  // Notification Bell Popover State
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: lang === "id" ? "Status Jadwal Kepelatihan" : "Coaching Session Status",
      desc: lang === "id" ? "Pengajuan reschedule Anda telah dikirim ke Coach Ahmad Hudzaifah (Menunggu Persetujuan)." : "Your reschedule request has been sent to Coach Ahmad (Pending Approval).",
      time: "10 menit lalu",
      unread: true,
    },
    {
      id: 2,
      title: lang === "id" ? "Program Hipertrofi Diperbarui" : "Hypertrophy Program Updated",
      desc: lang === "id" ? "Coach menambahkan target beban baru untuk Barbell Press." : "Coach updated working weights for Barbell Press.",
      time: "2 jam lalu",
      unread: true,
    },
  ]);

  useEffect(() => {
    setBookingsList(getSavedBookings());
    setCoachSlots(getSavedSlots());
  }, []);

  const activeBooking = bookingsList[0] || {
    id: 1,
    name: "Marcus Rock",
    pkg: "Evaluasi Mingguan Biomekanika & Form Latihan",
    date: "Besok",
    timeSlot: "10:00 AM",
    status: "Pending",
  };

  // State for logged workout items
  const [loggedSets, setLoggedSets] = useState<{ [key: number]: boolean }>({
    0: true,
  });

  const toggleSetCompleted = (index: number) => {
    setLoggedSets((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleInDashboardBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const newBooking: BookingItem = {
      id: Date.now(),
      name: "Marcus Rock",
      pkg: "1-on-1 VIP Coaching Session",
      date: bookingDate,
      timeSlot: bookingTime,
      coachName: bookingCoach,
      status: "Pending",
    };

    const updatedBookings = [newBooking, ...bookingsList];
    setBookingsList(updatedBookings);
    saveBookings(updatedBookings);

    const newNotif = {
      id: Date.now(),
      title: lang === "id" ? "Pengajuan Reschedule Terkirim" : "Reschedule Submitted",
      desc:
        lang === "id"
          ? `Jadwal ${bookingDate} (${bookingTime}) dikirim ke Coach Ahmad (Menunggu Persetujuan).`
          : `Requested ${bookingDate} (${bookingTime}) sent to Coach (Pending Approval).`,
      time: "Baru saja",
      unread: true,
    };
    setNotifications((prev) => [newNotif, ...prev]);

    setBookingSuccess(true);
  };

  const navItems = [
    { id: "overview", label: lang === "id" ? "Ringkasan" : "Overview", icon: LayoutDashboard },
    { id: "workouts", label: lang === "id" ? "Tracker Latihan" : "Workout Tracker", icon: Dumbbell },
    { id: "nutrition", label: lang === "id" ? "Nutrisi & Makro" : "Nutrition & Macros", icon: Utensils },
    { id: "coaching", label: lang === "id" ? "Kepelatihan 1-on-1" : "1-on-1 Coaching", icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-mad-bg text-slate-900 flex flex-col md:flex-row">
      {/* Mobile Top App Bar */}
      <div className="md:hidden bg-mad-surface border-b border-slate-900/10 p-4 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-mad-lime flex items-center justify-center text-mad-bg font-black">
            <Dumbbell className="w-5 h-5 stroke-[2.5]" />
          </div>
          <span className="font-spartan font-black text-lg tracking-tighter uppercase">
            MAD<span className="text-mad-lime">ROCK</span>
          </span>
        </Link>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-xl bg-mad-bg border border-slate-900/10 text-slate-900"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Standalone Dashboard Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-40 h-screen w-64 bg-mad-surface border-r border-slate-900/10 p-6 flex flex-col justify-between transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="space-y-8">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2.5 group pt-2">
            <div className="w-10 h-10 rounded-xl bg-slate-900/5 border border-slate-900/10 flex items-center justify-center text-slate-900 shadow-sm">
              <Dumbbell className="w-6 h-6 stroke-[2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-spartan font-black text-xl tracking-tighter text-slate-900 uppercase leading-none">
                MAD<span className="text-mad-lime">ROCK</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-mad-lime uppercase font-bold mt-0.5">
                PORTAL ATLET
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
                onClick={() => changeTab(item.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold uppercase transition-all ${
                  activeTab === item.id
                    ? "bg-slate-900 text-white font-extrabold shadow-sm"
                    : "text-mad-gray hover:text-slate-900 hover:bg-slate-900/5"
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
              <span>{lang === "id" ? "Asisten AI Coach" : "AI Coach Assistant"}</span>
            </Link>
          </nav>
        </div>

        {/* Bottom Sidebar User Info & Logout */}
        <div className="pt-6 border-t border-slate-900/10 space-y-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-mad-gray hover:text-slate-900 font-mono px-2 transition-colors"
          >
            <Home className="w-4 h-4 text-mad-lime" />
            <span>{lang === "id" ? "Kembali ke Website Utama" : "Back to Main Web"}</span>
          </Link>

          <div className="p-3.5 rounded-2xl bg-mad-bg border border-slate-900/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-mad-lime text-mad-bg font-extrabold flex items-center justify-center text-sm font-spartan">
                MR
              </div>
              <div className="text-left">
                <h5 className="font-bold text-slate-900 text-xs leading-none">Marcus Rock</h5>
                <span className="text-[10px] text-mad-lime font-mono">Member Atlet</span>
              </div>
            </div>
            <Link href="/login" title="Keluar">
              <LogOut className="w-4 h-4 text-mad-gray hover:text-rose-400 transition-colors" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Workspace Canvas */}
      <div className="flex-1 min-w-0 flex flex-col min-h-screen">
        {/* Top Workplace Header Bar */}
        <header className="hidden md:flex items-center justify-between px-8 py-5 bg-mad-surface/50 border-b border-slate-900/10 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-black font-spartan text-slate-900 uppercase tracking-wide">
              {activeTab === "overview" && (lang === "id" ? "Ringkasan Atlet" : "Athlete Overview")}
              {activeTab === "workouts" && (lang === "id" ? "Tracker Latihan Aktif" : "Active Workout Tracker")}
              {activeTab === "nutrition" && (lang === "id" ? "Target Nutrisi & Makro" : "Nutrition & Macros Target")}
              {activeTab === "coaching" && (lang === "id" ? "Meja Kepelatihan 1-on-1" : "1-on-1 Coaching Desk")}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <LanguageToggle />

            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mad-gray" />
              <input
                type="text"
                placeholder={lang === "id" ? "Cari latihan atau makanan..." : "Search workouts or meals..."}
                className="bg-mad-bg border border-slate-900/10 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 placeholder-mad-gray focus:outline-none focus:border-mad-lime font-mono w-64"
              />
            </div>

            {/* Notification Bell Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className="p-2 rounded-xl bg-mad-bg border border-slate-900/10 text-mad-gray hover:text-slate-900 relative transition-colors"
                title="Notifikasi"
              >
                <Bell className="w-5 h-5" />
                {notifications.some((n) => n.unread) && (
                  <span className="w-2.5 h-2.5 rounded-full bg-mad-lime absolute top-1 right-1 ring-2 ring-mad-bg animate-pulse" />
                )}
              </button>

              {/* Notification Popover Card */}
              {notifOpen && (
                <div className="absolute right-0 top-full mt-3 w-80 sm:w-96 rounded-2xl bg-mad-surface border border-slate-900/10 p-4 shadow-2xl z-50 animate-fadeIn space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-900/10">
                    <span className="font-spartan font-bold text-sm text-slate-900 uppercase flex items-center gap-2">
                      <Bell className="w-4 h-4 text-mad-lime" />
                      <span>{lang === "id" ? "NOTIFIKASI ATLET" : "ATHLETE NOTIFICATIONS"}</span>
                    </span>
                    <button
                      onClick={() => setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })))}
                      className="text-[10px] font-mono text-mad-lime hover:underline"
                    >
                      {lang === "id" ? "Tandai Semua Dibaca" : "Mark All Read"}
                    </button>
                  </div>

                  <div className="space-y-2 max-h-72 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <p className="text-xs text-mad-gray text-center py-4">Belum ada notifikasi.</p>
                    ) : (
                      notifications.map((n) => (
                        <div
                          key={n.id}
                          className={`p-3 rounded-xl border text-xs transition-all space-y-1 ${
                            n.unread
                              ? "bg-mad-lime/5 border-mad-lime/40"
                              : "bg-mad-bg/50 border-slate-900/5 opacity-80"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <h5 className="font-bold text-slate-900 font-spartan">{n.title}</h5>
                            <span className="text-[9px] text-mad-gray font-mono">{n.time}</span>
                          </div>
                          <p className="text-[11px] text-mad-gray leading-tight">{n.desc}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-4 sm:p-8 space-y-8 flex-1">
          {/* User Welcome Banner */}
          <div className="rounded-3xl bg-mad-surface border border-slate-900/10 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-4 z-10">
              <div className="w-16 h-16 rounded-2xl bg-slate-900/5 border border-slate-900/10 text-slate-900 flex items-center justify-center font-black text-2xl font-spartan shrink-0">
                MR
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full bg-mad-lime/10 border border-mad-lime/30 text-mad-lime font-mono text-[10px] font-bold uppercase">
                    MEMBER ATLET VIP
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black font-spartan text-slate-900 uppercase mt-1">
                  {lang === "id" ? "SELAMAT DATANG KEMBALI, ATLET" : "WELCOME BACK, ATHLETE"}
                </h1>
                <p className="text-xs text-mad-gray font-mono mt-0.5">
                  {lang === "id" ? "Protokol Aktif:" : "Current Protocol:"} <strong className="text-slate-900">12-Week Hypertrophy Masterclass</strong> • Week 4, Day 2
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 z-10">
              <div className="px-4 py-2.5 rounded-2xl bg-mad-bg border border-slate-900/10 text-xs font-mono text-mad-gray flex items-center gap-2">
                <Flame className="w-4 h-4 text-mad-lime fill-mad-lime" />
                <span>Streak: <strong className="text-mad-lime">14 {lang === "id" ? "Hari" : "Days"} 🔥</strong></span>
              </div>
            </div>
          </div>

          {/* Overview Tab Content */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Top Metric Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-mad-surface border border-slate-900/10 space-y-1">
                  <span className="text-[11px] text-mad-gray font-mono uppercase">
                    {lang === "id" ? "Kalori Harian" : "Daily Calories"}
                  </span>
                  <div className="text-2xl font-black font-spartan text-mad-lime">2,450 / 2,600</div>
                  <div className="w-full h-1.5 rounded-full bg-mad-bg overflow-hidden mt-2">
                    <div className="w-[94%] h-full bg-mad-lime" />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-mad-surface border border-slate-900/10 space-y-1">
                  <span className="text-[11px] text-mad-gray font-mono uppercase">
                    {lang === "id" ? "Protein Dikonsumsi" : "Protein Consumed"}
                  </span>
                  <div className="text-2xl font-black font-spartan text-slate-900">165g / 180g</div>
                  <div className="w-full h-1.5 rounded-full bg-mad-bg overflow-hidden mt-2">
                    <div className="w-[90%] h-full bg-mad-lime" />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-mad-surface border border-slate-900/10 space-y-1">
                  <span className="text-[11px] text-mad-gray font-mono uppercase">
                    {lang === "id" ? "Berat Badan" : "Current Weight"}
                  </span>
                  <div className="text-2xl font-black font-spartan text-slate-900">78.4 KG</div>
                  <span className="text-[10px] text-emerald-400 font-mono">
                    {lang === "id" ? "-1.2 kg bulan ini" : "-1.2 kg this month"}
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-mad-surface border border-slate-900/10 space-y-1">
                  <span className="text-[11px] text-mad-gray font-mono uppercase">
                    {lang === "id" ? "Sesi Berikutnya" : "Next Session"}
                  </span>
                  <div className="text-lg font-bold font-spartan text-slate-900">
                    {lang === "id" ? "Besok, 10:00 WIB" : "Tomorrow, 10 AM"}
                  </div>
                  <span className="text-[10px] text-mad-lime font-mono">1-on-1 Coach Ahmad Hudzaifah</span>
                </div>
              </div>

              {/* Dashboard Grid Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Today's Workout */}
                <div className="lg:col-span-7 rounded-3xl bg-mad-surface border border-slate-900/10 p-6 sm:p-8 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-900/10">
                    <h3 className="text-xl font-bold font-spartan text-slate-900 uppercase flex items-center gap-2">
                      <Dumbbell className="w-5 h-5 text-mad-lime" />
                      <span>{lang === "id" ? "PROTOKOL LATIHAN HARI INI" : "TODAY'S WORKOUT PROTOCOL"}</span>
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
                      <div key={idx} className="p-4 rounded-2xl bg-mad-bg border border-slate-900/5 flex items-center justify-between">
                        <div>
                          <h4 className="text-slate-900 font-bold text-sm font-spartan">{ex.name}</h4>
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
                <div className="lg:col-span-5 rounded-3xl bg-mad-surface border border-slate-900/10 p-6 sm:p-8 space-y-6">
                  <h3 className="text-xl font-bold font-spartan text-slate-900 uppercase border-b border-slate-900/10 pb-4 flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-mad-lime" />
                    <span>{lang === "id" ? "TARGET MAKAN HARI INI" : "TODAY'S MEAL TARGETS"}</span>
                  </h3>

                  <div className="space-y-3">
                    {[
                      { meal: "Meal 1: Oats & Whey", cals: "520 kcal", protein: "40g P" },
                      { meal: "Meal 2: Chicken & Rice", cals: "680 kcal", protein: "50g P" },
                      { meal: "Meal 3: Salmon & Asparagus", cals: "610 kcal", protein: "45g P" },
                      { meal: "Meal 4: Casein & Almonds", cals: "350 kcal", protein: "30g P" },
                    ].map((m, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-mad-bg border border-slate-900/5 flex items-center justify-between text-xs">
                        <span className="text-slate-900 font-semibold">{m.meal}</span>
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
            <div className="rounded-3xl bg-mad-surface border border-slate-900/10 p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-900/10">
                <div>
                  <h3 className="text-xl font-bold font-spartan text-slate-900 uppercase">
                    {lang === "id" ? "LOG AKTIF: HIPERTROFI TUBUH ATAS" : "ACTIVE LOG: UPPER BODY HYPERTROPHY"}
                  </h3>
                  <p className="text-xs text-mad-gray font-mono mt-1">Week 4 • Day 2 • Progressive Overload Focus</p>
                </div>

                <span className="px-3 py-1 rounded-full bg-mad-lime/10 border border-mad-lime/30 text-mad-lime font-mono text-xs font-bold">
                  {lang === "id" ? "SELESAI:" : "COMPLETED:"} {Object.keys(loggedSets).filter(k => loggedSets[Number(k)]).length} / 4 {lang === "id" ? "GERAKAN" : "EXERCISES"}
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
                          : "bg-mad-bg border-slate-900/10"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold font-spartan text-lg text-slate-900 uppercase">{ex.name}</h4>
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
                              : "bg-mad-surface text-slate-900 border border-slate-900/10 hover:border-mad-lime"
                          }`}
                        >
                          {isDone ? (lang === "id" ? "✓ SELESAI" : "✓ COMPLETED") : (lang === "id" ? "TANDAI SELESAI" : "MARK COMPLETE")}
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
            <div className="rounded-3xl bg-mad-surface border border-slate-900/10 p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-900/10">
                <div>
                  <h3 className="text-xl font-bold font-spartan text-slate-900 uppercase">
                    {lang === "id" ? "PERENCANA NUTRISI & MAKRO" : "NUTRITION & MACRO PLANNER"}
                  </h3>
                  <p className="text-xs text-mad-lime font-mono mt-1">Goal: Lean Muscle Gain • Target: 2,600 kcal/day</p>
                </div>

                <Link
                  href="/meal-planner"
                  className="px-4 py-2 rounded-xl bg-mad-lime/10 border border-mad-lime/30 text-mad-lime text-xs font-mono font-bold uppercase hover:bg-mad-lime/20 transition-all"
                >
                  {lang === "id" ? "Buka Generator Makanan →" : "Open Meal Generator →"}
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-mad-bg border border-slate-900/10 space-y-2">
                  <span className="text-xs font-mono text-mad-gray uppercase">Protein (Target: 180g)</span>
                  <div className="text-3xl font-black font-spartan text-mad-lime">165g</div>
                  <div className="w-full h-2 rounded-full bg-mad-surface overflow-hidden">
                    <div className="w-[91%] h-full bg-mad-lime" />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-mad-bg border border-slate-900/10 space-y-2">
                  <span className="text-xs font-mono text-mad-gray uppercase">Karbohidrat (Target: 310g)</span>
                  <div className="text-3xl font-black font-spartan text-slate-900">290g</div>
                  <div className="w-full h-2 rounded-full bg-mad-surface overflow-hidden">
                    <div className="w-[93%] h-full bg-white" />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-mad-bg border border-slate-900/10 space-y-2">
                  <span className="text-xs font-mono text-mad-gray uppercase">Lemak Nutrisi (Target: 65g)</span>
                  <div className="text-3xl font-black font-spartan text-slate-900">58g</div>
                  <div className="w-full h-2 rounded-full bg-mad-surface overflow-hidden">
                    <div className="w-[89%] h-full bg-amber-400" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Coaching Tab Content */}
          {activeTab === "coaching" && (
            <div className="rounded-3xl bg-mad-surface border border-slate-900/10 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-900/10">
                <div>
                  <h3 className="text-xl font-bold font-spartan text-slate-900 uppercase">
                    {lang === "id" ? "SESI KEPELATIHAN 1-ON-1" : "1-ON-1 COACHING SESSIONS"}
                  </h3>
                  <p className="text-xs text-mad-gray font-mono mt-1">Assigned Head Coach: Ahmad Hudzaifah</p>
                </div>

                {/* In-Dashboard Booking Trigger */}
                <button
                  onClick={() => {
                    setBookingSuccess(false);
                    setBookingModalOpen(true);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-extrabold text-xs uppercase hover:bg-slate-800 transition-all shadow-sm"
                >
                  {lang === "id" ? "Jadwalkan Sesi Baru" : "Book New Session"}
                </button>
              </div>

              <div className="space-y-4">
                {bookingsList.map((b) => (
                  <div key={b.id} className="p-5 rounded-2xl bg-mad-bg border border-slate-900/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        {b.status === "Confirmed" && (
                          <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono text-[10px] font-bold uppercase">
                            ✓ {lang === "id" ? "TERKONFIRMASI DISETUJUI" : "CONFIRMED APPROVED"}
                          </span>
                        )}
                        {b.status === "Pending" && (
                          <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 font-mono text-[10px] font-bold uppercase animate-pulse">
                            ⏳ {lang === "id" ? "MENUNGGU PERSETUJUAN COACH" : "PENDING COACH APPROVAL"}
                          </span>
                        )}
                        {b.status === "Rejected" && (
                          <span className="px-2.5 py-0.5 rounded bg-rose-500/20 text-rose-400 border border-rose-500/30 font-mono text-[10px] font-bold uppercase">
                            ✕ {lang === "id" ? "DITOLAK - SILAKAN JADWALKAN ULANG" : "REJECTED - PLEASE RESCHEDULE"}
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-slate-900 text-base font-spartan">
                        {b.pkg}
                      </h4>
                      <p className="text-xs text-mad-gray font-mono">
                        {b.date} {b.timeSlot ? `• Pukul ${b.timeSlot}` : ""} • Zoom Video Call
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setBookingSuccess(false);
                        setBookingModalOpen(true);
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-900 text-white border border-slate-700 text-xs font-mono font-bold hover:bg-slate-800"
                    >
                      {lang === "id" ? "Ubah Jadwal" : "Reschedule"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* In-Dashboard Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-3xl bg-mad-surface border border-slate-900/10 p-6 sm:p-8 space-y-6 relative shadow-2xl animate-fadeIn">
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-mad-bg text-mad-gray hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingSuccess ? (
              <form onSubmit={handleInDashboardBooking} className="space-y-5">
                <div className="pb-3 border-b border-slate-900/10">
                  <span className="px-3 py-1 rounded-full bg-mad-lime/10 text-mad-lime font-mono text-[10px] font-bold uppercase">
                    IN-DASHBOARD BOOKING & RESCHEDULE
                  </span>
                  <h3 className="text-2xl font-black font-spartan text-slate-900 uppercase mt-1">
                    {lang === "id" ? "JADWALKAN SESI KEPELATIHAN" : "BOOK COACHING SESSION"}
                  </h3>
                </div>

                <div>
                  <label className="text-xs font-mono text-mad-gray uppercase block mb-1">
                    {lang === "id" ? "Pilih Pelatih Kepala" : "Select Head Coach"}
                  </label>
                  <select
                    value={bookingCoach}
                    onChange={(e) => setBookingCoach(e.target.value)}
                    className="w-full bg-mad-bg border border-slate-900/10 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-mad-lime font-mono"
                  >
                    <option value="Coach Ahmad Hudzaifah">Coach Ahmad Hudzaifah (Head Coach)</option>
                    <option value="Elena Vance">Elena Vance (Nutrition Specialist)</option>
                    <option value="David Vance">David Vance (Powerlifting Coach)</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono text-mad-gray uppercase block mb-1">
                      {lang === "id" ? "Tanggal Sesi" : "Session Date"}
                    </label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full bg-mad-bg border border-slate-900/10 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-mad-lime font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-mad-gray uppercase block mb-1 flex items-center justify-between">
                      <span>{lang === "id" ? "Slot Waktu (Synced)" : "Time Slot (Synced)"}</span>
                    </label>
                    <select
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full bg-mad-bg border border-slate-900/10 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-mad-lime font-mono"
                    >
                      {coachSlots.filter((s) => s.available).map((s) => (
                        <option key={s.id} value={s.time}>
                          {s.time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-mad-lime text-slate-900 font-extrabold text-sm uppercase tracking-wider hover:bg-mad-lime-hover shadow-sm"
                >
                  {lang === "id" ? "KONFIRMASI JADWAL SESI SEKARANG" : "CONFIRM IN-DASHBOARD BOOKING NOW"}
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4 py-4">
                <div className="w-16 h-16 rounded-full bg-mad-lime text-mad-bg flex items-center justify-center mx-auto text-2xl">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>

                <h2 className="text-2xl font-black font-spartan uppercase text-slate-900">
                  {lang === "id" ? "SESI BERHASIL DIJADWALKAN!" : "SESSION BOOKED IN DASHBOARD!"}
                </h2>

                <p className="text-xs text-mad-gray">
                  {lang === "id"
                    ? `Sesi 1-on-1 Anda dengan ${bookingCoach} terkonfirmasi untuk ${bookingDate} pukul ${bookingTime}.`
                    : `Your 1-on-1 session with ${bookingCoach} is confirmed for ${bookingDate} at ${bookingTime}.`}
                </p>

                <button
                  onClick={() => setBookingModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-xs uppercase"
                >
                  {lang === "id" ? "Tutup & Lihat Sesi" : "Close & View Sessions"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
