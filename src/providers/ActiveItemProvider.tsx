import {
  type PropsWithChildren,
  type ReactNode,
  useEffect,
  useState,
} from 'react';

import { ActiveItemContext } from '@/context/active-items-context';

type Props = PropsWithChildren;
const ActiveItemProvider = ({ children }: Props): ReactNode => {
  const [activeListId, setActiveListId] = useState<string | null>(null);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const activate = (listId: string, itemId: string): void => {
    setActiveListId(listId);
    setActiveItemId(itemId);
  };
  const deactivate = (): void => {
    setActiveListId(null);
    setActiveItemId(null);
  };

  useEffect(() => {
    // callback function for escape key
    const handleDocumentKeyDown = (e: KeyboardEvent): void => {
      if (e.code !== 'Escape') {
        return;
      }

      deactivate();
    };

    // add event listner
    document.addEventListener('keydown', handleDocumentKeyDown);

    // / Cleanup function
    return (): void => {
      document.removeEventListener('keydown', handleDocumentKeyDown);
    };
  }, []);

  return (
    <ActiveItemContext
      value={{ activeItemId, activeListId, activate, deactivate }}
    >
      {children}
    </ActiveItemContext>
  );
};
export default ActiveItemProvider;
