import type { ReactNode } from 'react';

import clsx from 'clsx';
import { toast } from 'react-toastify';

import IconButton from '@/components/IconButton/IconButton';

import { useActiveItemContext } from '@/hooks/useActiveItemContext';
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
  const { activeItemId, activate, deactivate } = useActiveItemContext();

  const handleRemoveItemButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    dispatchLists({ type: 'removed', listId, itemId: item.id });
    deactivate();
    toast.success('Item removed successfully');
  };

  const handleListItemClick = (): void => {
    if (item.id === activeItemId) {
      deactivate();
    } else {
      activate(listId, item.id);
    }
  };

  return (
    <div
      className={clsx(styles.item, item.id === activeItemId && styles.active)}
      onClick={handleListItemClick}
    >
      {item.title}
      <IconButton onClick={handleRemoveItemButtonClick}>
        <MingcuteDelete2Line />
      </IconButton>
    </div>
  );
};
export default ListItem;
