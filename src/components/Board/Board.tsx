import { type ReactNode } from 'react';

import { toast } from 'react-toastify';

import Button from '@/components/Button/Button';
import IconButton from '@/components/IconButton/IconButton';
import List from '@/components/List/List';

import { useActiveItemContext } from '@/hooks/useActiveItemContext';
import { useBoardContext } from '@/hooks/useBoardContext';

import MingcuteAddLine from '@/icons/MingcuteAddLine';
import MingcuteEdit2Line from '@/icons/MingcuteEdit2Line';

import styles from './Board.module.css';

const Board = (): ReactNode => {
  const { lists, move } = useBoardContext();
  const { activeListId, activeItemId, deactivate } = useActiveItemContext();

  const handleMoveCreateButtonClick = (destinationListId: string): void => {
    if (activeListId && activeItemId) {
      move(destinationListId, activeListId, activeItemId);
      toast.success('Item moved successfully');
    }
    deactivate();
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
          <IconButton>
            {' '}
            <MingcuteAddLine />
          </IconButton>
        </div>
      </div>

      <ul className={styles.lists}>
        {lists.map((list) => (
          <li key={list.id}>
            <List list={list} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Board;
