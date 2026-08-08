"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Search, Clock, User, Tag, ArrowRight } from "lucide-react";
import { ArticleItem, getSavedArticles } from "@/lib/adminDataStore";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [posts, setPosts] = useState<ArticleItem[]>([]);

  useEffect(() => {
    setPosts(getSavedArticles());
  }, []);

  const categories = ["All", "Workout Science", "Nutrition", "Recovery", "Supplements", "Mindset"];

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
                  <div className="relative h-60 w-full overflow-hidden bg-mad-surface-2">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-mad-lime font-spartan font-black text-2xl">
                        MADROCK JOURNAL
                      </div>
                    )}
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
