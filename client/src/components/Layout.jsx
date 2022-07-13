import React from 'react';
import { Outlet } from 'react-router-dom';
import NavTools from './NavTools';

import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <NavTools />
      
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
