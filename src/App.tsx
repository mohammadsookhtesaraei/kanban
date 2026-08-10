import type { ReactNode } from 'react';

import { Route, Routes } from 'react-router';

import RootLayout from '@/components/layout/RootLayout';

import BoardPage from '@/pages/BoardPage/BoardPage';
import HomePage from '@/pages/HomePage/HomePage';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';

const App = (): ReactNode => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/board/:id" element={<BoardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
export default App;
