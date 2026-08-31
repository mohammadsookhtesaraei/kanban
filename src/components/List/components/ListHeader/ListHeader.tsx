import { type ReactNode, useRef } from 'react';

import CreateListItemModal from '@/components/CreateListItemModal/CreateListItemModal';
import IconButton from '@/components/IconButton/IconButton';

import MingcuteAddLine from '@/icons/MingcuteAddLine';
import MingcuteMore1Line from '@/icons/MingcuteMore1Line';

import styles from './ListHeader.module.css';

type Props = {
  title: string;
  listIndex: number;
};

const ListHeader = ({ title, listIndex }: Props): ReactNode => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleOpenButtonClick = (): void => {
    modalRef.current?.showModal();
  };
  return (
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
      <CreateListItemModal ref={modalRef} listIndex={listIndex} />
    </div>
  );
};

export default ListHeader;
