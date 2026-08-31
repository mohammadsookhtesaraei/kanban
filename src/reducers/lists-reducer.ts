import type { Draft } from 'immer';

import type { ListType } from '@/types/list';
import type { ListItemType } from '@/types/list-item';

export type ListAction =
  | {
      type: 'item_created';
      listIndex: number;
      item: ListItemType;
    }
  | {
      type: 'item_removed';
      listIndex: number;
      itemIndex: number;
    };

export function listsReducer(
  draft: Draft<ListType[]>,
  action: ListAction
): void {
  switch (action.type) {
    case 'item_created': {
      const list = draft[action.listIndex];
      list.items.push(action.item);
      return;
    }

    case 'item_removed': {
      const list = draft[action.listIndex];
      list.items.splice(action.itemIndex, 1);
      return;
    }

    default: {
      throw new Error('unknown action!');
    }
  }
}
