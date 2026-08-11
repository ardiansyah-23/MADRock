"use client";

import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageProvider";

export default function PrivacyPage() {
  const { lang } = useLanguage();

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-mad-gray hover:text-mad-lime uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === "id" ? "Kembali ke Beranda" : "Back to Home"}</span>
        </Link>

        <SectionHeader
          title="MADROCK PRIVACY PROTOCOL"
          subtitle={
            lang === "id"
              ? "Komitmen kami untuk melindungi data kesehatan, kebugaran, dan informasi pribadi Anda secara ketat."
              : "Our strict commitment to protecting your personal health, fitness metrics, and private data."
          }
        />

        <div className="rounded-3xl bg-mad-surface border border-slate-900/10 p-8 sm:p-10 space-y-8 text-mad-gray leading-relaxed text-sm">
          <div className="space-y-3 border-b border-slate-900/10 pb-6">
            <h3 className="text-xl font-bold font-spartan text-slate-900 uppercase">
              {lang === "id" ? "1. Informasi yang Kami Kumpulkan" : "1. Information We Collect"}
            </h3>
            <p>
              {lang === "id"
                ? "Saat Anda mendaftar di Kepelatihan MADRock, menggunakan mesin AI Coach, atau mencatat latihan di dashboard, kami mengumpulkan data yang diperlukan seperti nama, alamat email, metrik fisik (berat, tinggi, usia, target fitnes), dan log latihan untuk merancang program periodisasi presisi."
                : "When you enroll in MADRock Coaching, utilize our AI Coach engine, or track workouts on your dashboard, we collect necessary data including your name, email address, physical metrics (weight, height, age, fitness goals), and workout logs to tailor scientific training splits."}
            </p>
          </div>

          <div className="space-y-3 border-b border-slate-900/10 pb-6">
            <h3 className="text-xl font-bold font-spartan text-slate-900 uppercase">
              {lang === "id" ? "2. Penggunaan Data Anda" : "2. How We Use Your Data"}
            </h3>
            <p>
              {lang === "id"
                ? "Data Anda diproses secara khusus untuk menghasilkan program latihan periodisasi kustom, mengoptimalkan target makronutrisi, menjadwalkan konsultasi dengan Coach Ahmad Hudzaifah, dan meningkatkan performa platform. Kami tidak pernah menjual atau menyewakan data kesehatan Anda kepada pihak ketiga."
                : "Your data is processed strictly to generate personalized periodization splits, optimize macro meal targets, schedule coaching calls with Coach Ahmad Hudzaifah, and improve platform performance. We never sell or rent your personal health data to third-party advertisers."}
            </p>
          </div>

          <div className="space-y-3 border-b border-slate-900/10 pb-6">
            <h3 className="text-xl font-bold font-spartan text-slate-900 uppercase">
              {lang === "id" ? "3. Keamanan & Penyimpanan Data" : "3. Data Security & Storage"}
            </h3>
            <p>
              {lang === "id"
                ? "Semua metrik dan token autentikasi dienkripsi menggunakan protokol enkripsi standar industri SSL/TLS dan disimpan secara aman melalui infrastruktur Supabase Cloud dengan aturan keamanan Row-Level Security (RLS) yang ketat."
                : "All metrics and authentication tokens are encrypted using enterprise-grade SSL/TLS protocols and stored securely via Supabase Cloud infrastructure with strict row-level security policy enforcement."}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold font-spartan text-slate-900 uppercase">
              {lang === "id" ? "4. Hak Anda & Penghapusan Akun" : "4. Your Rights & Account Deletion"}
            </h3>
            <p>
              {lang === "id"
                ? "Anda memiliki hak penuh atas data Anda. Anda dapat meminta ekspor lengkap log fitnes atau mengajukan penghapusan akun kapan saja dengan menghubungi tim kepatuhan privasi kami di "
                : "You maintain full ownership of your data. You may request a complete export of your fitness logs or request account deletion at any time by contacting our privacy compliance desk at "}
              <strong className="text-mad-lime font-mono">support@madrock.fit</strong>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
