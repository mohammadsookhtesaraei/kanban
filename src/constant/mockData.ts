import type { ListType } from '@/types/list';

export const listData: ListType[] = [
  {
    id: 'list-1',
    title: '🔜 To Do',
    items: [
      { id: 'item-1', title: 'set up' },
      { id: 'item-2', title: 'create modal' },
      { id: 'item-3', title: 'add tailwind' },
    ],
  },
  {
    id: 'list-2',
    title: '🔨 Doing',
    items: [{ id: 'item-4', title: 'set up backend' }],
  },
  {
    id: 'list-3',
    title: '🎉 Done',
    items: [],
  },
];
