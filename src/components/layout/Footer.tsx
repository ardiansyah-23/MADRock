"use client";

import Link from "next/link";
import { Dumbbell, Instagram, Youtube, Twitter, Facebook, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-mad-surface border-t border-white/10 pt-16 pb-12 text-mad-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-mad-lime flex items-center justify-center text-mad-bg">
                <Dumbbell className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="font-spartan font-black text-2xl tracking-tighter text-white uppercase">
                MAD<span className="text-mad-lime">ROCK</span>
              </span>
            </Link>
            <p className="text-sm text-mad-gray max-w-sm leading-relaxed">
              Science-based premium coaching designed to help you build muscle, burn fat, master performance, and become your best version.
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
                  className="w-10 h-10 rounded-xl bg-mad-bg border border-white/10 flex items-center justify-center text-white hover:text-mad-lime hover:border-mad-lime/40 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-spartan">
              Programs
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/programs#fat-loss" className="hover:text-mad-lime transition-colors">Fat Loss Masterclass</Link></li>
              <li><Link href="/programs#hypertrophy" className="hover:text-mad-lime transition-colors">Muscle Building</Link></li>
              <li><Link href="/programs#recomp" className="hover:text-mad-lime transition-colors">Body Recomposition</Link></li>
              <li><Link href="/programs#strength" className="hover:text-mad-lime transition-colors">Strength Training</Link></li>
              <li><Link href="/programs#online" className="hover:text-mad-lime transition-colors">1-on-1 Coaching</Link></li>
            </ul>
          </div>

          {/* Tools & Resources */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-spartan">
              Resources & Tools
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/workout-library" className="hover:text-mad-lime transition-colors">Workout Library</Link></li>
              <li><Link href="/meal-planner" className="hover:text-mad-lime transition-colors">AI Meal Planner</Link></li>
              <li><Link href="/tools" className="hover:text-mad-lime transition-colors">TDEE & Macro Calculator</Link></li>
              <li><Link href="/blog" className="hover:text-mad-lime transition-colors">Fitness Science Blog</Link></li>
              <li><Link href="/transformations" className="hover:text-mad-lime transition-colors">Client Transformations</Link></li>
            </ul>
          </div>

          {/* Contact / Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-spartan">
              Stay Connected
            </h4>
            <p className="text-xs text-mad-gray">
              Subscribe to get exclusive workout protocols and nutrition advice directly to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-mad-bg border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-mad-gray focus:outline-none focus:border-mad-lime"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-mad-lime text-mad-bg rounded-lg font-bold hover:bg-mad-lime-hover transition-colors flex items-center justify-center"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-mad-gray gap-4">
          <p>© {new Date().getFullYear()} MADRock Fitness Coaching. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
