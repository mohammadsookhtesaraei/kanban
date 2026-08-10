import type { ReactNode } from 'react';

import { Outlet } from 'react-router';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

import styles from './Layout.module.css';

const RootLayout = (): ReactNode => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default RootLayout;
