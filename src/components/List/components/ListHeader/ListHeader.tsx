import { type ReactNode, useRef } from 'react';

import type { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';

import IconButton from '@/components/IconButton/IconButton';

import MingcuteAddLine from '@/icons/MingcuteAddLine';
import MingcuteDotsLine from '@/icons/MingcuteDotsLine';
import MingcuteEdit2Line from '@/icons/MingcuteEdit2Line';

import ListItemModal from '@/modals/ListItemModal/ListItemModal';
import ListModal from '@/modals/ListModal/ListModal';

import type { ListType } from '@/types/list';

import styles from './ListHeader.module.css';

type Props = {
  list: ListType;
  listIndex: number;
  listeners?: SyntheticListenerMap;
};

const ListHeader = ({ list, listIndex, listeners }: Props): ReactNode => {
  const listmodalRef = useRef<HTMLDialogElement | null>(null);
  const listItemmodalRef = useRef<HTMLDialogElement | null>(null);

  const handleEditListButtonClick = (): void => {
    listmodalRef.current?.showModal();
  };

  const handleCreateListItemButtonClick = (): void => {
    listItemmodalRef.current?.showModal();
  };
  return (
    <div className={styles.header}>
      <div className={styles.drag} {...listeners}>
        <MingcuteDotsLine />
        <div className={styles.title}>{list.title}</div>
      </div>
      <div className={styles.actions}>
        <IconButton onClick={handleEditListButtonClick}>
          <MingcuteEdit2Line />
        </IconButton>
        <IconButton onClick={handleCreateListItemButtonClick}>
          <MingcuteAddLine />
        </IconButton>
      </div>
      <ListModal
        modalRef={listmodalRef}
        listIndex={listIndex}
        defaultValues={list}
      />
      <ListItemModal modalRef={listItemmodalRef} listIndex={listIndex} />
    </div>
  );
};

export default ListHeader;
