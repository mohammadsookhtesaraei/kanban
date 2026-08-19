import type { ReactNode } from 'react';

import IconButton from '@/components/IconButton/IconButton';

import MingcuteDelete2Line from '@/icons/MingcuteDelete2Line';

import type { ListItemType } from '@/types/list-item';

import styles from './ListItem.module.css';

type Props = {
  listId: string;
  item: ListItemType;
  onClick?: (listId: string, itemId: string) => void;
  onRemove?: (listId: string, itemId: string) => void;
};

const ListItem = ({ item, onClick, listId }: Props): ReactNode => {
  return (
    <div className={styles.item} onClick={() => onClick?.(listId, item.id)}>
      {item.title}
      <IconButton>
        <MingcuteDelete2Line />
      </IconButton>
    </div>
  );
};
export default ListItem;
