import type { ReactNode } from 'react';

import { Route, Routes } from 'react-router';

import BoardPage from '@/pages/BoardPage/BoardPage';
import HomePage from '@/pages/HomePage/HomePage';

const App = (): ReactNode => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="board" element={<BoardPage />} />
    </Routes>
  );
};
export default App;
