import { type ReactNode, useRef } from 'react';

import Board from '@/components/Board/Board';
import Button from '@/components/Button/Button';
import CreateListItemModal from '@/components/CreateListItemModal/CreateListItemModal';

import ActiveItemProvider from '@/providers/ActiveItemProvider';
import BoardProvider from '@/providers/BoardProvider';

import styles from './BoardPage.module.css';

const BoardPage = (): ReactNode => {
  const ref = useRef<HTMLDialogElement | null>(null);

  const handleOpenButtonClick = (): void => {
    ref.current?.showModal();
  };
  return (
    <BoardProvider>
      <ActiveItemProvider>
        <div className={styles.container}>
          <Button color="primary" onClick={handleOpenButtonClick}>
            click
          </Button>
          <Board />
          <CreateListItemModal ref={ref} listId="1" />
        </div>
      </ActiveItemProvider>
    </BoardProvider>
  );
};
export default BoardPage;
