import type { Draft } from 'immer';

import type { BoardType } from '@/types/board';

export type BoardAction =
  | {
      type: 'board_created';
      board: BoardType;
    }
  | {
      type: 'board_edited';
      boardId: string;
      board: Partial<BoardType>;
    }
  | {
      type: 'board_removed';
      boardId: string;
    };

export function BoardReducer(
  draft: Draft<BoardType[]>,
  action: BoardAction
): void {
  switch (action.type) {
    case 'board_created': {
      draft.push(action.board);
      return;
    }

    case 'board_edited': {
      const boardIndex = draft.findIndex(
        (board) => board.id === action.boardId
      );
      if (boardIndex === -1) {
        return;
      }
      draft[boardIndex] = { ...draft[boardIndex], ...action.board };
      return;
    }

    case 'board_removed': {
      const boardIndex = draft.findIndex(
        (board) => board.id === action.boardId
      );
      if (boardIndex === -1) {
        return;
      }
      draft.splice(boardIndex, 1);
      return;
    }

    default: {
      throw new Error('unknown action!');
    }
  }
}
