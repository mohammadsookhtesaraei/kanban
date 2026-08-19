import { type ReactNode } from 'react';

import Board from '@/components/Board/Board';

import BoardProvider from '@/providers/BoardProvider';

import styles from './BoardPage.module.css';

const BoardPage = (): ReactNode => {
  return (
    <div className={styles.container}>
      <BoardProvider>
        <Board />
      </BoardProvider>
    </div>
  );
};
export default BoardPage;
