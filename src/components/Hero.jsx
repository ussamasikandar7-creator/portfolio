import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import profileImg from "../assets/img/profile-cutout-web.webp";
import { profile, stats, flagshipProof } from "../data/content";
import AnimatedCounter from "./AnimatedCounter";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      {/* background layers */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-mint/10 blur-[140px]"
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-[1.15fr_0.85fr] gap-14 md:gap-10 items-center"
        >
          <div>
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-3.5 py-1.5 text-xs text-mist mb-7"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
              </span>
              Open to new GTM &amp; automation projects
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display font-semibold text-4xl sm:text-5xl md:text-[3.4rem] leading-[1.08] tracking-tight text-fog balance"
            >
              {profile.name}
              <br />
              <span className="text-gradient">{profile.role}</span> Engineer
            </motion.h1>

            <motion.p variants={item} className="mt-6 text-base md:text-lg text-mist max-w-xl leading-relaxed balance">
              {profile.tagline}
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-mint text-btn-ink font-medium px-6 py-3 text-sm transition-transform hover:scale-[1.03] glow-mint"
              >
                See my work
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-fog hover:border-mint hover:text-mint transition-colors"
              >
                Get in touch
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-14 max-w-md border-t border-line pt-7">
              <div className="grid grid-cols-2 gap-6 mb-5">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-2xl md:text-3xl font-semibold text-fog">
                      <AnimatedCounter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-xs md:text-sm text-mist mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2.5 group"
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mint shrink-0" />
                <span className="text-sm text-mist leading-relaxed">
                  <span className="text-fog font-medium">{flagshipProof.headline}</span> {flagshipProof.detail}
                  <span className="inline-flex items-center gap-1 text-mint ml-1.5 group-hover:gap-2 transition-all">
                    {flagshipProof.linkLabel}
                    <ArrowUpRight size={13} />
                  </span>
                </span>
              </a>
            </motion.div>
          </div>

          <motion.div variants={item} className="relative mx-auto md:mx-0 w-full max-w-[360px]">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-x-6 bottom-4 top-10 rounded-full bg-gradient-to-b from-mint/20 via-violet/10 to-transparent blur-3xl" />
              <img
                src={profileImg}
                alt={profile.name}
                className="relative w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-2 -left-2 rounded-2xl border border-line bg-panel-2/90 backdrop-blur-xl px-4 py-3 shadow-2xl"
              >
                <p className="text-xs text-mist">Based in</p>
                <p className="text-sm text-fog font-medium">{profile.location}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.a
          href="#work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 -bottom-2 flex-col items-center gap-2 text-mist hover:text-mint transition-colors"
        >
          <span className="text-[11px] tracking-widest uppercase">Scroll</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ArrowDown size={16} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
