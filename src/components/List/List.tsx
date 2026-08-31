import { type ReactNode } from 'react';

import ListHeader from '@/components/List/components/ListHeader/ListHeader';
import ListItems from '@/components/List/components/ListItems/ListItems';

import type { ListType } from '@/types/list';

import styles from './List.module.css';

type Props = {
  listIndex: number;
  list: ListType;
};

const List = ({ list, listIndex }: Props): ReactNode => {
  return (
    <div className={styles.list}>
      <ListHeader title={list.title} listIndex={listIndex} />
      <ListItems list={list} listIndex={listIndex} />
    </div>
  );
};
export default List;
