import { type PropsWithChildren, type ReactNode } from 'react';

import { BoardPageContext } from '@/context/board-page-context';

import type { BoardType } from '@/types/board';

type Props = PropsWithChildren<{
  board: BoardType;
}>;

const BoardPageProvider = ({ children, board }: Props): ReactNode => {
  return (
    <BoardPageContext
      value={{
        board,
      }}
    >
      {children}
    </BoardPageContext>
  );
};
export default BoardPageProvider;
