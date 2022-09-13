import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// ------- Pages -------
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import BaseLayout from './components/layout/BaseLayout';

import './style/global.scss';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </div>
  );
}
