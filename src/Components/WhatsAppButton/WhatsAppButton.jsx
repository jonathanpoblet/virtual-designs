import { BsWhatsapp } from 'react-icons/bs';

import './whatsAppButton.css';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open(
      'https://api.whatsapp.com/send?phone=541130565913&text=Hi,%20I%20want%20to%20consult%20for%20a%20website!',
      '_blank'
    );
  };

  return <BsWhatsapp data='ture' className='whatsapp-button' onClick={handleClick}></BsWhatsapp>;
}
