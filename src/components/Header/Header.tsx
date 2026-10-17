import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  onConnectClick: () => void;
  onNavClick: (page: string) => void;
  activePage?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onConnectClick,
  onNavClick,
  activePage = 'Home',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Journey', 'Projects', 'Skills & Contact'];

  const handleLinkClick = (page: string) => {
    onNavClick(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header" role="banner">
      <div className="header-container">
        {/* Left: Avatar circle + Name */}
        <div className="header-brand">
          <a
            href="#home"
            className="brand-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('Home');
            }}
            aria-label="K.A. YASHAS Home"
          >
            <div className="brand-avatar-wrapper" title="K.A. Yashas Avatar">
              <img
                src="/assets/avatar.png"
                alt="K.A. Yashas"
                className="brand-avatar-img"
                onError={(e) => {
                  // Fallback to stylized monogram if image is not yet available
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.classList.add('avatar-fallback');
                    parent.setAttribute('data-initials', 'KY');
                  }
                }}
              />
            </div>
            <span className="brand-name">K.A. YASHAS</span>
          </a>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive = activePage.toLowerCase() === link.toLowerCase();
              return (
                <li key={link} className="nav-item">
                  <button
                    type="button"
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => handleLinkClick(link)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{link}</span>
                    {isActive && <span className="active-indicator" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: Connect CTA */}
        <div className="header-actions">
          <button
            type="button"
            className="cta-connect-btn"
            onClick={onConnectClick}
            aria-label="Connect"
          >
            <span>Connect</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => {
              const isActive = activePage.toLowerCase() === link.toLowerCase();
              return (
                <li key={link} className="mobile-nav-item">
                  <button
                    type="button"
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => handleLinkClick(link)}
                  >
                    <span>{link}</span>
                    {isActive && <span className="mobile-active-dot" />}
                  </button>
                </li>
              );
            })}
            <li className="mobile-nav-item mobile-cta-item">
              <button
                type="button"
                className="cta-connect-btn mobile-cta-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onConnectClick();
                }}
              >
                <span>Connect</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
