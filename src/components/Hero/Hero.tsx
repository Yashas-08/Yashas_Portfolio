import React, { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { profileConfig } from '../../data/profile';
import './Hero.css';

interface HeroProps {
  onViewWorkClick: () => void;
  onConnectClick?: () => void;
  onScrollDownClick?: () => void;
  portraitSrc?: string;
}

export const Hero: React.FC<HeroProps> = ({
  onViewWorkClick,
  onConnectClick,
  portraitSrc: propPortraitSrc,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize with prop, or saved browser preview override, or default from profileConfig
  const [portraitImg, setPortraitImg] = useState<string>(() => {
    if (propPortraitSrc) return propPortraitSrc;
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_custom_hero_portrait');
      if (saved) return saved;
    }
    return profileConfig.heroPortraitImage;
  });

  const handlePortraitDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setPortraitImg(reader.result);
          try {
            localStorage.setItem('portfolio_custom_hero_portrait', reader.result);
          } catch {
            // graceful fallback if localStorage quota exceeded
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="hero-section-container">
      {/* Background ambient lighting */}
      <div className="hero-ambient-lights" aria-hidden="true" />

      <div className="hero-editorial-grid">
        {/* Left Column: Identity, Typography, Bio & Direct Actions */}
        <div className="hero-info-column">
          {/* Role Kicker */}
          <div className="hero-role-kicker" aria-label={`Role: ${profileConfig.role}`}>
            <span className="kicker-word">AI &amp; ML STUDENT</span>
            <span className="kicker-dot" aria-hidden="true">·</span>
            <span className="kicker-word">DEVELOPER</span>
            <span className="kicker-dot" aria-hidden="true">·</span>
            <span className="kicker-word">PROBLEM SOLVER</span>
          </div>

          {/* Oversized Condensed Display Headline */}
          <h1 className="hero-display-headline">
            <span className="headline-text-ivory">BUILDING</span>
            <span className="headline-text-ivory">IDEAS THAT</span>
            <span className="headline-text-crimson">MATTER</span>
          </h1>

          {/* Concise, Authentic Intro Bio */}
          <p className="hero-intro-bio">
            <strong className="bio-lead">I&apos;m Yashas,</strong> a B.Tech CSE (AI &amp; ML) student who loves
            building real-world projects, exploring new technologies, and turning ideas into meaningful solutions.
          </p>

          {/* Action Row: Primary Red CTA, Secondary Link & Verified Socials */}
          <div className="hero-actions-container">
            <div className="hero-cta-group">
              <button
                type="button"
                className="hero-primary-action-btn"
                onClick={onViewWorkClick}
                aria-label="View My Work"
              >
                <span>View My Work</span>
                <ArrowRight size={18} strokeWidth={2.4} className="hero-btn-arrow" />
              </button>

              {onConnectClick && (
                <button
                  type="button"
                  className="hero-secondary-action-btn"
                  onClick={onConnectClick}
                  aria-label="Let's Connect"
                >
                  <span>Let&apos;s Connect</span>
                  <ArrowRight size={16} strokeWidth={2.2} className="hero-link-arrow" />
                </button>
              )}
            </div>

            {/* Verified Social Media Links */}
            <div className="hero-social-strip" aria-label="Verified Social Media Profiles">
              {/* GitHub */}
              <a
                href={profileConfig.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link-btn"
                aria-label="GitHub Profile (Yashas-08)"
                title="GitHub Profile"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={profileConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link-btn"
                aria-label="LinkedIn Profile (K.A. Yashas)"
                title="LinkedIn Profile"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={profileConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link-btn"
                aria-label="Instagram Profile (yashas____08)"
                title="Instagram Profile"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Artwork Stage (Moon, Mountains, Portrait, Handwritten Script) */}
        <div className="hero-artwork-column">
          <div className="hero-artwork-stage">
            {/* 1. Luminous Crimson Red Moon */}
            <div className="stage-red-moon" aria-hidden="true" />

            {/* 2. Layered Mountain Silhouettes with Crimson Atmospheric Rim Light */}
            <div className="stage-mountain-silhouette" aria-hidden="true">
              <svg
                viewBox="0 0 800 500"
                className="mountain-svg"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="backMountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4f0a07" />
                    <stop offset="50%" stopColor="#300504" />
                    <stop offset="100%" stopColor="#1a0202" />
                  </linearGradient>
                  <linearGradient id="frontMountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2c0403" />
                    <stop offset="50%" stopColor="#180202" />
                    <stop offset="100%" stopColor="#100101" />
                  </linearGradient>
                  <linearGradient id="mountainMistGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#d52b27" stopOpacity="0" />
                    <stop offset="50%" stopColor="#a51f1b" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#1f0303" stopOpacity="0.95" />
                  </linearGradient>
                </defs>

                {/* Back Mountain Ridge */}
                <path
                  d="M0,370 L85,280 L175,335 L300,195 L415,290 L525,160 L645,255 L735,185 L800,235 L800,500 L0,500 Z"
                  fill="url(#backMountainGrad)"
                  stroke="rgba(229, 46, 42, 0.45)"
                  strokeWidth="1.5"
                />

                {/* Front Jagged Mountain Silhouette */}
                <path
                  d="M0,425 L105,355 L225,405 L350,295 L480,375 L605,265 L725,345 L800,305 L800,500 L0,500 Z"
                  fill="url(#frontMountainGrad)"
                  stroke="rgba(229, 46, 42, 0.28)"
                  strokeWidth="1.2"
                />

                {/* Bottom atmospheric mist */}
                <rect x="0" y="270" width="800" height="230" fill="url(#mountainMistGrad)" />
              </svg>
            </div>

            {/* 3. Yashas's Cinematic Portrait */}
            <div
              className="stage-portrait-wrapper"
              title="K.A. Yashas Portrait (Double-click anytime to upload and preview a new portrait)"
              onDoubleClick={handlePortraitDoubleClick}
            >
              <img
                src={portraitImg}
                alt={`Portrait of ${profileConfig.name}`}
                className="stage-portrait-image"
                onError={() => {
                  if (portraitImg !== profileConfig.heroPortraitFallback) {
                    setPortraitImg(profileConfig.heroPortraitFallback);
                  }
                }}
              />
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                aria-label="Upload new hero portrait"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </div>

            {/* 4. Handwritten Annotation: Learn Build Grow */}
            <div className="stage-script-words" aria-hidden="true">
              <span className="script-token">Learn</span>
              <span className="script-token">Build</span>
              <span className="script-token">Grow</span>
              <svg className="script-flourish-svg" viewBox="0 0 90 24" fill="none">
                <path
                  d="M4 18C28 4 62 6 86 16"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
