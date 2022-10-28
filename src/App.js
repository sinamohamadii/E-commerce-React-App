import React, { Suspense } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import NavBar from './components/layout/navBar/NavBar';
import PreLoader from './components/layout/PreLoader';

const Shop = React.lazy(() => import('./pages/Shop'));
const Info = React.lazy(() => import('./pages/Info'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<PreLoader />}>
        <Routes>
          <Route path='/shop/*' element={<Shop />} />
          <Route path='/info' element={<Info />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/*' element={<Navigate replace to='/shop' />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
