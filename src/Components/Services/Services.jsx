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
    <section className='services' id='services'>
      <h2
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        SERVICES
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
          <h3>Custom Web Development</h3>
          <p>Creation of professional websites within one or two weeks, tailored to your needs.</p>
          <button onClick={handleClick}>More Information</button>
        </div>
        <div className='services-container-card'>
          <FaDesktop />
          <h3>Responsive Designs</h3>
          <p>Websites adapted to any device, providing an excellent user experience user.</p>
          <button onClick={handleClick}>More Information</button>
        </div>
        <div className='services-container-card'>
          <FaChartLine />
          <h3>SEO & Optimization</h3>
          <p>
            Improve your site's visibility in search engines and attract more traffic organic to
            your business.
          </p>
          <button onClick={handleClick}>More Information</button>
        </div>
      </div>
    </section>
  );
}
