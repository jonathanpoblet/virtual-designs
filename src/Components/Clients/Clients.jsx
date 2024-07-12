import { useEffect } from 'react';
import { FaRegClock, FaDesktop, FaChartLine } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './clients.css';

export default function Clients() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className='clients fade-in' id='clientes'>
      <h2>CASOS DE ÉXITO</h2>
      <div className='clients-container'>
        <img
          onClick={() => (window.location.href = 'https://donnacalzados.com/')}
          className='clients-container-img'
          src='../../../public/donna.png'
          alt='Imagen Proyecto Cliente'
        />
        <img
          onClick={() => (window.location.href = 'https://jonathanpoblet.github.io/jardineria/')}
          className='clients-container-img'
          src='../../../public/botanica.png'
          alt='pImagen Proyecto Cliente'
        />
        <img
          onClick={() => (window.location.href = 'https://jonathanpoblet.github.io/forzagym/')}
          className='clients-container-img'
          src='../../../public/forza.png'
          alt='pImagen Proyecto Cliente'
        />
        <img
          onClick={() =>
            (window.location.href = 'https://jonathanpoblet.github.io/Taraborelli-Automobile/')
          }
          className='clients-container-img'
          src='../../../public/automobile.png'
          alt='pImagen Proyecto Cliente'
        />
      </div>
    </section>
  );
}
