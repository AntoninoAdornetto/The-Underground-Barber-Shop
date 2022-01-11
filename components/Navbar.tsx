import React from 'react';
import styles from '@/styles/components/Navbar.module.scss';
import Logo from '@/components/Logo';
import { navImageConfigs } from '@/helpers/siteConfigs';

interface NavigationProps {
  navOptions: string[];
}

const Navbar: React.FC<NavigationProps> = ({ navOptions }) => {
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
        <li>
          <Logo
            image={navImageConfigs.navigationLogo}
            height={navImageConfigs.height}
            width={navImageConfigs.width}
          />
        </li>
        {renderNavigation}
      </ul>
    </nav>
  );
};

export default Navbar;
