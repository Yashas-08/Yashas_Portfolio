import React from 'react';
import { Code2, Star } from 'lucide-react';
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
  DockerIcon,
  VSCodeIcon,
  VercelIcon,
  RenderIcon,
  GithubCircleIcon,
  PrismaIcon,
  PostmanIcon,
  FigmaIcon,
  NotionIcon,
} from './SkillIcons';
import './SkillsSection.css';

export const SkillsSection: React.FC = () => {
  const techStack = [
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
    { name: 'Docker', icon: <DockerIcon size={34} /> },
    { name: 'VS Code', icon: <VSCodeIcon size={34} /> },
  ];

  const toolsAndPlatforms = [
    { name: 'Vercel', icon: <VercelIcon size={26} /> },
    { name: 'Render', icon: <RenderIcon size={26} /> },
    { name: 'GitHub', icon: <GithubCircleIcon size={26} /> },
    { name: 'Supabase', icon: <SupabaseIcon size={26} /> },
    { name: 'Prisma', icon: <PrismaIcon size={26} /> },
    { name: 'Postman', icon: <PostmanIcon size={26} /> },
    { name: 'Figma', icon: <FigmaIcon size={26} /> },
    { name: 'Notion', icon: <NotionIcon size={26} /> },
    { name: 'VS Code', icon: <VSCodeIcon size={26} /> },
  ];

  return (
    <div className="skills-section-container">
      {/* Mountain Ridge Atmospheric Background Illustration */}
      <div className="skills-mountain-bg" aria-hidden="true">
        <svg
          viewBox="0 0 700 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="skills-mountain-svg"
          preserveAspectRatio="none"
        >
          {/* Back distant peak ridge */}
          <path
            d="M0 320 L0 260 L80 180 L160 230 L260 110 L380 220 L480 150 L580 240 L700 170 L700 320 Z"
            fill="#380604"
            fillOpacity="0.45"
          />
          <path
            d="M0 260 L80 180 L160 230 L260 110 L380 220 L480 150 L580 240 L700 170"
            stroke="#A51F1B"
            strokeWidth="1.2"
            strokeOpacity="0.3"
          />

          {/* Mid mountain massif with ridgelines */}
          <path
            d="M0 320 L0 220 L70 140 L150 200 L210 120 L300 240 L410 130 L520 230 L630 160 L700 210 L700 320 Z"
            fill="#2c0403"
            fillOpacity="0.75"
          />
          {/* Crevasses and slope hatching lines */}
          <path
            d="M70 140 L95 240 M70 140 L45 230 M210 120 L180 220 M210 120 L245 230 M410 130 L370 230 M410 130 L445 220"
            stroke="#D52B27"
            strokeWidth="0.8"
            strokeOpacity="0.25"
          />

          {/* Fore mountain ridges */}
          <path
            d="M0 320 L0 180 L90 85 L180 195 L250 140 L340 260 L450 180 L560 270 L700 200 L700 320 Z"
            fill="#220202"
            fillOpacity="0.85"
          />
          <path
            d="M0 180 L90 85 L180 195 L250 140 L340 260 L450 180 L560 270 L700 200"
            stroke="#D52B27"
            strokeWidth="1.8"
            strokeOpacity="0.4"
          />
          {/* Main Peak Shading */}
          <path
            d="M90 85 L120 210 M90 85 L60 200 M250 140 L280 250 M250 140 L220 240 M450 180 L480 280 M450 180 L420 270"
            stroke="#A51F1B"
            strokeWidth="1"
            strokeOpacity="0.35"
          />
        </svg>
      </div>

      <div className="skills-content-layout">
        {/* =========================================================================
           Left Column: Introduction & Display Typography
           ========================================================================= */}
        <div className="skills-intro-col">
          {/* Top Marker: 05 — */}
          <div className="skills-top-bar" aria-hidden="true">
            <div className="skills-marker-group">
              <span className="skills-marker-num">05</span>
              <span className="skills-marker-rule" />
            </div>
          </div>

          <div className="skills-intro-text">
            <span className="skills-eyebrow">SKILLS</span>
            <h2 className="skills-main-title">
              TECHNOLOGIES<br />I WORK WITH
            </h2>
            <p className="skills-lead-desc">
              A curated set of tools and technologies I use to build real-world
              projects, explore new ideas, and bring solutions to life.
            </p>
          </div>
        </div>

        {/* =========================================================================
           Right Column: Tech Stack & Tools Panels
           ========================================================================= */}
        <div className="skills-panels-col">
          {/* Panel 1: My Tech Stack */}
          <div className="skills-panel tech-stack-panel">
            <div className="skills-panel-header">
              <div className="skills-panel-title-group">
                <span className="skills-badge-icon" aria-hidden="true">
                  <Code2 size={18} strokeWidth={2.4} />
                </span>
                <h3 className="skills-panel-title">My Tech Stack</h3>
                <span className="skills-panel-rule" aria-hidden="true" />
              </div>
              <span className="skills-panel-subtitle">
                Technologies I use to build, learn, and experiment.
              </span>
            </div>

            {/* 12 Technologies arranged in 2 responsive visual rows */}
            <div className="tech-stack-grid" role="list" aria-label="Technology Stack">
              {/* Row 1: 5 technologies */}
              <div className="tech-stack-row tech-row-primary">
                {techStack.slice(0, 5).map((tech) => (
                  <div key={tech.name} className="tech-stack-item" role="listitem">
                    <div className="tech-icon-box">{tech.icon}</div>
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* Row 2: 7 technologies */}
              <div className="tech-stack-row tech-row-secondary">
                {techStack.slice(5).map((tech) => (
                  <div key={tech.name} className="tech-stack-item" role="listitem">
                    <div className="tech-icon-box">{tech.icon}</div>
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Panel 2: Tools & Platforms */}
          <div className="skills-panel tools-panel">
            <div className="skills-panel-header">
              <div className="skills-panel-title-group">
                <span className="skills-badge-icon" aria-hidden="true">
                  <Star size={18} strokeWidth={2.4} />
                </span>
                <h3 className="skills-panel-title">Tools & Platforms</h3>
                <span className="skills-panel-rule" aria-hidden="true" />
              </div>
              <span className="skills-panel-subtitle">
                Tools I use for development, design, and productivity.
              </span>
            </div>

            {/* 9 Tools & Platforms (Linux completely omitted) */}
            <div className="tools-grid" role="list" aria-label="Tools and Platforms">
              {toolsAndPlatforms.map((tool) => (
                <div key={tool.name} className="tool-item" role="listitem">
                  <div className="tool-icon-disc">{tool.icon}</div>
                  <span className="tool-name">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Thin Horizontal Crimson Divider below the Skills Section */}
      <div className="skills-section-divider" aria-hidden="true" />
    </div>
  );
};
