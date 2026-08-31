import { type ActionDispatch, createContext } from 'react';

import type { ListAction } from '@/reducers/lists-reducer';

import type { ListType } from '@/types/list';

export type ContextValue = {
  lists: ListType[];
  dispatchLists: ActionDispatch<[action: ListAction]>;
};

export const BoardContext = createContext<ContextValue>({
  lists: [],
  dispatchLists: () => {},
});
