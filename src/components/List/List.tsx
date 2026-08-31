import { type ReactNode, useRef } from 'react';

import { useDroppable } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';

import CreateListItemModal from '@/components/CreateListItemModal/CreateListItemModal';
import IconButton from '@/components/IconButton/IconButton';
import ListItem from '@/components/ListItem/ListItem';

import MingcuteAddLine from '@/icons/MingcuteAddLine';
import MingcuteMore1Line from '@/icons/MingcuteMore1Line';

import type { ListType } from '@/types/list';

import styles from './List.module.css';

type Props = {
  listIndex: number;
  list: ListType;
};

const List = ({ list, listIndex }: Props): ReactNode => {
  const { id, title, items } = list;

  const { setNodeRef } = useDroppable({
    id: id,
    data: { isList: true, listIndex, list },
  });

  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleOpenButtonClick = (): void => {
    modalRef.current?.showModal();
  };
  return (
    <div key={id} className={styles.list}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.actions}>
          <IconButton onClick={handleOpenButtonClick}>
            <MingcuteAddLine />
          </IconButton>
          <IconButton>
            <MingcuteMore1Line />
          </IconButton>
        </div>
      </div>
      <SortableContext id={id} items={items.map((item) => item.id)}>
        <ul ref={setNodeRef} className={styles.items}>
          {/* we should pass listId as props to ListItem for setState activeListid  */}
          {items.map((item, index) => (
            <li key={item.id}>
              <ListItem listIndex={listIndex} itemIndex={index} item={item} />
            </li>
          ))}
        </ul>
      </SortableContext>
      <CreateListItemModal ref={modalRef} listIndex={listIndex} />
    </div>
  );
};
export default List;
