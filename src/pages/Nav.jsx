import React, { useState } from 'react';
import '../styles/Nav.css';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`nav ${open ? 'nav--open' : ''}`}>
      <div>
        <div className='di12'></div>
        <img className='lg' src={logo} alt="logo" />
      </div>

      <ul className="nav1">
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/services">services</Link></li>
        <li><Link to="/skills">skills</Link></li>
        <li><Link to="/portfolio">portfolio</Link></li>
        <li><Link to="/contact">contact</Link></li>
      </ul>

      <div className="ic1" onClick={() => setOpen(!open)}>
        <i className={`fa-solid ${open ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
}

export default Nav;
