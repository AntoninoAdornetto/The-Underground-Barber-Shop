import React, { FC } from 'react';
import Logo from '@/components/Logo';
import { navImageConfigs } from '@/helpers/siteConfigs';
import styles from '@/styles/components/Navbar.module.scss';

interface NavigationProps {
  navOptions: string[];
}

const Navbar: FC<NavigationProps> = ({ navOptions }) => {
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
            width={navImageConfigs.height}
          />
        </li>
        {renderNavigation}
      </ul>
    </nav>
  );
};

export default Navbar;
