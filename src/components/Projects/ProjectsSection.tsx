import React from 'react';
import {
  ExternalLink,
  Plane,
  Wallet,
  Compass,
  Star,
} from 'lucide-react';
import { projects } from '../../data/projects';
import './ProjectsSection.css';

const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const ProjectsSection: React.FC = () => {
  const featuredProject = projects.find((p) => p.isFeatured) || projects[0];
  const secondaryProjects = projects.filter((p) => !p.isFeatured);

  const getFeatureIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Plane size={16} strokeWidth={2.2} className="feature-icon" />;
      case 1:
        return <Wallet size={16} strokeWidth={2.2} className="feature-icon" />;
      case 2:
        return <Compass size={16} strokeWidth={2.2} className="feature-icon" />;
      case 3:
      default:
        return <Star size={16} strokeWidth={2.2} className="feature-icon" />;
    }
  };

  return (
    <div className="projects-section-container">
      {/* =========================================================================
         1. Section Introduction (Open Editorial Header)
         ========================================================================= */}
      <div className="projects-intro-block">
        <span className="projects-eyebrow">SELECTED WORKS</span>
        <h2 className="projects-main-title">REAL IDEAS, REAL IMPACT</h2>
        <p className="projects-lead-desc">
          A collection of projects I’ve built to solve real-world problems,
          explore new technologies, and turn ideas into meaningful products.
        </p>
      </div>

      <div className="project-separator" aria-hidden="true" />

      {/* =========================================================================
         2. Featured Project Showcase — EliteRoutes (Large Image-Led Presentation)
         ========================================================================= */}
      {featuredProject && (
        <article
          className="featured-showcase"
          aria-label={`Featured Project: ${featuredProject.title}`}
        >
          <div className="featured-showcase-grid">
            {/* Left/Showcase: Prominent Large Real Screenshot */}
            <div className="showcase-visual-frame">
              <img
                src={featuredProject.imageSrc}
                alt={featuredProject.imageAlt}
                className="showcase-img"
                loading="lazy"
              />
            </div>

            {/* Right: Editorial Details, Features, Tech Stack & Actions */}
            <div className="showcase-details-col">
              <span className="showcase-badge-pill">
                {featuredProject.featuredBadge || 'Featured Project'}
              </span>

              <h3 className="showcase-title">{featuredProject.title}</h3>
              <p className="showcase-category">{featuredProject.category}</p>

              <p className="showcase-description">
                {featuredProject.description}
              </p>

              {/* Key Features Callout */}
              {featuredProject.features && featuredProject.features.length > 0 && (
                <div className="showcase-features-list" aria-label="Key features">
                  {featuredProject.features.map((feat, idx) => (
                    <div key={feat.text} className="showcase-feature-row">
                      <span className="showcase-feature-icon" aria-hidden="true">
                        {getFeatureIcon(idx)}
                      </span>
                      <span className="showcase-feature-text">{feat.text}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Technologies */}
              <div className="showcase-tech-tags" aria-label="Technologies used">
                {featuredProject.technologies.map((tech) => (
                  <span key={tech} className="showcase-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="showcase-actions-row">
                {featuredProject.liveDemoUrl && featuredProject.liveDemoUrl.trim().length > 0 ? (
                  <a
                    href={featuredProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-showcase-demo"
                    aria-label={`Live Demo for ${featuredProject.title}`}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={15} strokeWidth={2.4} />
                  </a>
                ) : (
                  <button
                    type="button"
                    className="btn-showcase-demo btn-demo-disabled"
                    disabled
                    aria-label={`Live Demo coming soon for ${featuredProject.title}`}
                    title="Live demo deployment is being configured"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={15} strokeWidth={2.4} />
                  </button>
                )}

                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-showcase-code"
                    aria-label={`View ${featuredProject.title} source code on GitHub`}
                  >
                    <span>View Code</span>
                    <GithubIcon size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>
      )}

      {/* =========================================================================
         3. Secondary Projects — Alternating Image/Text Showcases
         ========================================================================= */}
      {secondaryProjects.map((project, index) => (
        <React.Fragment key={project.id}>
          <div className="project-separator" aria-hidden="true" />
          <article
            className={`secondary-showcase ${index % 2 === 0 ? 'image-right' : 'image-left'}`}
            aria-label={`Project: ${project.title}`}
          >
            <div className="secondary-showcase-grid">
              {/* Visual Frame */}
              <div className="showcase-visual-frame secondary-visual">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="showcase-img"
                  loading="lazy"
                />
              </div>

              {/* Details & Actions */}
              <div className="showcase-details-col">
                <span className="secondary-category-pill">{project.category}</span>
                <h3 className="showcase-title">{project.title}</h3>

                <p className="showcase-description">{project.description}</p>

                {/* Technologies */}
                <div className="showcase-tech-tags" aria-label="Technologies used">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="showcase-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="showcase-actions-row">
                  {project.liveDemoUrl && project.liveDemoUrl.trim().length > 0 ? (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-showcase-demo"
                      aria-label={`Live Demo for ${project.title}`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={15} strokeWidth={2.4} />
                    </a>
                  ) : null}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-showcase-code"
                      aria-label={`View ${project.title} repository on GitHub`}
                    >
                      <span>View Code</span>
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        </React.Fragment>
      ))}
    </div>
  );
};
