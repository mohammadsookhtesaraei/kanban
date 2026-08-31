import type { ReactNode } from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import clsx from 'clsx';
import { toast } from 'react-toastify';

import IconButton from '@/components/IconButton/IconButton';

import { useBoardContext } from '@/hooks/useBoardContext';

import MingcuteDelete2Line from '@/icons/MingcuteDelete2Line';

import type { ListItemType } from '@/types/list-item';

import styles from './ListItem.module.css';

type Props = {
  listIndex: number;
  itemIndex: number;
  item: ListItemType;
  presentational?: boolean;
};

const ListItem = ({
  itemIndex,
  listIndex,
  item,
  presentational,
}: Props): ReactNode => {
  const { dispatchLists } = useBoardContext();

  const {
    transform,
    transition,
    listeners,
    setNodeRef,
    attributes,
    isDragging,
  } = useSortable({
    id: item.id,
    data: { isList: false, listIndex, itemIndex, item },
  });

  const handleRemoveItemButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    dispatchLists({ type: 'item_removed', listIndex, itemIndex });
    toast.success('Item removed successfully');
  };

  return (
    <div
      ref={setNodeRef}
      className={clsx(styles.item, presentational && styles.presentational)}
      style={{
        opacity: isDragging ? '0.5' : undefined,
        transform: CSS.Translate.toString(transform),
        transition,
      }}
      {...listeners}
      {...attributes}
    >
      {item.title}
      <IconButton onPointerDown={handleRemoveItemButtonClick}>
        <MingcuteDelete2Line />
      </IconButton>
    </div>
  );
};
export default ListItem;
