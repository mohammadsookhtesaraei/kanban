import type { ReactNode } from 'react';

import IconButton from '@/components/IconButton/IconButton';

import { useBoardContext } from '@/hooks/useBoardContext';

import MingcuteDelete2Line from '@/icons/MingcuteDelete2Line';

import type { ListItemType } from '@/types/list-item';

import styles from './ListItem.module.css';

type Props = {
  listId: string;
  item: ListItemType;
};

const ListItem = ({ item, listId }: Props): ReactNode => {
  const { itemClick, remove } = useBoardContext();
  const handleRemoveItemButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    remove(listId, item.id);
  };

  return (
    <div className={styles.item} onClick={() => itemClick(listId, item.id)}>
      {item.title}
      <IconButton onClick={handleRemoveItemButtonClick}>
        <MingcuteDelete2Line />
      </IconButton>
    </div>
  );
};
export default ListItem;
