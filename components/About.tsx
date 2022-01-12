import React from 'react';
import styles from '@styles/components/About.module.scss';

interface Props {
  sectionTitle: React.ReactNode;
  bio: string;
  services: string[];
}

const About: React.FC<Props> = ({ sectionTitle, bio, services }) => {
  // Section title
  // Icon
  // Bio Text
  // List items of services
  return (
    <section id="#about" className={styles.aboutSectionContainer}>
      <div className={styles.titleContainer}>{sectionTitle}</div>
      <div className={styles.bioContainer}>{bio}</div>
      <div className={styles.servicesContainer}>{services}</div>
    </section>
  );
};

export default About;
