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
    <section className='clients' id='clientes'>
      <h2
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        CASOS DE ÉXITO
      </h2>
      <div
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
        className='clients-container'
      >
        <div className='clients-container-card'>
          <FaRegClock />
          <h3>Desarrollo Web Personalizado</h3>
          <p>
            Creación de sitios web profesionales dentro de una o dos semanas, adaptados a tus
            necesidades.
          </p>
          <button onClick={handleClick}>Más Información</button>
        </div>
        <div className='clients-container-card'>
          <FaDesktop />
          <h3>Diseño Responsivo</h3>
          <p>
            Sitios web adaptados a cualquier dispositivo, brindando una excelente experiencia de
            usuario.
          </p>
          <button onClick={handleClick}>Más Información</button>
        </div>
        <div className='clients-container-card'>
          <FaChartLine />
          <h3>SEO y Optimización</h3>
          <p>
            Mejora la visibilidad de tu sitio en los motores de búsqueda y atrae más tráfico
            orgánico a tu negocio.
          </p>
          <button onClick={handleClick}>Más Información</button>
        </div>
      </div>
    </section>
  );
}
