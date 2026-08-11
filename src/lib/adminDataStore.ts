// Persistent Data Store with Full Dual-Language Support (ID & EN)

export interface ArticleItem {
  id: string;
  title_id: string;
  title_en: string;
  excerpt_id: string;
  excerpt_en: string;
  content_id?: string;
  content_en?: string;
  author: string;
  date: string;
  readTime: string;
  category_id: string;
  category_en: string;
  image?: string;
  status: "Published" | "Draft";
}

export interface ProgramItem {
  id: number | string;
  name_id: string;
  name_en: string;
  enrolled: number;
  price: string;
  duration_id: string;
  duration_en: string;
  description_id?: string;
  description_en?: string;
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
  timeSlot?: string;
  coachName?: string;
  status: "Confirmed" | "Pending" | "Rejected" | "Cancelled";
  requestedAt?: string;
}

export interface CoachSlot {
  id: string;
  time: string;
  available: boolean;
}

// DUAL-LANGUAGE DEFAULT SEED ARTICLES
const DEFAULT_ARTICLES: ArticleItem[] = [
  {
    id: "hypertrophy-biomechanics-guide",
    title_id: "Biomekanika Hipertrofi: Bagaimana Tegangan Mekanis Mendorong Massa Otot",
    title_en: "The Biomechanics of Hypertrophy: How Mechanical Tension Drives Muscle Mass",
    excerpt_id: "Pelajari riset sains olahraga mengenai tegangan mekanis, stres metabolik, dan kerusakan serat otot untuk binaragawan alami.",
    excerpt_en: "Explore sports science research on mechanical tension, metabolic stress, and muscle damage for natural lifters.",
    content_id: "Tegangan mekanis adalah pendorong utama hipertrofi otot. Saat otot berkontraksi melawan beban dalam posisi teregang, mekanosensor mengaktifkan jalur mTORC1 untuk sintesis protein otot secara maksimal...",
    content_en: "Mechanical tension is undisputed as the primary driver of muscle hypertrophy. When muscles produce force while being stretched, mechanosensors trigger the mTORC1 signaling pathway...",
    author: "Coach Ahmad Hudzaifah",
    date: "August 5, 2026",
    readTime: "6 Min Read",
    category_id: "Sains Latihan",
    category_en: "Workout Science",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    status: "Published",
  },
  {
    id: "carb-cycling-fat-loss",
    title_id: "Panduan Carb Cycling: Membakar Lemak Tanpa Merusak Fungsi Tiroid",
    title_en: "Carb Cycling Demystified: How to Burn Fat Without Destroying Thyroid Function",
    excerpt_id: "Pelajari cara mengatur hari karbohidrat tinggi dan rendah untuk mencegah adaptasi metabolisme lambat dan mempertahankan performa.",
    excerpt_en: "Learn how alternating high and low carbohydrate days prevents metabolic adaptation and maintains high workout intensity.",
    content_id: "Manipulasi karbohidrat adalah salah satu strategi paling efektif untuk mengikis lemak membandel sambil menjaga massa otot ketat...",
    content_en: "Carbohydrate manipulation is one of the most effective strategies to lose stubborn fat while preserving lean muscle mass...",
    author: "Coach Ahmad Hudzaifah",
    date: "July 28, 2026",
    readTime: "8 Min Read",
    category_id: "Nutrisi",
    category_en: "Nutrition",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
    status: "Published",
  },
  {
    id: "creatine-monohydrate-guide",
    title_id: "Masterclass Kreatin Monohidrat: Waktu Dosis, Aturan, & Manfaat Kekuatan",
    title_en: "Creatine Monohydrate Masterclass: Timing, Dosage, and Cognitive Benefits",
    excerpt_id: "Mengapa kreatin tetap menjadi suplemen fitnes terbaik dan bagaimana dosis 5g sehari meningkatkan ledakan tenaga.",
    excerpt_en: "Why creatine remains the gold standard of sports supplements and how 5g daily accelerates strength output.",
    content_id: "Kreatin monohidrat adalah suplemen olahraga yang paling banyak diteliti di dunia. Dengan menjenuhkan simpanan fosfokreatin otot...",
    content_en: "Creatine monohydrate is the most extensively researched sports supplement on Earth. By saturating intramuscular phosphocreatine stores...",
    author: "Coach Ahmad Hudzaifah",
    date: "July 19, 2026",
    readTime: "5 Min Read",
    category_id: "Suplemen",
    category_en: "Supplements",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
    status: "Published",
  },
  {
    id: "sleep-hgh-recovery-protocol",
    title_id: "Tidur Nyenyak & Hormon HGH: Pilar Utama Pemulihan Kekuatan Otot",
    title_en: "Deep Sleep & HGH: The Forgotten Pillar of Elite Strength Recovery",
    excerpt_id: "Bagaimana kualitas tidur mengontrol sekresi hormon pertumbuhan manusia (HGH) dan sintesis testosteron.",
    excerpt_en: "How sleep architecture controls human growth hormone secretion, central nervous system recovery, and testosterone synthesis.",
    content_id: "Latihan beban intensitas tinggi menciptakan mikro-sobekan pada serat otot. Namun, pemulihan dan adaptasi otot terjadi selama tidur lelap...",
    content_en: "High-intensity weight training creates mechanical micro-tears in skeletal muscle fibers. However, muscle adaptation occurs during deep slow-wave sleep...",
    author: "Coach Ahmad Hudzaifah",
    date: "July 10, 2026",
    readTime: "7 Min Read",
    category_id: "Pemulihan",
    category_en: "Recovery",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
    status: "Published",
  },
];

