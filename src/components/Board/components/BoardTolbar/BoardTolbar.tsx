import { type ReactNode, useRef } from 'react';

import IconButton from '@/components/IconButton/IconButton';

import MingcuteAddLine from '@/icons/MingcuteAddLine';
import MingcuteEdit2Line from '@/icons/MingcuteEdit2Line';

import ListModal from '@/modals/ListModal/ListModal';

import styles from './BoardTolbar.module.css';

const BoardTolbar = (): ReactNode => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleCreateListButtonClick = (): void => {
    modalRef.current?.showModal();
  };

  return (
    <div className={styles.toolbar}>
      <div className={styles.title}>Board title</div>
      <div className={styles.actions}>
        <IconButton>
          <MingcuteEdit2Line />
        </IconButton>
        <IconButton onClick={handleCreateListButtonClick}>
          {' '}
          <MingcuteAddLine />
        </IconButton>
      </div>
      <ListModal modalRef={modalRef} />
    </div>
  );
};

export default BoardTolbar;
