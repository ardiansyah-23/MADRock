"use client";

import Link from "next/link";
import { Mountain, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageProvider";

export function Footer() {
  const { lang } = useLanguage();

  const links = [
    {
      heading: lang === "id" ? "Layanan" : "Services",
      items: [
        { label: lang === "id" ? "Kepelatihan S&C" : "S&C Coaching", href: "/programs" },
        { label: lang === "id" ? "Speed Climbing" : "Speed Climbing", href: "/programs" },
        { label: lang === "id" ? "Booking Konsultasi" : "Book Consultation", href: "/booking" },
        { label: "Blog & Jurnal", href: "/blog" },
      ],
    },
    {
      heading: lang === "id" ? "Informasi" : "Information",
      items: [
        { label: "Dashboard", href: "/dashboard" },
        { label: lang === "id" ? "Portofolio" : "Portfolio", href: "/transformations" },
        { label: "FAQ", href: "/faq" },
        { label: lang === "id" ? "Kontak" : "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-mad-surface/50 border-t border-white/5 pt-16 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-mad-lime flex items-center justify-center text-mad-bg">
                <Mountain className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-spartan font-black text-xl tracking-tighter text-white uppercase leading-none block">
                  Training by <span className="text-mad-lime">MAD</span>
                </span>
                <span className="text-[10px] font-mono text-mad-gray uppercase tracking-widest">Ahmad Hudzaifah</span>
              </div>
            </Link>
            <p className="text-sm text-mad-gray max-w-sm leading-relaxed">
              {lang === "id"
                ? "S&C Coach dan Pelatih Speed Climbing Indonesia. Founder Training by MAD. Berbasis di Jakarta, aktif membina atlet dari usia dini hingga level elite nasional."
                : "S&C Coach and Speed Climbing Indonesia. Founder of Training by MAD. Based in Jakarta, actively developing athletes from youth to national elite level."}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/ahmadhudzaifaah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-card border border-white/10 flex items-center justify-center text-mad-gray hover:text-mad-lime hover:border-mad-lime/40 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmadhudzaifah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-card border border-white/10 flex items-center justify-center text-mad-gray hover:text-mad-lime hover:border-mad-lime/40 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/62XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-card border border-white/10 flex items-center justify-center text-mad-gray hover:text-mad-lime hover:border-mad-lime/40 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {links.map((group, i) => (
            <div key={i} className="space-y-4">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase font-spartan">
                {group.heading}
              </h4>
              <ul className="space-y-2.5">
                {group.items.map((item, j) => (
                  <li key={j}>
                    <Link
                      href={item.href}
                      className="text-sm text-mad-gray hover:text-mad-lime transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-mad-gray gap-4">
          <p>© {new Date().getFullYear()} Training by MAD · Ahmad Hudzaifah. {lang === "id" ? "Hak cipta dilindungi." : "All rights reserved."}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">{lang === "id" ? "Kebijakan Privasi" : "Privacy Policy"}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{lang === "id" ? "Syarat & Ketentuan" : "Terms of Service"}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
