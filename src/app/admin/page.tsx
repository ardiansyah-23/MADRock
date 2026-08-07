"use client";

import { useState } from "react";
import { Users, Dumbbell, Calendar, BookOpen, DollarSign, Activity, Settings, Plus, BarChart3 } from "lucide-react";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-[10px] uppercase font-bold">
                ADMIN CONSOLE
              </span>
            </div>
            <h1 className="text-3xl font-black font-spartan text-white uppercase mt-1">
              MADROCK PLATFORM MANAGEMENT
            </h1>
          </div>

          <button className="px-5 py-2.5 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-xs uppercase flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span>Create New Program</span>
          </button>
        </div>

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
                  { user: "Brandon Hayes", coach: "Marcus Rock", pkg: "1-on-1 VIP", date: "2026-08-12 10:00 AM", status: "Confirmed" },
                  { user: "Sarah Jenkins", coach: "Elena Vance", pkg: "Nutrition Prep", date: "2026-08-12 02:00 PM", status: "Confirmed" },
                  { user: "Daniel Kim", coach: "Marcus Rock", pkg: "Strategy Call", date: "2026-08-13 11:30 AM", status: "Pending" },
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
    </main>
  );
}
