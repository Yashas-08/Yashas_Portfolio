import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { FeatureStrip } from './components/FeatureStrip/FeatureStrip';
import { ConnectModal } from './components/Modal/ConnectModal';
import './App.css';

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('Home');
  const [isConnectOpen, setIsConnectOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  const handleNavClick = (page: string) => {
    if (page.toLowerCase() === 'home') {
      setActivePage('Home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page.toLowerCase() === 'contact') {
      setIsConnectOpen(true);
    } else {
      showToast(
        `Phase 1 Scope: Only the Home page is currently active. The "${page}" page will be implemented in subsequent phases upon approval.`
      );
    }
  };

  const handleViewWorkClick = () => {
    // Scroll down smoothly to feature highlights or trigger projects notification
    const stripElem = document.getElementById('highlights-section');
    if (stripElem) {
      stripElem.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(
      'Phase 1: Featured Projects (EliteRoutes, RepPulse, Hostel Flow) will be built in Phase 4.'
    );
  };

  const handleScrollDownClick = () => {
    const stripElem = document.getElementById('highlights-section');
    if (stripElem) {
      stripElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app" id="home">
      {/* 1. Global Navigation Header */}
      <Header
        activePage={activePage}
        onNavClick={handleNavClick}
        onConnectClick={() => setIsConnectOpen(true)}
      />

      {/* Main Content Area */}
      <main className="main-content" role="main">
        {/* 2. Hero Section & Integrated Feature Strip */}
        <div className="home-editorial-card">
          <Hero
            onViewWorkClick={handleViewWorkClick}
            onScrollDownClick={handleScrollDownClick}
          />
          <div id="highlights-section" className="feature-strip-anchor">
            <FeatureStrip />
          </div>
        </div>
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
              href="https://www.linkedin.com/in/yashas-k-a/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* Connect Modal */}
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
