import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/media/logo192.png';
import '../assets/css/Navbar.css';
const Navbar = () => {
  return (
    <div className="kss-nav-wrapper">
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={Logo} alt="brand logo" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page"><i className="fa-solid fa-house"></i> Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about"><i className="fa-solid fa-circle-info"></i> About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Vermi Composting</a></li>
            <li><a className="dropdown-item" href="#">Shava-Vahini action</a></li>
            
            <li className="dropdown-header">Upcoming</li>
            <li><a className="dropdown-item" href="#">Farming Campaign</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/contact'><i className="fas fa-phone"></i> Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/support'><i class="fa-solid fa-hand-holding-dollar"></i> Support</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;