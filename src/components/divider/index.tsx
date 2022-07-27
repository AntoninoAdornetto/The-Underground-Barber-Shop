import React from "react";
import Image from "next/image";

import Hero from "@/components/hero";
import styles from "./index.module.scss";

interface DividerProps {
  alt: string;
  heightPercent: number;
  src: string;
  id?: string;
  className?: string;
  title: string;
}

const Divider: React.FC<DividerProps> = ({ alt, className, heightPercent, id, src, title }) => {
  const generateHero = () => {
    return (
      <Image alt={alt} layout="fill" src={src} objectFit="cover" objectPosition="center" id={id} />
    );
  };
  return (
    <div
      className={styles.dividerContainer}
      style={{ position: "relative", height: `${heightPercent}vh` }}
    >
      <Hero className={className} hero={generateHero()} title={title} />
    </div>
  );
};

export default Divider;
