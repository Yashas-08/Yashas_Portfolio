import React from 'react';
import {
  GraduationCap,
  Rocket,
  Briefcase,
  Landmark,
  Building2,
  TrendingUp,
  Trophy,
  Code2,
  Sparkles,
  Users,
  Award,
  FileText,
  ExternalLink,
} from 'lucide-react';
import { certificates } from '../../data/certificates';
import './JourneySection.css';

interface TimelineStage {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  institution?: string;
  description: string;
  icon: React.ReactNode;
}

export const JourneySection: React.FC = () => {
  const educationTimeline: TimelineStage[] = [
    {
      id: 'secondary',
      year: '2023',
      title: 'Secondary Education (Class 10)',
      subtitle: 'Completed in 2023',
      institution: 'Sri Sai Vidyanikethan, Amarapuram',
      description:
        'Completed my 10th class with a strong interest in technology and problem solving.',
      icon: <Landmark size={22} strokeWidth={2} />,
    },
    {
      id: 'higher-secondary',
      year: '2025',
      title: 'Higher Secondary Education (Class 12)',
      subtitle: 'Completed in 2025',
      institution: 'Narayana Junior College, Anantapur',
      description:
        'Completed my 12th class with a focus on Mathematics and Computer Science, strengthening my foundation in technology.',
      icon: <Building2 size={22} strokeWidth={2} />,
    },
    {
      id: 'btech',
      year: '2025 – 2029',
      title: 'B.Tech CSE (AI & ML)',
      subtitle: 'Currently Pursuing',
      institution: 'Yenepoya University, Bengaluru',
      description:
        'Currently pursuing my undergraduate degree, focusing on AI, machine learning, programming, and practical projects.',
      icon: <GraduationCap size={22} strokeWidth={2} />,
    },
    {
      id: 'skills-growth',
      year: '2029+',
      title: 'Skills & Growth',
      subtitle: 'Future Goals',
      description:
        'Aiming to grow as a developer, work on impactful AI solutions, and explore opportunities in product development, research, and innovation.',
      icon: <TrendingUp size={22} strokeWidth={2} />,
    },
  ];

  return (
    <div className="journey-section-container">
      {/* =========================================================================
         1. Main Hero Panel: Overview, Currently, and Next Step Cards
         ========================================================================= */}
      <div className="journey-hero-panel">
        {/* Subtle background paper texture overlay */}
        <div className="journey-hero-texture" aria-hidden="true" />

        {/* Decorative Mountain Line-Art Illustration */}
        <div className="journey-mountain-illustration" aria-hidden="true">
          <svg
            viewBox="0 0 460 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mountain-svg"
          >
            {/* Mountain outlines with crimson glow */}
            <path
              d="M10 250 L110 110 L190 200 L280 45 L360 160 L450 250"
              stroke="#D52B27"
              strokeWidth="1.8"
              strokeOpacity="0.45"
            />
            <path
              d="M70 250 L160 135 L225 210 L310 95 L390 205 L440 250"
              stroke="#A51F1B"
              strokeWidth="1.2"
              strokeOpacity="0.3"
            />
            <path
              d="M200 250 L280 45 L330 250"
              stroke="#E2C7BC"
              strokeWidth="0.8"
              strokeDasharray="3 3"
              strokeOpacity="0.25"
            />
            {/* Summit Flagpole & Flag on top peak (x: 280, y: 45) */}
            <line
              x1="280"
              y1="45"
              x2="280"
              y2="15"
              stroke="#FFF1E5"
              strokeWidth="1.6"
              strokeOpacity="0.75"
            />
            <polygon
              points="280,15 302,23 280,31"
              fill="#D52B27"
              stroke="#FFF1E5"
              strokeWidth="0.8"
              fillOpacity="0.9"
            />
            {/* Radiating beacon stars */}
            <circle cx="280" cy="15" r="2.5" fill="#FFF1E5" fillOpacity="0.9" />
            <circle cx="330" cy="65" r="1.5" fill="#FFF1E5" fillOpacity="0.4" />
            <circle cx="210" cy="80" r="1.5" fill="#FFF1E5" fillOpacity="0.4" />
          </svg>
        </div>

        {/* Top Header Marker: 03 — */}
        <div className="journey-hero-top-bar" aria-hidden="true">
          <div className="page-marker-group">
            <span className="page-marker-num">03</span>
            <span className="page-marker-rule" />
          </div>
        </div>

        {/* 2-Column Main Layout: Intro Left, Currently & Next Step Cards Right */}
        <div className="journey-hero-grid">
          {/* Left Column: Heading & Introduction */}
          <div className="journey-hero-left-col">
            <span className="journey-eyebrow">MY JOURNEY</span>
            <h2 className="journey-main-title">
              EDUCATION, EXPERIENCE
              <span className="title-ampersand-row">&amp; GROWTH</span>
            </h2>
            <p className="journey-lead-desc">
              A journey of continuous learning, hands-on experience, and consistent
              growth, turning curiosity into meaningful projects and real-world skills.
            </p>
          </div>

          {/* Right Column: Currently & Next Step Cards */}
          <div className="journey-hero-right-col">
            {/* Card 1: Currently */}
            <div className="journey-action-card currently-card">
              <div className="action-card-header">
                <div className="action-card-icon" aria-hidden="true">
                  <GraduationCap size={24} strokeWidth={2} />
                </div>
                <div className="action-card-titles">
                  <span className="action-card-label">Currently</span>
                  <h3 className="action-card-heading">B.Tech CSE (AI &amp; ML)</h3>
                </div>
              </div>
              <p className="action-card-institution">
                Yenepoya University, Bengaluru
              </p>
              <p className="action-card-desc">
                Exploring Artificial Intelligence and Machine Learning while building
                real-world projects and practical skills.
              </p>
            </div>

            {/* Card 2: Next Step */}
            <div className="journey-action-card next-step-card">
              <div className="action-card-header">
                <div className="action-card-icon" aria-hidden="true">
                  <Rocket size={24} strokeWidth={2} />
                </div>
                <div className="action-card-titles">
                  <span className="action-card-label">Next Step</span>
                  <h3 className="action-card-heading">Open to Opportunities</h3>
                </div>
              </div>
              <p className="action-card-desc">
                Looking for relevant internships, collaborations, and opportunities to
                work on impactful projects in AI &amp; development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
         2. My Education Journey Timeline Panel
         ========================================================================= */}
      <div className="journey-timeline-panel">
        <div className="journey-panel-header">
          <div className="panel-title-group">
            <div className="panel-title-icon" aria-hidden="true">
              <Briefcase size={20} strokeWidth={2} />
            </div>
            <h3 className="panel-heading">My Education Journey</h3>
            <span className="panel-rule" aria-hidden="true" />
          </div>
          <span className="panel-subtitle">
            A path of learning, building, and growing.
          </span>
        </div>

        {/* 4-Stage Horizontal Timeline (Responsive to vertical on mobile) */}
        <div className="education-timeline-container">
          <div className="education-timeline-track" aria-hidden="true">
            <div className="education-timeline-line" />
          </div>

          <div className="education-timeline-stages">
            {educationTimeline.map((stage) => (
              <div key={stage.id} className="education-stage-item">
                {/* Node with Year Badge */}
                <div className="stage-node-wrapper">
                  <span className="stage-year-pill">{stage.year}</span>
                  <div className="stage-node-circle" aria-hidden="true">
                    <span className="stage-node-dot" />
                  </div>
                </div>

                {/* Stage Content Card */}
                <div className="stage-content-card">
                  <div className="stage-card-icon-wrapper" aria-hidden="true">
                    {stage.icon}
                  </div>
                  <h4 className="stage-card-title">{stage.title}</h4>
                  {stage.institution && (
                    <p className="stage-card-institution">{stage.institution}</p>
                  )}
                  <span className="stage-card-status">{stage.subtitle}</span>
                  <p className="stage-card-desc">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
         3. Bottom Row: Achievements & Highlights (Left) + Certifications (Right)
         ========================================================================= */}
      <div className="journey-bottom-grid">
        {/* Left Panel: Achievements & Highlights */}
        <div className="journey-achievements-panel">
          <div className="journey-panel-header">
            <div className="panel-title-group">
              <div className="panel-title-icon" aria-hidden="true">
                <Trophy size={20} strokeWidth={2} />
              </div>
              <h3 className="panel-heading">Achievements &amp; Highlights</h3>
              <span className="panel-rule" aria-hidden="true" />
            </div>
            <span className="panel-subtitle">Small milestones, big motivation.</span>
          </div>

          <div className="achievements-cards-grid">
            {/* Card 1: Projects Completed */}
            <div className="achievement-card">
              <div className="achievement-icon-wrapper" aria-hidden="true">
                <Code2 size={22} strokeWidth={2.2} />
              </div>
              <div className="achievement-content">
                <span className="achievement-title">Projects Completed</span>
                <span className="achievement-metric">5+</span>
                <p className="achievement-desc">
                  Built and deployed real-world projects using modern technologies.
                </p>
              </div>
            </div>

            {/* Card 2: Technical Skills */}
            <div className="achievement-card">
              <div className="achievement-icon-wrapper" aria-hidden="true">
                <Sparkles size={22} strokeWidth={2.2} />
              </div>
              <div className="achievement-content">
                <span className="achievement-title">Technical Skills</span>
                <span className="achievement-metric">10+</span>
                <p className="achievement-desc">
                  Proficient in web development, programming, and AI/ML tools.
                </p>
              </div>
            </div>

            {/* Card 3: Continuous Learning */}
            <div className="achievement-card">
              <div className="achievement-icon-wrapper" aria-hidden="true">
                <Users size={22} strokeWidth={2.2} />
              </div>
              <div className="achievement-content">
                <span className="achievement-title">Continuous Learning</span>
                <span className="achievement-metric text-metric">Always Growing</span>
                <p className="achievement-desc">
                  Exploring new technologies and improving through hands-on practice.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Certifications */}
        <div className="journey-certifications-panel">
          <div className="journey-panel-header">
            <div className="panel-title-group">
              <div className="panel-title-icon" aria-hidden="true">
                <Award size={20} strokeWidth={2} />
              </div>
              <h3 className="panel-heading">Certifications</h3>
              <span className="panel-rule" aria-hidden="true" />
            </div>
            <span className="panel-subtitle">Learning beyond the classroom.</span>
          </div>

          {/* Dynamic Certificate List from src/data/certificates.ts */}
          <div className="certifications-list">
            {certificates.length > 0 ? (
              certificates.map((cert) => (
                <div key={cert.id} className="certificate-item">
                  <div className="certificate-icon-box" aria-hidden="true">
                    <FileText size={18} strokeWidth={2} />
                  </div>
                  <div className="certificate-info">
                    <h4 className="certificate-title">{cert.title}</h4>
                    <span className="certificate-issuer">{cert.issuer}</span>
                    {cert.url && cert.url.trim().length > 0 && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-link"
                      >
                        View Certificate
                        <ExternalLink size={12} strokeWidth={2} />
                      </a>
                    )}
                  </div>
                  <span className="certificate-year-badge">{cert.year}</span>
                </div>
              ))
            ) : (
              <div className="certificates-empty-state">
                <p>Certificates will be added here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
