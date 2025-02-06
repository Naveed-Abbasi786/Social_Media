import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';
import ChatPage from './pages/messges/chatPage';

export default function App() {
  const HomeActivty = lazy(() => import('./pages/home'));
  const Members = lazy(() => import('./pages/Members/index'));
  const Group = lazy(() => import('./pages/group/index'));
  const Messeges = lazy(() => import('./pages/messges/index'));
  const Profile = lazy(() => import('./pages/profile'));


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeActivty />} />
          <Route path='/members' element={<Members />} />
          <Route path='/group' element={<Group />} />
          <Route path='/messeges/*' element={<Messeges />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
