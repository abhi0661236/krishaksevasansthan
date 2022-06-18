import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Logo from '../assets/media/logo192.png';
import '../assets/css/Navbar.css'

import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';

export default function Navbar() {
  return (
    <>
    <div className='kss-tool-wrapper'>
      <div className="kss-tool-container">
      <div>
      <Button variant='contained'><TextDecreaseIcon /></Button>
      <Button variant='contained'><TextIncreaseIcon /></Button>
      </div>
      <div className='theme-col-container'>
      <Button variant='contained' style={{backgroundColor:'inherit'}}></Button>
      <Button variant='contained' style={{backgroundColor:'#008a1e'}}></Button>
      <Button variant='contained' style={{backgroundColor:'#a20149'}}></Button>
      <Button variant='contained' style={{backgroundColor:'#009dff'}}></Button>
      <Button variant='contained' style={{backgroundColor:'#ff9100'}}></Button>
    </div>
      </div>
    </div>
    
    </>
  )
}
