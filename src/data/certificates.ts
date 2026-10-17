export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: number | string;
  url?: string;
}

/**
 * Public certificate data for K.A. Yashas.
 *
 * To add a new certificate:
 * 1. Add a new object to this array with a unique id, title, issuer, year, and optional url.
 * 2. If a valid URL is provided, a "View Certificate" link will automatically appear.
 * 3. If no certificates are present, an empty state will be displayed gracefully.
 */
export const certificates: Certificate[] = [
  {
    id: 'full-stack-web-dev',
    title: 'Full Stack Web Development',
    issuer: 'Kalvium',
    year: 2024,
    url: '',
  },
  {
    id: 'intro-machine-learning',
    title: 'Introduction to Machine Learning',
    issuer: 'Coursera',
    year: 2024,
    url: '',
  },
  {
    id: 'gen-ai-fundamentals',
    title: 'Generative AI Fundamentals',
    issuer: 'Google (via Coursera)',
    year: 2025,
    url: '',
  },
];
