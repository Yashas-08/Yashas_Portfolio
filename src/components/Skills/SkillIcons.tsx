import React from 'react';
import {
  ReactIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  TailwindIcon,
  NodeIcon,
  PythonIcon,
  JavaIcon,
  PostgresIcon,
  SupabaseIcon,
  GitIcon,
} from '../About/TechIcons';

export {
  ReactIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  TailwindIcon,
  NodeIcon,
  PythonIcon,
  JavaIcon,
  PostgresIcon,
  SupabaseIcon,
  GitIcon,
};

interface IconProps {
  className?: string;
  size?: number;
}

// Docker official whale with containers
export const DockerIcon: React.FC<IconProps> = ({ size = 32, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Containers */}
    <rect x="22" y="38" width="9" height="9" rx="1.5" fill="#2496ED" />
    <rect x="34" y="38" width="9" height="9" rx="1.5" fill="#2496ED" />
    <rect x="46" y="38" width="9" height="9" rx="1.5" fill="#2496ED" />
    <rect x="58" y="38" width="9" height="9" rx="1.5" fill="#2496ED" />
    <rect x="34" y="26" width="9" height="9" rx="1.5" fill="#2496ED" />
    <rect x="46" y="26" width="9" height="9" rx="1.5" fill="#2496ED" />
    <rect x="58" y="26" width="9" height="9" rx="1.5" fill="#2496ED" />
    <rect x="46" y="14" width="9" height="9" rx="1.5" fill="#2496ED" />
    {/* Whale Body */}
    <path
      d="M92 48.5C90.2 46.8 86.8 46.2 83.2 47.1C81.8 44.5 79.5 42.8 76.5 42C74.6 41.5 71.8 41.6 70 42.1V50H12C11.5 54.5 12.8 61.2 16.5 66.8C21.2 74 29.5 79.2 41.5 79.8C65.5 81 79.8 66.5 83.5 56.5C87.8 57.5 93.2 55.8 95 51.5C94.5 50.2 93.5 49.2 92 48.5Z"
      fill="#2496ED"
    />
    <circle cx="25" cy="58" r="2.5" fill="#FFFFFF" />
  </svg>
);

