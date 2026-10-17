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
      icon: <BookOpen size={20} strokeWidth={2} />,
    },
    {
      id: 'skills',
      title: 'Built Skills',
      description: 'Learned web development, programming, and AI/ML concepts.',
      icon: <Code2 size={20} strokeWidth={2} />,
    },
    {
      id: 'projects',
      title: 'Worked on Projects',
      description: 'Built real-world projects to apply my knowledge.',
      icon: <Box size={20} strokeWidth={2} />,
    },
    {
      id: 'looking-ahead',
      title: 'Looking Ahead',
      description: 'Aiming to create impactful solutions and grow further in AI & development.',
      icon: <TrendingUp size={20} strokeWidth={2} />,
    },
  ];

  const techItems: TechItem[] = [
    { name: 'React', icon: <ReactIcon size={34} /> },
    { name: 'JavaScript', icon: <JavaScriptIcon size={34} /> },
    { name: 'TypeScript', icon: <TypeScriptIcon size={34} /> },
    { name: 'Tailwind CSS', icon: <TailwindIcon size={34} /> },
    { name: 'Node.js', icon: <NodeIcon size={34} /> },
    { name: 'Python', icon: <PythonIcon size={34} /> },
    { name: 'Java', icon: <JavaIcon size={34} /> },
    { name: 'PostgreSQL', icon: <PostgresIcon size={34} /> },
    { name: 'Supabase', icon: <SupabaseIcon size={34} /> },
    { name: 'Git', icon: <GitIcon size={34} /> },
  ];

  return (
    <div className="about-section-container">
      {/* =========================================================================
         1. Main Hero Panel: Overview, Biography, Info Cards, and Values
         ========================================================================= */}
      <div className="about-hero-panel">
        {/* Subtle background texture overlay */}
        <div className="about-hero-texture" aria-hidden="true" />

        {/* Top Header Marker: 02 — */}
        <div className="about-hero-top-bar" aria-hidden="true">
          <div className="page-marker-group">
            <span className="page-marker-num">02</span>
            <span className="page-marker-rule" />
          </div>
        </div>

        <div className="about-hero-grid">
          {/* Left Column: Heading, Biography, and 3 Info Cards */}
          <div className="about-hero-left-col">
            <h2 id="about-heading" className="about-main-title">
              ABOUT ME
            </h2>

            <p className="about-bio-text">
              I'm K.A. Yashas, an AI & ML student and developer passionate about
              building real-world solutions through code, creativity, and
              technology. I enjoy learning new technologies, working on
              meaningful projects, and exploring the possibilities of Artificial
              Intelligence and Machine Learning.
            </p>

            {/* Three Compact Information Cards */}
            <div className="info-cards-row" role="region" aria-label="Key Information">
              {/* Card 1: Education */}
              <div className="info-card">
                <div className="info-card-icon" aria-hidden="true">
                  <GraduationCap size={22} strokeWidth={2} />
                </div>
                <div className="info-card-content">
                  <h3 className="info-card-title">B.Tech CSE (AI & ML)</h3>
                  <p className="info-card-subtitle">
                    Yenepoya University, Bengaluru
                  </p>
                </div>
              </div>

              {/* Card 2: Location */}
              <div className="info-card">
                <div className="info-card-icon" aria-hidden="true">
                  <MapPin size={22} strokeWidth={2} />
                </div>
                <div className="info-card-content">
                  <h3 className="info-card-title">Location</h3>
                  <p className="info-card-subtitle">
                    Bengaluru, Karnataka, India
                  </p>
                </div>
              </div>

              {/* Card 3: Opportunities */}
              <div className="info-card">
                <div className="info-card-icon" aria-hidden="true">
                  <Briefcase size={22} strokeWidth={2} />
                </div>
                <div className="info-card-content">
                  <h3 className="info-card-title">Open to Opportunities</h3>
                  <p className="info-card-subtitle">
                    Internships & Collaborations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Thin Vertical Ivory Divider */}
          <div className="about-hero-divider" aria-hidden="true" />

          {/* Right Column: Personal Values */}
          <div className="about-hero-right-col">
            {/* Card 1: My Goal */}
            <div className="value-card">
              <div className="value-card-header">
                <div className="value-icon-badge" aria-hidden="true">
                  <Target size={24} strokeWidth={2.2} />
                </div>
                <h3 className="value-card-title">My Goal</h3>
              </div>
              <p className="value-card-text">
                To build impactful products using AI, solve real-world problems,
                and keep growing as a developer.
              </p>
            </div>

            {/* Card 2: What Drives Me */}
            <div className="value-card">
              <div className="value-card-header">
                <div className="value-icon-badge" aria-hidden="true">
                  <Sprout size={24} strokeWidth={2.2} />
                </div>
                <h3 className="value-card-title">What Drives Me</h3>
              </div>
              <p className="value-card-text">
                Curiosity, continuous learning, problem solving, and creating
                meaningful solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
         2. Bottom Content Panels: Learning Journey & Tech Stack
         ========================================================================= */}
      <div className="about-bottom-panels">
        {/* Left Panel: My Learning Journey */}
        <section id="journey" className="about-panel journey-panel" aria-labelledby="journey-heading">
          <div className="panel-header-block">
            <div className="panel-title-row">
              <h3 id="journey-heading" className="panel-main-title">
                My Learning Journey
              </h3>
              <span className="panel-title-dash" aria-hidden="true" />
            </div>
            <p className="panel-subtitle">
              A journey of continuous learning, hands-on experience, and growth.
            </p>
          </div>

          <div className="journey-timeline" role="list" aria-label="Learning Journey Timeline">
            <div className="timeline-stages">
              {stages.map((stage, index) => (
                <div key={stage.id} className="timeline-stage-item" role="listitem">
                  <div className="stage-node">
                    {index === 0 && <span className="timeline-start-dot" aria-hidden="true" />}
                    <div className="stage-icon-circle" aria-hidden="true">
                      {stage.icon}
                    </div>
                    {index === stages.length - 1 && (
                      <div className="timeline-trailing-tail" aria-hidden="true">
                        <span className="tail-line" />
                        <span className="tail-dot" />
                      </div>
                    )}
                  </div>
                  <div className="stage-content">
                    <h4 className="stage-title">{stage.title}</h4>
                    <p className="stage-desc">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right Panel: Tech Stack */}
        <section className="about-panel tech-stack-panel" aria-labelledby="tech-stack-heading">
          <div className="panel-header-block">
            <div className="panel-header-flex">
              <div className="panel-title-row">
                <h3 id="tech-stack-heading" className="panel-main-title">
                  Tech Stack
                </h3>
                <span className="panel-title-dash" aria-hidden="true" />
              </div>
              <button
                type="button"
                className="view-skills-link"
                onClick={onSkillsClick}
                aria-label="View All Skills"
              >
                <span>View All Skills</span>
                <ArrowRight size={15} strokeWidth={2.2} className="link-arrow" />
              </button>
            </div>
            <p className="panel-subtitle">
              Technologies and tools I work with.
            </p>
          </div>

          <div className="tech-grid" role="list" aria-label="Technologies and tools">
            {techItems.map((tech) => (
              <div
                key={tech.name}
                className="tech-tile"
                role="listitem"
                tabIndex={0}
                title={tech.name}
              >
                <div className="tech-icon-wrapper" aria-hidden="true">
                  {tech.icon}
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
