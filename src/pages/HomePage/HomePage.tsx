import { type ReactNode, use } from 'react';

import BoardCard from '@/components/BoardCard/BoardCard';
import Button from '@/components/Button/Button';

import { BoardsContext } from '@/context/board-context';

import BoardsProvider from '@/providers/BoardsProvider';

import styles from './HomePage.module.css';

const HomePage = (): ReactNode => {
  return (
    <BoardsProvider>
      <HomePageContent />
    </BoardsProvider>
  );
};
export default HomePage;

function HomePageContent(): ReactNode {
  const { boards } = use(BoardsContext);

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <h1>Boards</h1>
        <Button variant="solid" color="primary">
          create
        </Button>
      </div>

      <ul className={styles.boards}>
        {boards.map((item) => (
          <li key={item.id}>
            <BoardCard board={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
