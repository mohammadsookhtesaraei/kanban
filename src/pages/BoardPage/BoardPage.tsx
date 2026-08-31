import { type ReactNode } from 'react';

import Board from '@/components/Board/Board';

import BoardProvider from '@/providers/BoardProvider';

import styles from './BoardPage.module.css';

const BoardPage = (): ReactNode => {
  return (
    <BoardProvider>
      <div className={styles.container}>
        <Board />
      </div>
    </BoardProvider>
  );
};
export default BoardPage;
