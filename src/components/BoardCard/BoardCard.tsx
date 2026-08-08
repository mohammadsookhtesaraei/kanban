import type { ReactNode } from 'react';

import clsx from 'clsx';

import styles from './BoardCard.module.css';

type BoardColor = 'gray' | 'blue' | 'green' | 'red' | 'orange' | 'yellow';

type Props = {
  id: number;
  title: string;
  description: string;
  color: BoardColor;
};

const BoardCard = ({ id, title, description, color }: Props): ReactNode => {
  return (
    <div key={id} className={clsx(styles['board-card'], color)}>
      <div className={styles.cover}></div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <a href="#">View</a>
        </div>

        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
export default BoardCard;
