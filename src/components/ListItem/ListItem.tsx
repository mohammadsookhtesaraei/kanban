import type { ReactNode } from 'react';
import { memo } from 'react';

import type { ListItemType } from '@/types/list-item';

import styles from './ListItem.module.css';

type Props = {
  listId: string;
  item: ListItemType;
  onClick?: (listId: string, itemId: string) => void;
};

const ListItem = ({ item, onClick, listId }: Props): ReactNode => {
  return (
    <div className={styles.item} onClick={() => onClick?.(listId, item.id)}>
      {item.title}
    </div>
  );
};
export default memo(ListItem);
