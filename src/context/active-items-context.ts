import { createContext } from 'react';

export type ContextValueActiveItem = {
  activeListId: string | null;
  activeItemId: string | null;
  activate: (listId: string, itemId: string) => void;
  deactivate: () => void;
};

export const ActiveItemContext = createContext<ContextValueActiveItem>({
  activeListId: null,
  activeItemId: null,
  activate: () => {},
  deactivate: () => {},
});
