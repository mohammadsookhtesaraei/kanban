import { type ListType } from '@/types/list';
import { type ListItemType } from '@/types/list-item';

type ListDraggbleData = {
  isList: true;
  listIndex: number;
  list: ListType;
};

type ListItemDraggbleData = {
  isList: false;
  listIndex: number;
  itemIndex: number;
  item: ListItemType;
};

export type DraggableData = ListDraggbleData | ListItemDraggbleData;
