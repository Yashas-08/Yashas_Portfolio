import React from 'react';
import { AboutSection } from './AboutSection';

interface AboutPageProps {
  onSkillsClick?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onSkillsClick }) => {
  return <AboutSection onSkillsClick={onSkillsClick} />;
};

export { AboutSection };
