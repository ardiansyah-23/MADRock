"use client";

import Link from "next/link";
import { Dumbbell, Instagram, Youtube, Twitter, Facebook, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageProvider";

export function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-[#CBD5E1] border-t border-slate-400 pt-16 pb-12 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-slate-400 items-start">
          {/* Brand Info (Cols 1-2) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-mad-lime flex items-center justify-center text-white">
                <Dumbbell className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="font-spartan font-black text-2xl tracking-tighter text-slate-900 uppercase">
                MAD<span className="text-mad-lime">ROCK</span>
              </span>
            </Link>
            <p className="text-sm text-slate-700 max-w-sm leading-relaxed">
              {lang === "id"
                ? "Program kepelatihan beban berbasis sains biomekanika olahraga untuk membentuk otot, membakar lemak tubuh, dan membangun kekuatan fisik tanpa cedera."
                : "Science-based premium coaching designed to help you build muscle, burn fat, master performance, and become your best version."}
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white border border-slate-300 flex items-center justify-center text-slate-800 hover:text-mad-lime hover:border-mad-lime/40 transition-all duration-300 shadow-sm"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact / Newsletter (Cols 4-5, stretched to far right edge) */}
          <div className="lg:col-span-2 space-y-4 lg:pl-8">
            <h4 className="text-slate-900 font-bold text-sm tracking-wider uppercase font-spartan">
              {lang === "id" ? "DAPATKAN PROTOKOL" : "STAY CONNECTED"}
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed max-w-md">
              {lang === "id"
                ? "Dapatkan tips nutrisi dan protokol latihan eksklusif langsung di email Anda."
                : "Subscribe to get exclusive workout protocols and nutrition advice directly to your inbox."}
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2 max-w-md">
              <div className="relative">
                <input
                  type="email"
                  placeholder={lang === "id" ? "Masukkan email Anda..." : "Enter your email..."}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:border-mad-lime shadow-sm"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-mad-lime text-white rounded-lg font-bold hover:bg-mad-lime-hover transition-colors flex items-center justify-center shadow-sm"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4">
          <p>© {new Date().getFullYear()} MADRock Fitness Coaching. {t("footer_rights")}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">{lang === "id" ? "Kebijakan Privasi" : "Privacy Policy"}</Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">{lang === "id" ? "Syarat & Ketentuan" : "Terms of Service"}</Link>
            <Link href="/faq" className="hover:text-slate-900 transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
