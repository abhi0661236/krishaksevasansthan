import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// import all the necessary components
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nopage from './components/Nopage';
import './assets/css/App.css';
import Support from './components/Support';

import Login from './admin/components/Login';
import Signup from './admin/components/Signup';
import Dashboard from './admin/components/Dashboard';


const path = window.location.pathname;
const isAdmin = (path.includes("/admin") === true) ? true : false;

const appElem = (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='support' element={<Support />} />
      <Route path='*' element={<Nopage />} />
    </Route>
  </Routes>

);
const adminElem = (

  <Routes>
    <Route path='/admin' element={<Login />} />
    <Route path='/admin/signup' element={<Signup />} />
    <Route path='/admin/dashboard' element={<Dashboard />} />
    <Route path='*' element={<Nopage />} />
  </Routes>

);
export default function App() {
  return (
    <BrowserRouter>
      {isAdmin?adminElem:appElem}
    </BrowserRouter>
  )
}
