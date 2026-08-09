"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Dumbbell,
  Menu,
  X,
  Sparkles,
  User,
  ArrowRight,
  ChevronDown,
  Utensils,
  Trophy,
  Calculator,
} from "lucide-react";
import { LanguageToggle } from "@/components/common/LanguageToggle";
import { useLanguage } from "@/components/common/LanguageProvider";

export function Navbar() {
  const { t } = useLanguage();
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
      name: "Meal Planner",
      href: "/meal-planner",
      description: "Custom macro plans & recipes",
      icon: Utensils,
    },
    {
      name: "Transformations",
      href: "/transformations",
      description: "Client before & after results",
      icon: Trophy,
    },
    {
      name: "Calculators",
      href: "/tools",
      description: "9 interactive fitness tools",
      icon: Calculator,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#14171F] border-b border-[#282F3D] py-3.5 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-mad-lime flex items-center justify-center text-[#14171F] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-md shadow-lime-500/20">
              <Dumbbell className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-spartan font-black text-2xl tracking-tighter text-white uppercase leading-none">
                MAD<span className="text-mad-lime">ROCK</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">
                PREMIUM COACHING
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className="text-sm font-semibold text-slate-300 hover:text-mad-lime transition-colors duration-200"
            >
              {t("nav_home")}
            </Link>

            <Link
              href="/programs"
              className="text-sm font-semibold text-slate-300 hover:text-mad-lime transition-colors duration-200"
            >
              {t("nav_programs")}
            </Link>

            <Link
              href="/workout-library"
              className="text-sm font-semibold text-slate-300 hover:text-mad-lime transition-colors duration-200"
            >
              {t("nav_workouts")}
            </Link>

            {/* Dropdown Menu: Features */}
            <div
              ref={dropdownRef}
              className="relative py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-mad-lime transition-colors duration-200"
              >
                <span className={dropdownOpen ? "text-mad-lime font-bold" : ""}>{t("nav_features")}</span>
                <ChevronDown
                  className={`w-4 h-4 text-mad-lime transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Content */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-72 z-50 animate-fadeIn">
                  <div className="rounded-2xl bg-[#1E232E] border border-[#323A4B] p-2 shadow-2xl space-y-1">
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#282F3D] transition-all duration-200 group/item"
                      >
                        <div className="w-9 h-9 rounded-xl bg-mad-lime/10 border border-mad-lime/20 flex items-center justify-center text-mad-lime group-hover/item:bg-mad-lime group-hover/item:text-[#14171F] transition-colors shrink-0">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-bold text-white text-sm group-hover/item:text-mad-lime transition-colors block">
                            {item.name}
                          </span>
                          <span className="text-[11px] text-slate-400 leading-tight block mt-0.5">
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
              className="text-sm font-semibold text-slate-300 hover:text-mad-lime transition-colors duration-200"
            >
              {t("nav_pricing")}
            </Link>

            <Link
              href="/blog"
              className="text-sm font-semibold text-slate-300 hover:text-mad-lime transition-colors duration-200"
            >
              {t("nav_blog")}
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* AI Coach Button */}
            <Link
              href="/ai-coach"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-mad-lime bg-mad-lime/10 border border-mad-lime/30 rounded-full hover:bg-mad-lime/20 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("nav_ai_coach")}</span>
            </Link>

            {/* 2-Language Switcher (EN / ID) */}
            <LanguageToggle />

            {/* Smart Profile Icon Link */}
            <Link
              href={profileTargetUrl}
              className="p-2 text-slate-300 hover:text-white hover:bg-[#282F3D] rounded-xl transition-all"
              title={
                profileTargetUrl === "/admin"
                  ? t("nav_admin")
                  : profileTargetUrl === "/dashboard"
                  ? t("nav_dashboard")
                  : "Log In"
              }
            >
              <User className="w-5 h-5 text-white" />
            </Link>

            <Link
              href="/login"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-mad-lime text-[#14171F] hover:bg-mad-lime-hover transition-all duration-300 shadow-md shadow-lime-500/20 hover:scale-[1.02]"
            >
              <span>{t("nav_start_training")}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageToggle />

            <Link
              href={profileTargetUrl}
              className="p-2 text-slate-300 hover:text-white"
              title="Profile / Account"
            >
              <User className="w-5 h-5 text-white" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#1E232E] text-white border border-[#323A4B] hover:text-mad-lime transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#14171F] border-b border-[#282F3D] px-6 py-6 transition-all animate-fadeIn shadow-2xl">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-mad-lime transition-colors py-1"
            >
              {t("nav_home")}
            </Link>

            <Link
              href="/programs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-mad-lime transition-colors py-1"
            >
              {t("nav_programs")}
            </Link>

            <Link
              href="/workout-library"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-mad-lime transition-colors py-1"
            >
              {t("nav_workouts")}
            </Link>

            {/* Mobile Dropdown Group */}
            <div className="py-2 border-y border-[#282F3D] my-1 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-mad-lime font-bold block">
                Features & Tools
              </span>
              {dropdownItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 py-2 px-3 rounded-xl bg-[#1E232E] border border-[#323A4B] text-sm font-semibold text-white hover:text-mad-lime"
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
              {t("nav_pricing")}
            </Link>

            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-mad-lime transition-colors py-1"
            >
              {t("nav_blog")}
            </Link>

            <div className="pt-4 border-t border-[#282F3D] flex flex-col gap-3">
              <Link
                href="/ai-coach"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-mad-lime/10 text-mad-lime border border-mad-lime/30 font-semibold text-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>AI Coach Feature</span>
              </Link>

              <Link
                href={profileTargetUrl}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1E232E] text-white border border-[#323A4B] font-semibold text-sm"
              >
                <User className="w-4 h-4" />
                <span>
                  {profileTargetUrl === "/admin"
                    ? t("nav_admin")
                    : profileTargetUrl === "/dashboard"
                    ? t("nav_dashboard")
                    : "Log In Account"}
                </span>
              </Link>

              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-mad-lime text-[#14171F] font-extrabold text-sm uppercase tracking-wider shadow-md"
              >
                <span>{t("nav_start_training")}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
