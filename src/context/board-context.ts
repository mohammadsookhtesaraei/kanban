import { createContext } from 'react';

import type { ListType } from '@/types/list';

export type ContextValue = {
  lists: ListType[];
  create: () => void;
  move: (destinationListId: string, listId: string, itemId: string) => void;
  remove: (listId: string, itemId: string) => void;
};

export const BoardContext = createContext<ContextValue>({
  lists: [],
  create: () => {},
  move: () => {},
  remove: () => {},
});
