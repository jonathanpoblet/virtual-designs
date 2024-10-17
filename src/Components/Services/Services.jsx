import { useEffect } from 'react';
import { FaRegClock, FaDesktop, FaChartLine } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './services.css';

export default function Services() {
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
    <section className='services' id='servicios'>
      <h2
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        NUESTROS SERVICIOS
      </h2>
      <div
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
        className='services-container'
      >
        <div className='services-container-card'>
          <FaRegClock />
          <h3>Desarrollo Personalizado</h3>
          <p>
            Creación de sitios web profesionales dentro de una o dos semanas, adaptados a tus
            necesidades.
          </p>
          <button onClick={handleClick}>Más Información</button>
        </div>
        <div className='services-container-card'>
          <FaDesktop />
          <h3>Diseño Responsivo</h3>
          <p>
            Sitios web adaptados a cualquier dispositivo, brindando una excelente experiencia de
            usuario.
          </p>
          <button onClick={handleClick}>Más Información</button>
        </div>
        <div className='services-container-card'>
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
