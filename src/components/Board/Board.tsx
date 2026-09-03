import { type ReactNode } from 'react';

import { SortableContext } from '@dnd-kit/sortable';

import IconButton from '@/components/IconButton/IconButton';
import List from '@/components/List/List';

import { useBoardContext } from '@/hooks/useBoardContext';

import MingcuteAddLine from '@/icons/MingcuteAddLine';
import MingcuteEdit2Line from '@/icons/MingcuteEdit2Line';

import styles from './Board.module.css';

const Board = (): ReactNode => {
  const { lists } = useBoardContext();

  return (
    <div className={styles.board}>
      <div className={styles.toolbar}>
        <div className={styles.title}>Board title</div>
        <div className={styles.actions}>
          <IconButton>
            <MingcuteEdit2Line />
          </IconButton>
          <IconButton>
            {' '}
            <MingcuteAddLine />
          </IconButton>
        </div>
      </div>

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
