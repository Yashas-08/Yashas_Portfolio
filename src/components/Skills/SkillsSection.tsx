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
      {/* =========================================================================
         1. Section Introduction Block (Open Editorial Header)
         ========================================================================= */}
      <div className="skills-intro-block">
        <span className="skills-eyebrow">SKILLS &amp; CAPABILITIES</span>
        <h2 className="skills-main-title">
          TECHNOLOGIES I WORK WITH
        </h2>
        <p className="skills-lead-desc">
          A curated set of tools and technologies I use to build real-world
          projects, explore new ideas, and bring solutions to life.
        </p>
      </div>

      <div className="skills-divider" aria-hidden="true" />

      {/* =========================================================================
         2. Group 1: My Tech Stack (Open Grid on Canvas Background)
         ========================================================================= */}
      <div className="skills-group-block">
        <div className="skills-group-header">
          <div className="skills-title-row">
            <span className="skills-badge-icon" aria-hidden="true">
              <Code2 size={18} strokeWidth={2.4} />
            </span>
            <h3 className="skills-group-title">My Tech Stack</h3>
            <span className="skills-group-dash" aria-hidden="true" />
          </div>
          <span className="skills-group-subtitle">
            Technologies I use to build, learn, and experiment.
          </span>
        </div>

        {/* Open Tech Stack Grid */}
        <div className="tech-stack-open-grid" role="list" aria-label="Technology Stack">
          {techStack.map((tech) => (
            <div key={tech.name} className="tech-stack-item" role="listitem">
              <div className="tech-icon-box" aria-hidden="true">{tech.icon}</div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-divider" aria-hidden="true" />

      {/* =========================================================================
         3. Group 2: Tools & Platforms (Open Grid on Canvas Background)
         ========================================================================= */}
      <div className="skills-group-block">
        <div className="skills-group-header">
          <div className="skills-title-row">
            <span className="skills-badge-icon" aria-hidden="true">
              <Star size={18} strokeWidth={2.4} />
            </span>
            <h3 className="skills-group-title">Tools &amp; Platforms</h3>
            <span className="skills-group-dash" aria-hidden="true" />
          </div>
          <span className="skills-group-subtitle">
            Tools I use for development, design, and productivity.
          </span>
        </div>

        {/* Open Tools Grid */}
        <div className="tools-open-grid" role="list" aria-label="Tools and Platforms">
          {toolsAndPlatforms.map((tool) => (
            <div key={tool.name} className="tool-item" role="listitem">
              <div className="tool-icon-disc" aria-hidden="true">{tool.icon}</div>
              <span className="tool-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Boundary Divider below Skills */}
      <div className="skills-section-divider" aria-hidden="true" />
    </div>
  );
};
