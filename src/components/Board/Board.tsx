import { type ReactNode, useCallback, useState } from 'react';

import { listData } from '@/constant/mockData';

import Button from '@/components/Button/Button';
import IconButton from '@/components/IconButton/IconButton';
import List from '@/components/List/List';

import MingcuteAddLine from '@/icons/MingcuteAddLine';
import MingcuteEdit2Line from '@/icons/MingcuteEdit2Line';

import type { ListType } from '@/types/list';

import styles from './Board.module.css';

const Board = (): ReactNode => {
  const [lists, setLists] = useState<ListType[]>(listData);

  // const [activeId,setActiveId]=useState<string | null>()

  const handleListItemClick = useCallback((id: string) => {
    setLists((prev) =>
      prev.map((list) => ({
        ...list,
        items: list.items.filter((item) => item.id !== id),
      }))
    );
  }, []);

  return (
    <div className={styles.board}>
      <div className={styles.toolbar}>
        <div className={styles.title}>Board title</div>
        <div className={styles.actions}>
          <div className={styles.spacer}>
            <Button>todo</Button>
            <Button>doing</Button>
            <Button>done</Button>
          </div>

          <IconButton>
            <MingcuteEdit2Line />
          </IconButton>
          <IconButton>
            <MingcuteAddLine />
          </IconButton>
        </div>
      </div>

      <ul className={styles.lists}>
        <li>
          <List list={lists[0]} onClick={handleListItemClick} />
        </li>

        <li>
          <List list={lists[1]} />
        </li>

        <li>
          <List list={lists[2]} />
        </li>
      </ul>
    </div>
  );
};
export default Board;
