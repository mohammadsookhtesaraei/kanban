import type { ReactNode } from 'react';

import { useParams } from 'react-router';

const BoardPage = (): ReactNode => {
  const { id } = useParams();

  return <div>BoardPage - {id}</div>;
};
export default BoardPage;
