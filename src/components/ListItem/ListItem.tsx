import type { ReactNode } from 'react';

import { toast } from 'react-toastify';

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
  const { dispatchLists } = useBoardContext();

  const handleRemoveItemButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    dispatchLists({ type: 'removed', listId, itemId: item.id });
    toast.success('Item removed successfully');
  };

  return (
    <div className={styles.item}>
      {item.title}
      <IconButton onClick={handleRemoveItemButtonClick}>
        <MingcuteDelete2Line />
      </IconButton>
    </div>
  );
};
export default ListItem;
