"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Search, Clock, User, Tag, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Workout Science", "Nutrition", "Recovery", "Supplements", "Mindset"];

  const posts = [
    {
      id: "hypertrophy-biomechanics-guide",
      title: "The Biomechanics of Hypertrophy: How Mechanical Tension Drives Muscle Mass",
      excerpt: "Explore sports science research on mechanical tension, metabolic stress, and muscle damage for natural lifters.",
      author: "Coach Marcus Rock",
      date: "August 5, 2026",
      readTime: "6 Min Read",
      category: "Workout Science",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "carb-cycling-fat-loss",
      title: "Carb Cycling Demystified: How to Burn Fat Without Destroying Thyroid Function",
      excerpt: "Learn how alternating high and low carbohydrate days prevents metabolic adaptation and maintains high workout intensity.",
      author: "Elena Vance",
      date: "July 28, 2026",
      readTime: "8 Min Read",
      category: "Nutrition",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "creatine-monohydrate-guide",
      title: "Creatine Monohydrate Masterclass: Timing, Dosage, and Cognitive Benefits",
      excerpt: "Why creatine remains the gold standard of sports supplements and how 5g daily accelerates strength output.",
      author: "Coach Marcus Rock",
      date: "July 19, 2026",
      readTime: "5 Min Read",
      category: "Supplements",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "sleep-hgh-recovery-protocol",
      title: "Deep Sleep & HGH: The Forgotten Pillar of Elite Strength Recovery",
      excerpt: "How sleep architecture controls human growth hormone secretion, central nervous system recovery, and testosterone synthesis.",
      author: "David Vance",
      date: "July 10, 2026",
      readTime: "7 Min Read",
      category: "Recovery",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const filteredPosts = posts.filter((p) => {
    const matchesCat = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="SPORTS SCIENCE & ARTICLES"
          title="MADROCK FITNESS JOURNAL"
          subtitle="Evidence-based articles on weightlifting biomechanics, nutrition protocols, and recovery science."
        />

        {/* Search & Categories */}
        <div className="space-y-6 mb-12">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-mad-gray" />
            <input
              type="text"
              placeholder="Search articles by title or keyword (e.g. Hypertrophy, Creatine)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-mad-surface border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-mad-gray focus:outline-none focus:border-mad-lime font-mono"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase transition-all ${
                  selectedCategory === cat
                    ? "bg-mad-lime text-mad-bg font-extrabold shadow-lg"
                    : "bg-mad-surface text-mad-gray border border-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post, idx) => (
            <ScrollReveal key={post.id} delay={0.1 * idx}>
              <div className="group rounded-3xl bg-mad-surface border border-white/10 overflow-hidden hover:border-mad-lime/40 transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-mad-bg/80 text-mad-lime font-mono text-[10px] uppercase font-bold border border-white/10">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-xs text-mad-gray font-mono">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-mad-lime" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-spartan text-white uppercase group-hover:text-mad-lime transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-mad-gray leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-mad-gray font-mono">By {post.author}</span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-mad-lime hover:underline uppercase tracking-wider"
                  >
                    <span>READ ARTICLE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
