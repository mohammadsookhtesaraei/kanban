import { type ReactNode, useRef } from 'react';

import { Link } from 'react-router';

import clsx from 'clsx';

import IconButton from '@/components/IconButton/IconButton';

import MingcuteEdit2Line from '@/icons/MingcuteEdit2Line';

import BoardModal from '@/modals/BoardModal/BoardModal';

import type { BoardType } from '@/types/board';

import styles from './BoardCard.module.css';

type Props = {
  board: BoardType;
};

const BoardCard = ({ board }: Props): ReactNode => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleCreateListButtonClick = (): void => {
    modalRef.current?.showModal();
  };

  return (
    <div className={clsx(styles['board-card'], board.color)}>
      <div className={styles.cover}></div>

      <div className={styles.content}>
        <div className={styles.header}>
          <Link to={`/board/${board.id}`} className={styles.title}>
            {board.title}
          </Link>
          <IconButton onClick={handleCreateListButtonClick}>
            <MingcuteEdit2Line />
          </IconButton>
        </div>

        <p className={styles.description}>{board.description}</p>
      </div>
      <BoardModal
        modalRef={modalRef}
        boardId={board.id}
        defaultValues={board}
      />
    </div>
  );
};
export default BoardCard;
