import React from 'react';
import { Monitor, Code, Lightbulb, GraduationCap } from 'lucide-react';
import './FeatureStrip.css';

export interface FeatureItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureStrip: React.FC = () => {
  const features: FeatureItem[] = [
    {
      id: 'ai-ml',
      icon: <Monitor size={24} strokeWidth={1.8} className="feature-icon" />,
      title: 'AI & ML',
      description: 'Exploring intelligent solutions',
    },
    {
      id: 'web-dev',
      icon: <Code size={24} strokeWidth={1.8} className="feature-icon" />,
      title: 'Web Development',
      description: 'Building modern applications',
    },
    {
      id: 'problem-solving',
      icon: <Lightbulb size={24} strokeWidth={1.8} className="feature-icon" />,
      title: 'Problem Solving',
      description: 'Turning ideas into products',
    },
    {
      id: 'education',
      icon: <GraduationCap size={24} strokeWidth={1.8} className="feature-icon" />,
      title: 'B.Tech CSE (AI & ML)',
      description: 'Yenepoya University, Bengaluru',
    },
  ];

  return (
    <section className="feature-strip" aria-label="Core Technical Highlights">
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div key={feature.id} className="feature-item-wrapper">
            <div className="feature-card">
              <div className="feature-icon-box" aria-hidden="true">
                {feature.icon}
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            </div>
            {index < features.length - 1 && (
              <div className="feature-divider" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
