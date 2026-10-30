import React from 'react';
import { Target, Layers, GraduationCap, Briefcase } from 'lucide-react';
import './FeatureStrip.css';

export interface HighlightItem {
  id: string;
  icon: React.ReactNode;
  primary: string;
  secondary: string;
}

export const FeatureStrip: React.FC = () => {
  const highlights: HighlightItem[] = [
    {
      id: 'projects',
      icon: <Target size={20} strokeWidth={2.2} />,
      primary: '5+',
      secondary: 'Projects',
    },
    {
      id: 'tech',
      icon: <Layers size={20} strokeWidth={2.2} />,
      primary: 'Technologies',
      secondary: 'AI/ML & Full Stack',
    },
    {
      id: 'learning',
      icon: <GraduationCap size={20} strokeWidth={2.2} />,
      primary: 'Continuous',
      secondary: 'Learning',
    },
    {
      id: 'opportunities',
      icon: <Briefcase size={20} strokeWidth={2.2} />,
      primary: 'Open to',
      secondary: 'Opportunities',
    },
  ];

  return (
    <div className="feature-strip-bar" aria-label="Key Profile Highlights">
      <div className="feature-strip-inner">
        {highlights.map((item, index) => (
          <div key={item.id} className="feature-strip-column">
            <div className="feature-strip-icon-circle" aria-hidden="true">
              {item.icon}
            </div>
            <div className="feature-strip-text">
              <span className="feature-strip-primary">{item.primary}</span>
              <span className="feature-strip-secondary">{item.secondary}</span>
            </div>
            {index < highlights.length - 1 && (
              <div className="feature-strip-divider" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
