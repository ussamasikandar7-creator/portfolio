import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import Reveal from "./Reveal";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-line overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-mint/15 blur-[130px]"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">
        <Reveal>
          <span className="text-xs tracking-[0.2em] uppercase text-mint font-medium">Contact</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-fog mt-4 leading-tight balance">
            Have a workflow worth automating?
          </h2>
          <p className="mt-5 text-mist max-w-xl mx-auto leading-relaxed">
            Whether it's a GTM system, an internal tool, or a lead pipeline that's still living in spreadsheets — I'd
            like to hear about it.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-mint text-ink font-medium px-7 py-3.5 text-sm transition-transform hover:scale-[1.03] glow-mint"
          >
            <Mail size={16} />
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={0.25} className="mt-8 flex items-center justify-center gap-3">
          <SocialLink href={profile.linkedin} label="LinkedIn" icon={<LinkedinIcon size={17} />} />
          <SocialLink href={profile.github} label="GitHub" icon={<GithubIcon size={17} />} />
        </Reveal>
      </div>
    </section>
  );
}

function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-mist hover:text-fog hover:border-mint/60 transition-colors"
    >
      {icon}
      {label}
      <ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
    </a>
  );
}
