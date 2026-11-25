import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { NAV_ITEMS, SITE_IDENTITY } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sectionIds = NAV_ITEMS.map((item) => item.id);
      let current = 'home';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-[#E4E2DD]'
          : 'bg-[#FAF9F6] border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[88px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Left: Monogram & Identity Lockup (Directly inspired by reference top-left) */}
        <a
          href="#home"
          className="group flex items-center gap-3.5 focus:outline-none"
          aria-label="Chiemena Godswill Home"
        >
          <div className="relative flex items-baseline font-serif text-[32px] leading-none tracking-tight text-[#161618] select-none">
            <span>C</span>
            <span className="-ml-1 text-[27px]">G</span>
            <span className="ml-0.5 font-light text-[#6E56CF] transition-transform duration-300 group-hover:translate-x-0.5">
              /
            </span>
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

        {/* Centre: Editorial Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                className={`relative py-2 text-[11px] font-medium tracking-[0.15em] uppercase transition-colors duration-200 ${
                  isActive
                    ? 'text-[#161618] font-semibold'
                    : 'text-[#525156] hover:text-[#161618]'
                }`}
              >
                {item.label}
                {/* Reference active indicator bar: 18px x 1.5px solid lavender centered below */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] bg-[#6E56CF] transition-all duration-200 ${
                    isActive ? 'w-[18px] opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right: Primary Sharp Rectangular CTA */}
        <div className="hidden sm:flex items-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 bg-[#161618] px-6 py-3.5 text-[11px] font-medium tracking-[0.15em] text-[#FAF9F6] uppercase transition-colors duration-200 hover:bg-[#6E56CF]"
          >
            <span>LET&apos;S TALK</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="inline-flex lg:hidden items-center justify-center border border-[#161618] p-2.5 text-[#161618] transition-colors hover:bg-[#161618] hover:text-[#FAF9F6]"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Editorial Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E4E2DD] bg-[#FAF9F6] px-5 pt-4 pb-8 sm:px-8">
          <nav className="flex flex-col divide-y divide-[#E4E2DD]">
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between py-3.5 text-left"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-[#6E56CF]">
                      0{idx + 1}
                    </span>
                    <span
                      className={`font-serif text-2xl ${
                        isActive ? 'italic text-[#6E56CF]' : 'text-[#161618]'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#8A8890]" />
                </a>
              );
            })}
          </nav>

          <div className="mt-6">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2.5 bg-[#161618] px-6 py-4 text-[11px] font-medium tracking-[0.16em] text-[#FAF9F6] uppercase"
            >
              <span>LET&apos;S TALK</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

