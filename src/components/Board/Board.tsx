import { type ReactNode, useEffect, useState } from 'react';

import { listData } from '@/constant/mockData';

import Button from '@/components/Button/Button';
import IconButton from '@/components/IconButton/IconButton';
import List from '@/components/List/List';

import { useLocalStorage } from '@/hooks/useLocalStorage';

import MingcuteAddLine from '@/icons/MingcuteAddLine';
import MingcuteEdit2Line from '@/icons/MingcuteEdit2Line';

import type { ListType } from '@/types/list';

import styles from './Board.module.css';

const Board = (): ReactNode => {
  const [lists, setLists] = useLocalStorage<ListType[]>('lists', listData);

  const [activeListId, setActiveListId] = useState<string | null>(null);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const handleListItemClick = (listId: string, itemId: string): void => {
    setActiveListId(listId);
    setActiveItemId(itemId);
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

  const handleCreateButtonClick = (): void => {
    setLists((prev) => {
      const clone = [...prev];

      const id = globalThis.crypto.randomUUID();

      clone[0] = { ...clone[0], items: [...clone[0].items, { id, title: id }] };
      return clone;
    });
  };

  const handleMoveButtonClick = (destinationListId: string): void => {
    console.log(destinationListId);
    setLists((prev) => {
      try {
        // find index active list in array lists state
        const activeListIndex = prev.findIndex(
          (list) => list.id === activeListId
        );

        // find index listdestination in array lists state because we want move item
        const destinationListIndex = prev.findIndex(
          (list) => list.id === destinationListId
        );

        // validation
        if (activeListIndex === -1 || destinationListIndex === -1) {
          console.error('cannot find desire list');
          return prev;
        }

        // clone
        const clone = [...prev];

        // active list
        const activeList = {
          ...clone[activeListIndex],
          items: [...clone[activeListIndex].items],
        };

        // find item in active list
        const activeItemIdIndex = activeList.items.findIndex(
          (list) => list.id === activeItemId
        );

        // destination list
        const destinationList = {
          ...clone[destinationListIndex],
          items: [...clone[destinationListIndex].items],
        };

        // validation
        if (activeItemIdIndex === -1) {
          console.error('cannot find desire list');
          return prev;
        }

        // get remove item from actice list items
        const [activeItem] = activeList.items.splice(activeItemIdIndex, 1);

        // add remove item to destination list items
        destinationList.items.push(activeItem);
        // new active list
        clone[activeListIndex] = activeList;
        // new destination list
        clone[destinationListIndex] = destinationList;
        // return clone
        return clone;
      } finally {
        setActiveItemId(null);
        setActiveListId(null);
      }
    });
  };

  const handleListItemRemove = (listId: string, itemId: string): void => {
    setLists((prev) => {
      try {
        // find active list index
        const activeListIndex = prev.findIndex(
          (list) => list.id === listId /* state */
        );

        // validation
        if (activeListIndex === -1) {
          console.error('cannot find desire list');
          return prev;
        }

        // clone array list
        const clone = [...prev];

        // clone - acitve list object from array
        const activeList = {
          ...clone[activeListIndex],
          items: [...clone[activeListIndex].items],
        };

        // find active item in activeList {id:"",title:"" ,items:[]}
        const activeItemIdIndex = activeList.items.findIndex(
          (list) => list.id === itemId /* state */
        );

        // validation
        if (activeItemIdIndex === -1) {
          console.error('cannot find desire list');
          return prev;
        }

        // remove item from activelist - items
        activeList.items.splice(activeItemIdIndex, 1);

        // new activeList without remove item
        clone[activeListIndex] = activeList;
        return clone;
      } finally {
        setActiveItemId(null);
        setActiveListId(null);
      }
    });
  };

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
                    onClick={() => handleMoveButtonClick(list.id)}
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
            <List
              list={list}
              onClick={handleListItemClick}
              onRemove={handleListItemRemove}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Board;
