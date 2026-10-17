import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const ReactIcon: React.FC<IconProps> = ({ size = 32, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 115.3 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M57.65 65.5C66.21 65.5 73.15 58.56 73.15 50C73.15 41.44 66.21 34.5 57.65 34.5C49.09 34.5 42.15 41.44 42.15 50C42.15 58.56 49.09 65.5 57.65 65.5Z"
      fill="#61DAFB"
    />
    <path
      d="M57.65 80C75.87 80 89.65 69.45 89.65 50C89.65 30.55 75.87 20 57.65 20C39.43 20 25.65 30.55 25.65 50C25.65 69.45 39.43 80 57.65 80Z"
      stroke="#61DAFB"
      strokeWidth="4.2"
    />
    <path
      d="M37.85 68.6C46.96 84.37 59.88 90.7 76.73 81C93.57 71.3 97.43 54.7 88.32 38.93C79.21 23.16 66.29 16.83 49.44 26.53C32.6 36.23 28.74 52.83 37.85 68.6Z"
      stroke="#61DAFB"
      strokeWidth="4.2"
    />
    <path
      d="M37.85 31.4C28.74 47.17 32.6 63.77 49.44 73.47C66.29 83.17 79.21 76.84 88.32 61.07C97.43 45.3 93.57 28.7 76.73 19C59.88 9.3 46.96 15.63 37.85 31.4Z"
      stroke="#61DAFB"
      strokeWidth="4.2"
    />
  </svg>
);

export const JavaScriptIcon: React.FC<IconProps> = ({ size = 32, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect width="100" height="100" rx="14" fill="#F7DF1E" />
    <path
      d="M28 73C30.2 76.5 34.1 78.4 39 78.4C46.2 78.4 50.8 74.5 50.8 65.5V36H41.5V65.2C41.5 69 39.2 70.8 35.8 70.8C33 70.8 30.6 69.4 29 67L28 73ZM59.6 72.8C62.8 77.2 67.8 78.5 73.6 78.5C82.8 78.5 89.2 73.5 89.2 65.2C89.2 57.6 84.4 53.6 76.8 50.5C70.6 48 68.6 46.2 68.6 42.8C68.6 39.8 71.2 37.8 75.4 37.8C79.2 37.8 82.2 39.5 84.8 43.5L91.5 39.2C87.8 33.2 82.4 30.8 75.4 30.8C66.8 30.8 61 35.8 61 43.2C61 50.5 65.5 54.2 73.2 57.4C79.8 60.1 81.6 62.4 81.6 65.8C81.6 69.2 78.4 71.5 73.5 71.5C68.4 71.5 64.6 68.8 62.2 64L59.6 72.8Z"
      fill="#000000"
    />
  </svg>
);

export const TypeScriptIcon: React.FC<IconProps> = ({ size = 32, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect width="100" height="100" rx="14" fill="#3178C6" />
    <path
      d="M22 43.8H34.5V78H43.2V43.8H55.7V36H22V43.8ZM61.8 72.5C65 76.8 70 78.2 75.8 78.2C85 78.2 91.4 73.2 91.4 64.9C91.4 57.3 86.6 53.3 79 50.2C72.8 47.7 70.8 45.9 70.8 42.5C70.8 39.5 73.4 37.5 77.6 37.5C81.4 37.5 84.4 39.2 87 43.2L93.7 38.9C90 32.9 84.6 30.5 77.6 30.5C69 30.5 63.2 35.5 63.2 42.9C63.2 50.2 67.7 53.9 75.4 57.1C82 59.8 83.8 62.1 83.8 65.5C83.8 68.9 80.6 71.2 75.7 71.2C70.6 71.2 66.8 68.5 64.4 63.7L61.8 72.5Z"
      fill="#FFFFFF"
    />
  </svg>
);

export const TailwindIcon: React.FC<IconProps> = ({ size = 32, className }) => (
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
      d="M51.8 28.5C47.2 37.8 42.6 42.5 38 42.5C31.1 42.5 28.8 37.2 21.9 37.2C15 37.2 12.7 42.5 15 48.7C19.6 39.4 24.2 34.7 28.8 34.7C35.7 34.7 38 40 44.9 40C51.8 40 54.1 34.7 51.8 28.5ZM78.2 48.5C73.6 57.8 69 62.5 64.4 62.5C57.5 62.5 55.2 57.2 48.3 57.2C41.4 57.2 39.1 62.5 41.4 68.7C46 59.4 50.6 54.7 55.2 54.7C62.1 54.7 64.4 60 71.3 60C78.2 60 80.5 54.7 78.2 48.5Z"
      fill="#38BDF8"
    />
  </svg>
);

export const NodeIcon: React.FC<IconProps> = ({ size = 32, className }) => (
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
      d="M50 14L81.18 32V68L50 86L18.82 68V32L50 14Z"
      fill="#5FA04E"
    />
    <path
      d="M50 20L75.98 35V65L50 80L24.02 65V35L50 20Z"
      fill="#222222"
    />
    <path
      d="M50 31L67 41V61L50 71L33 61V41L50 31Z"
      fill="#5FA04E"
    />
  </svg>
);

export const PythonIcon: React.FC<IconProps> = ({ size = 32, className }) => (
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
      d="M49.4 15C32.8 15 34 22.2 34 22.2L34.1 29.6H49.7V31.9H28C20.6 31.9 15 36.5 15 45.4C15 54.3 19.8 56.4 25.1 56.4H30.1V50.8C30.1 44.4 35.6 38.9 42 38.9H57.4C62.5 38.9 66.8 34.6 66.8 29.5V22.2C66.8 16.5 61.2 15 49.4 15ZM41.4 20C43.5 20 45.2 21.7 45.2 23.8C45.2 25.9 43.5 27.6 41.4 27.6C39.3 27.6 37.6 25.9 37.6 23.8C37.6 21.7 39.3 20 41.4 20Z"
      fill="#3776AB"
    />
    <path
      d="M50.6 85C67.2 85 66 77.8 66 77.8L65.9 70.4H50.3V68.1H72C79.4 68.1 85 63.5 85 54.6C85 45.7 80.2 43.6 74.9 43.6H69.9V49.2C69.9 55.6 64.4 61.1 58 61.1H42.6C37.5 61.1 33.2 65.4 33.2 70.5V77.8C33.2 83.5 38.8 85 50.6 85ZM58.6 80C56.5 80 54.8 78.3 54.8 76.2C54.8 74.1 56.5 72.4 58.6 72.4C60.7 72.4 62.4 74.1 62.4 76.2C62.4 78.3 60.7 80 58.6 80Z"
      fill="#FFD438"
    />
  </svg>
);

export const JavaIcon: React.FC<IconProps> = ({ size = 32, className }) => (
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
      d="M44.5 15C44.5 15 50.5 21 44.5 29C39.5 35.5 45.5 42 45.5 42C45.5 42 37.5 35.5 42.5 28C47.5 21 44.5 15 44.5 15Z"
      fill="#5382A1"
    />
    <path
      d="M55.5 18C55.5 18 61.5 23 57.5 31C53.5 38 58.5 44 58.5 44C58.5 44 51.5 37.5 54.5 30C57.5 23 55.5 18 55.5 18Z"
      fill="#5382A1"
    />
    <path
      d="M24 64C24 64 21 72 48 72C76 72 73 64 73 64H24Z"
      fill="#E76F00"
    />
    <path
      d="M30 48C30 48 28 58 48 58C68 58 66 48 66 48H30Z"
      fill="#EA2D2E"
    />
    <path
      d="M63 50C69 50 74 53 74 57C74 61 68 63 64 63"
      stroke="#EA2D2E"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M20 78C35 83 65 83 80 78"
      stroke="#5382A1"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const PostgresIcon: React.FC<IconProps> = ({ size = 32, className }) => (
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
      d="M49.8 15C36 15 27 24.5 27 38.5C27 49 33 55.5 37.5 58.5L36 67C36 67 33.5 69.5 28 68.5C22.5 67.5 21 62.5 21 62.5C21 62.5 24 60 25.5 55C27 50 25.5 45 25.5 45C25.5 45 21 47.5 19 55C17.5 60.5 18.5 67.5 24 72C29.5 76.5 36.5 74.5 39 73L41.5 83.5L48 85V71C50 71.5 52 71.5 54 71.5C64.5 71.5 74.5 66.5 78 57.5C81.5 48.5 80.5 36 73 26.5C66.5 18.5 58 15 49.8 15Z"
      fill="#336791"
    />
    <path
      d="M51 24C41 24 35 30 35 39C35 46 39 51 43 53.5L44 65C48 66 52 66 55 64.5L55 52.5C61 51 68 46.5 70 39C72 31.5 69 26 62 24.5C58 24 54 24 51 24Z"
      fill="#FFFFFF"
      opacity="0.3"
    />
    <circle cx="43" cy="36" r="3.5" fill="#FFFFFF" />
  </svg>
);

export const SupabaseIcon: React.FC<IconProps> = ({ size = 32, className }) => (
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
      d="M52.3 84.8C50.2 87.5 45.6 86.2 45.3 82.8L42.2 47.8H21.2C17.4 47.8 15.3 43.4 17.8 40.5L47.7 15.2C49.8 12.5 54.4 13.8 54.7 17.2L57.8 52.2H78.8C82.6 52.2 84.7 56.6 82.2 59.5L52.3 84.8Z"
      fill="#3ECF8E"
    />
  </svg>
);

export const GitIcon: React.FC<IconProps> = ({ size = 32, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <g transform="rotate(45 50 50)">
      <rect x="22" y="22" width="56" height="56" rx="12" fill="#F05032" />
      <g transform="rotate(-45 50 50)">
        <path
          d="M38 35V65M62 35L48 49M62 65V55"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="38" cy="35" r="5.5" fill="#FFFFFF" />
        <circle cx="38" cy="65" r="5.5" fill="#FFFFFF" />
        <circle cx="62" cy="35" r="5.5" fill="#FFFFFF" />
      </g>
    </g>
  </svg>
);
