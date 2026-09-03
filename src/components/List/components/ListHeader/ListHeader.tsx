import { type ReactNode, useRef } from 'react';

import type { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';

import CreateListItemModal from '@/components/CreateListItemModal/CreateListItemModal';
import IconButton from '@/components/IconButton/IconButton';

import MingcuteAddLine from '@/icons/MingcuteAddLine';
import MingcuteDotsLine from '@/icons/MingcuteDotsLine';
import MingcuteMore1Line from '@/icons/MingcuteMore1Line';

import styles from './ListHeader.module.css';

type Props = {
  title: string;
  listIndex: number;
  listeners?: SyntheticListenerMap;
};

const ListHeader = ({ title, listIndex, listeners }: Props): ReactNode => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleOpenButtonClick = (): void => {
    modalRef.current?.showModal();
  };
  return (
    <div className={styles.header}>
      <div className={styles.drag} {...listeners}>
        <MingcuteDotsLine />
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.actions}>
        <IconButton onClick={handleOpenButtonClick}>
          <MingcuteAddLine />
        </IconButton>
        <IconButton>
          <MingcuteMore1Line />
        </IconButton>
      </div>
      <CreateListItemModal ref={modalRef} listIndex={listIndex} />
    </div>
  );
};

export default ListHeader;
