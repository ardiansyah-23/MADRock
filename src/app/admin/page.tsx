"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  Dumbbell,
  Calendar,
  BookOpen,
  DollarSign,
  Activity,
  Settings,
  Plus,
  BarChart3,
  ShieldCheck,
  Search,
  CheckCircle2,
  Clock,
  Sparkles,
  LogOut,
  Home,
  Bell,
  Menu,
  X,
  LayoutDashboard,
} from "lucide-react";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "members" | "programs" | "bookings">("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const membersList = [
    { name: "Brandon Hayes", email: "brandon@example.com", program: "12-Week Hypertrophy", status: "Active", joined: "2026-06-15" },
    { name: "Sarah Jenkins", email: "sarah.j@example.com", program: "Fat Loss Masterclass", status: "Active", joined: "2026-07-01" },
    { name: "Daniel Kim", email: "dkim@example.com", program: "Body Recomposition", status: "Active", joined: "2026-07-20" },
    { name: "Marcus Vance", email: "marcus.v@example.com", program: "Max Strength & Power", status: "Pending", joined: "2026-08-02" },
    { name: "Jessica Alba", email: "jessica@example.com", program: "1-on-1 VIP Coaching", status: "Active", joined: "2026-08-05" },
  ];

  const filteredMembers = membersList.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.program.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navItems = [
    { id: "overview", label: "Analytics & Overview", icon: BarChart3 },
    { id: "members", label: "Athlete Members", icon: Users },
    { id: "programs", label: "Coaching Programs", icon: Dumbbell },
    { id: "bookings", label: "Coaching Bookings", icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-mad-bg text-white flex flex-col md:flex-row">
      {/* Mobile Top App Bar */}
      <div className="md:hidden bg-mad-surface border-b border-rose-500/20 p-4 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center text-white font-black">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="font-spartan font-black text-lg tracking-tighter uppercase">
            MADROCK <span className="text-rose-400">ADMIN</span>
          </span>
        </Link>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-xl bg-mad-bg border border-white/10 text-white"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Standalone Admin Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-40 h-screen w-64 bg-mad-surface border-r border-rose-500/20 p-6 flex flex-col justify-between transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="space-y-8">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2.5 group pt-2">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shadow-lg">
              <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-spartan font-black text-xl tracking-tighter text-white uppercase leading-none">
                MAD<span className="text-rose-400">ROCK</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-rose-400 uppercase font-bold mt-0.5">
                ADMIN CONSOLE
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-mad-gray block mb-2 px-3">
              PLATFORM CONSOLE
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
                    ? "bg-rose-500 text-white font-extrabold shadow-lg shadow-rose-500/20"
                    : "text-mad-gray hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom Sidebar Admin Info & Logout */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-mad-gray hover:text-white font-mono px-2 transition-colors"
          >
            <Home className="w-4 h-4 text-rose-400" />
            <span>Back to Main Web</span>
          </Link>

          <div className="p-3.5 rounded-2xl bg-mad-bg border border-rose-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-400 font-extrabold flex items-center justify-center text-sm font-spartan border border-rose-500/30">
                AH
              </div>
              <div className="text-left">
                <h5 className="font-bold text-white text-xs leading-none">Ahmad Hudzaifah</h5>
                <span className="text-[10px] text-rose-400 font-mono">Platform Admin</span>
              </div>
            </div>
            <Link href="/admin/login" title="Sign Out">
              <LogOut className="w-4 h-4 text-mad-gray hover:text-rose-400 transition-colors" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Workspace Canvas */}
      <div className="flex-1 min-w-0 flex flex-col min-h-screen">
        {/* Top Workplace Header Bar */}
        <header className="hidden md:flex items-center justify-between px-8 py-5 bg-mad-surface/50 border-b border-rose-500/20 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-[10px] uppercase font-bold">
              SYSTEM ACTIVE v2.4
            </span>
            <h2 className="text-lg font-black font-spartan text-white uppercase tracking-wide">
              {activeTab === "overview" && "Analytics & Overview Desk"}
              {activeTab === "members" && "Athlete Members Directory"}
              {activeTab === "programs" && "Coaching Program Catalog"}
              {activeTab === "bookings" && "Manage Consultations"}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-xs uppercase flex items-center gap-2 hover:bg-mad-lime-hover transition-all">
              <Plus className="w-4 h-4" />
              <span>Create Program</span>
            </button>

            <button className="p-2.5 rounded-xl bg-mad-bg border border-white/10 text-mad-gray hover:text-rose-400 relative">
              <Bell className="w-4 h-4" />
              <span className="w-2 h-2 rounded-full bg-rose-500 absolute top-2 right-2 animate-pulse" />
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-4 sm:p-8 space-y-8 flex-1">
          {/* Admin Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-[10px] uppercase font-bold">
                  ADMIN CONSOLE
                </span>
                <span className="text-xs text-mad-lime font-mono">System Active • v2.4</span>
              </div>
              <h1 className="text-3xl font-black font-spartan text-white uppercase mt-1">
                MADROCK PLATFORM MANAGEMENT
              </h1>
            </div>

            <button className="px-5 py-2.5 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-xs uppercase flex items-center gap-2 hover:bg-mad-lime-hover transition-all shadow-lg shadow-mad-lime/20">
              <Plus className="w-4 h-4" />
              <span>Create New Program</span>
            </button>
          </div>

          {/* Overview Tab Content */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Analytics Overview Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-6 rounded-2xl bg-mad-surface border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-mad-gray uppercase">Total Active Members</span>
                  <div className="text-3xl font-black font-spartan text-white">642</div>
                  <span className="text-[10px] text-emerald-400 font-mono">+12% this month</span>
                </div>

                <div className="p-6 rounded-2xl bg-mad-surface border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-mad-gray uppercase">Monthly Recurring Revenue</span>
                  <div className="text-3xl font-black font-spartan text-mad-lime">$48,250</div>
                  <span className="text-[10px] text-emerald-400 font-mono">+8.4% MRR Growth</span>
                </div>

                <div className="p-6 rounded-2xl bg-mad-surface border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-mad-gray uppercase">Active VIP Coaching Bookings</span>
                  <div className="text-3xl font-black font-spartan text-white">128</div>
                  <span className="text-[10px] text-mad-gray font-mono">18 pending confirmation</span>
                </div>

                <div className="p-6 rounded-2xl bg-mad-surface border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-mad-gray uppercase">AI API Token Usage</span>
                  <div className="text-3xl font-black font-spartan text-sky-400">14.2k</div>
                  <span className="text-[10px] text-mad-gray font-mono">Gemini Engine API</span>
                </div>
              </div>

              {/* Management Table Preview */}
              <div className="rounded-3xl bg-mad-surface border border-white/10 p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <h3 className="text-xl font-bold font-spartan text-white uppercase">
                    RECENT MEMBER BOOKINGS
                  </h3>
                  <span className="text-xs font-mono text-mad-lime">Showing latest 5 entries</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-mad-gray font-mono">
                    <thead className="bg-mad-bg text-white uppercase border-b border-white/10">
                      <tr>
                        <th className="p-3">User</th>
                        <th className="p-3">Coach</th>
                        <th className="p-3">Package</th>
                        <th className="p-3">Date & Time</th>
                        <th className="p-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        { user: "Brandon Hayes", coach: "Ahmad Hudzaifah", pkg: "1-on-1 VIP", date: "2026-08-12 10:00 AM", status: "Confirmed" },
                        { user: "Sarah Jenkins", coach: "Elena Vance", pkg: "Nutrition Prep", date: "2026-08-12 02:00 PM", status: "Confirmed" },
                        { user: "Daniel Kim", coach: "Ahmad Hudzaifah", pkg: "Strategy Call", date: "2026-08-13 11:30 AM", status: "Pending" },
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-white/5">
                          <td className="p-3 font-bold text-white">{row.user}</td>
                          <td className="p-3 text-mad-lime">{row.coach}</td>
                          <td className="p-3">{row.pkg}</td>
                          <td className="p-3">{row.date}</td>
                          <td className="p-3">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              row.status === "Confirmed" ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"
                            }`}>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Members Tab Content */}
          {activeTab === "members" && (
            <div className="rounded-3xl bg-mad-surface border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <h3 className="text-xl font-bold font-spartan text-white uppercase">
                  ATHLETE MEMBERS DIRECTORY ({filteredMembers.length})
                </h3>

                {/* Search input */}
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mad-gray" />
                  <input
                    type="text"
                    placeholder="Search member or program..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-mad-bg border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-mad-gray focus:outline-none focus:border-rose-500 font-mono"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-mad-gray font-mono">
                  <thead className="bg-mad-bg text-white uppercase border-b border-white/10">
                    <tr>
                      <th className="p-3">Athlete Name</th>
                      <th className="p-3">Email</th>
                      <th className="p-3">Assigned Program</th>
                      <th className="p-3">Joined Date</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredMembers.map((m, idx) => (
                      <tr key={idx} className="hover:bg-white/5">
                        <td className="p-3 font-bold text-white">{m.name}</td>
                        <td className="p-3">{m.email}</td>
                        <td className="p-3 text-mad-lime">{m.program}</td>
                        <td className="p-3">{m.joined}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            m.status === "Active" ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"
                          }`}>
                            {m.status}
                          </span>
                        </td>
                        <td className="p-3">
                          <button className="px-3 py-1 rounded-lg bg-mad-bg border border-white/10 text-[11px] text-white hover:border-mad-lime">
                            Edit Plan
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Programs Tab Content */}
          {activeTab === "programs" && (
            <div className="rounded-3xl bg-mad-surface border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <h3 className="text-xl font-bold font-spartan text-white uppercase">
                  COACHING PROGRAM CATALOG
                </h3>
                <button className="px-4 py-2 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-xs uppercase">
                  + Add Program
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "Fat Loss Masterclass", enrolled: 210, price: "$199", duration: "12 Weeks" },
                  { name: "Hypertrophy Muscle Build", enrolled: 284, price: "$249", duration: "16 Weeks" },
                  { name: "Body Recomposition", enrolled: 148, price: "$299", duration: "12 Weeks" },
                ].map((p, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-mad-bg border border-white/10 space-y-4">
                    <div className="space-y-1">
                      <h4 className="font-bold font-spartan text-lg text-white uppercase">{p.name}</h4>
                      <span className="text-xs text-mad-lime font-mono">{p.duration} • {p.price}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-mad-gray font-mono pt-2 border-t border-white/5">
                      <span>Enrolled: <strong className="text-white">{p.enrolled} Athletes</strong></span>
                      <button className="text-mad-lime hover:underline">Manage →</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bookings Tab Content */}
          {activeTab === "bookings" && (
            <div className="rounded-3xl bg-mad-surface border border-white/10 p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold font-spartan text-white uppercase pb-4 border-b border-white/10">
                MANAGE 1-ON-1 COACHING CONSULTATIONS
              </h3>

              <div className="space-y-3">
                {[
                  { name: "Brandon Hayes", pkg: "1-on-1 VIP Coaching", date: "Tomorrow, 10:00 AM", status: "Confirmed" },
                  { name: "Sarah Jenkins", pkg: "Nutrition Prep Consultation", date: "Tomorrow, 02:00 PM", status: "Confirmed" },
                  { name: "Daniel Kim", pkg: "Physique Strategy Call", date: "Aug 13, 11:30 AM", status: "Pending" },
                ].map((b, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-mad-bg border border-white/10 flex items-center justify-between text-xs">
                    <div>
                      <strong className="text-white font-bold block text-sm">{b.name}</strong>
                      <span className="text-mad-gray font-mono">{b.pkg} • {b.date}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                      b.status === "Confirmed" ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"
                    }`}>
                      {b.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
