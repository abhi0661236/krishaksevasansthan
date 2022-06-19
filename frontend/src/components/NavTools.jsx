import React from 'react';

import Button from '@mui/material/Button';

import '../assets/css/Navbar.css'

import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export default function Navbar() {
  return (
    <>
    <div className='kss-tool-wrapper'>
      <div className="kss-tool-container">
      <div>
        <a href="#"><FacebookIcon /></a>
        <a href="#"><InstagramIcon /></a>
        <a href="#"><TwitterIcon /></a>
        <a href="#"><WhatsAppIcon /></a>
      </div>
      <div className='theme-col-container'>
      <Button style={{marginRight:'10px'}} variant='outlined' color='inherit'><TextDecreaseIcon /></Button>
      <Button  variant='contained' color='inherit'><TextIncreaseIcon /></Button>
      <Button className='kss-btn' variant='contained' style={{backgroundColor:'inherit'}}></Button>
      <Button className='kss-btn' variant='contained' style={{backgroundColor:'#008a1e'}}></Button>
      <Button className='kss-btn' variant='contained' style={{backgroundColor:'#a20149'}}></Button>
      <Button className='kss-btn' variant='contained' style={{backgroundColor:'#009dff'}}></Button>
      <Button className='kss-btn' variant='contained' style={{backgroundColor:'#ff9100'}}></Button>
    </div>
      </div>
    </div>
    
    </>
  )
}
