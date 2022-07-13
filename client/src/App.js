import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


// import all the necessary components
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import Nopage from './components/Nopage';


import './assets/css/App.css';
import Support from './components/Support';


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='support' element={<Support />} />
            <Route path='*' element={<Nopage />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}
