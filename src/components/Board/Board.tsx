import { type ReactNode } from 'react';

import BoardLists from '@/components/Board/components/BoardLists/BoardLists';
import BoardTolbar from '@/components/Board/components/BoardTolbar/BoardTolbar';

import styles from './Board.module.css';

const Board = (): ReactNode => {
  return (
    <div className={styles.board}>
      <BoardTolbar />
      <BoardLists />
    </div>
  );
};
export default Board;