const DEFAULT_PROGRAMS: ProgramItem[] = [
  { id: 1, name_id: "Masterclass Defisit Lemak", name_en: "Fat Loss Masterclass", enrolled: 210, price: "$199", duration_id: "12 Minggu", duration_en: "12 Weeks" },
  { id: 2, name_id: "Hipertrofi Pembentukan Otot", name_en: "Hypertrophy Muscle Build", enrolled: 284, price: "$249", duration_id: "16 Minggu", duration_en: "16 Weeks" },
  { id: 3, name_id: "Rekomposisi Tubuh Total", name_en: "Body Recomposition", enrolled: 148, price: "$299", duration_id: "12 Minggu", duration_en: "12 Weeks" },
];

const DEFAULT_MEMBERS: MemberItem[] = [
  { id: 1, name: "Brandon Hayes", email: "brandon@example.com", program: "12-Week Hypertrophy", status: "Active", joined: "2026-06-15" },
  { id: 2, name: "Sarah Jenkins", email: "sarah.j@example.com", program: "Fat Loss Masterclass", status: "Active", joined: "2026-07-01" },
  { id: 3, name: "Daniel Kim", email: "dkim@example.com", program: "Body Recomposition", status: "Active", joined: "2026-07-20" },
];

const DEFAULT_BOOKINGS: BookingItem[] = [
  { id: 1, name: "Brandon Hayes", pkg: "1-on-1 VIP Coaching", date: "Tomorrow, 10:00 AM", status: "Confirmed" },
  { id: 2, name: "Sarah Jenkins", pkg: "Nutrition Prep Consultation", date: "Tomorrow, 02:00 PM", status: "Confirmed" },
];

// --- PERSISTENCE HANDLERS ---
export function getSavedArticles(): ArticleItem[] {
  if (typeof window === "undefined") return DEFAULT_ARTICLES;
  try {
    const raw = localStorage.getItem("madrock_articles_v2");
    if (!raw) return DEFAULT_ARTICLES;
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_ARTICLES;
  }
}

export function saveArticles(articles: ArticleItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem("madrock_articles_v2", JSON.stringify(articles));
}

export function getSavedPrograms(): ProgramItem[] {
  if (typeof window === "undefined") return DEFAULT_PROGRAMS;
  try {
    const raw = localStorage.getItem("madrock_programs_v2");
    if (!raw) return DEFAULT_PROGRAMS;
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_PROGRAMS;
  }
}

export function savePrograms(programs: ProgramItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem("madrock_programs_v2", JSON.stringify(programs));
}

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

const DEFAULT_SLOTS: CoachSlot[] = [
  { id: "1", time: "09:00 AM", available: true },
  { id: "2", time: "10:00 AM", available: true },
  { id: "3", time: "11:30 AM", available: true },
  { id: "4", time: "02:00 PM", available: true },
  { id: "5", time: "04:00 PM", available: true },
  { id: "6", time: "07:00 PM", available: true },
];

export function getSavedSlots(): CoachSlot[] {
  if (typeof window === "undefined") return DEFAULT_SLOTS;
  try {
    const raw = localStorage.getItem("madrock_coach_slots");
    if (!raw) return DEFAULT_SLOTS;
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_SLOTS;
  }
}

export function saveSlots(slots: CoachSlot[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem("madrock_coach_slots", JSON.stringify(slots));
}
