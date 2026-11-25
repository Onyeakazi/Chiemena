export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconKey: 'web' | 'mobile' | 'instruction' | 'product';
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  categoryLabel: string;
  summary: string;
  placeholderNote: string;
  techStack: string[];
  frameTheme: 'charcoal' | 'stone' | 'alabaster-split' | 'charcoal-dual';
  aspectClass: string;
  /** Set a real screenshot path in /public/projects/... when ready */
  screenshotUrl?: string;
  secondaryScreenshotUrl?: string;
  liveUrlPlaceholder: string;
  repoUrlPlaceholder: string;
}

export interface FocusPillar {
  number: string;
  title: string;
  subtitle: string;
  iconKey: 'code' | 'teaching' | 'problem' | 'growth';
}

export interface ExperienceItem {
  id: string;
  track: 'ENGINEERING PRACTICE' | 'TECHNICAL INSTRUCTION';
  rolePlaceholder: string;
  organizationPlaceholder: string;
  periodPlaceholder: string;
  locationPlaceholder: string;
  summaryPlaceholder: string;
  highlightsPlaceholder: string[];
}

export interface ToolkitRow {
  number: string;
  category: string;
  subtitle: string;
  items: string[];
}

export const SITE_IDENTITY = {
  monogram: 'CG',
  name: 'Chiemena Godswill',
  role: 'SOFTWARE DEVELOPER & INSTRUCTOR',
  heroKicker: 'SOFTWARE DEVELOPER & INSTRUCTOR',
  // Exact required wording:
  heroHeadline:
    'I build software and teach others how to think, create and build with technology.',
  // Exact required wording:
  heroSupportingText:
    'Developing digital products, solving engineering problems and helping people grow through technology.',
  /** Replace with actual portrait image path (e.g. '/images/chiemena-portrait.png') when ready */
  portraitImageUrl: '',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '#home', id: 'home' },
  { label: 'EXPERTISE', href: '#expertise', id: 'expertise' },
  { label: 'PROJECTS', href: '#projects', id: 'projects' },
  { label: 'ABOUT', href: '#about', id: 'about' },
  { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
  { label: 'TOOLKIT', href: '#toolkit', id: 'toolkit' },
  { label: 'CONTACT', href: '#contact', id: 'contact' },
];

