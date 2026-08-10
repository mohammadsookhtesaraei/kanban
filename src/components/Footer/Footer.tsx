import type { ReactNode } from 'react';

import styles from './Footer.module.css';

const Footer = (): ReactNode => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>Copyright &copy; {year} kanban.ir</footer>
  );
};
export default Footer;
