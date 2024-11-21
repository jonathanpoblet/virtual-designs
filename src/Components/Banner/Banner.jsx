import './banner.css';

export default function Banner() {
  return (
    <section className='banner'>
      <h1>CREAMOS WEBS QUE IMPULSAN NEGOCIOS</h1>
      <h2>
        Construyamos Tu <b style={{color: '#000'}}>Sitio Web</b> Juntos!
      </h2>
      <a
        href='https://api.whatsapp.com/send?phone=541130565913&text=Hola,%20quiero%20consultar%20por%20un%20sitio%20web!'
        target='_blank'
      >
        CONTACTANOS
      </a>
    </section>
  );
}
