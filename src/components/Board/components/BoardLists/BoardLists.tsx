import type { ReactNode } from 'react';

import { SortableContext } from '@dnd-kit/sortable';

import List from '@/components/List/List';

import { useListsContext } from '@/hooks/useListsContext';

import styles from './BoardLists.module.css';

const BoardLists = (): ReactNode => {
  const { lists } = useListsContext();
  console.log(lists);
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