export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    id: 'web-development',
    number: '01',
    title: 'WEB APPLICATION DEVELOPMENT',
    description:
      'Building responsive, modern web interfaces and frontend applications with React, TypeScript, and clean component architecture.',
    iconKey: 'web',
  },
  {
    id: 'mobile-development',
    number: '02',
    title: 'MOBILE APP DEVELOPMENT',
    description:
      'Developing cross-platform mobile experiences using React Native, Expo, and Expo Router across social and commerce domains.',
    iconKey: 'mobile',
  },
  {
    id: 'technical-instruction',
    number: '03',
    title: 'TECHNICAL INSTRUCTION',
    description:
      'Teaching software development fundamentals and guiding learners to think clearly, break down problems, and build real projects.',
    iconKey: 'instruction',
  },
  {
    id: 'product-engineering',
    number: '04',
    title: 'PRODUCT IMPLEMENTATION',
    description:
      'Connecting user-facing interfaces with practical backend and real-time services such as Supabase and Socket.io.',
    iconKey: 'product',
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'zyntra',
    index: '01',
    title: 'Zyntra',
    categoryLabel: 'SOCIAL PLATFORM • REACT NATIVE & SUPABASE',
    summary:
      'Social platform built with React Native and Supabase. [Placeholder: Replace with your concise overview of Zyntra’s core user flows and architecture.]',
    placeholderNote: 'ACTUAL SCREENSHOT PLACEHOLDER — ZYNTRA (MOBILE SOCIAL PLATFORM)',
    techStack: ['React Native', 'Supabase'],
    frameTheme: 'charcoal',
    aspectClass: 'aspect-[4/4.6]',
    screenshotUrl: '',
    liveUrlPlaceholder: '#placeholder-zyntra-demo',
    repoUrlPlaceholder: '#placeholder-zyntra-repo',
  },
  {
    id: 'pennywise',
    index: '02',
    title: 'Pennywise',
    categoryLabel: 'PERSONAL FINANCE APPLICATION',
    summary:
      'Personal finance recording application. [Placeholder: Replace with your concise overview of Pennywise’s financial tracking workflow and technology stack.]',
    placeholderNote: 'ACTUAL SCREENSHOT PLACEHOLDER — PENNYWISE (FINANCE RECORDING UI)',
    techStack: ['Personal Finance', 'Application Development'],
    frameTheme: 'stone',
    aspectClass: 'aspect-[4/4.3]',
    screenshotUrl: '',
    liveUrlPlaceholder: '#placeholder-pennywise-demo',
    repoUrlPlaceholder: '#placeholder-pennywise-repo',
  },
  {
    id: 'confysole',
    index: '03',
    title: 'Confysole',
    categoryLabel: 'E-COMMERCE APPLICATION',
    summary:
      'E-commerce application. [Placeholder: Replace with your concise overview of Confysole’s product catalog, storefront experience, and implementation details.]',
    placeholderNote: 'ACTUAL SCREENSHOT PLACEHOLDER — CONFYSOLE (E-COMMERCE INTERFACE)',
    techStack: ['E-Commerce', 'Web / App Interface'],
    frameTheme: 'alabaster-split',
    aspectClass: 'aspect-[4/4.3]',
    screenshotUrl: '',
    liveUrlPlaceholder: '#placeholder-confysole-demo',
    repoUrlPlaceholder: '#placeholder-confysole-repo',
  },
  {
    id: 'eshop',
    index: '04',
    title: 'Eshop',
    categoryLabel: 'MOBILE SHOPPING • REACT NATIVE, EXPO & SOCKET.IO',
    summary:
      'Mobile shopping application built with React Native, Expo, Expo Router and Socket.io. [Placeholder: Replace with your concise overview of Eshop’s mobile shopping and real-time capabilities.]',
    placeholderNote: 'ACTUAL SCREENSHOT PLACEHOLDER — ESHOP (REACT NATIVE + EXPO + SOCKET.IO)',
    techStack: ['React Native', 'Expo', 'Expo Router', 'Socket.io'],
    frameTheme: 'charcoal-dual',
    aspectClass: 'aspect-[4/4.6]',
    screenshotUrl: '',
    liveUrlPlaceholder: '#placeholder-eshop-demo',
    repoUrlPlaceholder: '#placeholder-eshop-repo',
  },
];

export const ABOUT_CONTENT = {
  kicker: 'ABOUT ME',
  draftBadge: 'DRAFT EDITORIAL COPY — REPLACE WITH PERSONAL STATEMENT',
  headlinePrefix: 'Good software and good teaching share the',
  headlineItalicAccent: 'same foundation:',
  headlineSuffix: 'clarity of thought.',
  paragraphs: [
    '[Draft Copy Placeholder] I work at the intersection of software development and technical instruction—building digital products across web and mobile while helping aspiring developers understand the principles behind the code.',
    '[Draft Copy Placeholder] Replace this paragraph with your personal story, how you began building software and teaching, and what drives your approach to engineering and mentorship.',
  ],
  posterQuoteLines: ['THINK.', 'CREATE.', 'BUILD.', 'WITH TECH.'],
  posterCaption: 'EDITORIAL STILL-LIFE PLACEHOLDER • REPLACE WITH PHOTO OR KEEP TYPOGRAPHIC ART FRAME',
  cvUrlPlaceholder: '#placeholder-cv-download',
};

