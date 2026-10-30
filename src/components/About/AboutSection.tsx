import React from 'react';
import {
  GraduationCap,
  MapPin,
  Briefcase,
  Target,
  Sprout,
  BookOpen,
  Code2,
  Box,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
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
} from './TechIcons';
import './AboutSection.css';

interface AboutSectionProps {
  onSkillsClick?: () => void;
}

interface JourneyStage {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onSkillsClick }) => {
  const stages: JourneyStage[] = [
    {
      id: 'exploring',
      title: 'Started Exploring',
      description: 'Began with curiosity and a love for technology.',
      icon: <BookOpen size={18} strokeWidth={2} />,
    },
    {
      id: 'skills',
      title: 'Built Skills',
      description: 'Learned web development, programming, and AI/ML concepts.',
      icon: <Code2 size={18} strokeWidth={2} />,
    },
    {
      id: 'projects',
      title: 'Worked on Projects',
      description: 'Built real-world projects to apply my knowledge.',
      icon: <Box size={18} strokeWidth={2} />,
    },
    {
      id: 'looking-ahead',
      title: 'Looking Ahead',
      description: 'Aiming to create impactful solutions and grow further in AI & development.',
      icon: <TrendingUp size={18} strokeWidth={2} />,
    },
  ];

  const techItems: TechItem[] = [
    { name: 'React', icon: <ReactIcon size={32} /> },
    { name: 'JavaScript', icon: <JavaScriptIcon size={32} /> },
    { name: 'TypeScript', icon: <TypeScriptIcon size={32} /> },
    { name: 'Tailwind CSS', icon: <TailwindIcon size={32} /> },
    { name: 'Node.js', icon: <NodeIcon size={32} /> },
    { name: 'Python', icon: <PythonIcon size={32} /> },
    { name: 'Java', icon: <JavaIcon size={32} /> },
    { name: 'PostgreSQL', icon: <PostgresIcon size={32} /> },
    { name: 'Supabase', icon: <SupabaseIcon size={32} /> },
    { name: 'Git', icon: <GitIcon size={32} /> },
  ];

  return (
    <div className="about-section-container">
      {/* =========================================================================
         1. Main Editorial Overview (Open 2-Column Composition, No Outer Card)
         ========================================================================= */}
      <div className="about-editorial-overview">
        {/* Left Column: Eyebrow, Heading, Bio, and Open Metadata Ledger */}
        <div className="about-overview-left">
          <span className="about-eyebrow">BIOGRAPHY &amp; PROFILE</span>
          <h2 id="about-heading" className="about-main-title">
            ABOUT ME
          </h2>

          <p className="about-bio-text">
            I'm K.A. Yashas, an AI &amp; ML student and developer passionate about
            building real-world solutions through code, creativity, and
            technology. I enjoy learning new technologies, working on
            meaningful projects, and exploring the possibilities of Artificial
            Intelligence and Machine Learning.
          </p>

          {/* Open Metadata Ledger — Open typographic block with fine rules */}
          <div className="about-ledger-row" role="region" aria-label="Key Information">
            <div className="about-ledger-item">
              <div className="about-ledger-icon" aria-hidden="true">
                <GraduationCap size={18} strokeWidth={2} />
              </div>
              <div className="about-ledger-content">
                <span className="about-ledger-label">Education</span>
                <h3 className="about-ledger-title">B.Tech CSE (AI &amp; ML)</h3>
                <p className="about-ledger-subtitle">
                  Yenepoya University, Bengaluru
                </p>
              </div>
            </div>

            <div className="about-ledger-item">
              <div className="about-ledger-icon" aria-hidden="true">
                <MapPin size={18} strokeWidth={2} />
              </div>
              <div className="about-ledger-content">
                <span className="about-ledger-label">Location</span>
                <h3 className="about-ledger-title">Bengaluru, India</h3>
                <p className="about-ledger-subtitle">
                  Karnataka (Open to Remote)
                </p>
              </div>
            </div>

            <div className="about-ledger-item">
              <div className="about-ledger-icon" aria-hidden="true">
                <Briefcase size={18} strokeWidth={2} />
              </div>
              <div className="about-ledger-content">
                <span className="about-ledger-label">Status</span>
                <h3 className="about-ledger-title">Open to Opportunities</h3>
                <p className="about-ledger-subtitle">
                  Internships &amp; Collaborations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fine Vertical Rule */}
        <div className="about-overview-divider" aria-hidden="true" />

