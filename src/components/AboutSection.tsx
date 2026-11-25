import React from 'react';
import { motion } from 'motion/react';
import { Download, Terminal, Users, Compass, Sparkles } from 'lucide-react';
import { ABOUT_CONTENT, FOCUS_PILLARS, FocusPillar } from '../data/portfolioData';

const editorialEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const renderPillarIcon = (iconKey: FocusPillar['iconKey']) => {
  const props = {
    className: 'h-5 w-5 text-[#525156] shrink-0',
    strokeWidth: 1.4,
  };
  switch (iconKey) {
    case 'code':
      return <Terminal {...props} />;
    case 'teaching':
      return <Users {...props} />;
    case 'problem':
      return <Compass {...props} />;
    case 'growth':
      return <Sparkles {...props} />;
  }
};

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="border-y border-[#E4E2DD] bg-[#F3F1ED] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* LEFT COLUMN (4 Cols): Editorial Philosophy (Draft Copy) + CV Action */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: editorialEase }}
            className="lg:col-span-4"
          >
            <div className="flex flex-wrap items-center gap-2.5">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#6E56CF] uppercase">
                {ABOUT_CONTENT.kicker}
              </p>
              <span className="border border-[#6E56CF]/30 bg-[#EAE4F7]/70 px-2 py-0.5 font-mono text-[9px] tracking-[0.12em] text-[#6E56CF] uppercase">
                [DRAFT COPY]
              </span>
            </div>

            <h2 className="mt-4 font-serif text-[32px] leading-[1.15] font-normal tracking-[-0.02em] text-[#161618] sm:text-[38px]">
              {ABOUT_CONTENT.headlinePrefix}{' '}
              <em className="font-serif italic text-[#6E56CF]">
                {ABOUT_CONTENT.headlineItalicAccent}
              </em>{' '}
              {ABOUT_CONTENT.headlineSuffix}
            </h2>

            <div className="mt-5 space-y-3.5 text-[14.5px] leading-[1.68] text-[#525156]">
              {ABOUT_CONTENT.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Editorial Signature Lockup (Inspired by Reference Script Signature above CV Button) */}
            <div className="mt-6">
              <p className="font-serif italic text-[26px] tracking-wide text-[#6E56CF]/85 select-none">
                Chiemena Godswill
              </p>
            </div>

            <div className="mt-5">
              <a
                href={ABOUT_CONTENT.cvUrlPlaceholder}
                className="group inline-flex items-center gap-3 border border-[#161618] bg-transparent px-6 py-3.5 text-[11px] font-medium tracking-[0.16em] text-[#161618] uppercase transition-colors duration-200 hover:bg-[#161618] hover:text-[#FAF9F6]"
              >
                <span>DOWNLOAD CV [PLACEHOLDER]</span>
                <Download className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* CENTRE COLUMN (4 Cols): Framed Editorial Poster Composition (Reference Triptych Center) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.08, ease: editorialEase }}
            className="flex flex-col items-center justify-center lg:col-span-4"
          >
            <div className="relative flex w-full max-w-[340px] flex-col items-center pt-4">
              {/* Gallery Black Frame (Echoes "GOOD DESIGN IS GOOD BUSINESS." frame in reference) */}
              <div className="relative z-10 w-[240px] sm:w-[260px] border-[7px] border-[#161618] bg-[#FAF9F6] p-6 sm:p-7 shadow-[0_18px_38px_rgba(22,22,24,0.08)]">
                <div className="border border-[#E4E2DD] px-5 py-7">
                  <span className="block font-mono text-[8.5px] tracking-[0.2em] text-[#6E56CF] uppercase">
                    PRINCIPLE // 01
                  </span>
                  <div className="mt-3 space-y-0.5 font-sans text-[25px] sm:text-[27px] leading-[1.08] font-bold tracking-[-0.03em] text-[#161618] uppercase">
                    {ABOUT_CONTENT.posterQuoteLines.map((line, idx) => (
                      <span
                        key={line}
                        className={`block ${
                          idx === 1 ? 'text-[#6E56CF]' : 'text-[#161618]'
                        }`}
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 h-[1.5px] w-8 bg-[#161618]" />
                </div>
              </div>

              {/* Minimal Studio Shelf Surface Below Frame */}
              <div className="relative z-0 -mt-1.5 h-4 w-full border-t border-[#DFDCD4] bg-[#EAE7E0]" />

              <p className="mt-3 text-center font-mono text-[9px] tracking-[0.14em] text-[#8A8890] uppercase">
                {ABOUT_CONTENT.posterCaption}
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN (4 Cols): 4-Row Horizontal Hairline Focus List (No Invented Metrics) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.14, ease: editorialEase }}
            className="lg:col-span-4"
          >
            <div className="divide-y divide-[#DFDCD4] border-y border-[#DFDCD4]">
              {FOCUS_PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  className="flex items-center gap-4 py-5 first:pt-5 last:pb-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DFDCD4] bg-[#FAF9F6]">
                    {renderPillarIcon(pillar.iconKey)}
                  </div>

                  <div className="flex flex-1 flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-serif text-[26px] leading-none font-normal text-[#161618]">
                        {pillar.number}
                      </span>
                      <h3 className="font-serif text-[21px] leading-tight font-normal text-[#161618]">
                        {pillar.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[9.5px] font-medium tracking-[0.14em] text-[#525156] uppercase">
                      {pillar.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

