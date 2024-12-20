import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';

export default function App() {
  const HomeActivty = lazy(() => import('./pages/home'));
  const Members = lazy(() => import('./pages/Members/index'));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeActivty />} />
          <Route path='/members' element={<Members />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
