import { createContext } from 'react';

import type { ListType } from '@/types/list';
import type { ListItemType } from '@/types/list-item';

export type ContextValue = {
  lists: ListType[];
  create: (listId: string, item: ListItemType) => void;
  move: (destinationListId: string, listId: string, itemId: string) => void;
  remove: (listId: string, itemId: string) => void;
};

export const BoardContext = createContext<ContextValue>({
  lists: [],
  create: () => {},
  move: () => {},
  remove: () => {},
});
