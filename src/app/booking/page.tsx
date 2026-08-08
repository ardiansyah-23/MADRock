"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Check, Calendar as CalendarIcon, Clock, User, ShieldCheck, CreditCard, Sparkles, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

export default function BookingPage() {
  const [step, setStep] = useState(1);

  // Selections
  const [selectedCoach, setSelectedCoach] = useState("Ahmad Hudzaifah");
  const [selectedPackage, setSelectedPackage] = useState("1-on-1 VIP Coaching");
  const [selectedDate, setSelectedDate] = useState("2026-08-12");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");

  const [confirmed, setConfirmed] = useState(false);

  const coaches = [
    { name: "Ahmad Hudzaifah", role: "Head Strength & Biomechanics", price: "$199/mo" },
    { name: "Elena Vance", role: "Nutrition & Metabolic Recomp", price: "$179/mo" },
    { name: "David Vance", role: "Powerlifting & Mobility Specialist", price: "$189/mo" },
  ];

  const packages = [
    { title: "1-on-1 VIP Coaching", duration: "Monthly", sessions: "Unlimited Access" },
    { title: "Single Strategy Consultation", duration: "60 Mins", sessions: "1-on-1 Call" },
    { title: "Transformation Intensive", duration: "12 Weeks", sessions: "Weekly Video Check-ins" },
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
    <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="VIP CONSULTATION & COACHING"
          title="BOOK YOUR SESSION"
          subtitle="Select your head coach, choose a convenient time slot, and start your custom transformation."
        />

        {/* Steps Indicator */}
        <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
          {[
            { num: 1, label: "Coach & Package" },
            { num: 2, label: "Date & Time" },
            { num: 3, label: "Confirmation" },
          ].map((s) => (
            <div key={s.num} className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${
                  step >= s.num
                    ? "bg-mad-lime text-mad-bg shadow-md shadow-mad-lime/20"
                    : "bg-mad-surface text-mad-gray border border-white/10"
                }`}
              >
                {step > s.num ? <Check className="w-5 h-5" /> : s.num}
              </div>
              <span
                className={`text-xs font-mono uppercase tracking-wider hidden sm:block ${
                  step >= s.num ? "text-white font-bold" : "text-mad-gray"
                }`}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Step Content */}
        {!confirmed ? (
          <div className="rounded-3xl bg-mad-surface border border-white/10 p-8 sm:p-12 shadow-2xl space-y-8">
            {step === 1 && (
              <div className="space-y-8">
                {/* Select Coach */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-spartan text-white uppercase flex items-center gap-2">
                    <User className="w-5 h-5 text-mad-lime" />
                    <span>1. SELECT HEAD COACH</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {coaches.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedCoach(c.name)}
                        className={`p-5 rounded-2xl text-left border transition-all ${
                          selectedCoach === c.name
                            ? "bg-mad-bg border-mad-lime shadow-lg"
                            : "bg-mad-bg/50 border-white/10 hover:border-white/20"
                        }`}
                      >
                        <h4 className="font-bold text-white font-spartan text-lg uppercase">{c.name}</h4>
                        <p className="text-xs text-mad-lime font-mono mt-1">{c.role}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Select Package */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <h3 className="text-xl font-bold font-spartan text-white uppercase flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-mad-lime" />
                    <span>2. SELECT COACHING PACKAGE</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {packages.map((pkg) => (
                      <button
                        key={pkg.title}
                        onClick={() => setSelectedPackage(pkg.title)}
                        className={`p-5 rounded-2xl text-left border transition-all ${
                          selectedPackage === pkg.title
                            ? "bg-mad-bg border-mad-lime shadow-lg"
                            : "bg-mad-bg/50 border-white/10 hover:border-white/20"
                        }`}
                      >
                        <h4 className="font-bold text-white font-spartan text-lg uppercase">{pkg.title}</h4>
                        <span className="text-xs text-mad-gray block mt-1">{pkg.sessions}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl bg-mad-lime text-mad-bg font-extrabold text-sm uppercase tracking-wider hover:bg-mad-lime-hover shadow-lg"
                >
                  <span>PROCEED TO DATE & TIME</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Select Date */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold font-spartan text-white uppercase flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5 text-mad-lime" />
                      <span>SELECT DATE</span>
                    </h3>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-mad-bg border border-white/10 rounded-2xl px-4 py-3.5 text-white font-mono focus:outline-none focus:border-mad-lime"
                    />
                  </div>

                  {/* Select Time */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold font-spartan text-white uppercase flex items-center gap-2">
                      <Clock className="w-5 h-5 text-mad-lime" />
                      <span>SELECT TIME SLOT</span>
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-3 rounded-xl text-xs font-bold font-mono uppercase transition-all ${
                            selectedTime === time
                              ? "bg-mad-lime text-mad-bg"
                              : "bg-mad-bg text-mad-gray border border-white/10"
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
                    className="w-1/3 py-4 rounded-2xl bg-mad-bg border border-white/10 text-white font-bold text-xs uppercase"
                  >
                    BACK
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="w-2/3 inline-flex items-center justify-center gap-2 py-4 rounded-2xl bg-mad-lime text-mad-bg font-extrabold text-sm uppercase tracking-wider"
                  >
                    <span>REVIEW & CONFIRM</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <h3 className="text-xl font-bold font-spartan text-white uppercase border-b border-white/10 pb-3">
                  BOOKING SUMMARY & REVIEW
                </h3>

                <div className="space-y-3 p-6 rounded-2xl bg-mad-bg border border-white/10 text-sm">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-mad-gray">Selected Coach:</span>
                    <strong className="text-white font-spartan">{selectedCoach}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-mad-gray">Coaching Package:</span>
                    <strong className="text-mad-lime font-spartan">{selectedPackage}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-mad-gray">Scheduled Date:</span>
                    <strong className="text-white font-mono">{selectedDate}</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-mad-gray">Time Slot:</span>
                    <strong className="text-white font-mono">{selectedTime}</strong>
                  </div>
                </div>

                <button
                  onClick={handleConfirmBooking}
                  className="w-full py-4 rounded-2xl bg-mad-lime text-mad-bg font-black text-base uppercase tracking-wider shadow-xl shadow-mad-lime/30 hover:bg-mad-lime-hover transition-all"
                >
                  CONFIRM & BOOK SESSION NOW
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Confirmation Success Card */
          <div className="rounded-3xl bg-mad-surface border border-mad-lime/40 p-12 text-center space-y-6 shadow-2xl">
            <div className="w-20 h-20 rounded-full bg-mad-lime text-mad-bg flex items-center justify-center mx-auto text-3xl shadow-xl shadow-mad-lime/30">
              <Check className="w-10 h-10 stroke-[3]" />
            </div>

            <h2 className="text-3xl font-black font-spartan uppercase text-white">
              SESSION CONFIRMED!
            </h2>

            <p className="text-sm text-mad-gray max-w-md mx-auto">
              Your consultation session with <strong>{selectedCoach}</strong> has been successfully booked for <strong>{selectedDate} at {selectedTime}</strong>. A calendar invite & Zoom link have been sent to your email.
            </p>

            <button
              onClick={() => { setConfirmed(false); setStep(1); }}
              className="px-8 py-3.5 rounded-xl bg-mad-lime/10 text-mad-lime border border-mad-lime/30 font-bold text-xs uppercase"
            >
              Book Another Session
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
