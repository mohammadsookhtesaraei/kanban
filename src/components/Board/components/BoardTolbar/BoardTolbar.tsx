import type { ReactNode } from 'react';

import IconButton from '@/components/IconButton/IconButton';

import MingcuteAddLine from '@/icons/MingcuteAddLine';
import MingcuteEdit2Line from '@/icons/MingcuteEdit2Line';

import styles from './BoardTolbar.module.css';

const BoardTolbar = (): ReactNode => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.title}>Board title</div>
      <div className={styles.actions}>
        <IconButton>
          <MingcuteEdit2Line />
        </IconButton>
        <IconButton>
          {' '}
          <MingcuteAddLine />
        </IconButton>
      </div>
    </div>
  );
};

export default BoardTolbar;
