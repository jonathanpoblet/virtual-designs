import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

import './footer.css';

const Footer = () => {
  return (
    <footer className='d-flex flex-wrap justify-content-between align-items-center border-top footer flex-row'>
      <div className='col-md-4 d-flex align-items-center'>
        <span className='mb-md-0 text-white'>© 2024 Virtual Designs</span>
      </div>

      <ul className='nav col-md-4 justify-content-end list-unstyled d-flex align-items-center'>
        <li className='ms-3 footer-li'>
          <a
            className='text-muted'
            href='https://api.whatsapp.com/send?phone=542478478213&text=Hola,%20quiero%20consultar%20por%20un%20producto!'
            target='_blank'
          >
            <FaWhatsapp className='footer-icons' />
          </a>
        </li>
        <li className='ms-3 footer-li'>
          <a
            className='text-muted'
            href='https://www.instagram.com/virtual.designs.ar/'
            target='_blank'
          >
            <FaInstagram className='footer-icons' />
          </a>
        </li>
        <li className='ms-3 footer-li'>
          <a className='text-muted' href='mailto:contacto.virtualdesigns@gmail.com' target='_blank'>
            <AiOutlineMail className='footer-icons' />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
