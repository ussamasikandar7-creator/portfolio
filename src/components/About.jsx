import Reveal, { Stagger, staggerItem } from "./Reveal";
import { about, skills } from "../data/content";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-14 md:gap-16">
          <Reveal direction="left">
            <span className="text-xs tracking-[0.2em] uppercase text-mint font-medium">About</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-fog mt-4 leading-tight balance">
              GTM operator turned systems builder.
            </h2>
            <div className="mt-6 space-y-4">
              {about.map((p, i) => (
                <p key={i} className="text-mist leading-relaxed text-[15px] md:text-base">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="space-y-8">
            {skills.map((group, gi) => (
              <Reveal key={group.group} direction="right" delay={gi * 0.08}>
                <h3 className="text-sm font-medium text-fog mb-3">{group.group}</h3>
                <Stagger className="flex flex-wrap gap-2" stagger={0.04}>
                  {group.items.map((skill) => (
                    <motion.span
                      variants={staggerItem}
                      key={skill}
                      whileHover={{ y: -2, borderColor: "var(--color-mint)", color: "var(--color-fog)" }}
                      className="rounded-full border border-line bg-panel/60 px-3.5 py-1.5 text-xs text-mist transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </Stagger>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
