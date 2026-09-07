import { type ReactNode, use, useRef } from 'react';

import IconButton from '@/components/IconButton/IconButton';

import { BoardPageContext } from '@/context/board-page-context';

import MingcuteAddLine from '@/icons/MingcuteAddLine';
import MingcuteEdit2Line from '@/icons/MingcuteEdit2Line';

import BoardModal from '@/modals/BoardModal/BoardModal';
import ListModal from '@/modals/ListModal/ListModal';

import styles from './BoardTolbar.module.css';

const BoardTolbar = (): ReactNode => {
  const { board } = use(BoardPageContext);

  const ListmodalRef = useRef<HTMLDialogElement>(null);
  const boardmodalRef = useRef<HTMLDialogElement>(null);

  const handleEditBoardButtonClick = (): void => {
    boardmodalRef.current?.showModal();
  };
  const handleCreateListButtonClick = (): void => {
    ListmodalRef.current?.showModal();
  };

  return (
    <div className={styles.toolbar}>
      <div className={styles.title}>Board title</div>
      <div className={styles.actions}>
        <IconButton onClick={handleEditBoardButtonClick}>
          <MingcuteEdit2Line />
        </IconButton>
        <IconButton onClick={handleCreateListButtonClick}>
          {' '}
          <MingcuteAddLine />
        </IconButton>
      </div>
      <ListModal modalRef={ListmodalRef} />
      <BoardModal
        modalRef={boardmodalRef}
        boardId={board.id}
        defaultValues={board}
      />
    </div>
  );
};

export default BoardTolbar;
