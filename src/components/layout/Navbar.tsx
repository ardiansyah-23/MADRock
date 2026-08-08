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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
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
    }, 200); // 200ms delay bridge prevents premature closing
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-mad-bg/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-mad-lime flex items-center justify-center text-mad-bg transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-lg shadow-mad-lime/20">
              <Dumbbell className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-spartan font-black text-2xl tracking-tighter text-white uppercase leading-none">
                MAD<span className="text-mad-lime">ROCK</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-mad-gray uppercase">
                PREMIUM COACHING
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className="text-sm font-medium text-mad-gray hover:text-mad-lime transition-colors duration-200"
            >
              Home
            </Link>

            <Link
              href="/programs"
              className="text-sm font-medium text-mad-gray hover:text-mad-lime transition-colors duration-200"
            >
              Programs
            </Link>

            <Link
              href="/workout-library"
              className="text-sm font-medium text-mad-gray hover:text-mad-lime transition-colors duration-200"
            >
              Workouts
            </Link>

            {/* Dropdown Menu: Features with Zero-Gap Bridge & Timeout */}
            <div
              ref={dropdownRef}
              className="relative py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 text-sm font-medium text-mad-gray hover:text-mad-lime transition-colors duration-200"
              >
                <span className={dropdownOpen ? "text-mad-lime font-bold" : ""}>Features</span>
                <ChevronDown
                  className={`w-4 h-4 text-mad-lime transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Content with Seamless Top Padding Bridge */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-72 z-50 animate-fadeIn">
                  <div className="rounded-2xl bg-mad-surface/95 backdrop-blur-xl border border-white/10 p-2 shadow-2xl space-y-1">
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
              className="text-sm font-medium text-mad-gray hover:text-mad-lime transition-colors duration-200"
            >
              Pricing
            </Link>

            <Link
              href="/blog"
              className="text-sm font-medium text-mad-gray hover:text-mad-lime transition-colors duration-200"
            >
              Blog
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/ai-coach"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-mad-lime bg-mad-lime/10 border border-mad-lime/30 rounded-full hover:bg-mad-lime/20 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Coach</span>
            </Link>

            <Link
              href="/dashboard"
              className="p-2 text-mad-gray hover:text-white transition-colors"
              title="User Dashboard"
            >
              <User className="w-5 h-5" />
            </Link>

            <Link
              href="/booking"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-mad-lime text-mad-bg hover:bg-mad-lime-hover transition-all duration-300 shadow-md shadow-mad-lime/20 hover:scale-[1.02]"
            >
              <span>START TRAINING</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-mad-surface text-white border border-white/10 hover:text-mad-lime transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-mad-bg/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-mad-lime transition-colors py-1"
            >
              Home
            </Link>

            <Link
              href="/programs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-mad-lime transition-colors py-1"
            >
              Programs
            </Link>

            <Link
              href="/workout-library"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-mad-lime transition-colors py-1"
            >
              Workouts
            </Link>

            {/* Mobile Dropdown Group */}
            <div className="py-2 border-y border-white/10 my-1 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-mad-lime font-bold block">
                Features & Tools
              </span>
              {dropdownItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 py-2 px-3 rounded-xl bg-mad-surface/60 border border-white/5 text-sm font-semibold text-white hover:text-mad-lime"
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
              Pricing
            </Link>

            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-mad-lime transition-colors py-1"
            >
              Blog
            </Link>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/ai-coach"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-mad-lime/10 text-mad-lime border border-mad-lime/30 font-semibold text-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>AI Coach Feature</span>
              </Link>

              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-mad-surface text-white border border-white/10 font-semibold text-sm"
              >
                <User className="w-4 h-4" />
                <span>Member Dashboard</span>
              </Link>

              <Link
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-sm uppercase tracking-wider"
              >
                <span>Start Training Now</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
