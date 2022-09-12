import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
// ------- Pages -------
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/">
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>

        </Routes>
        
      </BrowserRouter>
    </div>
  );
}
