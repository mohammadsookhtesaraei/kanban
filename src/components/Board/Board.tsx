import { type ReactNode } from 'react';

import { SortableContext } from '@dnd-kit/sortable';

import BoardTolbar from '@/components/Board/components/BoardTolbar/BoardTolbar';
import List from '@/components/List/List';

import { useBoardContext } from '@/hooks/useBoardContext';

import styles from './Board.module.css';

const Board = (): ReactNode => {
  const { lists } = useBoardContext();

  return (
    <div className={styles.board}>
      <BoardTolbar />
      <SortableContext id="board" items={lists.map((item) => item.id)}>
        <ul className={styles.lists}>
          {lists.map((list, index) => (
            <li key={list.id}>
              <List list={list} listIndex={index} />
            </li>
          ))}
        </ul>
      </SortableContext>
    </div>
  );
};
export default Board;
