import { type ReactNode } from 'react';

import Board from '@/components/Board/Board';

import BoardProvider from '@/providers/BoardProvider';
import DndProvider from '@/providers/DndProvider/DndProvider';

import styles from './BoardPage.module.css';

const BoardPage = (): ReactNode => {
  return (
    <BoardProvider>
      <DndProvider>
        <div className={styles.container}>
          <Board />
        </div>
      </DndProvider>
    </BoardProvider>
  );
};
export default BoardPage;
