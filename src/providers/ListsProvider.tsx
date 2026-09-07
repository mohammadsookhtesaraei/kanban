import { type PropsWithChildren, type ReactNode, use, useEffect } from 'react';

import { useImmerReducer } from 'use-immer';

import { BoardsContext } from '@/context/board-context';
import { BoardPageContext } from '@/context/board-page-context';
import { ListsContext } from '@/context/lists-context';

import { listsReducer } from '@/reducers/lists-reducer';

type Props = PropsWithChildren;

const ListsProvider = ({ children }: Props): ReactNode => {
  const { dispatchBoards } = use(BoardsContext);
  const { board } = use(BoardPageContext);

  const [lists, dispatchLists] = useImmerReducer(listsReducer, board.lists);

  useEffect(() => {
    dispatchBoards({
      type: 'board_edited',
      board: { lists },
      boardId: board.id,
    });
  }, [lists, board.id, dispatchBoards]);

  return (
    <ListsContext
      value={{
        lists,
        dispatchLists,
      }}
    >
      {children}
    </ListsContext>
  );
};
export default ListsProvider;
