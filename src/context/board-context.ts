import { createContext } from 'react';

import type { ListType } from '@/types/list';

export type ContextValue = {
  activeListId: string | null;
  activeItemId: string | null;
  lists: ListType[];
  create: () => void;
  move: (destinationListId: string) => void;
  remove: (listId: string, itemId: string) => void;
  itemClick: (listId: string, itemId: string) => void;
};

export const BoardContext = createContext<ContextValue>({
  lists: [],
  activeListId: null,
  activeItemId: null,
  create: () => {},
  move: () => {},
  remove: () => {},
  itemClick: () => {},
});
