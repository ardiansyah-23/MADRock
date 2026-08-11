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
