import React from 'react';
import { motion } from 'motion/react';
import { TOOLKIT_ROWS } from '../data/portfolioData';

const editorialEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const ToolkitSection: React.FC = () => {
  return (
    <section id="toolkit" className="bg-[#FAF9F6] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#E4E2DD] pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-[#6E56CF] uppercase">
              TECHNICAL SPECIFICATION
            </p>
            <h2 className="mt-2.5 font-serif text-[34px] leading-[1.12] font-normal tracking-[-0.02em] text-[#161618] sm:text-[42px]">
              Technical{' '}
              <em className="font-serif italic text-[#6E56CF]">Toolkit</em>
            </h2>
          </div>

          <p className="max-w-[380px] text-[13.5px] leading-[1.6] text-[#525156]">
            Technologies, frameworks, and instructional practices used across web and
            cross-platform mobile projects.
          </p>
        </div>

        {/* 4-Row Architectural Specification Index */}
        <div className="divide-y divide-[#E4E2DD] border-b border-[#E4E2DD]">
          {TOOLKIT_ROWS.map((row, idx) => (
            <motion.div
              key={row.number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.07,
                ease: editorialEase,
              }}
              className="grid grid-cols-1 items-start gap-6 py-8 lg:grid-cols-12 lg:items-center lg:gap-8"
            >
              {/* Left Specification Column (5 Cols) */}
              <div className="flex items-start gap-4 lg:col-span-5">
                <span className="mt-0.5 font-mono text-[11px] font-medium tracking-[0.16em] text-[#6E56CF]">
                  {row.number} //
                </span>
                <div>
                  <h3 className="text-[13px] font-semibold tracking-[0.15em] text-[#161618] uppercase">
                    {row.category}
                  </h3>
                  <p className="mt-1 text-[13px] text-[#8A8890]">{row.subtitle}</p>
                </div>
              </div>

              {/* Right Specification Tags (7 Cols) */}
              <div className="flex flex-wrap items-center gap-2.5 lg:col-span-7">
                {row.items.map((item) => {
                  const isPlaceholder = item.startsWith('[');
                  return (
                    <span
                      key={item}
                      className={`group inline-flex items-center gap-2.5 border px-4 py-2.5 text-[12.5px] font-medium tracking-[0.04em] transition-colors duration-200 ${
                        isPlaceholder
                          ? 'border-dashed border-[#6E56CF]/45 bg-[#EAE4F7]/40 font-mono text-[11px] text-[#6E56CF]'
                          : 'border-[#E4E2DD] bg-[#F3F1ED]/70 text-[#161618] hover:border-[#6E56CF] hover:bg-[#FAF9F6]'
                      }`}
                    >
                      <span
                        className="h-1.5 w-1.5 bg-[#6E56CF] transition-transform duration-200 group-hover:scale-125"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

