"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Mountain,
  Menu,
  X,
  User,
  ArrowRight,
  ChevronDown,
  CalendarDays,
  Image as ImageIcon,
  Dumbbell
} from "lucide-react";
import { LanguageToggle } from "@/components/common/LanguageToggle";
import { useLanguage } from "@/components/common/LanguageProvider";

export function Navbar() {
  const { lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileTargetUrl, setProfileTargetUrl] = useState("/login");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const role = localStorage.getItem("madrock-role");
    const user = localStorage.getItem("madrock-user");

    if (role === "admin") {
      setProfileTargetUrl("/admin");
    } else if (user || role === "user") {
      setProfileTargetUrl("/dashboard");
    } else {
      setProfileTargetUrl("/login");
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const dropdownItems = [
    {
      name: lang === "id" ? "S&C Coaching" : "S&C Coaching",
      href: "/programs",
      description: lang === "id" ? "Program periodisasi kekuatan" : "Strength periodization program",
      icon: Dumbbell,
    },
    {
      name: lang === "id" ? "Booking Sesi" : "Book a Session",
      href: "/booking",
      description: lang === "id" ? "Jadwalkan konsultasi 1-on-1" : "Schedule 1-on-1 consultation",
      icon: CalendarDays,
    },
    {
      name: lang === "id" ? "Portofolio Atlet" : "Athlete Portfolio",
      href: "/transformations",
      description: lang === "id" ? "Hasil progres latihan" : "Training progress results",
      icon: ImageIcon,
    },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-mad-bg/90 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-mad-lime flex items-center justify-center text-mad-bg transition-transform duration-300 group-hover:scale-105 shadow-md shadow-mad-lime/20">
              <Mountain className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-spartan font-black text-xl tracking-tighter text-white uppercase leading-none">
                Training by <span className="text-mad-lime">MAD</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-mad-gray uppercase mt-1">
                Ahmad Hudzaifah
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className="text-sm font-semibold text-white hover:text-mad-lime transition-colors duration-200"
            >
              {lang === "id" ? "Beranda" : "Home"}
            </Link>

            <Link
              href="/blog"
              className="text-sm font-semibold text-white hover:text-mad-lime transition-colors duration-200"
            >
              Blog
            </Link>

            {/* Dropdown Menu: Services */}
            <div
              ref={dropdownRef}
              className="relative py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 text-sm font-semibold text-white hover:text-mad-lime transition-colors duration-200"
              >
                <span className={dropdownOpen ? "text-mad-lime font-bold" : ""}>
                  {lang === "id" ? "Layanan" : "Services"}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-mad-lime transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Content */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-72 z-50 animate-fadeIn">
                  <div className="rounded-2xl glass-card border border-white/10 p-2 shadow-xl shadow-black/50 space-y-1">
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 group/item"
                      >
                        <div className="w-9 h-9 rounded-xl bg-mad-lime/10 border border-mad-lime/20 flex items-center justify-center text-mad-lime group-hover/item:bg-mad-lime group-hover/item:text-mad-bg transition-colors shrink-0">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-bold text-white text-sm group-hover/item:text-mad-lime transition-colors block">
                            {item.name}
                          </span>
                          <span className="text-[11px] text-mad-gray leading-tight block mt-0.5">
                            {item.description}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className="text-sm font-semibold text-white hover:text-mad-lime transition-colors duration-200"
            >
              {lang === "id" ? "Harga" : "Pricing"}
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* 2-Language Switcher (EN / ID) */}
            <LanguageToggle />

            {/* Smart Profile Icon Link */}
            <Link
              href={profileTargetUrl}
              className="p-2 text-mad-gray hover:text-mad-lime hover:bg-white/5 rounded-xl transition-all"
              title={
                profileTargetUrl === "/admin"
                  ? (lang === "id" ? "Admin" : "Admin")
                  : profileTargetUrl === "/dashboard"
                  ? (lang === "id" ? "Dashboard" : "Dashboard")
                  : "Log In"
              }
            >
              <User className="w-5 h-5" />
            </Link>

            <Link
              href="/booking"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-mad-lime text-mad-bg hover:bg-mad-lime-hover transition-all duration-300 shadow-md shadow-mad-lime/20 hover:scale-[1.02]"
            >
              <span>{lang === "id" ? "Mulai Latihan" : "Start Training"}</span>
              <ArrowRight className="w-4 h-4 text-mad-bg transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageToggle />

            <Link
              href={profileTargetUrl}
              className="p-2 text-mad-gray hover:text-white"
            >
              <User className="w-5 h-5" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl glass-card text-white border border-white/10 hover:text-mad-lime transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-mad-surface/95 backdrop-blur-md border-b border-white/10 px-6 py-6 transition-all animate-fadeIn shadow-2xl">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-mad-lime transition-colors py-1"
            >
              {lang === "id" ? "Beranda" : "Home"}
            </Link>

            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-mad-lime transition-colors py-1"
            >
              Blog
            </Link>

            {/* Mobile Dropdown Group */}
            <div className="py-2 border-y border-white/10 my-1 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-mad-lime font-bold block">
                {lang === "id" ? "Layanan" : "Services"}
              </span>
              {dropdownItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 py-2 px-3 rounded-xl glass-card border border-white/5 text-sm font-semibold text-white hover:text-mad-lime hover:border-mad-lime/30"
                >
                  <item.icon className="w-4 h-4 text-mad-lime" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-mad-lime transition-colors py-1"
            >
              {lang === "id" ? "Harga" : "Pricing"}
            </Link>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link
                href={profileTargetUrl}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl glass-card text-white border border-white/10 font-semibold text-sm"
              >
                <User className="w-4 h-4" />
                <span>
                  {profileTargetUrl === "/admin"
                    ? (lang === "id" ? "Admin" : "Admin")
                    : profileTargetUrl === "/dashboard"
                    ? (lang === "id" ? "Dashboard" : "Dashboard")
                    : (lang === "id" ? "Masuk Akun" : "Log In Account")}
                </span>
              </Link>

              <Link
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-sm uppercase tracking-wider shadow-md"
              >
                <span>{lang === "id" ? "Mulai Latihan" : "Start Training"}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
