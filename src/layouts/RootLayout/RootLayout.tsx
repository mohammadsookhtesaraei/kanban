import { type ReactNode } from 'react';

import { Outlet } from 'react-router';

import Footer from '@/components/Footer/Footer';
import Sidebar from '@/components/Sidebar/Sidebar';

import BoardsProvider from '@/providers/BoardsProvider';

import styles from './Layout.module.css';

const RootLayout = (): ReactNode => {
  return (
    <BoardsProvider>
      <div className={styles['root-layout']}>
        <main>
          <Outlet />
        </main>
        <Sidebar />
        <Footer />
      </div>
    </BoardsProvider>
  );
};
export default RootLayout;
