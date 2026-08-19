import { use } from 'react';

import {
  ActiveItemContext,
  type ContextValueActiveItem,
} from '@/context/active-items-context';

export const useActiveItemContext = (): ContextValueActiveItem => {
  const context = use(ActiveItemContext);
  if (!context) {
    throw new Error('active context undefined!');
  }

  return context;
};
