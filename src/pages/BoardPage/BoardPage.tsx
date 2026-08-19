import { type ReactNode } from 'react';

import Board from '@/components/Board/Board';

import ActiveItemProvider from '@/providers/ActiveItemProvider';
import BoardProvider from '@/providers/BoardProvider';

import styles from './BoardPage.module.css';

const BoardPage = (): ReactNode => {
  return (
    <div className={styles.container}>
      <BoardProvider>
        <ActiveItemProvider>
          <Board />
        </ActiveItemProvider>
      </BoardProvider>
    </div>
  );
};
export default BoardPage;
