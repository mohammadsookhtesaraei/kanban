import type { ReactNode } from 'react';

import Board from '@/components/Board/Board';

import styles from './BoardPage.module.css';

const BoardPage = (): ReactNode => {
  return (
    <div className={styles.container}>
      <Board />
    </div>
  );
};
export default BoardPage;
