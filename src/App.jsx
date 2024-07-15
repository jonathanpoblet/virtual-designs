import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import WhatsAppButton from './Components/WhatsAppButton/WhatsAppButton';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Main />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
