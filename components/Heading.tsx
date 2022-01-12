import React from 'react';
import styles from '@styles/components/Heading.module.scss';

export interface Props {
  mainText: string;
  subText?: string;
}

const Heading: React.FC<Props> = ({ mainText, subText }) => {
  return (
    <div className={styles.headingDiv}>
      <div className={styles.headingTop}>
        <h1>{mainText}</h1>
      </div>
      <div className={styles.headingBottom}>
        <span>{subText}</span>
      </div>
    </div>
  );
};

export default Heading;
