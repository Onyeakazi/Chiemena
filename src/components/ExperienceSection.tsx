import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

const editorialEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="border-b border-[#E4E2DD] bg-[#FAF9F6] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Asymmetrical 4 / 8 Split Editorial Ledger */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* LEFT COLUMN (4 Cols): Sticky Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: editorialEase }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-28">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#6E56CF] uppercase">
                EXPERIENCE &amp; TEACHING
              </p>

              <h2 className="mt-3 font-serif text-[34px] leading-[1.12] font-normal tracking-[-0.02em] text-[#161618] sm:text-[42px]">
                Engineering &amp;{' '}
                <em className="font-serif italic text-[#6E56CF]">Instruction</em>
              </h2>

              <div className="my-6 h-[1px] w-10 bg-[#161618]" />

              <p className="text-[14.5px] leading-[1.68] text-[#525156]">
                A dual-track ledger covering hands-on software development and technical
                instruction.
              </p>

              <div className="mt-5 inline-block border border-[#E4E2DD] bg-[#F3F1ED] px-3.5 py-2.5">
                <p className="font-mono text-[9.5px] font-medium tracking-[0.14em] text-[#6E56CF] uppercase">
                  [PLACEHOLDER LEDGER]
                </p>
                <p className="mt-1 text-[12px] leading-relaxed text-[#525156]">
                  Roles, organizations, and dates below are structured placeholders ready for
                  your verified career history.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN (8 Cols): Ruled Horizontal Experience & Teaching Ledger */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-[#E4E2DD] border-t border-b border-[#E4E2DD]">
              {EXPERIENCE_ITEMS.map((entry, idx) => (
                <motion.article
                  key={entry.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.08,
                    ease: editorialEase,
                  }}
                  className="group py-8 transition-colors duration-200 first:pt-8 last:pb-8 sm:px-4 hover:bg-[#F3F1ED]/60"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 font-mono text-[10px] font-medium tracking-[0.16em] text-[#6E56CF] uppercase">
                      <span className="h-1.5 w-1.5 bg-[#6E56CF]" />
                      {entry.track}
                    </span>

                    <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] text-[#8A8890]">
                      <span>{entry.periodPlaceholder}</span>
                      <span>•</span>
                      <span>{entry.locationPlaceholder}</span>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <h3 className="font-serif text-[26px] leading-snug font-normal text-[#161618] sm:text-[28px]">
                      {entry.rolePlaceholder}
                    </h3>
                    <span className="text-[12.5px] font-semibold tracking-[0.12em] text-[#525156] uppercase">
                      {entry.organizationPlaceholder}
                    </span>
                  </div>

                  <p className="mt-3.5 text-[14.5px] leading-[1.68] text-[#525156]">
                    {entry.summaryPlaceholder}
                  </p>

                  <ul className="mt-4 space-y-2 border-l border-[#D5CEF0] pl-4">
                    {entry.highlightsPlaceholder.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className="text-[13.5px] leading-[1.6] text-[#525156]"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

