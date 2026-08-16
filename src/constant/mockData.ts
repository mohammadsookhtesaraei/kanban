import type { ListType } from '@/types/list';

export const listData: ListType[] = [
  {
    id: '1',
    title: '🔜 To Do',
    items: [
      { id: '1', title: 'set up backend' },
      { id: '2', title: 'create modal' },
      { id: '3', title: 'add tailwind' },
    ],
  },
  {
    id: '2',
    title: '🔨 Doing',
    items: [{ id: '1', title: 'set up backend' }],
  },
  {
    id: '3',
    title: '🎉 Done',
    items: [],
  },
];
