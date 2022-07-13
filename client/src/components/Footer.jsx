import React from 'react';
import {Link} from 'react-router-dom';



import '../assets/css/Footer.css';
import Logo from '../assets/media/logo192.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';




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
                        <a href="#"><FacebookIcon /></a>
                        <a href="#"><InstagramIcon /></a>
                        <a href="#"><TwitterIcon /></a>
                        <a href="#"><WhatsAppIcon /></a>
                    </div>
                </div>
                <div className="kss-footer-menu">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                        <li><Link to='/support'>Support</Link></li>
                        
                    </ul>
                </div>
                <div className="kss-copyrights">
                    <p><i>Copyright &copy; KRISHAK SEVA SANSTHAN.<br />
                        All Rights are reserved.
                    </i></p>
                    <p><a href="https://www.freeprivacypolicy.com/live/87456093-2daa-4ffe-97d2-31f67157cb45" target='_blank'>Terms & Conditions</a></p>
                    <p><b><i>
                    Designed & Developed By <strong>APCODE</strong>    
                    </i></b></p>
                </div>
            </div>


        </footer>
    )
}

export default Footer