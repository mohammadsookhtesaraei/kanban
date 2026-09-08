import { type ReactNode } from 'react';

import { Outlet } from 'react-router';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

import BoardsProvider from '@/providers/BoardsProvider';

import styles from './Layout.module.css';

const RootLayout = (): ReactNode => {
  return (
    <BoardsProvider>
      <div className={styles.layout}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </BoardsProvider>
  );
};
export default RootLayout;
