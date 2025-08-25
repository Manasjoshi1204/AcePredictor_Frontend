import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/acepredictor_logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="AcePredictor Logo" className="logo-image" />
        <span className="logo-text">AcePredictor</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/predict">Predict</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
