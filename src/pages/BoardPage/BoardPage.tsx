import { type ReactNode, use } from 'react';

import { useParams } from 'react-router';

import Board from '@/components/Board/Board';

import { BoardsContext } from '@/context/board-context';

import NotFoundPage from '@/pages/NotFound/NotFoundPage';

import BoardPageProvider from '@/providers/BoardPageProvider';
import DndProvider from '@/providers/DndProvider/DndProvider';
import ListsProvider from '@/providers/ListsProvider';

import styles from './BoardPage.module.css';

const BoardPage = (): ReactNode => {
  const { id } = useParams();
  const { boards } = use(BoardsContext);

  const board = boards.find((board) => board.id === id);

  if (!board) {
    return <NotFoundPage />;
  }

  return (
    <BoardPageProvider board={board}>
      <ListsProvider key={id}>
        <DndProvider>
          <div className={styles.container}>
            <Board />
          </div>
        </DndProvider>
      </ListsProvider>
    </BoardPageProvider>
  );
};
export default BoardPage;
