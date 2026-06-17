export const site = {
  name: 'Luis Avalos',
  role: 'Software Engineer',
  // NOTE: resume lists avaloseluis2@gmail.com as the public contact. Change in one place if you prefer another.
  email: 'avaloseluis2@gmail.com',
  location: 'SF Bay Area',
  github: 'https://github.com/Luis-avalos1',
  githubHandle: 'Luis-avalos1',
  linkedin: 'https://linkedin.com/in/luis-enrique-avalos',
  resume: '/luis-avalos-resume.pdf',
  available: true,
};

export const tagline =
  'I build AI agents, full-stack platforms, and graphics systems — from a Claude bookkeeping agent to a real-time OpenGL terrain renderer.';

export const marqueeWords = [
  'AI AGENTS',
  'COMPUTER GRAPHICS',
  'FULL-STACK',
  'TYPESCRIPT',
  'OPENGL / GLSL',
  'DISTRIBUTED SYSTEMS',
  'DEVELOPER TOOLING',
  'ACCESSIBILITY',
  'MACHINE LEARNING',
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['TypeScript', 'C++', 'Python', 'Java', 'JavaScript', 'Go', 'SQL', 'PHP', 'MATLAB'],
  },
  {
    label: 'Web & AI',
    items: ['React', 'Next.js', 'Node.js', 'tRPC', 'Express', 'Django', 'TailwindCSS', 'Anthropic Claude API', 'GraphQL'],
  },
  {
    label: 'Graphics & ML',
    items: ['OpenGL', 'GLSL', 'three.js', 'GDAL', 'OpenCV', 'PyTorch', 'TensorFlow', 'Eigen', 'NumPy', 'Maya API'],
  },
  {
    label: 'Data & Cloud',
    items: ['PostgreSQL', 'Firebase', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Kubernetes', 'GitHub Actions'],
  },
];

export interface Job {
  role: string;
  org: string;
  period: string;
  location: string;
  points: string[];
}

export const experience: Job[] = [
  {
    role: 'Software Engineer',
    org: 'Avalos Drywall LLC',
    period: '2019 — Present',
    location: 'Remote · Part-time',
    points: [
      'Built and operate PaperTrail, the platform that handles all of the company’s invoicing, payment tracking, and revenue analytics — replacing a manual paper workflow.',
      'Architected a real-time React 19 + TypeScript data layer on Firebase with isolated dev/production environments and auto-deploys.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    org: 'Outlier.AI',
    period: 'May — Aug 2024',
    location: 'Remote',
    points: [
      'Improved model performance ~15% by refactoring and enhancing ML algorithms in AI training pipelines.',
      'Built production API integrations on Google and YouTube APIs with robust error handling, rate limiting, and auth.',
    ],
  },
];

export const education = {
  school: 'Kennesaw State University',
  degree: 'B.S. Computer Science',
  period: 'Dec 2024',
  location: 'Kennesaw, GA',
};
