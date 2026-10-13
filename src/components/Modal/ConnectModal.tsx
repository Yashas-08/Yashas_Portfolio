import React, { useEffect } from 'react';
import { X, Mail, ExternalLink } from 'lucide-react';
import './ConnectModal.css';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div className="modal-header">
          <span className="modal-eyebrow">GET IN TOUCH</span>
          <h2 id="modal-title" className="modal-title">
            LET'S CONNECT
          </h2>
          <p className="modal-subtitle">
            Interested in collaboration, engineering discussions, or software opportunities?
            Reach out through my verified channels below.
          </p>
        </div>

        <div className="modal-links-list">
          {/* Email */}
          <a
            href="mailto:yashas.k.a08@gmail.com"
            className="modal-link-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="modal-link-icon-box">
              <Mail size={20} />
            </div>
            <div className="modal-link-info">
              <span className="modal-link-label">Email Direct</span>
              <span className="modal-link-value">yashas.k.a08@gmail.com</span>
            </div>
            <ExternalLink size={16} className="modal-link-external" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yashas-k-a/"
            className="modal-link-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="modal-link-icon-box">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
            </div>
            <div className="modal-link-info">
              <span className="modal-link-label">LinkedIn</span>
              <span className="modal-link-value">linkedin.com/in/yashas-k-a</span>
            </div>
            <ExternalLink size={16} className="modal-link-external" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Yashas-08"
            className="modal-link-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="modal-link-icon-box">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </div>
            <div className="modal-link-info">
              <span className="modal-link-label">GitHub</span>
              <span className="modal-link-value">github.com/Yashas-08</span>
            </div>
            <ExternalLink size={16} className="modal-link-external" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/yashas_08_/"
            className="modal-link-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="modal-link-icon-box">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <div className="modal-link-info">
              <span className="modal-link-label">Instagram</span>
              <span className="modal-link-value">@yashas_08_</span>
            </div>
            <ExternalLink size={16} className="modal-link-external" />
          </a>
        </div>
      </div>
    </div>
  );
};
