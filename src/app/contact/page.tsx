"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="GET IN TOUCH"
          title="CONTACT MADROCK HEADQUARTERS"
          subtitle="Have questions about our coaching packages, custom enterprise programs, or partnerships? Reach out below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-mad-surface border border-white/10 space-y-6">
              <h3 className="text-xl font-bold font-spartan text-white uppercase border-b border-white/10 pb-3">
                DIRECT HEADQUARTERS
              </h3>

              <div className="space-y-4 text-xs font-mono text-mad-gray">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-mad-lime shrink-0" />
                  <div>
                    <strong className="text-white block uppercase">MADRock Performance Lab</strong>
                    <span>742 Evergreen Athletic Plaza, Suite 400</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-mad-lime shrink-0" />
                  <div>
                    <strong className="text-white block uppercase">Email Contact</strong>
                    <span>support@madrock.fit</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-mad-lime shrink-0" />
                  <div>
                    <strong className="text-white block uppercase">Phone / WhatsApp</strong>
                    <span>+1 (800) 555-ROCK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 rounded-3xl bg-mad-surface border border-white/10 p-8 sm:p-10 space-y-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold font-spartan text-white uppercase border-b border-white/10 pb-3">
                  SEND US A MESSAGE
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Rivera"
                      className="w-full bg-mad-bg border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@gmail.com"
                      className="w-full bg-mad-bg border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="1-on-1 VIP Coaching Inquiry"
                    className="w-full bg-mad-bg border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-mad-gray uppercase block mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your fitness goals and any questions..."
                    className="w-full bg-mad-bg border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-mad-lime font-mono"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-sm uppercase tracking-wider hover:bg-mad-lime-hover shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE NOW</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-mad-lime text-mad-bg flex items-center justify-center mx-auto text-2xl">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-spartan text-white uppercase">
                  MESSAGE RECEIVED!
                </h3>
                <p className="text-xs text-mad-gray max-w-sm mx-auto">
                  Our head coach team will review your inquiry and get back to you within 24 business hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
