import { ScrollReveal } from "./ScrollReveal";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : "text-left"}`}>
      <ScrollReveal>
        {badge && (
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-mad-lime/10 text-mad-lime border border-mad-lime/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-mad-lime animate-pulse"></span>
            {badge}
          </span>
        )}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight font-spartan text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-base md:text-lg text-mad-gray max-w-2xl mx-auto font-normal">
            {subtitle}
          </p>
        )}
      </ScrollReveal>
    </div>
  );
}
