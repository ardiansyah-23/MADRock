"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Clock, User, Share2, Dumbbell } from "lucide-react";
import { ArticleItem, getSavedArticles } from "@/lib/adminDataStore";
import { useLanguage } from "@/components/common/LanguageProvider";

export default function BlogDetailPage() {
  const { lang } = useLanguage();
  const params = useParams();
  const slug = params?.slug as string;

  const [article, setArticle] = useState<ArticleItem | null>(null);

  useEffect(() => {
    const articles = getSavedArticles();
    const found = articles.find(
      (a) =>
        a.id === slug ||
        a.title_en.toLowerCase().includes(slug?.toLowerCase() || "") ||
        a.title_id.toLowerCase().includes(slug?.toLowerCase() || "")
    );
    if (found) {
      setArticle(found);
    } else {
      setArticle(articles[0] || null);
    }
  }, [slug]);

  if (!article) {
    return (
      <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">{lang === "id" ? "Memuat Artikel..." : "Loading Article..."}</h2>
          <Link href="/blog" className="text-mad-lime hover:underline">
            {lang === "id" ? "Kembali ke Blog" : "Back to Blog"}
          </Link>
        </div>
      </main>
    );
  }

  const title = lang === "id" ? article.title_id : article.title_en;
  const excerpt = lang === "id" ? article.excerpt_id : article.excerpt_en;
  const content = lang === "id" ? article.content_id || article.excerpt_id : article.content_en || article.excerpt_en;
  const category = lang === "id" ? article.category_id : article.category_en;

  return (
    <main className="pt-32 pb-24 bg-mad-bg text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-mad-gray hover:text-mad-lime uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === "id" ? "Kembali ke Blog" : "Back to Blog"}</span>
        </Link>

        <div className="space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-mad-lime/10 border border-mad-lime/30 text-mad-lime font-mono text-xs uppercase font-bold">
            {category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-spartan text-white uppercase leading-tight">
            {title}
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
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Article Body */}
        <div className="prose prose-invert max-w-none text-mad-gray text-base leading-relaxed space-y-6 font-normal">
          <p className="text-lg text-white font-medium">
            {excerpt}
          </p>

          <div className="text-white space-y-4 whitespace-pre-line pt-2">
            {content}
          </div>

          <div className="p-6 rounded-2xl bg-mad-surface border border-mad-lime/30 text-xs font-mono text-mad-lime my-8">
            <strong>{lang === "id" ? "SARAN COACH AHMAD HUDZAIFAH:" : "COACH AHMAD HUDZAIFAH ADVICE:"}</strong>{" "}
            {lang === "id"
              ? "Konsistensi dalam tegangan mekanis latihan dan pemulihan terstruktur akan memberikan hasil hipertrofi yang jauh lebih baik dibandingkan intensitas acak."
              : "Consistency in mechanical tension and structured recovery will yield superior hypertrophy outcomes over arbitrary workout intensity."}
          </div>
        </div>

        {/* CTA Box */}
        <div className="p-8 rounded-3xl bg-mad-surface border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold font-spartan text-white uppercase">
              {lang === "id" ? "INGIN PROTOKOL LATIHAN KUSTOM?" : "WANT A CUSTOM PROTOCOL?"}
            </h4>
            <p className="text-xs text-mad-gray">
              {lang === "id"
                ? "Dapatkan program periodisasi 12-minggu yang dirancang khusus untuk anatomi Anda."
                : "Get a periodized 12-week program built for your biomechanics."}
            </p>
          </div>
          <Link
            href="/login"
            className="px-6 py-3.5 rounded-xl bg-mad-lime text-mad-bg font-extrabold text-xs uppercase hover:bg-mad-lime-hover transition-all"
          >
            {lang === "id" ? "Mulai Latihan Sekarang" : "Start Training Now"}
          </Link>
        </div>
      </div>
    </main>
  );
}
