import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

const editorialEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-[#FAF9F6] pt-4 pb-16 sm:pb-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Lavender Wash Editorial Callout Banner (Directly inspired by Reference CTA Strip) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: editorialEase }}
          className="relative overflow-hidden bg-[#EAE4F7] px-6 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16"
        >
          {/* Subtle Decorative Dot-Matrix Accent on Far Right (Matches Reference Banner) */}
          <div
            className="pointer-events-none absolute right-2 bottom-2 h-24 w-28 bg-editorial-dots opacity-70"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-[660px]">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#6E56CF] uppercase">
                {CONTACT_INFO.bannerKicker}
              </p>

              <h2 className="mt-3 font-serif text-[32px] leading-[1.14] font-normal tracking-[-0.02em] text-[#161618] sm:text-[40px]">
                {CONTACT_INFO.bannerHeadlinePrefix}{' '}
                <em className="font-serif italic text-[#6E56CF]">
                  {CONTACT_INFO.bannerHeadlineItalic}
                </em>{' '}
                {CONTACT_INFO.bannerHeadlineSuffix}
              </h2>
            </div>

            <div className="shrink-0">
              <a
                href={`mailto:${CONTACT_INFO.emailPlaceholder.split(' ')[0]}`}
                className="group inline-flex items-center gap-3 bg-[#161618] px-8 py-4.5 text-[11px] font-medium tracking-[0.16em] text-[#FAF9F6] uppercase transition-colors duration-200 hover:bg-[#6E56CF]"
              >
                <span>LET&apos;S WORK TOGETHER</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Direct Contact Placeholder Strip Inside Banner */}
          <div className="relative z-10 mt-10 grid grid-cols-1 gap-4 border-t border-[#D5CEF0] pt-6 sm:grid-cols-3">
            <div className="flex items-center gap-3 text-[13px] text-[#161618]">
              <Mail className="h-4 w-4 shrink-0 text-[#6E56CF]" strokeWidth={1.6} />
              <span className="truncate font-mono text-[11.5px]">
                {CONTACT_INFO.emailPlaceholder}
              </span>
            </div>

            <div className="flex items-center gap-3 text-[13px] text-[#161618]">
              <Phone className="h-4 w-4 shrink-0 text-[#6E56CF]" strokeWidth={1.6} />
              <span className="font-mono text-[11.5px]">
                {CONTACT_INFO.phonePlaceholder}
              </span>
            </div>

            <div className="flex items-center gap-3 text-[13px] text-[#161618]">
              <MapPin className="h-4 w-4 shrink-0 text-[#6E56CF]" strokeWidth={1.6} />
              <span className="font-mono text-[11.5px]">
                {CONTACT_INFO.locationPlaceholder}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

