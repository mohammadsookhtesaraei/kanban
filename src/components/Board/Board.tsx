import type { ReactNode } from 'react';

import IconButton from '@/components/IconButton/IconButton';

import MingcuteAddLine from '@/icons/MingcuteAddLine';
import MingcuteEdit2Line from '@/icons/MingcuteEdit2Line';
import MingcuteMore1Line from '@/icons/MingcuteMore1Line';

import styles from './Board.module.css';

const Board = (): ReactNode => {
  return (
    <div className={styles.board}>
      <div className={styles.toolbar}>
        <div className={styles.title}>Board title</div>
        <div className={styles.actions}>
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
          <div className={styles.list}>
            <div className={styles.header}>
              <div className={styles.title}>🔜 To Do</div>
              <IconButton>
                <MingcuteMore1Line />
              </IconButton>
            </div>
            <ul className={styles.items}>
              <li>
                <div className={styles.item}>set up backend</div>
              </li>
              <li>
                <div className={styles.item}>find good file</div>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div className={styles.list}>
            <div className={styles.header}>
              <div className={styles.title}>🔨 Doing</div>
              <IconButton>
                <MingcuteMore1Line />
              </IconButton>
            </div>
            <ul className={styles.items}>
              <li>
                <div className={styles.item}>design landing page</div>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div className={styles.list}>
            <div className={styles.header}>
              <div className={styles.title}>🎉 Done</div>
              <IconButton>
                <MingcuteMore1Line />
              </IconButton>
            </div>
            <ul className={styles.items}></ul>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Board;
