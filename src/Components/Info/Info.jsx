import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './info.css';

export default function Info() {
  const info = [
    {
      number: '1.500',
      text: 'NEGOCIOS DIGITALIZADOS POR DÍA',
    },
    {
      number: '250.000',
      text: 'NEGOCIOS DIGITALIZADOS EN EL MUNDO',
    },
    {
      number: '1.200',
      text: 'NUEVOS EMPRENDEDORES CADA DÍA',
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className='info' id='info'>
      <p
        className='info-text'
        data-aos='zoom-in'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='800'
      >
        Digitalizar tu negocio es esencial en la era moderna, ya que permite mejorar la eficiencia
        operativa, incrementar la satisfacción del cliente y abrir nuevas oportunidades de mercado.
        La adopción de tecnologías digitales facilita una mayor competitividad y adaptación a las
        cambiantes demandas del mercado, además de potenciar la rentabilidad y el crecimiento
        sostenible.
      </p>
      <div
        className='info-container'
        data-aos='zoom-in'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='800'
      >
        {info.map(i => {
          return (
            <div className='info-container-stadistic'>
              <p className='info-container-stadistic-number'>{i.number}</p>
              <p className='info-container-stadistic-text'>{i.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
