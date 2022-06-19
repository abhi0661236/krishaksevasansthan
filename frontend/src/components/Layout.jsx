import React from 'react';
import { Outlet } from 'react-router-dom';
import NavTools from './NavTools';
import Navbartest from './Navbartest';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <NavTools />
      <Navbartest />
      <Outlet />
      <Footer />
    </>
  )
}
