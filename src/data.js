import itsRevTime from '@/assets/itsrevtime.png';
import NIH from '@/assets/NIH.png';
import graphVis from '@/assets/graphvis.png';
import recipist from '@/assets/Recipist.png';
import RecipeAi from '@/assets/RecipeAi.png';
import MovieRateRrr from '@/assets/MovieRateRrr.png';

export const profile = {
  name: 'Riley Morris',
  role: 'Software Engineer',
  email: 'riley.morris@alumni.utoronto.ca',
  linkedin: 'https://www.linkedin.com/in/riley1morris',
  github: 'https://github.com/riley-collab',
  careerStart: 2022,
};

export const jobs = [
  {
    title: 'Software Engineer',
    company: 'Avanade',
    context: 'Microsoft Fabric UX',
    dates: 'May 2025 – Present',
    bullets: [
      'Shipped 5 new React features to the Microsoft Fabric UX project, reaching 19,000+ users, and resolved complex defects.',
      'Drove features end to end with designers, PMs and external dev teams, managing dependencies across 6 teams.',
      'Built an AI agent with the GitHub Copilot coding agent to autonomously resolve low-effort incidents.',
      'Embedded GitHub Copilot into developer and non-developer workflows, automating 3 weekly tests and saving ~4 hours of work per week.',
      'Owned on-call duties across feature switch deployments, incident triage and production error log monitoring.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Flock',
    context: 'Contract',
    dates: 'Jan 2025 – Apr 2025',
    bullets: [
      'Developed a referral management platform using React, Tailwind and ShadCN, with a customizable and embeddable referral component.',
      'Built and secured scalable backend APIs with NestJS and Supabase, enabling real-time analytics, third-party integrations and automated reward payouts, tested with Jest and Playwright.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Sanofi',
    context: 'AI Center of Excellence',
    dates: 'Oct 2022 – Dec 2024',
    bullets: [
      'Designed and built a GenAI application to generate Clinical Study Reports, expediting drug-to-market timelines by 90%, built with React and NodeJS.',
      'Led a refactor of front-end codebases onto an in-house component library, reducing development time by 20% and improving maintainability.',
      'Developed a full stack feature (React, Python, FastAPI) enabling data scientists and ML engineers to rapidly develop and deploy AI models and applications at scale.',
      'Built an internal search application for 10,000+ employees across structured and unstructured data, and improved search recall by 15% with an Elasticsearch DisMax query without relevancy loss.',
    ],
  },
];

export const earlier = [
  {
    title: 'Software Engineer Intern',
    company: 'Nference',
    dates: 'Jan 2022 – Apr 2022',
    summary:
      'React search interface with NLP to identify medications in biomedical papers, plus a trie-based structure for sub-millisecond queries over 1M+ entries.',
  },
  {
    title: 'Market Analyst Intern',
    company: 'TMX Group',
    dates: 'May 2021 – Aug 2021',
    summary:
      'Data-driven insights to optimize client interactions for Equity and Derivatives trading products.',
  },
  {
    title: 'Research Analyst Intern',
    company: 'Virtu Financial',
    dates: 'May 2019 – May 2020',
    summary:
      'Analyzed trading data for 90 institutional clients to identify execution trends for the Global Transaction Cost Analysis team.',
  },
];

export const education = {
  degree: 'Bachelor of Applied Science, Electrical & Computer Engineering',
  school: 'University of Toronto',
  date: 'June 2022',
  details: 'Minor in Business, with Leadership & Communications certificates.',
};

export const skills = [
  {
    group: 'Frontend',
    items: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Material-UI',
      'Redux Toolkit',
      'Jotai',
      'React Query',
      'Shadcn',
      'HTML & CSS',
    ],
  },
  {
    group: 'Backend',
    items: [
      'Node.js',
      'NestJS',
      'Python',
      'FastAPI',
      'Prisma',
      'Supabase',
      'Elasticsearch',
      'REST',
      'SQL',
    ],
  },
  {
    group: 'Cloud & Testing',
    items: [
      'AWS',
      'Terraform',
      'Kubernetes',
      'Snowflake',
      'Jest',
      'Playwright',
    ],
  },
  {
    group: 'AI & Developer Tooling',
    items: ['GitHub Copilot', 'Claude', 'Cursor', 'MCP', 'Agentic workflows'],
  },
];

export const featuredProjects = [
  {
    title: 'itsRevTime',
    kind: 'Newsletter · Live product',
    image: itsRevTime,
    imageAlt:
      'Landing page of itsRevTime, a free weekly car news newsletter, showing the headline "The car news that matters. In five minutes." and a sample issue.',
    description:
      'A free weekly car-industry newsletter, built end to end. A pipeline pulls stories from RSS feeds, Google News and Reddit, dedupes and ranks them, and has Claude draft the issue as email-ready HTML. A Next.js landing page handles double opt-in signups, and a scheduled GitHub Action drafts each week’s issue for a human to review before anything is sent.',
    highlights: [
      'Claude only references stories by id, so links always come from fetched data and can’t be invented.',
      'Sending is deliberately two-step: the automation drafts a broadcast in Resend and emails a preview; a person approves it.',
    ],
    tags: [
      'TypeScript',
      'Next.js',
      'Claude API',
      'Resend',
      'GitHub Actions',
      'Vercel',
    ],
    links: [{ label: 'Visit itsrevtime.com', href: 'https://itsrevtime.com' }],
  },
  {
    title: 'AI Compliance Platform',
    kind: 'AI compliance platform · Contributor',
    description:
      'An AI-assisted platform that takes Canadian and US food & beverage brands from recipe to a compliant, print-ready label: nutrition facts, label design and automated regulatory findings reviewed by a human. I built the pay-as-you-go billing and the team review workflow on top of the compliance engine.',
    highlights: [
      'Stripe Checkout credit packs priced in CAD, with signed webhooks proxied to a private API and checks that refuse to sell or credit a purchase in the wrong currency.',
      'Compliance review: team comments on findings, a “Pass as is” decision, and label sign-off that automatically clears whenever the label changes.',
    ],
    tags: [
      'TypeScript',
      'NestJS',
      'React Router',
      'Supabase',
      'Stripe',
      'Nx',
      'Claude & Gemini',
    ],
    links: [],
  },
];

export const projects = [
  {
    title: 'RecipeAi',
    image: RecipeAi,
    description: 'AI recipe generator built with React, TypeScript and Vite.',
    github: 'https://github.com/riley-collab/ai-recipe-generator',
  },
  {
    title: 'NIH Chest X-ray Classifier',
    image: NIH,
    description:
      'Deep learning project that classifies chest X-rays from the NIH dataset.',
    github: 'https://github.com/riley-collab/aps360project',
  },
  {
    title: 'Relationship Library',
    image: graphVis,
    description:
      'Vanilla JS library for modelling relationships between nodes, visualized with the Canvas API.',
    github: null,
  },
  {
    title: 'Recipist',
    image: recipist,
    description: 'Full-stack recipe app, deployed on Heroku.',
    github: null,
  },
  {
    title: 'MovieRateRrr',
    image: MovieRateRrr,
    description: 'React movie rating app, backed by a NestJS server.',
    github: 'https://github.com/SanofiRileyMorris/MovieRatingReactApp',
  },
];
