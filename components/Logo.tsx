import React, { FC } from 'react';
import Image from 'next/image';

interface LogoProps {
  image: string;
  width: number | null;
  height: number | null;
}

const Logo: FC<LogoProps> = ({ image, width, height }) => {
  return (
    <Image src={image} alt="logo" width={`${width}px`} height={`${height}px`} />
  );
};

export default Logo;
