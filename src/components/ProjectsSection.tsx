import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Image as ImageIcon } from 'lucide-react';
import { FEATURED_PROJECTS, ProjectItem, CONTACT_INFO } from '../data/portfolioData';

const editorialEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ProjectStagePlaceholder: React.FC<{ project: ProjectItem }> = ({ project }) => {
  const isDarkMatte =
    project.frameTheme === 'charcoal' || project.frameTheme === 'charcoal-dual';

  return (
    <div
      className={`relative flex h-full w-full flex-col justify-between p-6 sm:p-9 transition-transform duration-500 ease-out group-hover:scale-[1.015] ${
        isDarkMatte
          ? 'bg-[#161618] text-[#FAF9F6]'
          : 'bg-[#EFECE6] text-[#161618] border border-[#E4E2DD]'
      }`}
    >
      {/* Top Studio Frame Metadata Row */}
      <div
        className={`flex items-center justify-between border-b pb-3.5 ${
          isDarkMatte ? 'border-[#FAF9F6]/15' : 'border-[#161618]/12'
        }`}
      >
        <span
          className={`font-mono text-[10px] tracking-[0.18em] uppercase ${
            isDarkMatte ? 'text-[#EAE4F7]' : 'text-[#6E56CF]'
          }`}
        >
          EXHIBIT // {project.index}
        </span>
        <span
          className={`font-mono text-[10px] tracking-[0.15em] uppercase ${
            isDarkMatte ? 'text-[#8A8890]' : 'text-[#525156]'
          }`}
        >
          [SCREENSHOT PLACEHOLDER]
        </span>
      </div>

      {/* Center Intentional Editorial Passe-Partout Target (Not a fake UI) */}
      <div className="my-auto py-8">
        <div
          className={`mx-auto flex max-w-[380px] flex-col items-center justify-center border border-dashed px-6 py-10 text-center ${
            isDarkMatte
              ? 'border-[#FAF9F6]/25 bg-[#1E1E22]/70'
              : 'border-[#161618]/25 bg-[#FAF9F6]/80'
          }`}
        >
          <div
            className={`mb-4 flex h-11 w-11 items-center justify-center border ${
              isDarkMatte
                ? 'border-[#FAF9F6]/20 text-[#EAE4F7]'
                : 'border-[#161618]/20 text-[#6E56CF]'
            }`}
          >
            <ImageIcon className="h-5 w-5" strokeWidth={1.4} />
          </div>

          <span className="font-serif text-[30px] sm:text-[34px] leading-none tracking-tight">
            {project.title}
          </span>

          <p
            className={`mt-2.5 font-mono text-[9.5px] tracking-[0.16em] uppercase ${
              isDarkMatte ? 'text-[#EAE4F7]/90' : 'text-[#6E56CF]'
            }`}
          >
            {project.placeholderNote}
          </p>

          <p
            className={`mt-3 max-w-[290px] text-[12px] leading-relaxed ${
              isDarkMatte ? 'text-[#FAF9F6]/65' : 'text-[#525156]'
            }`}
          >
            Place actual <strong className="font-medium">{project.title}</strong> application
            screenshot in <code className="font-mono text-[11px]">screenshotUrl</code> to
            render inside this studio frame.
          </p>
        </div>
      </div>

      {/* Bottom Studio Frame Tech Spec Strip */}
      <div
        className={`flex flex-wrap items-center justify-between gap-2 border-t pt-3.5 ${
          isDarkMatte ? 'border-[#FAF9F6]/15' : 'border-[#161618]/12'
        }`}
      >
        <div className="flex flex-wrap items-center gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 font-mono text-[9.5px] tracking-[0.14em] uppercase ${
                isDarkMatte
                  ? 'bg-[#FAF9F6]/10 text-[#FAF9F6]/90'
                  : 'bg-[#161618]/8 text-[#161618]'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <span
          className={`font-mono text-[9.5px] tracking-[0.14em] uppercase ${
            isDarkMatte ? 'text-[#8A8890]' : 'text-[#525156]'
          }`}
        >
          16:10 / MOBILE READY
        </span>
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-[#FAF9F6] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Section Header Row (Directly mirrors Reference "FEATURED WORK / Selected Projects" + Right Link) */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#E4E2DD] pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-[#6E56CF] uppercase">
              FEATURED WORK
            </p>
            <h2 className="mt-2.5 font-serif text-[34px] leading-[1.12] font-normal tracking-[-0.02em] text-[#161618] sm:text-[42px]">
              Selected Projects
            </h2>
          </div>

          <a
            href={CONTACT_INFO.socials[0].href}
            className="group inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.15em] text-[#525156] uppercase transition-colors hover:text-[#6E56CF]"
          >
            <span>VIEW GITHUB ARCHIVE [PLACEHOLDER]</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Asymmetrical 2-Column Staggered Editorial Exhibition Grid */}
        <div className="mt-12 grid grid-cols-1 gap-y-14 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-16">
          {FEATURED_PROJECTS.map((project, idx) => {
            const isRightColumn = idx % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.55,
                  delay: (idx % 2) * 0.1,
                  ease: editorialEase,
                }}
                className={`group flex flex-col lg:col-span-6 ${
                  isRightColumn ? 'lg:mt-14' : ''
                }`}
              >
                {/* Visual Exhibition Container */}
                <div className="relative w-full overflow-hidden">
                  <div className={`w-full ${project.aspectClass}`}>
                    {project.screenshotUrl ? (
                      <div
                        className={`flex h-full w-full items-center justify-center p-6 sm:p-10 transition-transform duration-500 ease-out group-hover:scale-[1.015] ${
                          project.frameTheme.startsWith('charcoal')
                            ? 'bg-[#161618]'
                            : 'bg-[#EFECE6] border border-[#E4E2DD]'
                        }`}
                      >
                        <img
                          src={project.screenshotUrl}
                          alt={`${project.title} screenshot`}
                          className="max-h-full max-w-full object-contain shadow-sm"
                        />
                      </div>
                    ) : (
                      <ProjectStagePlaceholder project={project} />
                    )}
                  </div>

                  {/* Subtle 1px Lavender Bottom Rule Reveal on Hover */}
                  <div className="h-[2px] w-0 bg-[#6E56CF] transition-all duration-300 group-hover:w-full" />
                </div>

                {/* Editorial Caption & Project Metadata Below Frame */}
                <div className="mt-5 flex flex-col border-b border-[#E4E2DD] pb-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[11px] tracking-[0.14em] text-[#8A8890]">
                        {project.index}
                      </span>
                      <h3 className="text-[16px] font-semibold tracking-[0.12em] text-[#161618] uppercase">
                        {project.title}
                      </h3>
                    </div>

                    <span className="font-mono text-[10.5px] font-medium tracking-[0.14em] text-[#6E56CF] uppercase">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <p className="mt-3 text-[14.5px] leading-[1.65] text-[#525156]">
                    {project.summary}
                  </p>

                  {/* Placeholder Action Links */}
                  <div className="mt-4 flex flex-wrap items-center gap-6 pt-1">
                    <a
                      href={project.liveUrlPlaceholder}
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] text-[#161618] uppercase transition-colors hover:text-[#6E56CF]"
                    >
                      <span>LIVE PREVIEW [PLACEHOLDER]</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={project.repoUrlPlaceholder}
                      className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.14em] text-[#525156] uppercase transition-colors hover:text-[#161618]"
                    >
                      <span>SOURCE CODE [PLACEHOLDER]</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

