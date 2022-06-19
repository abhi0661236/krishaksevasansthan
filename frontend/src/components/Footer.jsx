import React from 'react';
import '../assets/css/Footer.css';
import Logo from '../assets/media/logo192.png';

function Footer() {
  return (
    <footer>
        <div className='ftr-with-menu'>
        <div className="kss-footer-branding">
            <div className="brnd-img">
            <img src={Logo} alt="" />
            <figcaption><b>Krishak Seva Sansthan</b></figcaption>
            </div>
            <div className="kss-social-media">
                <a href="#"></a>
                <a href="#">Instagram</a>
                <a href="#">Tweitter</a>
                <a href="#">Whatsapp</a>
            </div>
        </div>
        <div className="kss-footer-menu">
            <ul>
                <li>Home</li>
                <li>Blogs</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className="kss-copyrights">
            <p><i>Copyright &copy; KRISHAK SEVA SANSTHAN.<br />
                  All Rights are reserved.
            </i></p>
            <p><a href="#">Terms & Conditions</a></p>
        </div>
        </div>

        
    </footer>
  )
}

export default Footer