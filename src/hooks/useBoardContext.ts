import { use } from 'react';

import { BoardContext, type ContextValue } from '@/context/board-context';

export const useBoardContext = (): ContextValue => {
  const context = use(BoardContext);
  if (!context) {
    throw new Error('context undefined');
  }

  return context;
};
