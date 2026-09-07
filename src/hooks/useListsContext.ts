import { use } from 'react';

import { type ContextValue, ListsContext } from '@/context/lists-context';

export const useListsContext = (): ContextValue => {
  const context = use(ListsContext);
  if (!context) {
    throw new Error('context undefined');
  }

  return context;
};
