import type { ReactNode } from 'react';

import BoardCard from '@/components/BoardCard/BoardCard';
import Button from '@/components/Button/Button';

import styles from './HomePage.module.css';

const HomePage = (): ReactNode => {
  return (
    <div className={styles.home}>
      <header className={styles.header}>header</header>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Boards</h1>
          <Button variant="solid" color="default">
            create
          </Button>
        </div>

        <ul className={styles.boards}>
          <li>
            <BoardCard
              id={1}
              title="Sprint Tasks"
              color="blue"
              description="this is a sprint tasks"
            />
          </li>

          <li>
            <BoardCard
              id={2}
              title="Content Clander"
              color="gray"
              description="this is a clander tasks"
            />
          </li>

          <li>
            <BoardCard
              id={3}
              title="Personal Goals"
              color="yellow"
              description="this is a personal tasks"
            />
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>footer</footer>
    </div>
  );
};
export default HomePage;
