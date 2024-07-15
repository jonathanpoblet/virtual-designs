import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './clients.css';

export default function Clients() {
  const clients = [
    {
      url: 'https://donnacalzados.com/',
      src: 'donna.png',
      aos: 'flip-right',
    },
    {
      url: 'https://jonathanpoblet.github.io/jardineria/',
      src: 'botanica.png',
      aos: 'flip-left',
    },
    {
      url: 'https://jonathanpoblet.github.io/forzagym/',
      src: 'forza.png',
      aos: 'flip-right',
    },
    {
      url: 'https://jonathanpoblet.github.io/Taraborelli-Automobile/',
      src: 'automobile.png',
      aos: 'flip-left',
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className='clients fade-in' id='clientes'>
      <h2>CASOS DE ÉXITO</h2>
      <div className='clients-container'>
        {clients.map(client => {
          return (
            <a href={client.url} target='_blank'>
              <img
                className='clients-container-img'
                src={client.src}
                data-aos={client.aos}
                data-aos-offset='200'
                data-aos-easing='ease-in-sine'
                data-aos-duration='800'
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}
