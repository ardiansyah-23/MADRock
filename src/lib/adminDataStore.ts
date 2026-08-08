// Persistent LocalStorage & Supabase Data Store for Admin & Public Pages

export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  status: "Published" | "Draft";
}

export interface ProgramItem {
  id: number | string;
  name: string;
  enrolled: number;
  price: string;
  duration: string;
  description?: string;
}

export interface MemberItem {
  id: number | string;
  name: string;
  email: string;
  program: string;
  status: "Active" | "Pending" | "Completed";
  joined: string;
}

export interface BookingItem {
  id: number | string;
  name: string;
  pkg: string;
  date: string;
  status: "Confirmed" | "Pending" | "Cancelled";
}

// DEFAULT INITIAL SEED DATA
const DEFAULT_ARTICLES: ArticleItem[] = [
  {
    id: "hypertrophy-biomechanics-guide",
    title: "The Biomechanics of Hypertrophy: How Mechanical Tension Drives Muscle Mass",
    excerpt: "Explore sports science research on mechanical tension, metabolic stress, and muscle damage for natural lifters.",
    content: "Mechanical tension is undisputed as the primary driver of muscle hypertrophy. When muscles produce force while being stretched, mechanosensors trigger the mTORC1 signaling pathway...",
    author: "Coach Ahmad Hudzaifah",
    date: "August 5, 2026",
    readTime: "6 Min Read",
    category: "Workout Science",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    status: "Published",
  },
  {
    id: "carb-cycling-fat-loss",
    title: "Carb Cycling Demystified: How to Burn Fat Without Destroying Thyroid Function",
    excerpt: "Learn how alternating high and low carbohydrate days prevents metabolic adaptation and maintains high workout intensity.",
    content: "Carbohydrate manipulation is one of the most effective strategies to lose stubborn fat while preserving lean muscle mass...",
    author: "Elena Vance",
    date: "July 28, 2026",
    readTime: "8 Min Read",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
    status: "Published",
  },
  {
    id: "creatine-monohydrate-guide",
    title: "Creatine Monohydrate Masterclass: Timing, Dosage, and Cognitive Benefits",
    excerpt: "Why creatine remains the gold standard of sports supplements and how 5g daily accelerates strength output.",
    content: "Creatine monohydrate is the most extensively researched sports supplement on Earth. By saturating intramuscular phosphocreatine stores...",
    author: "Coach Ahmad Hudzaifah",
    date: "July 19, 2026",
    readTime: "5 Min Read",
    category: "Supplements",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
    status: "Published",
  },
  {
    id: "sleep-hgh-recovery-protocol",
    title: "Deep Sleep & HGH: The Forgotten Pillar of Elite Strength Recovery",
    excerpt: "How sleep architecture controls human growth hormone secretion, central nervous system recovery, and testosterone synthesis.",
    content: "High-intensity weight training creates mechanical micro-tears in skeletal muscle fibers. However, muscle adaptation occurs during deep slow-wave sleep...",
    author: "David Vance",
    date: "July 10, 2026",
    readTime: "7 Min Read",
    category: "Recovery",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
    status: "Published",
  },
];

const DEFAULT_PROGRAMS: ProgramItem[] = [
  { id: 1, name: "Fat Loss Masterclass", enrolled: 210, price: "$199", duration: "12 Weeks" },
  { id: 2, name: "Hypertrophy Muscle Build", enrolled: 284, price: "$249", duration: "16 Weeks" },
  { id: 3, name: "Body Recomposition", enrolled: 148, price: "$299", duration: "12 Weeks" },
];

const DEFAULT_MEMBERS: MemberItem[] = [
  { id: 1, name: "Brandon Hayes", email: "brandon@example.com", program: "12-Week Hypertrophy", status: "Active", joined: "2026-06-15" },
  { id: 2, name: "Sarah Jenkins", email: "sarah.j@example.com", program: "Fat Loss Masterclass", status: "Active", joined: "2026-07-01" },
  { id: 3, name: "Daniel Kim", email: "dkim@example.com", program: "Body Recomposition", status: "Active", joined: "2026-07-20" },
  { id: 4, name: "Marcus Vance", email: "marcus.v@example.com", program: "Max Strength & Power", status: "Pending", joined: "2026-08-02" },
  { id: 5, name: "Jessica Alba", email: "jessica@example.com", program: "1-on-1 VIP Coaching", status: "Active", joined: "2026-08-05" },
];

const DEFAULT_BOOKINGS: BookingItem[] = [
  { id: 1, name: "Brandon Hayes", pkg: "1-on-1 VIP Coaching", date: "Tomorrow, 10:00 AM", status: "Confirmed" },
  { id: 2, name: "Sarah Jenkins", pkg: "Nutrition Prep Consultation", date: "Tomorrow, 02:00 PM", status: "Confirmed" },
  { id: 3, name: "Daniel Kim", pkg: "Physique Strategy Call", date: "Aug 13, 11:30 AM", status: "Pending" },
];

// --- ARTICLES DATA HANDLERS ---
export function getSavedArticles(): ArticleItem[] {
  if (typeof window === "undefined") return DEFAULT_ARTICLES;
  try {
    const raw = localStorage.getItem("madrock_articles");
    if (!raw) return DEFAULT_ARTICLES;
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_ARTICLES;
  }
}

export function saveArticles(articles: ArticleItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem("madrock_articles", JSON.stringify(articles));
}

// --- PROGRAMS DATA HANDLERS ---
export function getSavedPrograms(): ProgramItem[] {
  if (typeof window === "undefined") return DEFAULT_PROGRAMS;
  try {
    const raw = localStorage.getItem("madrock_programs");
    if (!raw) return DEFAULT_PROGRAMS;
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_PROGRAMS;
  }
}

export function savePrograms(programs: ProgramItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem("madrock_programs", JSON.stringify(programs));
}

// --- MEMBERS DATA HANDLERS ---
export function getSavedMembers(): MemberItem[] {
  if (typeof window === "undefined") return DEFAULT_MEMBERS;
  try {
    const raw = localStorage.getItem("madrock_members");
    if (!raw) return DEFAULT_MEMBERS;
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_MEMBERS;
  }
}

export function saveMembers(members: MemberItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem("madrock_members", JSON.stringify(members));
}

// --- BOOKINGS DATA HANDLERS ---
export function getSavedBookings(): BookingItem[] {
  if (typeof window === "undefined") return DEFAULT_BOOKINGS;
  try {
    const raw = localStorage.getItem("madrock_bookings");
    if (!raw) return DEFAULT_BOOKINGS;
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_BOOKINGS;
  }
}

export function saveBookings(bookings: BookingItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem("madrock_bookings", JSON.stringify(bookings));
}
