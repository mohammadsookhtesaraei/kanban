import { type PropsWithChildren, type ReactNode, useEffect } from 'react';

import { useImmerReducer } from 'use-immer';

import { boardsData } from '@/constant/mockData';

import { BoardsContext } from '@/context/board-context';

import { BoardReducer } from '@/reducers/board-reducer';

import type { BoardType } from '@/types/board';

function save(boards: BoardType[]): void {
  localStorage.setItem('lists', JSON.stringify(boards));
}

function load(): BoardType[] {
  const item = localStorage.getItem('boards');
  if (!item) {
    return boardsData;
  }

  return JSON.parse(item);
}

type Props = PropsWithChildren;

const BoardsProvider = ({ children }: Props): ReactNode => {
  const [boards, dispatchBoards] = useImmerReducer(
    BoardReducer,
    undefined,
    load
  );

  useEffect(() => {
    save(boards);
  }, [boards]);

  return (
    <BoardsContext
      value={{
        boards,
        dispatchBoards,
      }}
    >
      {children}
    </BoardsContext>
  );
};
export default BoardsProvider;
