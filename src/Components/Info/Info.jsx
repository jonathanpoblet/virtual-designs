import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './info.css';

export default function Info() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className='info' id='info'>
      <p className='info-text'>
        Digitalizar tu negocio es esencial en la era moderna, ya que permite mejorar la eficiencia
        operativa, incrementar la satisfacción del cliente y abrir nuevas oportunidades de mercado.
        La adopción de tecnologías digitales facilita una mayor competitividad y adaptación a las
        cambiantes demandas del mercado, además de potenciar la rentabilidad y el crecimiento
        sostenible.
      </p>
      <div className='info-container'>
        <div className='info-container-stadistic'>
          <p className='info-container-stadistic-number'>1.500</p>
          <p className='info-container-stadistic-text'>NEGOCIOS DIGITALIZADOS POR DÍA</p>
        </div>
        <div className='info-container-stadistic'>
          <p className='info-container-stadistic-number'>250.000</p>
          <p className='info-container-stadistic-text'>NEGOCIOS DIGITALIZADOS EN EL MUNDO</p>
        </div>
        <div className='info-container-stadistic'>
          <p className='info-container-stadistic-number'>1.500</p>
          <p className='info-container-stadistic-text'>NUEVOS EMPRENDEDORES CADA DÍA</p>
        </div>
      </div>
    </section>
  );
}
