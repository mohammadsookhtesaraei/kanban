import { type ReactNode, useRef } from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import clsx from 'clsx';
import { toast } from 'react-toastify';

import IconButton from '@/components/IconButton/IconButton';

import MingcuteEdit2Line from '@/icons/MingcuteEdit2Line';

import ListItemModal from '@/modals/ListItemModal/ListItemModal';

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
  const {
    transform,
    transition,
    listeners,
    setNodeRef,
    attributes,
    isDragging,
    over,
  } = useSortable({
    id: item.id,
    data: { isList: false, listIndex, itemIndex, item },
  });

  const overListIndex = over?.data?.current?.listIndex;

  const modalRef = useRef<HTMLDialogElement>(null);

  const handleEditItemButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.stopPropagation();

    toast.success('Item removed successfully');

    modalRef.current?.showModal();
  };

  return (
    <>
      <div
        ref={setNodeRef}
        className={clsx(styles.item, presentational && styles.presentational)}
        style={{
          opacity: isDragging ? '0.5' : undefined,
          transform: CSS.Translate.toString(transform),
          transition: listIndex === overListIndex ? transition : undefined,
        }}
        {...listeners}
        {...attributes}
      >
        {item.title}
        <IconButton onPointerDown={handleEditItemButtonClick}>
          <MingcuteEdit2Line />
        </IconButton>
      </div>
      <ListItemModal
        modalRef={modalRef}
        listIndex={listIndex}
        itemIndex={itemIndex}
        defaultValues={item}
      />
    </>
  );
};
export default ListItem;
