import type { ReactNode } from 'react';
import { memo } from 'react';

import IconButton from '@/components/IconButton/IconButton';
import ListItem from '@/components/ListItem/ListItem';

import MingcuteMore1Line from '@/icons/MingcuteMore1Line';

import type { ListType } from '@/types/list';

import styles from './List.module.css';

type Props = {
  list: ListType;
  onClick?: (listId: string, itemId: string) => void;
};

const List = ({ list: { id, title, items }, onClick }: Props): ReactNode => {
  return (
    <div key={id} className={styles.list}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <IconButton>
          <MingcuteMore1Line />
        </IconButton>
      </div>
      <ul className={styles.items}>
        {/* we should pass listId as props to ListItem for setState activeListid  */}
        {items.map((item) => (
          <li key={item.id}>
            <ListItem listId={id} item={item} onClick={onClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default memo(List);
