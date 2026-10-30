import React, { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { FeatureStrip } from './components/FeatureStrip/FeatureStrip';
import { AboutSection } from './components/About/AboutSection';
import { JourneySection } from './components/Journey/JourneySection';
import { ProjectsSection } from './components/Projects/ProjectsSection';
import { SkillsSection } from './components/Skills/SkillsSection';
import { ContactSection } from './components/Contact/ContactSection';
import { ConnectModal } from './components/Modal/ConnectModal';
import './App.css';

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('Home');
  const [isConnectOpen, setIsConnectOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Synchronize initial URL hash or anchor
  useEffect(() => {
    const handleInitialHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'about') {
        setActivePage('About');
        setTimeout(() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else if (hash === 'journey') {
        setActivePage('Journey');
        setTimeout(() => {
          document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else if (hash === 'projects') {
        setActivePage('Projects');
        setTimeout(() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else if (hash === 'skills') {
        setActivePage('Skills & Contact');
        setTimeout(() => {
          document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else if (hash === 'contact') {
        setActivePage('Skills & Contact');
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else if (hash === 'home') {
        setActivePage('Home');
      }
    };
    handleInitialHash();
  }, []);

  // Scroll-spy listener for seamless active link synchronization
  useEffect(() => {
    const handleScroll = () => {
      const aboutElem = document.getElementById('about');
      const journeyElem = document.getElementById('journey');
      const projectsElem = document.getElementById('projects');
      const skillsElem = document.getElementById('skills');
      const contactElem = document.getElementById('contact');
      if (!aboutElem) return;

      const contactTop = contactElem ? contactElem.getBoundingClientRect().top : Infinity;
      const skillsTop = skillsElem ? skillsElem.getBoundingClientRect().top : Infinity;
      const projectsTop = projectsElem ? projectsElem.getBoundingClientRect().top : Infinity;
      const journeyTop = journeyElem ? journeyElem.getBoundingClientRect().top : Infinity;
      const aboutTop = aboutElem.getBoundingClientRect().top;

      if (contactTop <= 220 || skillsTop <= 220) {
        setActivePage('Skills & Contact');
      } else if (projectsTop <= 220) {
        setActivePage('Projects');
      } else if (journeyTop <= 220) {
        setActivePage('Journey');
      } else if (aboutTop <= 220) {
        setActivePage('About');
      } else {
        setActivePage('Home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  const handleNavClick = (page: string) => {
    const p = page.toLowerCase();
    if (p === 'home') {
      setActivePage('Home');
      window.history.replaceState(null, '', '#home');
      const homeElem = document.getElementById('home');
      if (homeElem) {
        homeElem.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (p === 'about') {
      setActivePage('About');
      window.history.replaceState(null, '', '#about');
      const aboutElem = document.getElementById('about');
      if (aboutElem) {
        aboutElem.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (p === 'journey') {
      setActivePage('Journey');
      window.history.replaceState(null, '', '#journey');
      const journeyElem = document.getElementById('journey');
      if (journeyElem) {
        journeyElem.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (p === 'projects') {
      setActivePage('Projects');
      window.history.replaceState(null, '', '#projects');
      const projectsElem = document.getElementById('projects');
      if (projectsElem) {
        projectsElem.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (p.includes('skills') || p.includes('contact')) {
      setActivePage('Skills & Contact');
      window.history.replaceState(null, '', '#skills');
      const skillsElem = document.getElementById('skills');
      if (skillsElem) {
        skillsElem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      showToast(`The "${page}" section will be implemented in subsequent phases upon approval.`);
    }
  };

  const handleConnectClick = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', '#contact');
    } else {
      setIsConnectOpen(true);
    }
  };

  const handleViewWorkClick = () => {
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      const aboutElem = document.getElementById('about');
      aboutElem?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollDownClick = () => {
    const aboutElem = document.getElementById('about');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewSkillsClick = () => {
    const skillsElem = document.getElementById('skills');
    if (skillsElem) {
      skillsElem.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', '#skills');
    }
  };

  return (
    <div className="portfolio-app">
      {/* 1. Global Sticky Navigation Header */}
      <Header
        activePage={activePage}
        onNavClick={handleNavClick}
        onConnectClick={handleConnectClick}
      />

      {/* Main Continuous Content Area */}
      <main className="main-content" role="main">
        {/* Section 1: Home (Approved, visually unchanged) */}
        <section id="home" className="portfolio-section" aria-label="Home Section">
          <div className="home-editorial-card">
            <Hero
              onViewWorkClick={handleViewWorkClick}
              onConnectClick={handleConnectClick}
              onScrollDownClick={handleScrollDownClick}
            />
            <div id="highlights-section" className="feature-strip-anchor">
              <FeatureStrip />
            </div>
          </div>
        </section>

        {/* Section 2: About (Seamlessly continues below Home) */}
        <section id="about" className="portfolio-section" aria-label="About Section">
          <div className="about-section-wrapper">
            <AboutSection onSkillsClick={handleViewSkillsClick} />
          </div>
        </section>

        {/* Section 3: Journey (Seamlessly continues below About) */}
        <section id="journey" className="portfolio-section" aria-label="Journey Section">
          <div className="journey-section-wrapper">
            <JourneySection />
          </div>
        </section>

        {/* Section 4: Projects (Seamlessly continues below Journey) */}
        <section id="projects" className="portfolio-section" aria-label="Projects Section">
          <div className="projects-section-wrapper">
            <ProjectsSection />
          </div>
        </section>

        {/* Section 5: Skills (Technologies I work with) */}
        <section id="skills" className="portfolio-section" aria-label="Skills Section">
          <div className="skills-section-wrapper">
            <SkillsSection />
          </div>
        </section>

        {/* Section 6: Contact (Let's Connect) */}
        <section id="contact" className="portfolio-section" aria-label="Contact Section">
          <div className="contact-section-wrapper">
            <ContactSection />
          </div>
        </section>
      </main>

      {/* Subtle Editorial Footer */}
      <footer className="site-footer" role="contentinfo">
        <div className="footer-container">
          <p className="footer-text">
            © 2026 K.A. YASHAS • AI & ML STUDENT / DEVELOPER
          </p>
          <div className="footer-links">
            <a
              href="https://github.com/Yashas-08"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <span className="footer-dot">•</span>
            <a
              href="https://www.linkedin.com/in/k-a-yashas-188103379"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <span className="footer-dot">•</span>
            <a
              href="https://www.instagram.com/yashas____08/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Instagram
            </a>
            <span className="footer-dot">•</span>
            <a
              href="mailto:yashas1325143@gmail.com"
              className="footer-link"
            >
              Email
            </a>
          </div>
        </div>
      </footer>

      {/* Connect Modal (Fallback) */}
      <ConnectModal
        isOpen={isConnectOpen}
        onClose={() => setIsConnectOpen(false)}
      />

      {/* Phase Notification Toast */}
      {toastMessage && (
        <div className="toast-notification" role="status" aria-live="polite">
          <span className="toast-dot" />
          <p className="toast-text">{toastMessage}</p>
        </div>
      )}
    </div>
  );
};

export default App;
