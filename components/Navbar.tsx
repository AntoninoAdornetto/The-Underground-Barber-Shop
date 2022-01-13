import React from 'react';
import styles from '@styles/components/Navbar.module.scss';
import Logo from '@components/Logo';
import { navImageConfigs } from '@helpers/siteConfigs';

interface NavigationProps {
  navOptions: string[];
  heroSection?: React.ReactNode;
}

const Navbar: React.FC<NavigationProps> = ({ navOptions, heroSection }) => {
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
      <div className={styles.navWrapper}>
        <ul>
          <li>
            <Logo
              image={navImageConfigs.navigationLogo}
              height={navImageConfigs.height}
              width={navImageConfigs.width}
            />
          </li>
          {renderNavigation}
        </ul>
      </div>
      {heroSection ? heroSection : null}
    </nav>
  );
};

export default Navbar;
