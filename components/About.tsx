import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import styles from '@styles/components/About.module.scss';

interface Props {
  bio: string;
  services: string[];
  sectionTitle: React.ReactNode;
}

const About: React.FC<Props> = ({ sectionTitle, bio, services }) => {
  const renderServices: React.ReactNode = services.map((service) => {
    return (
      <li>
        <FontAwesomeIcon style={{ width: '1rem' }} icon={faCaretRight} />
        <p>{service}</p>
      </li>
    );
  });
  return (
    <section id="about" className={styles.aboutContainer}>
      <div className={styles.aboutTitle}>{sectionTitle}</div>
      <div className={styles.aboutBio}>
        <p>{bio}</p>
      </div>
      <div className={styles.aboutServices}>
        <ul>{renderServices}</ul>
      </div>
    </section>
  );
};

export default About;
