import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Services from '../Services/Services';
import './main.css';

export default function Main() {
  return (
    <main className='main fade-in'>
      <Banner />
      <Services />
      <Info />
    </main>
  );
}
