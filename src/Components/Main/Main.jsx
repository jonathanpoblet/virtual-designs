import Banner from '../Banner/Banner';
import Clients from '../Clients/Clients';
import Info from '../Info/Info';
import Prices from '../Prices/Prices';
import Services from '../Services/Services';
import './main.css';

export default function Main() {
  return (
    <main className='main fade-in'>
      <Banner />
      <Services />
      <Info />
      <Clients />
      <Prices />
    </main>
  );
}
