import type { ReactNode } from 'react';
import { memo } from 'react';

import type { ListItemType } from '@/types/list-item';

import styles from './ListItem.module.css';

type Props = {
  item: ListItemType;
  onClick?: (id: string) => void;
};

const ListItem = ({ item, onClick }: Props): ReactNode => {
  return (
    <div className={styles.item} onClick={() => onClick?.(item.id)}>
      {item.title}
    </div>
  );
};
export default memo(ListItem);
