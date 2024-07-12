import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './prices.css';

export default function Prices() {
  const handleClick = () => {
    window.open(
      'https://api.whatsapp.com/send?phone=541130565913&text=Hola,%20quiero%20consultar%20por%20un%20sitio%20web!',
      '_blank'
    );
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className='prices' id='precios'>
      <h2
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        NUESTROS PRECIOS
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
            <h5 className='prices-container-card-div-title'>CONSULTAR</h5>
            <p className='prices-container-card-div-subtitle'>PAGO UNICO</p>
            <ul className='prices-container-card-div-list'>
              <li className='prices-container-card-div-list-item'>Diseño Personalizado</li>
              <li className='prices-container-card-div-list-item'>Hosting</li>
              <li className='prices-container-card-div-list-item'>Dominio</li>
              <li className='prices-container-card-div-list-item'>Certificado SSL</li>
              <li className='prices-container-card-div-list-item'>Email de empresa</li>
              <li className='prices-container-card-div-list-item'>4 Secciones</li>
              <li className='prices-container-card-div-list-item'>Boton WhatsApp</li>
            </ul>
            <button className='prices-container-card-div-button' onClick={handleClick}>
              COTIZAR
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
            <h5 className='prices-container-card-div-title'>CONSULTAR</h5>
            <p className='prices-container-card-div-subtitle'>PAGO UNICO</p>
            <ul className='prices-container-card-div-list'>
              <li className='prices-container-card-div-list-item'>Diseño Personalizado</li>
              <li className='prices-container-card-div-list-item'>Hosting VPS</li>
              <li className='prices-container-card-div-list-item'>Dominio</li>
              <li className='prices-container-card-div-list-item'>Certificado SSL</li>
              <li className='prices-container-card-div-list-item'>Email de empresa</li>
              <li className='prices-container-card-div-list-item'>4 Secciones</li>
              <li className='prices-container-card-div-list-item'>4 Páginas</li>
              <li className='prices-container-card-div-list-item'>Boton WhatsApp</li>
              <li className='prices-container-card-div-list-item'>Formulario de Contacto</li>
            </ul>
            <button className='prices-container-card-div-button' onClick={handleClick}>
              COTIZAR
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
          <h3 className='prices-container-card-h3'>APLICACIÓN WEB</h3>
          <div className='prices-container-card-div'>
            <h5 className='prices-container-card-div-title'>CONSULTAR</h5>
            <p className='prices-container-card-div-subtitle'>PAGO UNICO</p>
            <ul className='prices-container-card-div-list'>
              <li className='prices-container-card-div-list-item'>Diseño Personalizado</li>
              <li className='prices-container-card-div-list-item'>Hosting VPS</li>
              <li className='prices-container-card-div-list-item'>Dominio</li>
              <li className='prices-container-card-div-list-item'>Certificado SSL</li>
              <li className='prices-container-card-div-list-item'>Email de empresa</li>
              <li className='prices-container-card-div-list-item'>4 Secciones</li>
              <li className='prices-container-card-div-list-item'>4 Páginas</li>
              <li className='prices-container-card-div-list-item'>Boton WhatsApp</li>
              <li className='prices-container-card-div-list-item'>Formulario de Contacto</li>
              <li className='prices-container-card-div-list-item'>Pasarela de pago</li>
              <li className='prices-container-card-div-list-item'>Integración de Servicios</li>
            </ul>
            <button className='prices-container-card-div-button' onClick={handleClick}>
              COTIZAR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
