import { Section } from "@/components/ui/Section";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <Section
      id="contact"
      number="05."
      label="// CONTACT"
      title="Let's build something."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <a
          href={`mailto:${profile.contact.email}`}
          className="block border border-ink p-6 md:p-8 bg-paper text-ink hover:bg-ink hover:text-paper transition-colors"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">
            {"// EMAIL"}
          </p>
          <p className="mt-3 font-mono text-base md:text-lg break-all">
            {profile.contact.email}
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-widest opacity-70">
            Open inbox →
          </p>
        </a>

        <a
          href={profile.contact.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="block border border-ink p-6 md:p-8 bg-paper text-ink hover:bg-ink hover:text-paper transition-colors"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">
            {"// WHATSAPP"}
          </p>
          <p className="mt-3 font-mono text-base md:text-lg">
            {profile.contact.phone}
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-widest opacity-70">
            Open chat →
          </p>
        </a>
      </div>

      <div className="mt-12 md:mt-16 pt-10 border-t border-ink">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute">
          {"// ELSEWHERE"}
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm uppercase tracking-widest">
          <li>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="text-ink hover:underline underline-offset-4"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-ink hover:underline underline-offset-4"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={profile.social.x}
              target="_blank"
              rel="noreferrer"
              className="text-ink hover:underline underline-offset-4"
            >
              X / Twitter
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
}
