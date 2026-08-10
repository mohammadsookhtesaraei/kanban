import type { ReactNode } from 'react';

import { Link } from 'react-router';

import styles from './NotFoundPage.module.css';

const NotFoundPage = (): ReactNode => {
  return (
    <div className={styles['not-found']}>
      <h1>404 | Page NotFound</h1>
      <Link to="/">Go To Home Page</Link>
    </div>
  );
};
export default NotFoundPage;
