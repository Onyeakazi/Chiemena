import React from 'react';
import { motion } from 'motion/react';
import { Code2, Smartphone, BookOpen, Layers } from 'lucide-react';
import { EXPERTISE_ITEMS, ExpertiseItem } from '../data/portfolioData';

const editorialEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const renderIcon = (iconKey: ExpertiseItem['iconKey']) => {
  const iconProps = {
    className: 'h-6 w-6 text-[#6E56CF]',
    strokeWidth: 1.5,
  };

  switch (iconKey) {
    case 'web':
      return <Code2 {...iconProps} />;
    case 'mobile':
      return <Smartphone {...iconProps} />;
    case 'instruction':
      return <BookOpen {...iconProps} />;
    case 'product':
      return <Layers {...iconProps} />;
  }
};

export const ExpertiseSection: React.FC = () => {
  return (
    <section
      id="expertise"
      aria-label="Expertise and Technical Capabilities"
      className="border-y border-[#E4E2DD] bg-[#F3F1ED]"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 divide-y divide-[#E4E2DD] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-[#E4E2DD]">
          {EXPERTISE_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.07,
                ease: editorialEase,
              }}
              className={`flex items-start gap-4 py-7 sm:py-6 ${
                idx === 0
                  ? 'lg:pr-8'
                  : idx === EXPERTISE_ITEMS.length - 1
                  ? 'lg:pl-8'
                  : 'lg:px-8'
              } ${
                idx % 2 === 0 ? 'sm:pr-6 lg:pr-8' : 'sm:pl-6 lg:pl-8'
              } ${idx >= 2 ? 'sm:border-t sm:border-[#E4E2DD] lg:border-t-0' : ''}`}
            >
              {/* Minimalist Lavender Line Icon (Mirrors Reference Service Band) */}
              <div className="mt-0.5 shrink-0">{renderIcon(item.iconKey)}</div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h2 className="text-[12px] font-semibold tracking-[0.13em] text-[#161618] uppercase">
                    {item.title}
                  </h2>
                </div>
                <p className="mt-2.5 text-[13.5px] leading-[1.65] text-[#525156]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

