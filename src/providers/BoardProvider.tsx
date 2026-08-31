import { type PropsWithChildren, type ReactNode, useEffect } from 'react';

import { useImmerReducer } from 'use-immer';

import { listData } from '@/constant/mockData';

import { BoardContext } from '@/context/board-context';

import { listsReducer } from '@/reducers/lists-reducer';

import type { ListType } from '@/types/list';

function save(lists: ListType[]): void {
  localStorage.setItem('lists', JSON.stringify(lists));
}

function load(): ListType[] {
  const item = localStorage.getItem('lists');
  if (!item) {
    return listData;
  }

  return JSON.parse(item);
}

type Props = PropsWithChildren;

const BoardProvider = ({ children }: Props): ReactNode => {
  const [lists, dispatchLists] = useImmerReducer(listsReducer, load());

  useEffect(() => {
    save(lists);
  }, [lists]);

  return (
    <BoardContext
      value={{
        lists,
        dispatchLists,
      }}
    >
      {children}
    </BoardContext>
  );
};
export default BoardProvider;
