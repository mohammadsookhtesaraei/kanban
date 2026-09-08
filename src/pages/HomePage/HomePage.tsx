import { type ReactNode, use, useRef } from 'react';

import BoardCard from '@/components/BoardCard/BoardCard';
import Button from '@/components/Button/Button';

import { BoardsContext } from '@/context/board-context';

import BoardModal from '@/modals/BoardModal/BoardModal';

import styles from './HomePage.module.css';

const HomePage = (): ReactNode => {
  const { boards } = use(BoardsContext);

  const refModal = useRef<HTMLDialogElement>(null);

  const handleCreateBoardButtonClick = (): void => {
    refModal.current?.showModal();
  };

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <h1>Boards</h1>
        <Button
          variant="solid"
          color="primary"
          onClick={handleCreateBoardButtonClick}
        >
          create
        </Button>
      </div>

      <ul className={styles.boards}>
        {boards.map((item) => (
          <li key={item.id}>
            <BoardCard board={item} />
          </li>
        ))}
      </ul>
      <BoardModal modalRef={refModal} />
    </div>
  );
};
export default HomePage;
