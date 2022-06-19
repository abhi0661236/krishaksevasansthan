import React from 'react';

import Button from '@mui/material/Button';

import '../assets/css/Navbar.css'

import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';

export default function Navbar() {
  return (
    <>
    <div className='kss-tool-wrapper'>
      <div className="kss-tool-container">
      <div>
      <Button style={{marginRight:'10px'}} variant='outlined' color='inherit'><TextDecreaseIcon /></Button>
      <Button variant='contained' color='inherit'><TextIncreaseIcon /></Button>
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
