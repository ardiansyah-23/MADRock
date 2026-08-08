"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Clock, User, Share2, Dumbbell } from "lucide-react";
import { ArticleItem, getSavedArticles } from "@/lib/adminDataStore";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [article, setArticle] = useState<ArticleItem | null>(null);

  useEffect(() => {
    const articles = getSavedArticles();
    const found = articles.find((a) => a.id === slug || a.title.toLowerCase().includes(slug?.toLowerCase() || ""));
    if (found) {
      setArticle(found);
    } else {
      // Default to first article if slug not matched directly
      setArticle(articles[0] || null);
    }
  }, [slug]);

  if (!article) {
    return (
      <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Article Loading...</h2>
          <Link href="/blog" className="text-mad-lime hover:underline">
            Back to Articles
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-mad-gray hover:text-mad-lime uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>

        <div className="space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-mad-lime/10 border border-mad-lime/30 text-mad-lime font-mono text-xs uppercase font-bold">
            {article.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-spartan text-white uppercase leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-6 text-xs text-mad-gray font-mono border-b border-white/10 pb-6">
            <span>By {article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-mad-lime">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        {article.image && (
          <div className="relative h-[400px] sm:h-[480px] w-full rounded-3xl overflow-hidden border border-white/10">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Article Body */}
        <div className="prose prose-invert max-w-none text-mad-gray text-base leading-relaxed space-y-6 font-normal">
          <p className="text-lg text-white font-medium">
            {article.excerpt}
          </p>

          <div className="text-white space-y-4 whitespace-pre-line pt-2">
            {article.content || "Full detailed sports science analysis and coaching protocol guidelines."}
          </div>

          <div className="p-6 rounded-2xl bg-mad-surface border border-mad-lime/30 text-xs font-mono text-mad-lime my-8">
            <strong>COACH HUMDZAIFE ADVICE:</strong> Consistency in mechanical tension and structured recovery will yield superior hypertrophy outcomes over arbitrary workout intensity.
          </div>
        </div>

        {/* CTA Box */}
        <div className="p-8 rounded-3xl bg-mad-surface border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold font-spartan text-white uppercase">WANT A CUSTOM PROTOCOL?</h4>
            <p className="text-xs text-mad-gray">Get a periodized 12-week program built for your biomechanics.</p>
          </div>
          <Link
            href="/login"
            className="px-6 py-3.5 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-xs uppercase shadow-lg hover:bg-mad-lime-hover transition-all"
          >
            Start Training
          </Link>
        </div>
      </div>
    </main>
  );
}
