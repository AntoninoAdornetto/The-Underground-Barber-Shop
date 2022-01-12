import React, { useState } from 'react';
import styles from '@styles/components/Button.module.scss';

interface Props {
  text: string;
  hrefVal: string;
  bgColor: string;
  color: string;
  width: number;
  height: number;
  fontSize: number;
  target?: boolean;
}

const Button: React.FC<Props> = ({ text, hrefVal, target, bgColor, color, width, height, fontSize }) => {
  const [hoverColor, setHoverColor] = useState<string>(color);
  const [hoverBGColor, sethoverBGColor] = useState<string>(bgColor);

  const onMouseOver = (): void => {
    return sethoverBGColor(color), setHoverColor(bgColor);
  };

  const onMouseLeave = (): void => {
    return sethoverBGColor(bgColor), setHoverColor(color);
  };

  if (target) {
    return (
      <a
        onMouseEnter={onMouseOver}
        onMouseLeave={onMouseLeave}
        className={styles.pageButton}
        style={{
          backgroundColor: hoverBGColor,
          color: hoverColor,
          height: `${height}px`,
          width: `${width}px`,
          fontSize: `${fontSize}rem`,
        }}
        href={hrefVal}
        target="_blank"
        rel="norereffer"
      >
        {text}
      </a>
    );
  }

  return (
    <a
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
      className={styles.pageButton}
      style={{
        backgroundColor: hoverBGColor,
        color: hoverColor,
        height: `${height}px`,
        width: `${width}px`,
        fontSize: `${fontSize}rem`,
      }}
      href={hrefVal}
    >
      {text}
    </a>
  );
};

export default Button;
