import React from 'react';
import styles from '@styles/components/Hero.module.scss';

interface Props {
  image: string;
  rgba1?: string; // 32,33,36,.829
  rgba2?: string; // 138,180,248,.274
}

const Hero: React.FC<Props> = ({ image, rgba1, rgba2 }) => {
  if (rgba1 && rgba2) {
    return (
      <div
        className={styles.heroDiv}
        style={{
          backgroundImage: `linear-gradient(to right bottom,rgba(${rgba1}),rgba(${rgba2})),url(${image})`,
        }}
      ></div>
    );
  }

  return (
    <div
      className={styles.heroDiv}
      style={{
        backgroundImage: `url(${image})`,
      }}
    ></div>
  );
};

export default Hero;
