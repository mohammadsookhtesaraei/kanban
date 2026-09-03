import type { ReactNode } from 'react';

import { useDroppable } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';

import ListItem from '@/components/ListItem/ListItem';

import type { ListType } from '@/types/list';

import styles from './ListItems.module.css';

type Props = {
  listIndex: number;
  list: ListType;
  presentational?: boolean;
};

const ListItems = ({ listIndex, list, presentational }: Props): ReactNode => {
  const { setNodeRef } = useDroppable({
    id: list.id,
    data: { isList: true, listIndex, list },
  });

  return (
    <SortableContext id={list.id} items={list.items.map((item) => item.id)}>
      <ul ref={setNodeRef} className={styles.items}>
        {list.items.map((item, index) => (
          <li key={item.id}>
            <ListItem
              presentational={presentational}
              listIndex={listIndex}
              itemIndex={index}
              item={item}
            />
          </li>
        ))}
      </ul>
    </SortableContext>
  );
};

export default ListItems;
