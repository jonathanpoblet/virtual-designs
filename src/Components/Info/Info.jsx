import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './info.css';

export default function Info() {
  const info = [
    {
      number: '1.500',
      text: 'DIGITALIZED BUSINESSES PER DAY',
    },
    {
      number: '250.000',
      text: 'DIGITALIZED BUSINESSES IN THE WORLD',
    },
    {
      number: '1.200',
      text: 'NEW ENTREPRENEURS EVERY DAY',
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
        Digitizing your business is essential in the modern era, as it allows you to improve
        operational efficiency, increase customer satisfaction and open new market opportunities.
        The adoption of digital technologies facilitates greater competitiveness and adaptation to
        changing market demands, in addition to enhancing profitability and sustainable growth.
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
