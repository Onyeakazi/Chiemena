import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { SITE_IDENTITY } from '../data/portfolioData';

const editorialEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FAF9F6] pt-6 sm:pt-10 lg:pt-14"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-8">
          {/* LEFT COLUMN (7 Cols): Editorial Statement */}
          <div className="pb-12 lg:col-span-7 lg:pb-20">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: editorialEase }}
              className="text-[11.5px] font-semibold tracking-[0.16em] text-[#6E56CF] uppercase"
            >
              {SITE_IDENTITY.heroKicker}
            </motion.p>

            {/* Exact Required Headline Wording — Do not put the name in the hero headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: editorialEase }}
              className="mt-5 font-serif text-[38px] leading-[1.12] font-normal tracking-[-0.02em] text-[#161618] sm:text-[48px] xl:text-[56px]"
            >
              I build software{' '}
              <span className="block">
                and{' '}
                <em className="font-serif italic font-normal text-[#6E56CF]">
                  teach others how to think,
                </em>
              </span>
              <span className="block">create and build</span>
              <span className="block">with technology.</span>
            </motion.h1>

            {/* Reference 40px Editorial Horizontal Rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.18, ease: editorialEase }}
              className="my-7 h-[1px] w-10 origin-left bg-[#161618]"
              aria-hidden="true"
            />

            {/* Exact Required Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: editorialEase }}
              className="max-w-[460px] text-[16px] leading-[1.68] font-normal text-[#525156] sm:text-[16.5px]"
            >
              {SITE_IDENTITY.heroSupportingText}
            </motion.p>

            {/* Action Buttons: Sharp 0px rectangular charcoal + 1px hairline ghost */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: editorialEase }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 bg-[#161618] px-7 py-4 text-[11px] font-medium tracking-[0.16em] text-[#FAF9F6] uppercase transition-colors duration-200 hover:bg-[#6E56CF]"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center border border-[#161618] bg-transparent px-7 py-4 text-[11px] font-medium tracking-[0.16em] text-[#161618] uppercase transition-colors duration-200 hover:bg-[#161618] hover:text-[#FAF9F6]"
              >
                ABOUT ME
              </a>
            </motion.div>

            {/* Scroll Anchor */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="mt-14 hidden sm:flex items-center"
            >
              <a
                href="#expertise"
                className="group inline-flex flex-col items-center gap-1.5 text-[9.5px] font-semibold tracking-[0.18em] text-[#161618] uppercase transition-colors hover:text-[#6E56CF]"
              >
                <span>SCROLL DOWN</span>
                <ArrowDown className="h-3.5 w-3.5 text-[#525156] transition-transform duration-200 group-hover:translate-y-0.5 group-hover:text-[#6E56CF]" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN (5 Cols): Hybrid Personal Portrait & Subtle Technical Visual Composition */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: editorialEase }}
            className="relative flex justify-center lg:col-span-5 lg:justify-end"
          >
            <div className="relative w-full max-w-[460px] pt-6">
              {/* 1. Soft Lavender Circular Aura behind the portrait (Reference match) */}
              <div
                className="pointer-events-none absolute top-8 left-1/2 -translate-x-[54%] h-[330px] w-[330px] sm:h-[380px] sm:w-[380px] rounded-full bg-[#EDE9FA]/90"
                aria-hidden="true"
              />

              {/* 2. Subtle Technical Dot-Matrix Pattern & Registration Hairlines (Lower Right & Upper Left) */}
              <div
                className="pointer-events-none absolute right-1 bottom-12 h-32 w-28 bg-editorial-dots opacity-55"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute top-14 left-4 hidden sm:flex items-center gap-2 font-mono text-[9px] tracking-[0.18em] text-[#8A8890]/80"
                aria-hidden="true"
              >
                <span className="h-[1px] w-4 bg-[#D5CEF0]" />
                <span>SYS // 01</span>
              </div>

              {/* 3. Static Circular Editorial Stamp in Upper-Right (Reference match, no distracting infinite spin) */}
              <div
                className="
                  absolute top-2 right-2 sm:right-0 z-20
                  flex h-[108px] w-[108px] sm:h-[118px] sm:w-[118px]
                  items-center justify-center rounded-full
                  bg-[#FAF9F6]/80 backdrop-blur-[2px]
                  transition-transform duration-500 hover:rotate-12
                "
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 120 120"
                  className="h-full w-full overflow-visible"
                >
                  <defs>
                    <path
                      id="editorialStampCircle"
                      d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                    />
                  </defs>
                  <circle
                    cx="60"
                    cy="60"
                    r="32"
                    fill="none"
                    stroke="#E4E2DD"
                    strokeWidth="0.75"
                    strokeDasharray="2 2"
                  />
                  <text
                    fill="#161618"
                    fontSize="7.3"
                    fontWeight="600"
                    letterSpacing="2.35px"
                  >
                    <textPath href="#editorialStampCircle" startOffset="0%">
                      • SOFTWARE DEVELOPER • INSTRUCTOR
                    </textPath>
                  </text>
                </svg>
                <span className="absolute font-serif italic text-[19px] text-[#6E56CF]">
                  CG.
                </span>
              </div>

              {/* 4. Portrait Frame Anchored Flush to Bottom Edge */}
              <div className="relative z-10 mx-auto flex flex-col items-center justify-end">
                {SITE_IDENTITY.portraitImageUrl ? (
                  <img
                    src={SITE_IDENTITY.portraitImageUrl}
                    alt={SITE_IDENTITY.name}
                    className="block h-[430px] sm:h-[480px] w-auto object-contain object-bottom select-none"
                  />
                ) : (
                  /* Intentional Editorial Portrait Placeholder — Anchored Flush to Expertise Band */
                  <div className="relative flex h-[420px] sm:h-[465px] w-[320px] sm:w-[360px] flex-col justify-between border-x border-t border-[#D8D3E8] bg-gradient-to-b from-[#FAF9F6]/65 via-[#F3F1ED]/90 to-[#EAE6DF] px-6 pt-6 pb-0 shadow-[0_-1px_0_0_rgba(22,22,24,0.04)]">
                    {/* Top Architectural Crop Marks */}
                    <div className="flex items-center justify-between border-b border-[#E4E2DD] pb-3">
                      <span className="font-mono text-[9.5px] tracking-[0.16em] text-[#6E56CF] uppercase">
                        PORTRAIT FRAME // 01
                      </span>
                      <span className="font-mono text-[9.5px] tracking-[0.14em] text-[#8A8890]">
                        4:5 NATURAL CUTOUT
                      </span>
                    </div>

                    {/* Central Editorial Portrait Silhouette & Framing Overlay */}
                    <div className="relative my-auto flex flex-col items-center text-center px-2 pt-4">
                      {/* Refined Minimalist Bust Silhouette Anchored Toward Bottom */}
                      <svg
                        viewBox="0 0 240 250"
                        className="h-[225px] w-[220px] text-[#161618]"
                        fill="none"
                        aria-hidden="true"
                      >
                        {/* Subtle Technical Construction Axis */}
                        <line
                          x1="120"
                          y1="8"
                          x2="120"
                          y2="245"
                          stroke="#6E56CF"
                          strokeWidth="0.75"
                          strokeDasharray="3 3"
                          opacity="0.45"
                        />
                        <line
                          x1="45"
                          y1="78"
                          x2="195"
                          y2="78"
                          stroke="#6E56CF"
                          strokeWidth="0.75"
                          strokeDasharray="3 3"
                          opacity="0.35"
                        />
                        {/* Head & Contemplative Profile Contour */}
                        <circle
                          cx="120"
                          cy="74"
                          r="38"
                          fill="#E5E1DA"
                          stroke="#161618"
                          strokeWidth="1.2"
                        />
                        {/* Eyeglasses Editorial Detail (Nod to Reference) */}
                        <rect
                          x="96"
                          y="66"
                          width="18"
                          height="12"
                          stroke="#6E56CF"
                          strokeWidth="1.2"
                        />
                        <rect
                          x="122"
                          y="66"
                          width="18"
                          height="12"
                          stroke="#6E56CF"
                          strokeWidth="1.2"
                        />
                        <line
                          x1="114"
                          y1="71"
                          x2="122"
                          y2="71"
                          stroke="#6E56CF"
                          strokeWidth="1.2"
                        />
                        {/* Shoulders / Crewneck Sweaters Silhouette Sitting Flush on Base */}
                        <path
                          d="M26 250 C28 176, 68 142, 120 142 C172 142, 212 176, 214 250 Z"
                          fill="#161618"
                        />
                        {/* Collar Line */}
                        <path
                          d="M92 145 Q120 164 148 145"
                          stroke="#FAF9F6"
                          strokeWidth="1.5"
                          fill="none"
                        />
                      </svg>

                      {/* Clear Placeholder Badge Over Lower Torso */}
                      <div className="absolute bottom-5 inset-x-4 border border-[#FAF9F6]/25 bg-[#161618]/92 px-3.5 py-2.5 text-center backdrop-blur-xs">
                        <p className="font-mono text-[9.5px] font-medium tracking-[0.16em] text-[#EAE4F7] uppercase">
                          [PORTRAIT PLACEHOLDER]
                        </p>
                        <p className="mt-1 text-[11px] leading-snug text-[#FAF9F6]/80">
                          Replace <code className="font-mono text-[#EAE4F7]">portraitImageUrl</code> with natural portrait of Chiemena Godswill
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

