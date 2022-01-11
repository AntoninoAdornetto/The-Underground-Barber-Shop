import React, { FC } from 'react';
import styles from '@/styles/components/Navbar.module.scss';

interface NavigationProps {
  navOptions: string[];
  logo: FC;
}

const Navbar: FC<NavigationProps> = ({ navOptions, logo }) => {
  const renderNavigation = navOptions.map((btn) => {
    return (
      <li key={btn}>
        <a className={styles.navAnchor} href={`#${btn.toLowerCase()}`}>
          {btn}
        </a>
      </li>
    );
  });

  return (
    <nav className={styles.navContainer}>
      <ul>
        <li>{logo}</li>
        {renderNavigation}
      </ul>
    </nav>
  );
};

export default Navbar;
