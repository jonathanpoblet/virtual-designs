import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './prices.css';

export default function Prices() {
  const handleClick = () => {
    window.open(
      'https://api.whatsapp.com/send?phone=541130565913&text=Hola,%20quiero%20CONSULT%20por%20un%20sitio%20web!',
      '_blank'
    );
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className='prices' id='pricing'>
      <h2
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        PRICING
      </h2>
      <div className='prices-container'>
        <div
          className='prices-container-card'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-easing='ease-in-sine'
          data-aos-duration='600'
        >
          <h3 className='prices-container-card-h3'>LANDING PAGE</h3>
          <div className='prices-container-card-div'>
            <h5 className='prices-container-card-div-title'>CONSULT</h5>
            <p className='prices-container-card-div-subtitle'>SINGLE PAYMENT</p>
            <ul className='prices-container-card-div-list'>
              <li className='prices-container-card-div-list-item'>Custom Design</li>
              <li className='prices-container-card-div-list-item'>Hosting</li>
              <li className='prices-container-card-div-list-item'>Domain</li>
              <li className='prices-container-card-div-list-item'>SSL Certificate</li>
              <li className='prices-container-card-div-list-item'>Company email</li>
              <li className='prices-container-card-div-list-item'>4 Sections</li>
              <li className='prices-container-card-div-list-item'>WhatsApp button</li>
            </ul>
            <button className='prices-container-card-div-button' onClick={handleClick}>
              QUOTE
            </button>
          </div>
        </div>

        <div
          className='prices-container-card'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-easing='ease-in-sine'
          data-aos-duration='600'
        >
          <h3 className='prices-container-card-h3'>WEB PREMIUM</h3>
          <div className='prices-container-card-div'>
            <h5 className='prices-container-card-div-title'>CONSULT</h5>
            <p className='prices-container-card-div-subtitle'>SINGLE PAYMENT</p>
            <ul className='prices-container-card-div-list'>
              <li className='prices-container-card-div-list-item'>Custom Design</li>
              <li className='prices-container-card-div-list-item'>Hosting VPS</li>
              <li className='prices-container-card-div-list-item'>Domain</li>
              <li className='prices-container-card-div-list-item'>SSL Certificate</li>
              <li className='prices-container-card-div-list-item'>Company email</li>
              <li className='prices-container-card-div-list-item'>4 Sections</li>
              <li className='prices-container-card-div-list-item'>4 Pages</li>
              <li className='prices-container-card-div-list-item'>WhatsApp button</li>
              <li className='prices-container-card-div-list-item'>Contact Form</li>
            </ul>
            <button className='prices-container-card-div-button' onClick={handleClick}>
              QUOTE
            </button>
          </div>
        </div>

        <div
          className='prices-container-card'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-easing='ease-in-sine'
          data-aos-duration='600'
        >
          <h3 className='prices-container-card-h3'>WEB APP</h3>
          <div className='prices-container-card-div'>
            <h5 className='prices-container-card-div-title'>CONSULT</h5>
            <p className='prices-container-card-div-subtitle'>SINGLE PAYMENT</p>
            <ul className='prices-container-card-div-list'>
              <li className='prices-container-card-div-list-item'>Custom Design</li>
              <li className='prices-container-card-div-list-item'>Hosting VPS</li>
              <li className='prices-container-card-div-list-item'>Domain</li>
              <li className='prices-container-card-div-list-item'>SSL Certificate</li>
              <li className='prices-container-card-div-list-item'>Company email</li>
              <li className='prices-container-card-div-list-item'>4 Sections</li>
              <li className='prices-container-card-div-list-item'>4 Pages</li>
              <li className='prices-container-card-div-list-item'>WhatsApp button</li>
              <li className='prices-container-card-div-list-item'>Contact Form</li>
              <li className='prices-container-card-div-list-item'>Payment gateway</li>
              <li className='prices-container-card-div-list-item'>Service Integration</li>
            </ul>
            <button className='prices-container-card-div-button' onClick={handleClick}>
              QUOTE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
