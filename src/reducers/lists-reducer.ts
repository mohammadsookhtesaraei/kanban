import type { ListType } from '@/types/list';
import type { ListItemType } from '@/types/list-item';

type Action =
  | {
      type: 'created';
      listId: string;
      item: ListItemType;
    }
  | {
      type: 'moved';
      destinationId: string;
      itemId: string;
      listId: string;
    }
  | {
      type: 'removed';
      itemId: string;
      listId: string;
    };

export function listsReducer(state: ListType[], action: Action): ListType[] {
  switch (action.type) {
    case 'created': {
      // find active list index
      const activeListIndex = state.findIndex(
        (list) => list.id === action.listId /* state */
      );

      // validation
      if (activeListIndex === -1) {
        console.error('cannot find desire list');
        return state;
      }

      // clone array list
      const clone = [...state];

      // clone - acitve list object from array
      const activeList = {
        ...clone[activeListIndex],
        items: [...clone[activeListIndex].items],
      };

      activeList.items.push(action.item);

      clone[activeListIndex] = activeList;
      return clone;
    }

    case 'moved': {
      // find index active list in array lists state
      const activeListIndex = state.findIndex(
        (list) => list.id === action.listId
      );

      // find index listdestination in array lists state because we want move item
      const destinationListIndex = state.findIndex(
        (list) => list.id === action.destinationId
      );

      // validation
      if (activeListIndex === -1 || destinationListIndex === -1) {
        console.error('cannot find desire list');
        return state;
      }

      // clone
      const clone = [...state];

      // active list
      const activeList = {
        ...clone[activeListIndex],
        items: [...clone[activeListIndex].items],
      };

      // find item in active list
      const activeItemIdIndex = activeList.items.findIndex(
        (list) => list.id === action.itemId
      );

      // destination list
      const destinationList = {
        ...clone[destinationListIndex],
        items: [...clone[destinationListIndex].items],
      };

      // validation
      if (activeItemIdIndex === -1) {
        console.error('cannot find desire list');
        return state;
      }

      // get remove item from actice list items
      const [activeItem] = activeList.items.splice(activeItemIdIndex, 1);

      // add remove item to destination list items
      destinationList.items.push(activeItem);
      // new active list
      clone[activeListIndex] = activeList;
      // new destination list
      clone[destinationListIndex] = destinationList;
      // return clone
      return clone;
    }
    case 'removed': {
      // find active list index
      const activeListIndex = state.findIndex(
        (list) => list.id === action.listId /* state */
      );

      // validation
      if (activeListIndex === -1) {
        console.error('cannot find desire list');
        return state;
      }

      // clone array list
      const clone = [...state];

      // clone - acitve list object from array
      const activeList = {
        ...clone[activeListIndex],
        items: [...clone[activeListIndex].items],
      };

      // find active item in activeList {id:"",title:"" ,items:[]}
      const activeItemIdIndex = activeList.items.findIndex(
        (list) => list.id === action.itemId /* state */
      );

      // validation
      if (activeItemIdIndex === -1) {
        console.error('cannot find desire list');
        return state;
      }

      // remove item from activelist - items
      activeList.items.splice(activeItemIdIndex, 1);

      // new activeList without remove item
      clone[activeListIndex] = activeList;
      return clone;
    }

    default: {
      throw new Error('unknown action!');
    }
  }
}
