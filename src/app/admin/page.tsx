"use client";

import { useState, useEffect } from "react";
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
  Edit,
  Trash2,
  FileText,
  Check,
  AlertCircle,
  Save,
  Bold,
  Italic,
  Link as LinkIcon,
  Image,
  Video,
} from "lucide-react";
import {
  ArticleItem,
  ProgramItem,
  MemberItem,
  BookingItem,
  CoachSlot,
  getSavedArticles,
  saveArticles,
  getSavedPrograms,
  savePrograms,
  getSavedMembers,
  saveMembers,
  getSavedBookings,
  saveBookings,
  getSavedSlots,
  saveSlots,
} from "@/lib/adminDataStore";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "articles" | "members" | "programs" | "bookings">("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // 1. PERSISTENT ARTICLES MANAGEMENT STATE
  const [articles, setArticles] = useState<ArticleItem[]>([]);
  // 2. PERSISTENT MEMBERS DIRECTORY STATE
  const [membersList, setMembersList] = useState<MemberItem[]>([]);
  // 3. PERSISTENT PROGRAMS CATALOG STATE
  const [programs, setPrograms] = useState<ProgramItem[]>([]);
  // 4. PERSISTENT BOOKINGS CONSULTATIONS STATE
  const [bookings, setBookings] = useState<BookingItem[]>([]);
  // 5. COACH MANAGED TIME SLOTS STATE
  const [slots, setSlots] = useState<CoachSlot[]>([]);
  const [selectedSlotDate, setSelectedSlotDate] = useState<string>(new Date().toISOString().split("T")[0]);

  // Restore active tab and load persistent data on client mount
  useEffect(() => {
    setArticles(getSavedArticles());
    setMembersList(getSavedMembers());
    setPrograms(getSavedPrograms());
    setBookings(getSavedBookings());
    setSlots(getSavedSlots());

    const hash = window.location.hash.replace("#", "");
    const savedTab = localStorage.getItem("madrock_admin_tab");
    const validTabs = ["overview", "articles", "members", "programs", "bookings"];

    if (hash && validTabs.includes(hash)) {
      setActiveTab(hash as any);
    } else if (savedTab && validTabs.includes(savedTab)) {
      setActiveTab(savedTab as any);
    }
  }, []);

  const changeTab = (tab: "overview" | "articles" | "members" | "programs" | "bookings") => {
    setActiveTab(tab);
    localStorage.setItem("madrock_admin_tab", tab);
    window.history.replaceState(null, "", `#${tab}`);
    setSidebarOpen(false);
  };

  // Article Modal State (with Dual-Language support for ID & EN)
  const [articleModalOpen, setArticleModalOpen] = useState(false);
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);
  const [articleTitleID, setArticleTitleID] = useState("");
  const [articleTitleEN, setArticleTitleEN] = useState("");
  const [articleCategory, setArticleCategory] = useState("Workout Science");
  const [articleExcerptID, setArticleExcerptID] = useState("");
  const [articleExcerptEN, setArticleExcerptEN] = useState("");
  const [articleAuthor, setArticleAuthor] = useState("Coach Ahmad Hudzaifah");
  const [articleContentID, setArticleContentID] = useState("");
  const [articleContentEN, setArticleContentEN] = useState("");

  const handleOpenCreateArticle = () => {
    setEditingArticleId(null);
    setArticleTitleID("");
    setArticleTitleEN("");
    setArticleCategory("Workout Science");
    setArticleExcerptID("");
    setArticleExcerptEN("");
    setArticleAuthor("Coach Ahmad Hudzaifah");
    setArticleContentID("");
    setArticleContentEN("");
    setArticleModalOpen(true);
  };

  const handleOpenEditArticle = (art: ArticleItem) => {
    setEditingArticleId(art.id);
    setArticleTitleID(art.title_id);
    setArticleTitleEN(art.title_en);
    setArticleCategory(art.category_en);
    setArticleExcerptID(art.excerpt_id);
    setArticleExcerptEN(art.excerpt_en);
    setArticleAuthor(art.author);
    setArticleContentID(art.content_id || "");
    setArticleContentEN(art.content_en || "");
    setArticleModalOpen(true);
  };

  const handleSaveArticle = (e: React.FormEvent) => {
    e.preventDefault();
    let updated: ArticleItem[];

    const finalTitleEN = articleTitleEN || articleTitleID;
    const finalTitleID = articleTitleID || articleTitleEN;

    if (editingArticleId) {
      updated = articles.map((a) =>
        a.id === editingArticleId
          ? {
            ...a,
            title_id: finalTitleID,
            title_en: finalTitleEN,
            category_id: articleCategory,
            category_en: articleCategory,
            excerpt_id: articleExcerptID || articleExcerptEN,
            excerpt_en: articleExcerptEN || articleExcerptID,
            author: articleAuthor,
            content_id: articleContentID || articleExcerptID,
            content_en: articleContentEN || articleExcerptEN,
          }
          : a
      );
    } else {
      const slug = finalTitleEN.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `article-${Date.now()}`;
      const newArt: ArticleItem = {
        id: slug,
        title_id: finalTitleID,
        title_en: finalTitleEN,
        excerpt_id: articleExcerptID || articleExcerptEN,
        excerpt_en: articleExcerptEN || articleExcerptID,
        content_id: articleContentID || articleExcerptID,
        content_en: articleContentEN || articleExcerptEN,
        author: articleAuthor,
        date: "August 8, 2026",
        readTime: "5 Min Read",
        category_id: articleCategory,
        category_en: articleCategory,
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
        status: "Published",
      };
      updated = [newArt, ...articles];
    }

    setArticles(updated);
    saveArticles(updated);
    setArticleModalOpen(false);
  };

  const handleDeleteArticle = (id: string) => {
    if (confirm("Are you sure you want to delete this article?")) {
      const updated = articles.filter((a) => a.id !== id);
      setArticles(updated);
      saveArticles(updated);
    }
  };

  // MEMBER & PROGRAM MANAGEMENT HANDLERS
  const [memberModalOpen, setMemberModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<MemberItem | null>(null);

  const handleOpenEditMember = (m: MemberItem) => {
    setSelectedMember({ ...m });
    setMemberModalOpen(true);
  };

  const handleSaveMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMember) return;
    const updated = membersList.map((m) => (m.id === selectedMember.id ? selectedMember : m));
    setMembersList(updated);
    saveMembers(updated);
    setMemberModalOpen(false);
  };

  const [programModalOpen, setProgramModalOpen] = useState(false);
  const [newProgName, setNewProgName] = useState("");
  const [newProgPrice, setNewProgPrice] = useState("$249");
  const [newProgDuration, setNewProgDuration] = useState("12 Weeks");

  const handleSaveProgram = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: ProgramItem[] = [
      ...programs,
      {
        id: Date.now(),
        name_id: newProgName,
        name_en: newProgName,
        enrolled: 1,
        price: newProgPrice,
        duration_id: newProgDuration,
        duration_en: newProgDuration,
      },
    ];
    setPrograms(updated);
    savePrograms(updated);
    setNewProgName("");
    setProgramModalOpen(false);
  };

  const handleUpdateBookingStatus = (id: number | string, newStatus: BookingItem["status"]) => {
    const updated = bookings.map((b) => (b.id === id ? { ...b, status: newStatus } : b));
    setBookings(updated);
    saveBookings(updated);
  };

  const handleToggleSlotAvailable = (slotId: string) => {
    const updated = slots.map((s) => (s.id === slotId ? { ...s, available: !s.available } : s));
    setSlots(updated);
    saveSlots(updated);
  };

  const filteredMembers = membersList.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.program.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navItems = [
    { id: "overview", label: "Analytics & Overview", icon: BarChart3 },
    { id: "articles", label: "Manage Blog Articles", icon: FileText },
    { id: "members", label: "Athlete Members", icon: Users },
    { id: "programs", label: "Coaching Programs", icon: Dumbbell },
    { id: "bookings", label: "Coaching Bookings", icon: Calendar },
  ];

  return (
    <>
    <div className="min-h-screen bg-mad-bg text-slate-900 flex flex-col md:flex-row">
      {/* Mobile Top App Bar */}
      <div className="md:hidden bg-mad-surface border-b border-rose-500/20 p-4 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-black">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="font-spartan font-black text-lg tracking-tighter uppercase">
            MADROCK <span className="text-slate-900/50">ADMIN</span>
          </span>
        </Link>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-xl bg-mad-bg border border-slate-900/10 text-slate-900"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Standalone Admin Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-40 h-screen w-64 bg-mad-surface border-r border-rose-500/20 p-6 flex flex-col justify-between transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
      >
        <div className="space-y-8">
          <Link href="/" className="flex items-center gap-2.5 group pt-2">
            <div className="w-10 h-10 rounded-xl bg-slate-900/5 border border-slate-900/10 flex items-center justify-center text-slate-900 shadow-sm">
              <ShieldCheck className="w-6 h-6 stroke-[2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-spartan font-black text-xl tracking-tighter text-slate-900 uppercase leading-none">
                MAD<span className="text-slate-900/50">ROCK</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-slate-900/50 uppercase font-bold mt-0.5">
                ADMIN CONSOLE
              </span>
            </div>
          </Link>

          <nav className="space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-mad-gray block mb-2 px-3">
              PLATFORM CONSOLE
            </span>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => changeTab(item.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold uppercase transition-all ${activeTab === item.id
                  ? "bg-slate-900 text-white font-extrabold shadow-sm"
                  : "text-mad-gray hover:text-slate-900 hover:bg-slate-900/5"
                  }`}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-900/10 space-y-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-mad-gray hover:text-slate-900 font-mono px-2 transition-colors"
          >
            <Home className="w-4 h-4 text-rose-400" />
            <span>Back to Main Web</span>
          </Link>

          <div className="p-3.5 rounded-2xl bg-mad-bg border border-slate-900/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900/5 text-slate-900 font-extrabold flex items-center justify-center text-sm font-spartan border border-slate-900/10">
                AH
              </div>
              <div className="text-left">
                <h5 className="font-bold text-slate-900 text-xs leading-none">Ahmad Hudzaifah</h5>
                <span className="text-[10px] text-slate-900/50 font-mono">Platform Admin</span>
              </div>
            </div>
            <Link href="/login" title="Sign Out">
              <LogOut className="w-4 h-4 text-mad-gray hover:text-slate-900 transition-colors" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Workspace Canvas */}
      <div className="flex-1 min-w-0 flex flex-col min-h-screen">
        <header className="hidden md:flex items-center justify-between px-8 py-5 bg-mad-surface/50 border-b border-slate-900/10 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-black font-spartan text-slate-900 uppercase tracking-wide">
              {activeTab === "overview" && "Analytics & Overview Desk"}
              {activeTab === "articles" && "Blog & Article Content Manager"}
              {activeTab === "members" && "Athlete Members Directory"}
              {activeTab === "programs" && "Coaching Program Catalog"}
              {activeTab === "bookings" && "Manage Consultations"}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleOpenCreateArticle}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white font-extrabold text-xs uppercase flex items-center gap-2 hover:bg-slate-800 transition-all shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Create Article</span>
            </button>

            <button
              onClick={() => setProgramModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-mad-lime text-slate-900 font-extrabold text-xs uppercase flex items-center gap-2 hover:bg-mad-lime-hover transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Create Program</span>
            </button>
          </div>
        </header>

        {/* Articles Tab */}
        {activeTab === "articles" && (
          <div className="rounded-3xl bg-mad-surface border border-slate-900/10 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-900/10">
              <div>
                <h3 className="text-xl font-bold font-spartan text-slate-900 uppercase">
                  JOURNAL BLOG ARTICLES MANAGEMENT ({articles.length})
                </h3>
                <p className="text-xs text-emerald-400 font-mono mt-1">
                  ✓ All articles published here render live in Indonesian (ID) & English (EN) on /blog
                </p>
              </div>

              <button
                onClick={handleOpenCreateArticle}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-extrabold text-xs uppercase flex items-center gap-2 hover:bg-slate-800 transition-all shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Add Article</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-mad-gray font-mono">
                <thead className="bg-mad-bg text-slate-900 uppercase border-b border-slate-900/10">
                  <tr>
                    <th className="p-3">Title (ID & EN)</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Author</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {articles.map((art) => (
                    <tr key={art.id} className="hover:bg-slate-900/5">
                      <td className="p-3 font-bold text-slate-900 max-w-xs truncate">
                        <span className="block text-slate-900">🇮🇩 {art.title_id}</span>
                        <span className="block text-mad-gray text-[11px]">🇺🇸 {art.title_en}</span>
                      </td>
                      <td className="p-3 text-mad-lime">{art.category_en}</td>
                      <td className="p-3">{art.author}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400">
                          {art.status}
                        </span>
                      </td>
                      <td className="p-3 text-right space-x-2">
                        <button
                          onClick={() => handleOpenEditArticle(art)}
                          className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-900 font-bold hover:bg-slate-200"
                        >
                          <Edit className="w-3.5 h-3.5 inline mr-1" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteArticle(art.id)}
                          className="px-3 py-1.5 rounded-xl bg-rose-100 border border-rose-300 text-rose-700 font-bold hover:bg-rose-200"
                        >
                          <Trash2 className="w-3.5 h-3.5 inline mr-1" />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Athlete Members Tab */}
        {activeTab === "members" && (
          <div className="rounded-3xl bg-mad-surface border border-slate-900/10 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-900/10">
              <h3 className="text-xl font-bold font-spartan text-slate-900 uppercase">ATHLETE MEMBERS DIRECTORY ({filteredMembers.length})</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-mad-gray font-mono">
                <thead className="bg-mad-bg text-slate-900 uppercase border-b border-slate-900/10">
                  <tr>
                    <th className="p-3">Nama Atlet</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Program Latihan</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Tanggal Bergabung</th>
                    <th className="p-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredMembers.map((m) => (
                    <tr key={m.id} className="hover:bg-slate-900/5">
                      <td className="p-3 font-bold text-slate-900">{m.name}</td>
                      <td className="p-3">{m.email}</td>
                      <td className="p-3 text-mad-lime">{m.program}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          m.status === "Active" ? "bg-emerald-500/20 text-emerald-600 border border-emerald-500/30" :
                          m.status === "Pending" ? "bg-amber-500/20 text-amber-600 border border-amber-500/30" :
                          "bg-slate-500/20 text-slate-600 border border-slate-500/30"
                        }`}>
                          {m.status}
                        </span>
                      </td>
                      <td className="p-3">{m.joined}</td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => handleOpenEditMember(m)}
                          className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-900 font-bold hover:bg-slate-200"
                        >
                          <Edit className="w-3.5 h-3.5 inline mr-1" />
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-6 rounded-2xl bg-mad-surface border border-slate-900/10 space-y-2">
                <span className="text-xs font-mono text-mad-gray uppercase">Total Active Members</span>
                <div className="text-3xl font-black font-spartan text-slate-900">{membersList.length}</div>
                <span className="text-[10px] text-emerald-400 font-mono">Active Athletes</span>
              </div>

              <div className="p-6 rounded-2xl bg-mad-surface border border-slate-900/10 space-y-2">
                <span className="text-xs font-mono text-mad-gray uppercase">Monthly Recurring Revenue</span>
                <div className="text-3xl font-black font-spartan text-mad-lime">$48,250</div>
                <span className="text-[10px] text-emerald-400 font-mono">+8.4% MRR Growth</span>
              </div>

              <div className="p-6 rounded-2xl bg-mad-surface border border-slate-900/10 space-y-2">
                <span className="text-xs font-mono text-mad-gray uppercase">Published Articles</span>
                <div className="text-3xl font-black font-spartan text-rose-400">{articles.length} Posts</div>
                <span className="text-[10px] text-emerald-400 font-mono font-bold">Dual Language (ID/EN)</span>
              </div>

              <div className="p-6 rounded-2xl bg-mad-surface border border-slate-900/10 space-y-2">
                <span className="text-xs font-mono text-mad-gray uppercase">Active VIP Bookings</span>
                <div className="text-3xl font-black font-spartan text-slate-900">{bookings.length}</div>
                <span className="text-[10px] text-mad-gray font-mono">Consultations scheduled</span>
              </div>
            </div>
          </div>
        )}

        {/* Programs Tab */}
        {activeTab === "programs" && (
          <div className="rounded-3xl bg-mad-surface border border-slate-900/10 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-900/10">
              <h3 className="text-xl font-bold font-spartan text-slate-900 uppercase">COACHING PROGRAM CATALOG</h3>
              <button onClick={() => setProgramModalOpen(true)} className="px-4 py-2 rounded-xl bg-mad-lime text-slate-900 font-extrabold text-xs uppercase">
                + Add Program
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {programs.map((p) => (
                <div key={p.id} className="p-6 rounded-2xl bg-mad-bg border border-slate-900/10 space-y-4">
                  <div className="space-y-1">
                    <h4 className="font-bold font-spartan text-lg text-slate-900 uppercase">🇮🇩 {p.name_id}</h4>
                    <h5 className="font-semibold text-sm text-mad-gray uppercase">🇺🇸 {p.name_en}</h5>
                    <span className="text-xs text-mad-lime font-mono block pt-1">{p.duration_en} • {p.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bookings & Slot Manager Tab */}
        {activeTab === "bookings" && (
          <div className="space-y-8">
            {/* Slot Manager Header Card */}
            <div className="rounded-3xl bg-mad-surface border border-slate-900/10 p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-900/10 gap-4">
                <div>
                  <h3 className="text-xl font-bold font-spartan text-slate-900 uppercase">
                    PENGATURAN SLOT WAKTU KEPELATIHAN COACH
                  </h3>
                  <p className="text-xs text-mad-gray font-mono mt-0.5">
                    Pilih tanggal dan atur slot jam yang tersedia.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="date"
                    value={selectedSlotDate}
                    onChange={(e) => setSelectedSlotDate(e.target.value)}
                    className="px-3 py-1.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-bold font-mono focus:outline-none focus:ring-2 focus:ring-mad-lime"
                  />
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 font-mono text-[10px] font-bold whitespace-nowrap">
                    SINKRONISASI AKTIF
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {slots.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleToggleSlotAvailable(s.id)}
                    className={`p-3.5 rounded-2xl border text-center font-mono text-xs font-bold transition-all ${
                      s.available
                        ? "bg-mad-lime/10 border-mad-lime text-mad-lime"
                        : "bg-mad-bg border-slate-900/10 text-mad-gray opacity-50"
                    }`}
                  >
                    <div>{s.time}</div>
                    <span className="text-[9px] block mt-1 uppercase font-extrabold">
                      {s.available ? "✓ TERSEDIA" : "✕ NONAKTIF"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Athlete Consultations Table */}
            <div className="rounded-3xl bg-mad-surface border border-slate-900/10 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-900/10">
                <div>
                  <h3 className="text-xl font-bold font-spartan text-slate-900 uppercase">
                    PERMINTAAN JADWAL & RESCHEDULE ATLET ({bookings.length})
                  </h3>
                  <p className="text-xs text-mad-gray font-mono mt-0.5">
                    Setujui atau tolak permintaan jadwal dari atlet. Status akan terupdate langsung di portal atlet.
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-mad-gray font-mono">
                  <thead className="bg-mad-bg text-slate-900 uppercase border-b border-slate-900/10">
                    <tr>
                      <th className="p-3">Nama Atlet</th>
                      <th className="p-3">Paket Sesi</th>
                      <th className="p-3">Tanggal & Slot Jam</th>
                      <th className="p-3">Status Persetujuan</th>
                      <th className="p-3 text-right">Aksi Coach</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {bookings.map((b) => (
                      <tr key={b.id} className="hover:bg-slate-900/5">
                        <td className="p-3 font-bold text-slate-900">{b.name}</td>
                        <td className="p-3">{b.pkg}</td>
                        <td className="p-3 text-mad-lime font-bold">
                          {b.date} {b.timeSlot ? `• ${b.timeSlot}` : ""}
                        </td>
                        <td className="p-3">
                          {b.status === "Confirmed" && (
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                              ✓ DISETUJUI
                            </span>
                          )}
                          {b.status === "Pending" && (
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                              ⏳ MENUNGGU
                            </span>
                          )}
                          {b.status === "Rejected" && (
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-rose-500/20 text-rose-400 border border-rose-500/30">
                              ✕ DITOLAK
                            </span>
                          )}
                          {b.status === "Cancelled" && (
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-gray-500/20 text-gray-400 border border-gray-500/30">
                              DIBATALKAN
                            </span>
                          )}
                        </td>
                        <td className="p-3 text-right space-x-2">
                          <button
                            onClick={() => handleUpdateBookingStatus(b.id, "Confirmed")}
                            className="px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 font-bold text-xs hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all"
                          >
                            Setujui
                          </button>
                          <button
                            onClick={() => handleUpdateBookingStatus(b.id, "Rejected")}
                            className="px-4 py-2 rounded-xl bg-rose-500/10 text-rose-600 border border-rose-500/20 font-bold text-xs hover:bg-rose-500/20 hover:border-rose-500/40 transition-all"
                          >
                            Tolak
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

      {/* ARTICLE DUAL LANGUAGE MODAL */ }
  {
    articleModalOpen && (
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
        <div className="w-full max-w-2xl rounded-3xl bg-mad-surface border border-slate-900/10 p-6 sm:p-8 space-y-5 relative shadow-2xl animate-fadeIn max-h-[90vh] overflow-y-auto">
          <button
            onClick={() => setArticleModalOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-xl bg-mad-bg text-mad-gray hover:text-slate-900"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="pb-3 border-b border-slate-900/10">
            <span className="px-3 py-1 rounded-full bg-slate-900/5 text-slate-900/70 font-mono text-[10px] font-bold uppercase">
              DUAL LANGUAGE ARTICLE EDITOR (ID & EN)
            </span>
            <h3 className="text-2xl font-black font-spartan text-slate-900 uppercase mt-1">
              {editingArticleId ? "EDIT JOURNAL ARTICLE" : "CREATE NEW JOURNAL ARTICLE"}
            </h3>
          </div>

          <form onSubmit={handleSaveArticle} className="space-y-4 text-xs font-mono">
            <div>
              <label className="text-slate-900 font-bold uppercase block mb-1">Article Title / Judul Artikel</label>
              <input
                type="text"
                required
                placeholder="e.g. Biomekanika Latihan & Hipertrofi / Hypertrophy Biomechanics..."
                value={articleTitleID}
                onChange={(e) => {
                  setArticleTitleID(e.target.value);
                  if (!articleTitleEN) setArticleTitleEN(e.target.value);
                }}
                className="w-full bg-mad-bg border border-slate-900/10 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:border-slate-900/50"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-mad-gray uppercase block mb-1">Category</label>
                <select
                  value={articleCategory}
                  onChange={(e) => setArticleCategory(e.target.value)}
                  className="w-full bg-mad-bg border border-slate-900/10 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-slate-900/50"
                >
                  <option value="Workout Science">Workout Science</option>
                  <option value="Nutrition">Nutrition</option>
                  <option value="Recovery">Recovery</option>
                  <option value="Supplements">Supplements</option>
                  <option value="Mindset">Mindset</option>
                </select>
              </div>

              <div>
                <label className="text-mad-gray uppercase block mb-1">Author Name</label>
                <input
                  type="text"
                  required
                  value={articleAuthor}
                  onChange={(e) => setArticleAuthor(e.target.value)}
                  className="w-full bg-mad-bg border border-slate-900/10 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-slate-900/50"
                />
              </div>
            </div>

            <div>
              <label className="text-slate-900 font-bold uppercase block mb-1 flex items-center justify-between">
                <span>Excerpt / Rangkuman Artikel</span>
                <span className="text-[10px] text-mad-gray font-normal normal-case">Tampil di beranda (max 150 char)</span>
              </label>
              <textarea
                rows={2}
                required
                placeholder="Ringkasan singkat artikel..."
                value={articleExcerptID}
                onChange={(e) => {
                  setArticleExcerptID(e.target.value);
                  if (!articleExcerptEN) setArticleExcerptEN(e.target.value);
                }}
                className="w-full bg-mad-bg border border-slate-900/10 rounded-xl px-4 py-2 text-slate-900 focus:outline-none focus:border-slate-900/50"
              />
            </div>

            <div>
              <label className="text-slate-900 font-bold uppercase block mb-1 flex items-center justify-between">
                <span>Content / Isi Artikel Lengkap</span>
                <span className="text-[10px] text-mad-gray font-normal normal-case">Dukung format media & link</span>
              </label>
              <div className="border border-slate-900/10 border-b-0 rounded-t-xl bg-slate-900/5 p-2 flex items-center gap-1.5 overflow-x-auto">
                <button type="button" className="p-1.5 hover:bg-slate-900/10 rounded text-slate-700 transition-colors" title="Bold"><Bold className="w-4 h-4" /></button>
                <button type="button" className="p-1.5 hover:bg-slate-900/10 rounded text-slate-700 transition-colors" title="Italic"><Italic className="w-4 h-4" /></button>
                <button type="button" className="p-1.5 hover:bg-slate-900/10 rounded text-slate-700 transition-colors" title="Link"><LinkIcon className="w-4 h-4" /></button>
                <div className="w-px h-4 bg-slate-900/20 mx-1"></div>
                <button type="button" className="p-1.5 hover:bg-slate-900/10 rounded text-slate-700 transition-colors" title="Add Image"><Image className="w-4 h-4" /></button>
                <button type="button" className="p-1.5 hover:bg-slate-900/10 rounded text-slate-700 transition-colors" title="Add Video"><Video className="w-4 h-4" /></button>
              </div>
              <textarea
                rows={10}
                required
                placeholder="Tulis isi artikel lengkap di sini... Anda bisa menambahkan gambar, video, dan link menggunakan toolbar di atas."
                value={articleContentID}
                onChange={(e) => {
                  setArticleContentID(e.target.value);
                  if (!articleContentEN) setArticleContentEN(e.target.value);
                }}
                className="w-full bg-mad-bg border border-slate-900/10 rounded-b-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-slate-900/50 leading-relaxed"
              />
            </div>

            {/* Optional English Title Override */}
            <details className="bg-mad-bg/50 border border-slate-900/10 rounded-xl p-3 text-[11px]">
              <summary className="cursor-pointer font-bold text-slate-900/70 uppercase">
                + Opsional: Atur Judul, Rangkuman & Isi Bahasa Inggris Khusus (EN)
              </summary>
              <div className="space-y-3 pt-3 mt-2 border-t border-slate-900/10">
                <div>
                  <label className="text-mad-gray uppercase block mb-1">English Title</label>
                  <input
                    type="text"
                    placeholder="Custom English title..."
                    value={articleTitleEN}
                    onChange={(e) => setArticleTitleEN(e.target.value)}
                    className="w-full bg-mad-bg border border-slate-900/10 rounded-xl px-3 py-2 text-slate-900"
                  />
                </div>
                <div>
                  <label className="text-mad-gray uppercase block mb-1">English Excerpt</label>
                  <textarea
                    rows={2}
                    placeholder="Custom English excerpt..."
                    value={articleExcerptEN}
                    onChange={(e) => setArticleExcerptEN(e.target.value)}
                    className="w-full bg-mad-bg border border-slate-900/10 rounded-xl px-3 py-2 text-slate-900"
                  />
                </div>
                <div>
                  <label className="text-mad-gray uppercase block mb-1">English Content</label>
                  <textarea
                    rows={6}
                    placeholder="Custom English content..."
                    value={articleContentEN}
                    onChange={(e) => setArticleContentEN(e.target.value)}
                    className="w-full bg-mad-bg border border-slate-900/10 rounded-xl px-3 py-2 text-slate-900"
                  />
                </div>
              </div>
            </details>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-slate-800 shadow-sm flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>{editingArticleId ? "SAVE DUAL-LANGUAGE ARTICLE" : "PUBLISH DUAL-LANGUAGE ARTICLE"}</span>
            </button>
          </form>
        </div>
      </div>
      {/* MEMBER EDIT MODAL */}
      {memberModalOpen && selectedMember && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-3xl bg-mad-surface border border-slate-900/10 p-6 sm:p-8 space-y-5 relative shadow-2xl animate-fadeIn">
            <button
              onClick={() => setMemberModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-mad-bg text-mad-gray hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pb-3 border-b border-slate-900/10">
              <h3 className="text-2xl font-black font-spartan text-slate-900 uppercase">
                EDIT MEMBER DETAILS
              </h3>
            </div>

            <form onSubmit={handleSaveMember} className="space-y-4 text-xs font-mono">
              <div>
                <label className="text-slate-900 font-bold uppercase block mb-1">Nama Atlet</label>
                <input
                  type="text"
                  required
                  value={selectedMember.name}
                  onChange={(e) => setSelectedMember({ ...selectedMember, name: e.target.value })}
                  className="w-full bg-mad-bg border border-slate-900/10 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:border-slate-900/50"
                />
              </div>

              <div>
                <label className="text-slate-900 font-bold uppercase block mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={selectedMember.email}
                  onChange={(e) => setSelectedMember({ ...selectedMember, email: e.target.value })}
                  className="w-full bg-mad-bg border border-slate-900/10 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:border-slate-900/50"
                />
              </div>

              <div>
                <label className="text-slate-900 font-bold uppercase block mb-1">Program Latihan</label>
                <input
                  type="text"
                  required
                  value={selectedMember.program}
                  onChange={(e) => setSelectedMember({ ...selectedMember, program: e.target.value })}
                  className="w-full bg-mad-bg border border-slate-900/10 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:border-slate-900/50"
                />
              </div>

              <div>
                <label className="text-slate-900 font-bold uppercase block mb-1">Status Keanggotaan</label>
                <select
                  value={selectedMember.status}
                  onChange={(e) => setSelectedMember({ ...selectedMember, status: e.target.value as any })}
                  className="w-full bg-mad-bg border border-slate-900/10 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-slate-900/50"
                >
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-slate-800 shadow-sm flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>SAVE MEMBER CHANGES</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* PROGRAM ADD MODAL */}
      {programModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-3xl bg-mad-surface border border-slate-900/10 p-6 sm:p-8 space-y-5 relative shadow-2xl animate-fadeIn">
            <button
              onClick={() => setProgramModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-mad-bg text-mad-gray hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pb-3 border-b border-slate-900/10">
              <h3 className="text-2xl font-black font-spartan text-slate-900 uppercase">
                ADD NEW PROGRAM
              </h3>
            </div>

            <form onSubmit={handleSaveProgram} className="space-y-4 text-xs font-mono">
              <div>
                <label className="text-slate-900 font-bold uppercase block mb-1">Program Name</label>
                <input
                  type="text"
                  required
                  value={newProgName}
                  onChange={(e) => setNewProgName(e.target.value)}
                  placeholder="e.g. Masterclass Defisit Lemak"
                  className="w-full bg-mad-bg border border-slate-900/10 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:border-slate-900/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-900 font-bold uppercase block mb-1">Price</label>
                  <input
                    type="text"
                    required
                    value={newProgPrice}
                    onChange={(e) => setNewProgPrice(e.target.value)}
                    className="w-full bg-mad-bg border border-slate-900/10 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:border-slate-900/50"
                  />
                </div>
                <div>
                  <label className="text-slate-900 font-bold uppercase block mb-1">Duration</label>
                  <input
                    type="text"
                    required
                    value={newProgDuration}
                    onChange={(e) => setNewProgDuration(e.target.value)}
                    className="w-full bg-mad-bg border border-slate-900/10 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:border-slate-900/50"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-slate-800 shadow-sm flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>SAVE PROGRAM</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
