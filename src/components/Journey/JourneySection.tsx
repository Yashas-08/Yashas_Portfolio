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
      icon: <Landmark size={20} strokeWidth={2} />,
    },
    {
      id: 'higher-secondary',
      year: '2025',
      title: 'Higher Secondary Education (Class 12)',
      subtitle: 'Completed in 2025',
      institution: 'Narayana Junior College, Anantapur',
      description:
        'Completed my 12th class with a focus on Mathematics and Computer Science, strengthening my foundation in technology.',
      icon: <Building2 size={20} strokeWidth={2} />,
    },
    {
      id: 'btech',
      year: '2025 – 2029',
      title: 'B.Tech CSE (AI & ML)',
      subtitle: 'Currently Pursuing',
      institution: 'Yenepoya University, Bengaluru',
      description:
        'Currently pursuing my undergraduate degree, focusing on AI, machine learning, programming, and practical projects.',
      icon: <GraduationCap size={20} strokeWidth={2} />,
    },
    {
      id: 'skills-growth',
      year: '2029+',
      title: 'Skills & Growth',
      subtitle: 'Future Goals',
      description:
        'Aiming to grow as a developer, work on impactful AI solutions, and explore opportunities in product development, research, and innovation.',
      icon: <TrendingUp size={20} strokeWidth={2} />,
    },
  ];

  return (
    <div className="journey-section-container">
      {/* =========================================================================
         1. Section Header & Status Ledger (Open Editorial, No Outer Card)
         ========================================================================= */}
      <div className="journey-overview-layout">
        {/* Left Column: Heading & Introduction */}
        <div className="journey-overview-left">
          <span className="journey-eyebrow">MY JOURNEY</span>
          <h2 className="journey-main-title">
            EDUCATION, EXPERIENCE
            <span className="journey-title-break">&amp; GROWTH</span>
          </h2>
          <p className="journey-lead-desc">
            A journey of continuous learning, hands-on experience, and consistent
            growth, turning curiosity into meaningful projects and real-world skills.
          </p>
        </div>

        {/* Fine Vertical Rule */}
        <div className="journey-overview-divider" aria-hidden="true" />

        {/* Right Column: Currently & Next Step Open Status Ledger */}
        <div className="journey-overview-right">
          <div className="journey-status-ledger" role="region" aria-label="Current Focus and Next Steps">
            {/* Item 1: Currently */}
            <div className="journey-status-entry">
              <div className="status-entry-header">
                <div className="status-entry-icon" aria-hidden="true">
                  <GraduationCap size={18} strokeWidth={2} />
                </div>
                <div>
                  <span className="status-entry-tag">CURRENT FOCUS</span>
                  <h3 className="status-entry-title">B.Tech CSE (AI &amp; ML)</h3>
                </div>
              </div>
              <p className="status-entry-institution">
                Yenepoya University, Bengaluru
              </p>
              <p className="status-entry-desc">
                Exploring Artificial Intelligence and Machine Learning while building
                real-world projects and practical skills.
              </p>
            </div>

            <div className="status-entry-separator" aria-hidden="true" />

            {/* Item 2: Next Step */}
            <div className="journey-status-entry">
              <div className="status-entry-header">
                <div className="status-entry-icon" aria-hidden="true">
                  <Rocket size={18} strokeWidth={2} />
                </div>
                <div>
                  <span className="status-entry-tag">NEXT MILESTONE</span>
                  <h3 className="status-entry-title">Open to Opportunities</h3>
                </div>
              </div>
              <p className="status-entry-desc">
                Looking for relevant internships, collaborations, and opportunities to
                work on impactful projects in AI &amp; development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Thin Horizontal Divider */}
      <div className="journey-section-divider" aria-hidden="true" />

      {/* =========================================================================
         2. Connected Education Timeline (Continuous line, date markers, open blocks)
         ========================================================================= */}
      <div className="journey-timeline-block">
        <div className="journey-block-header">
          <div className="journey-block-title-row">
            <div className="journey-block-icon" aria-hidden="true">
              <Briefcase size={18} strokeWidth={2} />
            </div>
            <h3 className="journey-block-heading">My Education Journey</h3>
            <span className="journey-block-dash" aria-hidden="true" />
          </div>
          <span className="journey-block-subtitle">
            A continuous path of learning, building, and growing.
          </span>
        </div>

        {/* Continuous Timeline Track & Open Stages */}
        <div className="education-timeline-container">
          <div className="education-timeline-track" aria-hidden="true">
            <div className="education-timeline-line" />
          </div>

          <div className="education-timeline-stages">
            {educationTimeline.map((stage) => (
              <div key={stage.id} className="education-stage-item">
                {/* Node with Year Marker */}
                <div className="stage-node-wrapper">
                  <span className="stage-year-pill">{stage.year}</span>
                  <div className="stage-node-circle" aria-hidden="true">
                    <span className="stage-node-dot" />
                  </div>
                  <div className="stage-milestone-stem" aria-hidden="true" />
                </div>

                {/* Milestone Content — Open text block without card box */}
                <div className="stage-milestone-content">
                  <div className="milestone-top-row">
                    <div className="milestone-icon-wrapper" aria-hidden="true">
                      {stage.icon}
                    </div>
                    <span className="stage-status-tag">{stage.subtitle}</span>
                  </div>
                  <h4 className="stage-title">{stage.title}</h4>
                  {stage.institution && (
                    <p className="stage-institution">{stage.institution}</p>
                  )}
                  <p className="stage-desc">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Thin Horizontal Divider */}
      <div className="journey-section-divider" aria-hidden="true" />

      {/* =========================================================================
         3. Achievements (Typographic Row/Columns) & Certifications (Clean Rows)
         ========================================================================= */}
      <div className="journey-lower-layout">
        {/* Left Column: Achievements & Highlights (Clean typographic columns) */}
        <div className="journey-achievements-col">
          <div className="journey-block-header">
            <div className="journey-block-title-row">
              <div className="journey-block-icon" aria-hidden="true">
                <Trophy size={18} strokeWidth={2} />
              </div>
              <h3 className="journey-block-heading">Achievements &amp; Highlights</h3>
              <span className="journey-block-dash" aria-hidden="true" />
            </div>
            <span className="journey-block-subtitle">Small milestones, big motivation.</span>
          </div>

          <div className="achievements-open-row" role="region" aria-label="Milestones and Metrics">
            <div className="achievement-col">
              <div className="achievement-header">
                <div className="achievement-icon-box" aria-hidden="true">
                  <Code2 size={18} strokeWidth={2.2} />
                </div>
                <span className="achievement-label">Projects Completed</span>
              </div>
              <span className="achievement-number">5+</span>
              <p className="achievement-text">
                Built and deployed real-world projects using modern technologies.
              </p>
            </div>

            <div className="achievement-col">
              <div className="achievement-header">
                <div className="achievement-icon-box" aria-hidden="true">
                  <Sparkles size={18} strokeWidth={2.2} />
                </div>
                <span className="achievement-label">Technical Skills</span>
              </div>
              <span className="achievement-number">10+</span>
              <p className="achievement-text">
                Proficient in web development, programming, and AI/ML tools.
              </p>
            </div>

            <div className="achievement-col">
              <div className="achievement-header">
                <div className="achievement-icon-box" aria-hidden="true">
                  <Users size={18} strokeWidth={2.2} />
                </div>
                <span className="achievement-label">Continuous Learning</span>
              </div>
              <span className="achievement-number text-stat">Always Growing</span>
              <p className="achievement-text">
                Exploring new technologies and improving through hands-on practice.
              </p>
            </div>
          </div>
        </div>

        {/* Fine Vertical Rule */}
        <div className="journey-lower-divider" aria-hidden="true" />

        {/* Right Column: Certifications (Simple, well-spaced rows) */}
        <div className="journey-certifications-col">
          <div className="journey-block-header">
            <div className="journey-block-title-row">
              <div className="journey-block-icon" aria-hidden="true">
                <Award size={18} strokeWidth={2} />
              </div>
              <h3 className="journey-block-heading">Certifications</h3>
              <span className="journey-block-dash" aria-hidden="true" />
            </div>
            <span className="journey-block-subtitle">Learning beyond the classroom.</span>
          </div>

          <div className="certifications-table" role="list" aria-label="Certifications">
            {certificates.length > 0 ? (
              certificates.map((cert) => (
                <div key={cert.id} className="certification-row" role="listitem">
                  <div className="cert-left">
                    <div className="cert-icon-wrap" aria-hidden="true">
                      <FileText size={16} strokeWidth={2} />
                    </div>
                    <div className="cert-titles">
                      <h4 className="cert-title">{cert.title}</h4>
                      <span className="cert-issuer">{cert.issuer}</span>
                    </div>
                  </div>

                  <div className="cert-right">
                    {cert.url && cert.url.trim().length > 0 && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-verify-link"
                      >
                        <span>Verify</span>
                        <ExternalLink size={12} strokeWidth={2} />
                      </a>
                    )}
                    <span className="cert-year-tag">{cert.year}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="certifications-empty">
                <p>Certificates will be added here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
