import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import {
  SITE_IDENTITY,
  NAV_ITEMS,
  EXPERTISE_ITEMS,
  CONTACT_INFO,
} from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E4E2DD] bg-[#FAF9F6] pt-14 pb-10">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* 5-Column Editorial Footer Grid (Directly mirrors Reference Footer Layout) */}
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Col 1 (3 Cols): Brand Monogram & Identity Lockup */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <a
              href="#home"
              className="group inline-flex items-center gap-3.5 focus:outline-none"
            >
              <div className="relative flex items-baseline font-serif text-[34px] leading-none tracking-tight text-[#161618] select-none">
                <span>C</span>
                <span className="-ml-1 text-[28px]">G</span>
                <span className="ml-0.5 font-light text-[#6E56CF]">/</span>
              </div>

              <span className="h-7 w-[1px] bg-[#E4E2DD]" aria-hidden="true" />

              <div className="flex flex-col">
                <span className="text-[11.5px] font-semibold tracking-[0.18em] text-[#161618] uppercase">
                  {SITE_IDENTITY.name}
                </span>
                <span className="mt-0.5 text-[9px] font-normal tracking-[0.14em] text-[#525156] uppercase">
                  {SITE_IDENTITY.role}
                </span>
              </div>
            </a>

            <p className="mt-5 max-w-[250px] text-[13px] leading-[1.65] text-[#525156]">
              Building software and teaching others how to think, create and build with
              technology.
            </p>
          </div>

          {/* Col 2 (2 Cols): Quick Links */}
          <div className="lg:col-span-2 lg:border-l lg:border-[#E4E2DD] lg:pl-6">
            <h3 className="text-[10.5px] font-semibold tracking-[0.16em] text-[#161618] uppercase">
              QUICK LINKS
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-[12.5px] text-[#525156]">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-[#6E56CF]"
                  >
                    {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 (3 Cols): Capabilities / Focus Areas */}
          <div className="lg:col-span-3 lg:border-l lg:border-[#E4E2DD] lg:pl-6">
            <h3 className="text-[10.5px] font-semibold tracking-[0.16em] text-[#161618] uppercase">
              CAPABILITIES
            </h3>
            <ul className="mt-4 space-y-2.5 text-[12.5px] text-[#525156]">
              {EXPERTISE_ITEMS.map((exp) => (
                <li key={exp.id}>
                  <a
                    href="#expertise"
                    className="transition-colors hover:text-[#6E56CF]"
                  >
                    {exp.title
                      .toLowerCase()
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 (2 Cols): Contact Info (Placeholders) */}
          <div className="lg:col-span-2 lg:border-l lg:border-[#E4E2DD] lg:pl-6">
            <h3 className="text-[10.5px] font-semibold tracking-[0.16em] text-[#161618] uppercase">
              CONTACT
            </h3>
            <ul className="mt-4 space-y-2.5 text-[12px] text-[#525156]">
              <li className="flex items-start gap-2">
                <Mail
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#6E56CF]"
                  strokeWidth={1.5}
                />
                <span className="break-all">{CONTACT_INFO.emailPlaceholder}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#6E56CF]"
                  strokeWidth={1.5}
                />
                <span>{CONTACT_INFO.phonePlaceholder}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#6E56CF]"
                  strokeWidth={1.5}
                />
                <span>{CONTACT_INFO.locationPlaceholder}</span>
              </li>
            </ul>
          </div>

          {/* Col 5 (2 Cols): Follow / Social Profiles (Placeholders) */}
          <div className="lg:col-span-2 lg:border-l lg:border-[#E4E2DD] lg:pl-6">
            <h3 className="text-[10.5px] font-semibold tracking-[0.16em] text-[#161618] uppercase">
              FOLLOW ME
            </h3>
            <ul className="mt-4 space-y-2.5 text-[12.5px] text-[#525156]">
              {CONTACT_INFO.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="group inline-flex items-center gap-1.5 transition-colors hover:text-[#6E56CF]"
                  >
                    <span className="font-medium text-[#161618] group-hover:text-[#6E56CF]">
                      {social.label}
                    </span>
                    <span className="font-mono text-[10px] text-[#8A8890]">
                      [Placeholder]
                    </span>
                    <ArrowUpRight className="h-3 w-3 text-[#8A8890] group-hover:text-[#6E56CF]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Rule (Mirrors Reference Centered Rule + Copyright) */}
        <div className="flex items-center justify-center gap-4 border-t border-[#E4E2DD] pt-7 text-center">
          <span className="hidden sm:inline-block h-[1px] w-12 bg-[#E4E2DD]" />
          <p className="text-[11.5px] tracking-[0.04em] text-[#8A8890]">
            &copy; {currentYear} {SITE_IDENTITY.name}. All Rights Reserved.
          </p>
          <span className="hidden sm:inline-block h-[1px] w-12 bg-[#E4E2DD]" />
        </div>
      </div>
    </footer>
  );
};

