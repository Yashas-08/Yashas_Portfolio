/**
 * Profile Configuration
 * 
 * Edit this file anytime to easily replace or update your profile picture,
 * hero portrait, and personal identity across the entire portfolio.
 */

export interface ProfileConfig {
  name: string;
  role: string;
  /**
   * Profile Avatar Image (Navbar Circle)
   * - Place any image into public/assets/ (e.g. '/assets/avatar.png')
   * - Or reference any external URL or new image file name
   */
  avatarImage: string;

  /**
   * Hero Portrait Image (Home Section Stage)
   * - Cutout or portrait displayed in front of the red moon & mountains
   */
  heroPortraitImage: string;
  heroPortraitFallback: string;

  /**
   * Verified Social Profiles
   */
  socialLinks: {
    github: string;
    linkedin: string;
    instagram: string;
  };
}

export const profileConfig: ProfileConfig = {
  name: 'K.A. YASHAS',
  role: 'AI & ML STUDENT · DEVELOPER · PROBLEM SOLVER',

  // 1. Profile Picture (Navbar Circle) - edit or replace file path here anytime
  avatarImage: '/assets/avatar.png',

  // 2. Hero Portrait (Home Stage) - edit or replace file path here anytime
  heroPortraitImage: '/assets/portrait-cinematic.png',
  heroPortraitFallback: '/assets/portrait-studio.jpg',

  // 3. Social Media URLs
  socialLinks: {
    github: 'https://github.com/Yashas-08',
    linkedin: 'https://www.linkedin.com/in/k-a-yashas-188103379',
    instagram: 'https://www.instagram.com/yashas____08/',
  },
};

