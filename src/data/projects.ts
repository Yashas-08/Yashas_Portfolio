export interface ProjectFeature {
  text: string;
}

export interface Project {
  id: string;
  projectNumber: string;
  title: string;
  category: string;
  description: string;
  isFeatured?: boolean;
  featuredBadge?: string;
  technologies: string[];
  features?: ProjectFeature[];
  imageSrc: string;
  imageAlt: string;
  liveDemoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'eliteroutes',
    projectNumber: '01',
    title: 'EliteRoutes',
    category: 'AI Travel Planner',
    isFeatured: true,
    featuredBadge: 'Featured Project',
    description:
      'An AI-powered travel planning platform that creates personalized itineraries, budget plans, and travel recommendations using real-time data and AI.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'OpenRouter API'],
    features: [
      { text: 'Personalized itineraries' },
      { text: 'Smart budget planning' },
      { text: 'Destination insights' },
      { text: 'Clean and modern UI' },
    ],
    imageSrc: '/assets/projects/eliteroutes.png',
    imageAlt: 'EliteRoutes - AI Travel Planner Interface Mockup',
    liveDemoUrl: '', // Deployment URL when actively deployed
    githubUrl: 'https://github.com/Yashas-08/EliteRoutes',
  },
  {
    id: 'reppulse',
    projectNumber: '02',
    title: 'RepPulse',
    category: 'Fitness / Gym Website',
    isFeatured: false,
    description:
      'A modern fitness platform to explore workout programs, track progress, and stay motivated with a clean and minimal interface.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    imageSrc: '/assets/projects/reppulse.png',
    imageAlt: 'RepPulse - Fitness and Gym Website Mockup',
    liveDemoUrl: 'https://rep-pulse-nu.vercel.app',
    githubUrl: 'https://github.com/Yashas-08/RepPulse',
  },
  {
    id: 'hostelflow',
    projectNumber: '03',
    title: 'Hostel Flow',
    category: 'Hostel Management Platform',
    isFeatured: false,
    description:
      'A full-stack hostel management system with meal booking, leave management, complaints, notices, and an admin dashboard for students and wardens.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    imageSrc: '/assets/projects/hostelflow.png',
    imageAlt: 'Hostel Flow - Hostel Management Platform Mockup',
    liveDemoUrl: 'https://hostel-flow-client-bice.vercel.app',
    githubUrl: 'https://github.com/Yashas-08/Hostel-Flow',
  },
];
