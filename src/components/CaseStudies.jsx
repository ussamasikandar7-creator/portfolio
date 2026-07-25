import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import { caseStudies } from "../data/content";

function CaseStudyCard({ study, index, open, onToggle }) {
  return (
    <Reveal direction="up" delay={index * 0.06} className="group">
      <div
        className={`rounded-2xl border bg-panel/50 card-hover overflow-hidden ${
          open ? "border-mint/40 shadow-[0_0_0_1px_rgba(52,224,161,0.15)]" : "border-line hover:border-line/80"
        }`}
      >
        <button
          onClick={onToggle}
          className="w-full text-left px-6 py-6 md:px-8 md:py-7 flex items-start md:items-center gap-5 md:gap-8 cursor-pointer"
        >
          <span className="hidden sm:block font-display text-xs text-mist/70 pt-1 md:pt-0">{study.number}</span>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className={`text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full font-medium ${
                  study.tag.includes("Flagship")
                    ? "bg-mint/15 text-mint"
                    : "bg-panel-2 text-mist border border-line"
                }`}
              >
                {study.tag}
              </span>
              <h3 className="font-display text-lg md:text-xl font-semibold text-fog">{study.title}</h3>
            </div>
            <p className="text-sm text-mist mt-1.5 max-w-xl leading-relaxed">{study.subtitle}</p>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {study.tools.map((t) => (
                <span key={t} className="text-[11px] text-mist/90 border border-line rounded-full px-2.5 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0 text-mist"
          >
            <ChevronDown size={20} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-8 pt-1 md:pl-[4.75rem] grid sm:grid-cols-2 gap-8 border-t border-line/70 mt-1">
                <div className="pt-6 space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-mint/80 font-medium mb-2">The problem</p>
                    <p className="text-sm text-mist leading-relaxed">{study.context}</p>
                    <p className="text-sm text-mist leading-relaxed mt-2">{study.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-mint/80 font-medium mb-2">Outcome</p>
                    <p className="text-sm text-mist leading-relaxed">{study.outcome}</p>
                  </div>
                  {study.url && (
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-mint hover:gap-2.5 transition-all font-medium"
                    >
                      {study.linkLabel}
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>

                <div className="pt-6">
                  <p className="text-xs uppercase tracking-wider text-mint/80 font-medium mb-3">System built</p>
                  <ul className="space-y-2.5">
                    {study.system.map((line, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-mist leading-relaxed">
                        <span className="mt-2 h-1 w-1 rounded-full bg-mint/70 shrink-0" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export default function CaseStudies() {
  const [openId, setOpenId] = useState(caseStudies[0].id);

  return (
    <section id="work" className="relative py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <Reveal className="max-w-2xl mb-14">
          <span className="text-xs tracking-[0.2em] uppercase text-mint font-medium">Case Studies</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-fog mt-4 leading-tight balance">
            Practical systems built around real business workflows.
          </h2>
          <p className="mt-4 text-mist leading-relaxed">
            Explore how I use AI, automation and modern technology to reduce repetitive work, organise business
            processes and help teams operate more efficiently.
          </p>
        </Reveal>

        <div className="space-y-4">
          {caseStudies.map((study, i) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              index={i}
              open={openId === study.id}
              onToggle={() => setOpenId(openId === study.id ? null : study.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