        {/* Right Column: Goal & Motivation */}
        <div className="about-overview-right">
          <div className="about-value-block">
            <div className="about-value-header">
              <div className="about-value-icon" aria-hidden="true">
                <Target size={20} strokeWidth={2.2} />
              </div>
              <h3 className="about-value-title">My Goal</h3>
            </div>
            <p className="about-value-text">
              To build impactful products using AI, solve real-world problems,
              and keep growing as a developer.
            </p>
          </div>

          <div className="about-value-separator" aria-hidden="true" />

          <div className="about-value-block">
            <div className="about-value-header">
              <div className="about-value-icon" aria-hidden="true">
                <Sprout size={20} strokeWidth={2.2} />
              </div>
              <h3 className="about-value-title">What Drives Me</h3>
            </div>
            <p className="about-value-text">
              Curiosity, continuous learning, problem solving, and creating
              meaningful solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Thin Horizontal Divider */}
      <div className="about-section-divider" aria-hidden="true" />

      {/* =========================================================================
         2. Open Content Groups: Learning Journey & Tech Stack (No Card Wrappers)
         ========================================================================= */}
      <div className="about-content-groups">
        {/* Left: My Learning Journey */}
        <div className="about-group-journey" aria-labelledby="journey-heading">
          <div className="about-group-header">
            <div className="about-group-title-row">
              <h3 id="journey-heading" className="about-group-title">
                My Learning Journey
              </h3>
              <span className="about-group-dash" aria-hidden="true" />
            </div>
            <p className="about-group-subtitle">
              A journey of continuous learning, hands-on experience, and growth.
            </p>
          </div>

          <div className="about-journey-timeline" role="list" aria-label="Learning Journey Timeline">
            {stages.map((stage, index) => (
              <div key={stage.id} className="about-journey-stage" role="listitem">
                <div className="about-stage-node">
                  <div className="about-stage-circle" aria-hidden="true">
                    {stage.icon}
                  </div>
                  {index < stages.length - 1 && (
                    <div className="about-stage-connector" aria-hidden="true" />
                  )}
                </div>
                <div className="about-stage-content">
                  <h4 className="about-stage-title">{stage.title}</h4>
                  <p className="about-stage-desc">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fine Vertical Rule */}
        <div className="about-bottom-divider" aria-hidden="true" />

        {/* Right: Tech Stack */}
        <div className="about-group-tech" aria-labelledby="tech-stack-heading">
          <div className="about-group-header">
            <div className="about-tech-header-flex">
              <div className="about-group-title-row">
                <h3 id="tech-stack-heading" className="about-group-title">
                  Tech Stack
                </h3>
                <span className="about-group-dash" aria-hidden="true" />
              </div>
              <button
                type="button"
                className="about-view-skills-btn"
                onClick={onSkillsClick}
                aria-label="View All Skills"
              >
                <span>View All Skills</span>
                <ArrowRight size={15} strokeWidth={2.2} className="about-btn-arrow" />
              </button>
            </div>
            <p className="about-group-subtitle">
              Technologies and tools I work with.
            </p>
          </div>

          <div className="about-tech-open-grid" role="list" aria-label="Technologies and tools">
            {techItems.map((tech) => (
              <div
                key={tech.name}
                className="about-tech-item"
                role="listitem"
                tabIndex={0}
                title={tech.name}
              >
                <div className="about-tech-icon" aria-hidden="true">
                  {tech.icon}
                </div>
                <span className="about-tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
