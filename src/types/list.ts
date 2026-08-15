import type { ListItemType } from '@/types/list-item';

export type ListType = {
  id: string;
  title: string;
  items: ListItemType[];
};
