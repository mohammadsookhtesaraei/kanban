import { type ReactNode } from 'react';

import Board from '@/components/Board/Board';

import ActiveItemProvider from '@/providers/ActiveItemProvider';
import BoardProvider from '@/providers/BoardProvider';

import styles from './BoardPage.module.css';

const BoardPage = (): ReactNode => {
  return (
    <BoardProvider>
      <ActiveItemProvider>
        <div className={styles.container}>
          <Board />
        </div>
      </ActiveItemProvider>
    </BoardProvider>
  );
};
export default BoardPage;
