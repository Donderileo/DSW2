import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Home2 from './pages/Home2';

import './styles/index.css'
import './styles/color.css'
import WithoutNavbarLayout from './layouts/WithoutNavbar';
import WithNavbarLayout from './layouts/WithNavbar';
import Home3 from './pages/Home3';
import Home4 from './pages/Home4';
import Index from './pages/Index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<WithoutNavbarLayout/>}>
          <Route path="/" element={<Index/>}/>
          <Route path="/login" element={<Index/>}/>
          <Route path="/register" element={<Index/>}/>
        </Route>
        <Route element={<WithNavbarLayout/>}>
          <Route path="/dashboard" element={<Home2/>}/>
          <Route path="/professional" element={<Home3/>}/>
          <Route path="/appointments" element={<Home4/>}/>
          <Route path="/account" element={<Home2/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
