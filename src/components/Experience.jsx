import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import { experience, education, certifications } from "../data/content";

function TimelineItem({ job, index, isLast }) {
  return (
    <div className="relative pl-9 md:pl-12">
      <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          className={`h-3 w-3 rounded-full mt-1.5 shrink-0 ${index === 0 ? "bg-mint" : "bg-line border border-mist/40"}`}
        />
        {!isLast && (
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 + 0.1 }}
            style={{ originY: 0 }}
            className="w-px flex-1 bg-line mt-1"
          />
        )}
      </div>

      <Reveal direction="up" delay={index * 0.06} className="pb-10 last:pb-0">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-fog font-medium">{job.role}</h3>
          <span className="text-xs text-mist/80">{job.period}</span>
        </div>
        <p className="text-sm text-mint mt-0.5">{job.company} · <span className="text-mist">{job.place}</span></p>
        <ul className="mt-3 space-y-2">
          {job.points.map((p, i) => (
            <li key={i} className="text-sm text-mist leading-relaxed flex gap-2.5">
              <span className="mt-2 h-1 w-1 rounded-full bg-mist/50 shrink-0" />
              {p}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <Reveal className="max-w-2xl mb-14">
          <span className="text-xs tracking-[0.2em] uppercase text-mint font-medium">Experience</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fog mt-4 leading-tight balance">
            Where the GTM instincts come from.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16">
          <div>
            {experience.map((job, i) => (
              <TimelineItem key={job.company} job={job} index={i} isLast={i === experience.length - 1} />
            ))}
          </div>

          <div className="space-y-10">
            <Reveal direction="right">
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap size={18} className="text-mint" />
                <h3 className="text-sm font-medium text-fog tracking-wide uppercase">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((ed) => (
                  <div key={ed.school} className="rounded-xl border border-line bg-panel/50 p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h4 className="text-fog text-sm font-medium">{ed.degree}</h4>
                      <span className="text-xs text-mist/80 shrink-0">{ed.period}</span>
                    </div>
                    <p className="text-sm text-mint mt-1">{ed.school}</p>
                    <p className="text-xs text-mist mt-2 leading-relaxed">{ed.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <h3 className="text-sm font-medium text-fog tracking-wide uppercase mb-4">Certifications</h3>
              <ul className="space-y-2.5">
                {certifications.map((c) => (
                  <li key={c} className="text-sm text-mist flex gap-2.5 leading-relaxed">
                    <span className="mt-2 h-1 w-1 rounded-full bg-mint/70 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
