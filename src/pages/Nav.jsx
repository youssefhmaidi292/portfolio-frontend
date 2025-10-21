import React from 'react'
import '../styles/Nav.css';
import { useState } from 'react';
import logo from "../assets/logo.png"

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`nav ${open ? 'nav--open' : ''}`}>
      <div>
        <div className='di12'></div>
        <img className='lg' src={logo} alt="logo" />
      </div>
      <ul className="nav1">
        <li><a href="/">home</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/services">services</a></li>
        <li><a href="/skills">skills</a></li>
        <li><a href="/portfolio">portfolio</a></li>
        <li><a href="/contact">contact</a></li>
      </ul>

      <div className="ic1" onClick={() => setOpen(!open)}>
        <i className={`fa-solid ${open ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
}

export default Nav