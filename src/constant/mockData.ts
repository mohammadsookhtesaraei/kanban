import type { ListType } from '@/types/list';

export const listData: ListType[] = [
  {
    id: 'list-1',
    title: '🔜 To Do',
    items: [
      { id: 'item-1', title: 'set up', description: '', dueDate: '' },
      { id: 'item-2', title: 'create modal', description: '', dueDate: '' },
      { id: 'item-3', title: 'add tailwind', description: '', dueDate: '' },
    ],
  },
  {
    id: 'list-2',
    title: '🔨 Doing',
    items: [
      { id: 'item-4', title: 'set up backend', description: '', dueDate: '' },
    ],
  },
  {
    id: 'list-3',
    title: '🎉 Done',
    items: [],
  },
];
