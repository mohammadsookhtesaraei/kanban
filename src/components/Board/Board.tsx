import { type ReactNode, useState } from 'react';

import IconButton from '@/components/IconButton/IconButton';
import List from '@/components/List/List';

import MingcuteAddLine from '@/icons/MingcuteAddLine';
import MingcuteEdit2Line from '@/icons/MingcuteEdit2Line';

import type { ListType } from '@/types/list';

import styles from './Board.module.css';

const Board = (): ReactNode => {
  const [todoList, setTodoList] = useState<ListType>({
    id: '1',
    title: '🔜 To Do',
    items: [
      { id: '1', title: 'set up backend' },
      { id: '2', title: 'create modal' },
      { id: '3', title: 'add tailwind' },
    ],
  });

  const [doingList] = useState<ListType>({
    id: '2',
    title: '🔨 Doing',
    items: [{ id: '1', title: 'set up backend' }],
  });

  const [doneList] = useState<ListType>({
    id: '3',
    title: '🎉 Done',
    items: [],
  });

  const handleButtonClick = (): void => {
    setTodoList((prev) => {
      const clone = [...prev.items];
      clone.splice(1, 1);
      return { ...prev, items: clone };
    });
  };

  return (
    <div className={styles.board}>
      <div className={styles.toolbar}>
        <div className={styles.title}>Board title</div>
        <div className={styles.actions}>
          <IconButton onClick={handleButtonClick}>
            <MingcuteEdit2Line />
          </IconButton>
          <IconButton>
            <MingcuteAddLine />
          </IconButton>
        </div>
      </div>

      <ul className={styles.lists}>
        <li>
          <List list={todoList} />
        </li>

        <li>
          <List list={doingList} />
        </li>

        <li>
          <List list={doneList} />
        </li>
      </ul>
    </div>
  );
};
export default Board;
