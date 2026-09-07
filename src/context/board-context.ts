import { type ActionDispatch, createContext } from 'react';

import type { BoardAction } from '@/reducers/board-reducer';

import type { BoardType } from '@/types/board';

export type ContextValue = {
  boards: BoardType[];
  dispatchBoards: ActionDispatch<[action: BoardAction]>;
};

export const BoardsContext = createContext<ContextValue>({} as ContextValue);
