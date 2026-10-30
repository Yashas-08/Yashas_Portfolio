import React, { useState, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { profileConfig } from '../../data/profile';
import './Header.css';

interface HeaderProps {
  onConnectClick: () => void;
  onNavClick: (page: string) => void;
  activePage?: string;
  avatarSrc?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onConnectClick,
  onNavClick,
  activePage = 'Home',
  avatarSrc: propAvatarSrc,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize with prop, or saved browser preview override, or default from profileConfig
  const [currentAvatar, setCurrentAvatar] = useState<string>(() => {
    if (propAvatarSrc) return propAvatarSrc;
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_custom_avatar');
      if (saved) return saved;
    }
    return profileConfig.avatarImage;
  });

  const navLinks = ['Home', 'About', 'Journey', 'Projects', 'Skills & Contact'];

  const handleLinkClick = (page: string) => {
    onNavClick(page);
    setMobileMenuOpen(false);
  };

  const handleAvatarDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setCurrentAvatar(reader.result);
          try {
            localStorage.setItem('portfolio_custom_avatar', reader.result);
          } catch {
            // graceful fallback if localStorage quota exceeded
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <header className="site-header" role="banner">
      <div className="header-container">
        {/* Left: Brand Name & Profile Avatar */}
        <div className="header-brand">
          <a
            href="#home"
            className="brand-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('Home');
            }}
            aria-label={`${profileConfig.name} Home`}
          >
            <div
              className="brand-avatar-wrapper"
              title={`${profileConfig.name} Profile Picture (Double-click anytime to upload and preview a new photo)`}
              onDoubleClick={handleAvatarDoubleClick}
            >
              <img
                src={currentAvatar}
                alt={profileConfig.name}
                width="40"
                height="40"
                loading="eager"
                className="brand-avatar-img"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (currentAvatar !== profileConfig.avatarImage) {
                    setCurrentAvatar(profileConfig.avatarImage);
                  } else {
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add('avatar-fallback');
                      parent.setAttribute('data-initials', 'KY');
                    }
                  }
                }}
              />
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                aria-label="Upload new profile picture"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </div>
            <span className="brand-name">{profileConfig.name}</span>
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

        {/* Right: Let's Connect CTA */}
        <div className="header-actions">
          <button
            type="button"
            className="cta-connect-btn"
            onClick={onConnectClick}
            aria-label="Let's Connect"
          >
            <span>Let&apos;s Connect</span>
            <ArrowRight size={15} strokeWidth={2.4} className="connect-btn-arrow" />
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
                <span>Let&apos;s Connect</span>
                <ArrowRight size={15} strokeWidth={2.4} className="connect-btn-arrow" />
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
