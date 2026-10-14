import React, { useState } from 'react';
import { ArrowRight, Mouse } from 'lucide-react';
import './Hero.css';

interface HeroProps {
  onViewWorkClick: () => void;
  onScrollDownClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onViewWorkClick,
  onScrollDownClick,
}) => {
  // Configurable portrait image source with graceful fallback
  const [portraitImg, setPortraitImg] = useState<string>(
    '/assets/reference-composition-crop.png'
  );

  return (
    <div className="hero-wrapper">
      <div className="hero-panel">
        {/* Subtle noise/halftone background texture overlay */}
        <div className="hero-texture-overlay" aria-hidden="true" />

        <div className="hero-content-grid">
          {/* Left Column: Typography, Bio & Actions */}
          <div className="hero-left-col">
            {/* Elegant handwritten script badge */}
            <div className="hero-script-badge" aria-label="Role: AI & ML Student / Developer">
              <span className="script-line-1">AI & ML Student</span>
              <span className="script-line-2">Developer</span>
            </div>

            {/* Oversized condensed headline */}
            <h1 className="hero-main-title">
              K.A. YASHAS
            </h1>

            {/* Factual bio paragraph */}
            <p className="hero-bio-paragraph">
              Turning ideas into real-world solutions through{' '}
              <br className="bio-break" />
              code, creativity, and AI. I build modern web applications{' '}
              <br className="bio-break" />
              and explore the possibilities of Artificial Intelligence{' '}
              <br className="bio-break" />
              and Machine Learning.
            </p>

            {/* CTA & Social Links Bar */}
            <div className="hero-actions-row">
              <button
                type="button"
                className="hero-primary-cta"
                onClick={onViewWorkClick}
                aria-label="View My Work"
              >
                <span>View My Work</span>
                <ArrowRight size={18} strokeWidth={2.5} className="cta-arrow-icon" />
              </button>

              <div className="hero-cta-divider" aria-hidden="true" />

              <div className="hero-social-links" aria-label="Verified Social Media Profiles">
                {/* GitHub */}
                <a
                  href="https://github.com/Yashas-08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn github-btn"
                  aria-label="GitHub Profile (Yashas-08)"
                  title="GitHub Profile"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/yashas-k-a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn linkedin-btn"
                  aria-label="LinkedIn Profile (K.A. Yashas)"
                  title="LinkedIn Profile"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/yashas____08/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn instagram-btn"
                  aria-label="Instagram Profile (yashas____08)"
                  title="Instagram Profile"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
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

          {/* Right Column: Layered Composition & Portrait */}
          <div className="hero-right-col">
            <div className="hero-portrait-stage">
              {/* If using standalone portrait photo, render the CSS backdrop layers */}
              {!portraitImg.includes('reference-composition-crop') && (
                <>
                  {/* Layer 1: Burgundy geometric backplate */}
                  <div className="stage-backplate-burgundy" aria-hidden="true" />

                  {/* Layer 2: Tilted ivory poster board */}
                  <div className="stage-board-ivory" aria-hidden="true" />

                  {/* Layer 3: Handwritten inspirational lettering */}
                  <div className="stage-handwritten-note" aria-hidden="true">
                    <span className="hw-line">Build</span>
                    <span className="hw-line">Learn</span>
                    <span className="hw-line">Improve</span>
                    <span className="hw-line">Repeat</span>
                    <svg
                      className="hw-flourish"
                      viewBox="0 0 70 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 12C18 3 45 4 67 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Layer 5: Circular Developer Text Badge */}
                  <div className="stage-circular-badge" aria-hidden="true">
                    <svg viewBox="0 0 100 100" className="badge-svg">
                      <path
                        id="circleBadgePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                      />
                      <text className="badge-text" fill="var(--color-text-cream)">
                        <textPath href="#circleBadgePath" startOffset="0%">
                          DEVELOPER • AI ENTHUSIAST •
                        </textPath>
                      </text>
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      className="badge-star-icon"
                      fill="var(--color-text-cream)"
                    >
                      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                    </svg>
                  </div>
                </>
              )}

              {/* Main Portrait Artwork Asset */}
              <div className="stage-portrait-wrapper">
                <img
                  src={portraitImg}
                  alt="Portrait of K.A. Yashas in a casual black hoodie"
                  className={
                    portraitImg.includes('reference-composition-crop')
                      ? 'stage-composition-image'
                      : 'stage-portrait-image'
                  }
                  onError={() => {
                    if (portraitImg !== '/assets/portrait-studio.jpg') {
                      setPortraitImg('/assets/portrait-studio.jpg');
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Far Right Sidebar: Section 01 + Vertical Scroll Indicator */}
        <div className="hero-scroll-aside">
          <div className="section-number-pill" aria-label="Section 01">
            01
          </div>

          <div
            className="scroll-indicator-group"
            onClick={onScrollDownClick}
            role="button"
            tabIndex={0}
            aria-label="Scroll down to feature highlights"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onScrollDownClick?.();
              }
            }}
          >
            <span className="vertical-scroll-label">SCROLL DOWN</span>
            <div className="scroll-mouse-icon">
              <Mouse size={18} strokeWidth={1.8} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
