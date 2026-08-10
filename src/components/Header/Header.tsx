import type { ReactNode } from 'react';

import { Link } from 'react-router';

import styles from './Header.module.css';

const Header = (): ReactNode => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to={'/'}>
        <img src="/logo.svg" alt="logo kanban" />
      </Link>
    </header>
  );
};
export default Header;
