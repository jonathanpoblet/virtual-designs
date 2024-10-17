import React, { useState } from 'react';
import './header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-md fixed-top fade-in ${isMenuOpen ? 'show' : ''}`}>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          <img className='logo' src='assets/logo.png' alt='logo' />
        </a>
        <button className='navbar-toggler' type='button' onClick={handleMenuToggle}>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id='navbarNav'>
          <ul className='navbar-nav w-100 justify-content-end'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#' onClick={handleLinkClick}>
                Inicio
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link active'
                aria-current='page'
                href='#services'
                onClick={handleLinkClick}
              >
                Servicios
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link active'
                aria-current='page'
                href='#clients'
                onClick={handleLinkClick}
              >
                Clientes
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link active'
                aria-current='page'
                href='#pricing'
                onClick={handleLinkClick}
              >
                Precios
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
