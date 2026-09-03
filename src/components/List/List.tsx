import { type ReactNode } from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import ListHeader from '@/components/List/components/ListHeader/ListHeader';
import ListItems from '@/components/List/components/ListItems/ListItems';

import type { ListType } from '@/types/list';

import styles from './List.module.css';

type Props = {
  presentational?: boolean;
  listIndex: number;
  list: ListType;
};

const List = ({ list, listIndex, presentational }: Props): ReactNode => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: list.id,
    data: { isList: true, listIndex, list },
  });

  return (
    <div
      ref={setNodeRef}
      className={styles.list}
      style={{
        opacity: isDragging ? '0.5' : undefined,
        transform: CSS.Translate.toString(transform),
        transition,
      }}
      {...attributes}
    >
      <ListHeader
        listeners={listeners}
        title={list.title}
        listIndex={listIndex}
      />
      <ListItems
        presentational={presentational}
        list={list}
        listIndex={listIndex}
      />
    </div>
  );
};
export default List;
