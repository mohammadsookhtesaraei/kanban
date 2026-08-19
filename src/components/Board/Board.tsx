import { type ReactNode, useEffect, useState } from 'react';

import Button from '@/components/Button/Button';
import IconButton from '@/components/IconButton/IconButton';
import List from '@/components/List/List';

import { useBoardContext } from '@/hooks/useBoardContext';

import MingcuteAddLine from '@/icons/MingcuteAddLine';
import MingcuteEdit2Line from '@/icons/MingcuteEdit2Line';

import styles from './Board.module.css';

const Board = (): ReactNode => {
  const { lists, create, move } = useBoardContext();

  const [activeListId, setActiveListId] = useState<string | null>(null);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const handleListItemClick = (listId: string, itemId: string): void => {
    setActiveListId(listId);
    setActiveItemId(itemId);
  };

  const handleCreateButtonClick = (): void => {
    create();
  };

  const handleMoveCreateButtonClick = (destinationListId: string): void => {
    if (activeListId && activeItemId) {
      move(destinationListId, activeListId, activeItemId);
    }
    setActiveListId(null);
    setActiveItemId(null);
  };

  useEffect(() => {
    // callback function for escape key
    const handleDocumentKeyDown = (e: KeyboardEvent): void => {
      if (e.code !== 'Escape') {
        return;
      }

      setActiveListId(null);
      setActiveItemId(null);
    };

    // add event listner
    document.addEventListener('keydown', handleDocumentKeyDown);

    // / Cleanup function
    return (): void => {
      document.removeEventListener('keydown', handleDocumentKeyDown);
    };
  }, []);

  return (
    <div className={styles.board}>
      <div className={styles.toolbar}>
        <div className={styles.title}>Board title</div>
        <div className={styles.actions}>
          {activeListId !== null && (
            <div className={styles.spacer}>
              {lists
                .filter((list) => list.id !== activeListId)
                .map((list) => (
                  <Button
                    key={list.id}
                    onClick={() => handleMoveCreateButtonClick(list.id)}
                  >
                    {list.title}
                  </Button>
                ))}
            </div>
          )}

          <IconButton>
            <MingcuteEdit2Line />
          </IconButton>
          <IconButton onClick={handleCreateButtonClick}>
            {' '}
            <MingcuteAddLine />
          </IconButton>
        </div>
      </div>

      <ul className={styles.lists}>
        {lists.map((list) => (
          <li key={list.id}>
            <List list={list} onClick={handleListItemClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Board;
