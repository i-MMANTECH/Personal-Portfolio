import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { profile } from "@/content/profile";

export function About() {
  return (
    <Section
      id="about"
      number="01."
      label="// ABOUT"
      title="A snapshot of the operator."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        <div className="md:col-span-5 lg:col-span-4">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:max-w-none border border-ink overflow-hidden bg-paper-mute">
            <Image
              src="/images/about.jpg"
              alt="Emmanuel Aro at work"
              fill
              quality={95}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 380px"
              className="object-cover object-[center_30%] contrast-[1.04] saturate-[1.05]"
            />
          </div>
        </div>

        <div className="md:col-span-7 lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div className="border border-ink p-5 sm:p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute mb-2">
                Experience
              </p>
              <p className="font-mono text-2xl md:text-3xl font-bold text-ink">
                {profile.meta.experienceYears}
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                Years in Full-Stack Engineering
              </p>
            </div>
            <div className="border border-ink p-5 sm:p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute mb-2">
                Education
              </p>
              <p className="font-mono text-base md:text-lg font-bold text-ink leading-tight">
                {profile.meta.educationPrimary}
              </p>
              <p className="mt-1 text-sm text-ink-soft leading-snug">
                {profile.meta.educationSecondary}
              </p>
            </div>
          </div>

          {profile.bio.map((para, i) => (
            <p
              key={i}
              className="text-base md:text-lg leading-relaxed text-ink-soft mb-4 last:mb-0"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
