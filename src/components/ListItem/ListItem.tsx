import type { ReactNode } from 'react';

import styles from './ListItem.module.css';

type Props = {
  title: string;
};

const ListItem = ({ title }: Props): ReactNode => {
  return <div className={styles.item}>{title}</div>;
};
export default ListItem;
