"use client";

import { useLanguage } from "./LanguageProvider";
import { Globe, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative inline-block ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E232E] border border-[#323A4B] text-xs font-mono font-bold text-white hover:border-mad-lime transition-all shadow-sm"
        title="Pilih Bahasa / Switch Language"
      >
        <Globe className="w-3.5 h-3.5 text-mad-lime" />
        <span className="uppercase">{lang === "id" ? "🇮🇩 ID" : "🇺🇸 EN"}</span>
        <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-36 rounded-2xl bg-[#1E232E] border border-[#323A4B] p-1.5 shadow-2xl z-50 animate-fadeIn space-y-1">
          <button
            onClick={() => {
              setLang("id");
              setOpen(false);
            }}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              lang === "id"
                ? "bg-mad-lime text-[#14171F] font-extrabold"
                : "text-slate-300 hover:text-white hover:bg-[#282F3D]"
            }`}
          >
            <span>🇮🇩 Bahasa ID</span>
            {lang === "id" && <span className="text-[10px]">✓</span>}
          </button>

          <button
            onClick={() => {
              setLang("en");
              setOpen(false);
            }}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              lang === "en"
                ? "bg-mad-lime text-[#14171F] font-extrabold"
                : "text-slate-300 hover:text-white hover:bg-[#282F3D]"
            }`}
          >
            <span>🇺🇸 English EN</span>
            {lang === "en" && <span className="text-[10px]">✓</span>}
          </button>
        </div>
      )}
    </div>
  );
}
