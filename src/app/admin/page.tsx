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
} from "lucide-react";
import confetti from "canvas-confetti";
import {
  ArticleItem,
  ProgramItem,
  MemberItem,
  BookingItem,
  getSavedArticles,
  saveArticles,
  getSavedPrograms,
  savePrograms,
  getSavedMembers,
  saveMembers,
  getSavedBookings,
  saveBookings,
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

  // Restore active tab and load persistent data on client mount
  useEffect(() => {
    setArticles(getSavedArticles());
    setMembersList(getSavedMembers());
    setPrograms(getSavedPrograms());
    setBookings(getSavedBookings());

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
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
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
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
  };

  const handleToggleBookingStatus = (id: number | string) => {
    const updated = bookings.map((b) => {
      if (b.id === id) {
        const nextStatus: BookingItem["status"] =
          b.status === "Pending" ? "Confirmed" : b.status === "Confirmed" ? "Cancelled" : "Pending";
        return { ...b, status: nextStatus };
      }
      return b;
    });
    setBookings(updated);
    saveBookings(updated);
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

          <nav className="space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-mad-gray block mb-2 px-3">
              PLATFORM CONSOLE
            </span>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => changeTab(item.id as any)}
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
            <Link href="/login" title="Sign Out">
              <LogOut className="w-4 h-4 text-mad-gray hover:text-rose-400 transition-colors" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Workspace Canvas */}
      <div className="flex-1 min-w-0 flex flex-col min-h-screen">
        <header className="hidden md:flex items-center justify-between px-8 py-5 bg-mad-surface/50 border-b border-rose-500/20 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-[10px] uppercase font-bold flex items-center gap-1.5">
              <Save className="w-3 h-3 text-emerald-400 animate-pulse" />
              <span>DUAL LANGUAGE ADMIN CONTROL (ID & EN)</span>
            </span>
            <h2 className="text-lg font-black font-spartan text-white uppercase tracking-wide">
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
              className="px-4 py-2 rounded-xl bg-rose-500 text-white font-extrabold text-xs uppercase flex items-center gap-2 hover:bg-rose-600 transition-all shadow-lg shadow-rose-500/20"
            >
              <Plus className="w-4 h-4" />
              <span>+ Create Article</span>
            </button>

            <button
              onClick={() => setProgramModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-xs uppercase flex items-center gap-2 hover:bg-mad-lime-hover transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Create Program</span>
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-4 sm:p-8 space-y-8 flex-1">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-[10px] uppercase font-bold">
                  ADMIN CONSOLE
                </span>
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Full Dual Language Article Editor Enabled
                </span>
              </div>
              <h1 className="text-3xl font-black font-spartan text-white uppercase mt-1">
                MADROCK PLATFORM MANAGEMENT
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleOpenCreateArticle}
                className="px-5 py-2.5 rounded-xl bg-rose-500 text-white font-extrabold text-xs uppercase flex items-center gap-2 hover:bg-rose-600 transition-all shadow-lg shadow-rose-500/20"
              >
                <FileText className="w-4 h-4" />
                <span>Publish New Article</span>
              </button>

              <button
                onClick={() => setProgramModalOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-xs uppercase flex items-center gap-2 hover:bg-mad-lime-hover transition-all shadow-lg shadow-mad-lime/20"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Program</span>
              </button>
            </div>
          </div>

          {/* Articles Tab */}
          {activeTab === "articles" && (
            <div className="rounded-3xl bg-mad-surface border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold font-spartan text-white uppercase">
                    JOURNAL BLOG ARTICLES MANAGEMENT ({articles.length})
                  </h3>
                  <p className="text-xs text-emerald-400 font-mono mt-1">
                    ✓ All articles published here render live in Indonesian (ID) & English (EN) on /blog
                  </p>
                </div>

                <button
                  onClick={handleOpenCreateArticle}
                  className="px-5 py-2.5 rounded-xl bg-rose-500 text-white font-extrabold text-xs uppercase flex items-center gap-2 hover:bg-rose-600 transition-all shadow-lg"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Article</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-mad-gray font-mono">
                  <thead className="bg-mad-bg text-white uppercase border-b border-white/10">
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
                      <tr key={art.id} className="hover:bg-white/5">
                        <td className="p-3 font-bold text-white max-w-xs truncate">
                          <span className="block text-white">🇮🇩 {art.title_id}</span>
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
                            className="px-3 py-1 rounded-lg bg-mad-bg border border-white/10 text-white hover:border-mad-lime"
                          >
                            <Edit className="w-3.5 h-3.5 inline mr-1" />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteArticle(art.id)}
                            className="px-3 py-1 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/30 hover:bg-rose-500/20"
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

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-6 rounded-2xl bg-mad-surface border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-mad-gray uppercase">Total Active Members</span>
                  <div className="text-3xl font-black font-spartan text-white">{membersList.length}</div>
                  <span className="text-[10px] text-emerald-400 font-mono">Active Athletes</span>
                </div>

                <div className="p-6 rounded-2xl bg-mad-surface border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-mad-gray uppercase">Monthly Recurring Revenue</span>
                  <div className="text-3xl font-black font-spartan text-mad-lime">$48,250</div>
                  <span className="text-[10px] text-emerald-400 font-mono">+8.4% MRR Growth</span>
                </div>

                <div className="p-6 rounded-2xl bg-mad-surface border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-mad-gray uppercase">Published Articles</span>
                  <div className="text-3xl font-black font-spartan text-rose-400">{articles.length} Posts</div>
                  <span className="text-[10px] text-emerald-400 font-mono font-bold">Dual Language (ID/EN)</span>
                </div>

                <div className="p-6 rounded-2xl bg-mad-surface border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-mad-gray uppercase">Active VIP Bookings</span>
                  <div className="text-3xl font-black font-spartan text-white">{bookings.length}</div>
                  <span className="text-[10px] text-mad-gray font-mono">Consultations scheduled</span>
                </div>
              </div>
            </div>
          )}

          {/* Programs Tab */}
          {activeTab === "programs" && (
            <div className="rounded-3xl bg-mad-surface border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <h3 className="text-xl font-bold font-spartan text-white uppercase">COACHING PROGRAM CATALOG</h3>
                <button onClick={() => setProgramModalOpen(true)} className="px-4 py-2 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-xs uppercase">
                  + Add Program
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {programs.map((p) => (
                  <div key={p.id} className="p-6 rounded-2xl bg-mad-bg border border-white/10 space-y-4">
                    <div className="space-y-1">
                      <h4 className="font-bold font-spartan text-lg text-white uppercase">🇮🇩 {p.name_id}</h4>
                      <h5 className="font-semibold text-sm text-mad-gray uppercase">🇺🇸 {p.name_en}</h5>
                      <span className="text-xs text-mad-lime font-mono block pt-1">{p.duration_en} • {p.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ARTICLE DUAL LANGUAGE MODAL */}
      {articleModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-2xl rounded-3xl bg-mad-surface border border-white/10 p-6 sm:p-8 space-y-5 relative shadow-2xl animate-fadeIn max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setArticleModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-mad-bg text-mad-gray hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pb-3 border-b border-white/10">
              <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 font-mono text-[10px] font-bold uppercase">
                DUAL LANGUAGE ARTICLE EDITOR (ID & EN)
              </span>
              <h3 className="text-2xl font-black font-spartan text-white uppercase mt-1">
                {editingArticleId ? "EDIT JOURNAL ARTICLE" : "CREATE NEW JOURNAL ARTICLE"}
              </h3>
            </div>

            <form onSubmit={handleSaveArticle} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-mad-lime uppercase block mb-1">🇮🇩 Judul Artikel (Indonesian)</label>
                  <input
                    type="text"
                    required
                    placeholder="Judul artikel Bahasa Indonesia..."
                    value={articleTitleID}
                    onChange={(e) => setArticleTitleID(e.target.value)}
                    className="w-full bg-mad-bg border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="text-rose-400 uppercase block mb-1">🇺🇸 Article Title (English)</label>
                  <input
                    type="text"
                    required
                    placeholder="English article title..."
                    value={articleTitleEN}
                    onChange={(e) => setArticleTitleEN(e.target.value)}
                    className="w-full bg-mad-bg border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-mad-gray uppercase block mb-1">Category</label>
                  <select
                    value={articleCategory}
                    onChange={(e) => setArticleCategory(e.target.value)}
                    className="w-full bg-mad-bg border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-rose-500"
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
                    className="w-full bg-mad-bg border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-mad-lime uppercase block mb-1">🇮🇩 Rangkuman (Indonesian)</label>
                  <textarea
                    rows={2}
                    placeholder="Rangkuman artikel Bahasa Indonesia..."
                    value={articleExcerptID}
                    onChange={(e) => setArticleExcerptID(e.target.value)}
                    className="w-full bg-mad-bg border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="text-rose-400 uppercase block mb-1">🇺🇸 Summary Excerpt (English)</label>
                  <textarea
                    rows={2}
                    placeholder="English summary excerpt..."
                    value={articleExcerptEN}
                    onChange={(e) => setArticleExcerptEN(e.target.value)}
                    className="w-full bg-mad-bg border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-rose-500 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-rose-600 shadow-lg shadow-rose-500/20 flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>{editingArticleId ? "SAVE DUAL-LANGUAGE ARTICLE" : "PUBLISH DUAL-LANGUAGE ARTICLE"}</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
