import type { ReactNode } from 'react';

import { SortableContext } from '@dnd-kit/sortable';

import List from '@/components/List/List';

import { useBoardContext } from '@/hooks/useBoardContext';

import styles from './BoardLists.module.css';

const BoardLists = (): ReactNode => {
  const { lists } = useBoardContext();
  return (
    <SortableContext id="board" items={lists.map((item) => item.id)}>
      <ul className={styles.lists}>
        {lists.map((list, index) => (
          <li key={list.id}>
            <List list={list} listIndex={index} />
          </li>
        ))}
      </ul>
    </SortableContext>
  );
};

export default BoardLists;