export const FOCUS_PILLARS: FocusPillar[] = [
  {
    number: '01',
    title: 'Software Development',
    subtitle: 'WEB & MOBILE APPLICATIONS',
    iconKey: 'code',
  },
  {
    number: '02',
    title: 'Technical Instruction',
    subtitle: 'TEACHING & MENTORSHIP',
    iconKey: 'teaching',
  },
  {
    number: '03',
    title: 'Problem Solving',
    subtitle: 'ENGINEERING SOLUTIONS',
    iconKey: 'problem',
  },
  {
    number: '04',
    title: 'Product Creation',
    subtitle: 'FROM CONCEPT TO BUILD',
    iconKey: 'growth',
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'exp-1',
    track: 'ENGINEERING PRACTICE',
    rolePlaceholder: '[Placeholder Role — e.g., Software Developer]',
    organizationPlaceholder: '[Placeholder Organization / Independent Practice]',
    periodPlaceholder: '[YYYY — Present]',
    locationPlaceholder: '[Location / Remote]',
    summaryPlaceholder:
      '[Placeholder Summary] Replace with accurate details of your software development work, responsibilities, and the web or mobile products you developed.',
    highlightsPlaceholder: [
      '[Placeholder detail: Describe a key engineering responsibility or project milestone]',
      '[Placeholder detail: Describe technologies used such as React, React Native, or Supabase]',
    ],
  },
  {
    id: 'exp-2',
    track: 'TECHNICAL INSTRUCTION',
    rolePlaceholder: '[Placeholder Role — e.g., Software Development Instructor]',
    organizationPlaceholder: '[Placeholder Academy / Training Institution / Bootcamp]',
    periodPlaceholder: '[YYYY — Present]',
    locationPlaceholder: '[Location / Hybrid / Remote]',
    summaryPlaceholder:
      '[Placeholder Summary] Replace with accurate details of your teaching experience, curriculum topics covered, and how you mentor learners in software development.',
    highlightsPlaceholder: [
      '[Placeholder detail: Describe the programming languages, frameworks, or concepts taught]',
      '[Placeholder detail: Describe code reviews, live sessions, or student project guidance]',
    ],
  },
  {
    id: 'exp-3',
    track: 'ENGINEERING PRACTICE',
    rolePlaceholder: '[Placeholder Role — e.g., Frontend / Mobile Developer]',
    organizationPlaceholder: '[Placeholder Company or Client Project]',
    periodPlaceholder: '[YYYY — YYYY]',
    locationPlaceholder: '[Location]',
    summaryPlaceholder:
      '[Placeholder Summary] Replace with an earlier software development or instructional role, or remove if only two entries are needed.',
    highlightsPlaceholder: [
      '[Placeholder detail: Replace with verified project contributions and technical scope]',
    ],
  },
];

export const TOOLKIT_ROWS: ToolkitRow[] = [
  {
    number: '01',
    category: 'FRONTEND & WEB',
    subtitle: 'Core languages, UI libraries & styling tools',
    items: [
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML5 & CSS3',
      'Vite',
      'Motion',
    ],
  },
  {
    number: '02',
    category: 'MOBILE DEVELOPMENT',
    subtitle: 'Cross-platform mobile application ecosystem',
    items: ['React Native', 'Expo', 'Expo Router', 'Mobile UI Architecture'],
  },
  {
    number: '03',
    category: 'BACKEND & REAL-TIME',
    subtitle: 'Data persistence, authentication & live communication',
    items: ['Supabase', 'Socket.io', 'REST APIs', '[Add Additional Backend Tools]'],
  },
  {
    number: '04',
    category: 'INSTRUCTION & WORKFLOW',
    subtitle: 'Development workflow & educational practice',
    items: [
      'Git & GitHub',
      'Technical Instruction',
      'Code Review & Mentorship',
      'Problem Decomposition',
    ],
  },
];

export const CONTACT_INFO = {
  bannerKicker: 'HAVE A PROJECT OR TRAINING INQUIRY IN MIND?',
  bannerHeadlinePrefix: "Let's Build or Learn Something",
  bannerHeadlineItalic: 'Meaningful',
  bannerHeadlineSuffix: 'Together.',
  emailPlaceholder: 'hello@chiemenagodswill.com [Placeholder]',
  phonePlaceholder: '+000 000 000 0000 [Placeholder]',
  locationPlaceholder: '[City, Country — Placeholder]',
  socials: [
    { label: 'GitHub', handlePlaceholder: 'github.com/your-username [Placeholder]', href: '#placeholder-github' },
    { label: 'LinkedIn', handlePlaceholder: 'linkedin.com/in/your-profile [Placeholder]', href: '#placeholder-linkedin' },
    { label: 'X / Twitter', handlePlaceholder: 'x.com/your-handle [Placeholder]', href: '#placeholder-twitter' },
  ],
};

