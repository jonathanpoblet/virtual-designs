import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import WhatsAppButton from './Components/WhatsAppButton/WhatsAppButton';

function App() {
  return (
    <>
      <Header />
      <Main />
      <WhatsAppButton />
    </>
  );
}

export default App;
