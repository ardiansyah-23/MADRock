"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Check, Calendar as CalendarIcon, Clock, User, Sparkles, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import { useLanguage } from "@/components/common/LanguageProvider";

export default function BookingPage() {
  const { lang } = useLanguage();
  const [step, setStep] = useState(1);

  // Selections
  const [selectedCoach, setSelectedCoach] = useState("Ahmad Hudzaifah");
  const [selectedPackage, setSelectedPackage] = useState("1-on-1 VIP Coaching");
  const [selectedDate, setSelectedDate] = useState("2026-08-12");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");

  const [confirmed, setConfirmed] = useState(false);

  const coaches = [
    { name: "Ahmad Hudzaifah", role: lang === "id" ? "Head Strength & Biomekanika" : "Head Strength & Biomechanics", price: "$199/bln" },
    { name: "Elena Vance", role: lang === "id" ? "Spesialis Nutrisi & Rekomposisi" : "Nutrition & Metabolic Recomp", price: "$179/bln" },
    { name: "David Vance", role: lang === "id" ? "Spesialis Powerlifting & Mobilitas" : "Powerlifting & Mobility Specialist", price: "$189/bln" },
  ];

  const packages = [
    {
      title: lang === "id" ? "Kepelatihan VIP 1-on-1" : "1-on-1 VIP Coaching",
      duration: lang === "id" ? "Bulanan" : "Monthly",
      sessions: lang === "id" ? "Akses Tanpa Batas" : "Unlimited Access",
    },
    {
      title: lang === "id" ? "Konsultasi Strategi Tunggal" : "Single Strategy Consultation",
      duration: lang === "id" ? "60 Menit" : "60 Mins",
      sessions: lang === "id" ? "Panggilan 1-on-1" : "1-on-1 Call",
    },
    {
      title: lang === "id" ? "Intensif Transformasi 12-Minggu" : "Transformation Intensive",
      duration: lang === "id" ? "12 Minggu" : "12 Weeks",
      sessions: lang === "id" ? "Evaluasi Video Mingguan" : "Weekly Video Check-ins",
    },
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:30 AM", "02:00 PM", "04:00 PM", "06:00 PM"
  ];

  const handleConfirmBooking = () => {
    setConfirmed(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={lang === "id" ? "JADWALKAN SESI ANDA" : "BOOK YOUR SESSION"}
          subtitle={
            lang === "id"
              ? "Pilih pelatih kepala Anda, tentukan slot waktu yang sesuai, dan mulai transformasi kustom Anda."
              : "Select your head coach, choose a convenient time slot, and start your custom transformation."
          }
        />

        {/* Steps Indicator */}
        <div className="flex items-center justify-between mb-12 border-b border-slate-900/10 pb-6">
          {[
            { num: 1, label: lang === "id" ? "Pelatih & Paket" : "Coach & Package" },
            { num: 2, label: lang === "id" ? "Tanggal & Waktu" : "Date & Time" },
            { num: 3, label: lang === "id" ? "Konfirmasi" : "Confirmation" },
          ].map((s) => (
            <div key={s.num} className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${step >= s.num
                    ? "bg-mad-lime text-mad-bg font-extrabold"
                    : "bg-mad-surface text-mad-gray border border-slate-900/10"
                  }`}
              >
                {step > s.num ? <Check className="w-5 h-5" /> : s.num}
              </div>
              <span
                className={`text-xs font-mono uppercase tracking-wider hidden sm:block ${step >= s.num ? "text-slate-900 font-bold" : "text-mad-gray"
                  }`}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Step Content */}
        {!confirmed ? (
          <div className="rounded-3xl bg-mad-surface border border-slate-900/10 p-8 sm:p-12 space-y-8">
            {step === 1 && (
              <div className="space-y-8">
                {/* Select Coach */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-spartan text-slate-900 uppercase">
                    {lang === "id" ? "1. PILIH HEAD COACH" : "1. SELECT HEAD COACH"}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {coaches.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedCoach(c.name)}
                        className={`p-5 rounded-2xl text-left border transition-all ${selectedCoach === c.name
                            ? "bg-mad-bg border-mad-lime"
                            : "bg-mad-bg/50 border-slate-900/10 hover:border-slate-900/20"
                          }`}
                      >
                        <h4 className="font-bold text-slate-900 font-spartan text-lg uppercase">{c.name}</h4>
                        <p className="text-xs text-mad-lime font-mono mt-1">{c.role}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Select Package */}
                <div className="space-y-4 pt-4 border-t border-slate-900/10">
                  <h3 className="text-xl font-bold font-spartan text-slate-900 uppercase">
                    {lang === "id" ? "2. PILIH PAKET KEPELATIHAN" : "2. SELECT COACHING PACKAGE"}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {packages.map((pkg) => (
                      <button
                        key={pkg.title}
                        onClick={() => setSelectedPackage(pkg.title)}
                        className={`p-5 rounded-2xl text-left border transition-all ${selectedPackage === pkg.title
                            ? "bg-mad-bg border-mad-lime"
                            : "bg-mad-bg/50 border-slate-900/10 hover:border-slate-900/20"
                          }`}
                      >
                        <h4 className="font-bold text-slate-900 font-spartan text-lg uppercase">{pkg.title}</h4>
                        <span className="text-xs text-mad-gray block mt-1">{pkg.sessions}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl bg-mad-lime text-mad-bg font-extrabold text-sm uppercase tracking-wider hover:bg-mad-lime-hover"
                >
                  <span>{lang === "id" ? "LANJUT KE TANGGAL & WAKTU" : "PROCEED TO DATE & TIME"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Select Date */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold font-spartan text-slate-900 uppercase flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5 text-mad-lime" />
                      <span>{lang === "id" ? "PILIH TANGGAL" : "SELECT DATE"}</span>
                    </h3>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-mad-bg border border-slate-900/10 rounded-2xl px-4 py-3.5 text-slate-900 font-mono focus:outline-none focus:border-mad-lime"
                    />
                  </div>

                  {/* Select Time */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold font-spartan text-slate-900 uppercase flex items-center gap-2">
                      <Clock className="w-5 h-5 text-mad-lime" />
                      <span>{lang === "id" ? "PILIH SLOT WAKTU" : "SELECT TIME SLOT"}</span>
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-3 rounded-xl text-xs font-bold font-mono uppercase transition-all ${selectedTime === time
                              ? "bg-mad-lime text-mad-bg"
                              : "bg-mad-bg text-mad-gray border border-slate-900/10"
                            }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="w-1/3 py-4 rounded-2xl bg-mad-bg border border-slate-900/10 text-slate-900 font-bold text-xs uppercase"
                  >
                    {lang === "id" ? "KEMBALI" : "BACK"}
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="w-2/3 inline-flex items-center justify-center gap-2 py-4 rounded-2xl bg-mad-lime text-mad-bg font-extrabold text-sm uppercase tracking-wider"
                  >
                    <span>{lang === "id" ? "TINJAU & KONFIRMASI" : "REVIEW & CONFIRM"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <h3 className="text-xl font-bold font-spartan text-slate-900 uppercase border-b border-slate-900/10 pb-3">
                  {lang === "id" ? "RINGKASAN & TINJAUAN BOOKING" : "BOOKING SUMMARY & REVIEW"}
                </h3>

                <div className="space-y-3 p-6 rounded-2xl bg-mad-bg border border-slate-900/10 text-sm">
                  <div className="flex justify-between py-1 border-b border-slate-900/5">
                    <span className="text-mad-gray">{lang === "id" ? "Pelatih Dipilih:" : "Selected Coach:"}</span>
                    <strong className="text-slate-900 font-spartan">{selectedCoach}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-900/5">
                    <span className="text-mad-gray">{lang === "id" ? "Paket Kepelatihan:" : "Coaching Package:"}</span>
                    <strong className="text-mad-lime font-spartan">{selectedPackage}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-900/5">
                    <span className="text-mad-gray">{lang === "id" ? "Tanggal Dijadwalkan:" : "Scheduled Date:"}</span>
                    <strong className="text-slate-900 font-mono">{selectedDate}</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-mad-gray">{lang === "id" ? "Slot Waktu:" : "Time Slot:"}</span>
                    <strong className="text-slate-900 font-mono">{selectedTime}</strong>
                  </div>
                </div>

                <button
                  onClick={handleConfirmBooking}
                  className="w-full py-4 rounded-2xl bg-mad-lime text-mad-bg font-black text-base uppercase tracking-wider hover:bg-mad-lime-hover transition-all"
                >
                  {lang === "id" ? "KONFIRMASI & BOOKING SESI SEKARANG" : "CONFIRM & BOOK SESSION NOW"}
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Confirmation Success Card */
          <div className="rounded-3xl bg-mad-surface border border-mad-lime/40 p-12 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-mad-lime text-mad-bg flex items-center justify-center mx-auto text-3xl">
              <Check className="w-10 h-10 stroke-[3]" />
            </div>

            <h2 className="text-3xl font-black font-spartan uppercase text-slate-900">
              {lang === "id" ? "SESI BERHASIL DI-BOOKING!" : "SESSION CONFIRMED!"}
            </h2>

            <p className="text-sm text-mad-gray max-w-md mx-auto">
              {lang === "id"
                ? `Sesi konsultasi Anda dengan Coach ${selectedCoach} telah berhasil dijadwalkan untuk ${selectedDate} pukul ${selectedTime}. Undangan kalender & link Zoom telah dikirim ke email Anda.`
                : `Your consultation session with ${selectedCoach} has been successfully booked for ${selectedDate} at ${selectedTime}. A calendar invite & Zoom link have been sent to your email.`}
            </p>

            <button
              onClick={() => { setConfirmed(false); setStep(1); }}
              className="px-8 py-3.5 rounded-xl bg-mad-lime/10 text-mad-lime border border-mad-lime/30 font-bold text-xs uppercase"
            >
              {lang === "id" ? "Booking Sesi Lain" : "Book Another Session"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