// VS Code official ribbon logo
export const VSCodeIcon: React.FC<IconProps> = ({ size = 32, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M74.8 11.2C72.5 9.8 69.5 10.2 67.8 12.2L28.2 45.8L12.5 33.6C10.5 32 7.5 32.5 6 34.8L2.2 40.8C0.8 43 1.2 46 3.5 47.5L20.8 60.5L3.5 73.5C1.2 75 0.8 78 2.2 80.2L6 86.2C7.5 88.5 10.5 89 12.5 87.4L28.2 75.2L67.8 108.8C69.5 110.8 72.5 111.2 74.8 109.8L93.5 98.5C96 97 97.5 94.5 97.5 91.5V29.5C97.5 26.5 96 24 93.5 22.5L74.8 11.2Z"
      fill="#007ACC"
      transform="scale(0.82) translate(11, 4)"
    />
    <path
      d="M74.8 11.2L28.2 47.8L44.5 60.5L74.8 37.2V11.2Z"
      fill="#0065A9"
      transform="scale(0.82) translate(11, 4)"
    />
    <path
      d="M74.8 109.8L28.2 73.2L44.5 60.5L74.8 83.8V109.8Z"
      fill="#0065A9"
      transform="scale(0.82) translate(11, 4)"
    />
    <path
      d="M28.2 47.8L74.8 83.8L93.5 73V48L74.8 37.2L28.2 73.2"
      fill="#1F9CF0"
      transform="scale(0.82) translate(11, 4)"
    />
  </svg>
);

// Vercel triangle in black circle
export const VercelIcon: React.FC<IconProps> = ({ size = 32, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="46" fill="#0D0303" stroke="#D52B27" strokeWidth="2.5" strokeOpacity="0.4" />
    <path d="M50 24L77 71H23L50 24Z" fill="#FFFFFF" />
  </svg>
);

// Render logo in black circle
export const RenderIcon: React.FC<IconProps> = ({ size = 32, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="46" fill="#0D0303" stroke="#D52B27" strokeWidth="2.5" strokeOpacity="0.4" />
    {/* Stylized Render 'R' / cloud frame */}
    <path
      d="M32 30H54C62.8 30 70 37.2 70 46V70H58V46C58 43.8 56.2 42 54 42H32V30Z"
      fill="#FFFFFF"
    />
    <rect x="32" y="44" width="12" height="26" rx="2" fill="#FFFFFF" />
  </svg>
);

// GitHub Octocat in dark circle
export const GithubCircleIcon: React.FC<IconProps> = ({ size = 32, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="46" fill="#0D0303" stroke="#D52B27" strokeWidth="2.5" strokeOpacity="0.4" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50 20C33.4 20 20 33.4 20 50C20 63.3 28.6 74.5 40.6 78.5C42.1 78.8 42.6 77.8 42.6 77C42.6 76.3 42.6 73.9 42.6 70.6C34.2 72.4 32.5 66.6 32.5 66.6C31.1 63.1 29.1 62.2 29.1 62.2C26.4 60.3 29.3 60.4 29.3 60.4C32.3 60.6 33.9 63.5 33.9 63.5C36.6 68.1 40.9 66.8 42.6 66C42.9 64 43.7 62.7 44.6 61.9C37.9 61.1 30.9 58.5 30.9 46.9C30.9 43.6 32.1 40.9 34 38.8C33.7 38 32.7 34.9 34.3 30.8C34.3 30.8 36.8 30 42.5 33.9C44.9 33.2 47.5 32.9 50 32.9C52.5 32.9 55.1 33.2 57.5 33.9C63.2 30 65.7 30.8 65.7 30.8C67.3 34.9 66.3 38 66 38.8C67.9 40.9 69.1 43.6 69.1 46.9C69.1 58.6 62.1 61.1 55.3 61.9C56.4 62.9 57.4 64.7 57.4 67.6C57.4 71.8 57.4 75.1 57.4 77C57.4 77.8 57.9 78.8 59.4 78.5C71.4 74.5 80 63.3 80 50C80 33.4 66.6 20 50 20Z"
      fill="#FFFFFF"
    />
  </svg>
);

// Prisma prism in dark circle
export const PrismaIcon: React.FC<IconProps> = ({ size = 32, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="46" fill="#0D0303" stroke="#D52B27" strokeWidth="2.5" strokeOpacity="0.4" />
    <path
      d="M74.8 69.4L54.2 21.8C52.6 18.2 47.4 18.2 45.8 21.8L25.2 69.4C23.8 72.8 26.2 76.5 30 76.5H70C73.8 76.5 76.2 72.8 74.8 69.4ZM50 28.5L66.8 68.5H50V28.5Z"
      fill="#FFFFFF"
    />
  </svg>
);

// Postman logo in orange/dark circle
export const PostmanIcon: React.FC<IconProps> = ({ size = 32, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="46" fill="#FF6C37" />
    {/* Postman astronaut/wings silhouette */}
    <path
      d="M68 44C68 36.3 61.7 30 54 30C49.5 30 45.5 32.2 43 35.5L34 26L31 29L39 37.5C38.4 39.5 38 41.7 38 44C38 47.5 39.2 50.7 41.2 53.2L28 66L31.5 69.5L44.8 56.2C47.3 58.2 50.5 59.4 54 59.4C61.7 59.4 68 53.1 68 45.4V44ZM54 54C48.5 54 44 49.5 44 44C44 38.5 48.5 34 54 34C59.5 34 64 38.5 64 44C64 49.5 59.5 54 54 54Z"
      fill="#FFFFFF"
    />
    <path
      d="M48 42L56 46L48 50V42Z"
      fill="#FF6C37"
    />
  </svg>
);

// Figma multi-colored shapes
export const FigmaIcon: React.FC<IconProps> = ({ size = 32, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="46" fill="#0D0303" stroke="#D52B27" strokeWidth="2.5" strokeOpacity="0.4" />
    <g transform="translate(18, 14) scale(0.65)">
      {/* Top Left */}
      <path d="M25 0H50V25H25C11.1929 0 0 11.1929 0 25C0 11.1929 11.1929 0 25 0Z" fill="#F24E1E" />
      {/* Top Right */}
      <path d="M50 0H75C88.8071 0 100 11.1929 100 25C100 38.8071 88.8071 50 75 50H50V0Z" fill="#FF7262" />
      {/* Middle Left */}
      <path d="M25 50H50V75H25C11.1929 75 0 63.8071 0 50C0 36.1929 11.1929 25 25 25Z" fill="#A259FF" />
      {/* Middle Right */}
      <path d="M75 50C88.8071 50 100 61.1929 100 75C100 88.8071 88.8071 100 75 100C61.1929 100 50 88.8071 50 75V50H75Z" fill="#1ABCFE" />
      {/* Bottom Left */}
      <path d="M25 100C11.1929 100 0 88.8071 0 75C0 61.1929 11.1929 50 25 50H50V75C50 88.8071 38.8071 100 25 100Z" fill="#0ACF83" />
    </g>
  </svg>
);

// Notion cube in dark circle
export const NotionIcon: React.FC<IconProps> = ({ size = 32, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="46" fill="#0D0303" stroke="#D52B27" strokeWidth="2.5" strokeOpacity="0.4" />
    <rect x="26" y="24" width="48" height="52" rx="8" fill="#FFFFFF" />
    <path
      d="M36 34H43.5L58 55V34H65V66H57.5L43 45V66H36V34Z"
      fill="#000000"
    />
  </svg>
);

// LinkedIn official logo
export const LinkedInIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

// Instagram official glyph
export const InstagramIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
