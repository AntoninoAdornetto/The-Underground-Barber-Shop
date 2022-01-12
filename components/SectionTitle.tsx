import React from 'react';
import styles from '@styles/components/SectionTitle.module.scss';
import Logo from './Logo';

interface Props {
  text: string[];
  colors: string[];
  logo?: React.ReactNode;
}

const SectionTitle: React.FC<Props> = ({ text, colors, logo }) => {
  const renderText = text.map((word, i) => {
    let index: number = i++;
    if (index % 2 === 0) {
      <span style={{ color: colors[0] }}>{word}</span>;
    }

    if (index % 2 !== 0) {
      <span style={{ color: colors[1] }}>{word}</span>;
    }
  });

  return (
    <div className={styles.sectionTitleContainer}>
      {renderText}
      {logo ? Logo : null}
    </div>
  );
};

export default SectionTitle;
