import React from 'react';
import styles from '@styles/components/About.module.scss';

interface Props {
  bio: string;
  services: string[];
  sectionTitle: React.ReactNode;
}

const About: React.FC<Props> = ({ sectionTitle, bio, services }) => {
  return (
    <section id="#about" className={styles.aboutContainer}>
      <div className={styles.aboutTitle}>{sectionTitle}</div>
      <div className={styles.aboutBio}>
        <p>{bio}</p>
      </div>
      <div className={styles.aboutServices}>{services}</div>
    </section>
  );
};

export default About;
