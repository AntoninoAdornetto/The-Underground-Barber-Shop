import React from 'react';
import styles from '@styles/components/SectionTitle.module.scss';

interface Props {
  text: string[];
  colors: string[];
  fontSize: number;
  logo?: React.ReactNode;
}

const SectionTitle: React.FC<Props> = ({ text, colors, logo, fontSize }) => {
  const renderText = text.map((word, i) => {
    let index: number = i + 1;
    if (index % 2 === 0) {
      return (
        <span key={word} style={{ color: colors[0], fontSize: `${fontSize}rem` }}>
          {word}
        </span>
      );
    }

    if (index % 2 !== 0) {
      return (
        <span key={word} style={{ color: colors[1], fontSize: `${fontSize}rem` }}>
          {word}
        </span>
      );
    }
  });

  return (
    <div className={styles.sectionTitleContainer}>
      {renderText}
      {logo ? logo : null}
    </div>
  );
};

export default SectionTitle;
