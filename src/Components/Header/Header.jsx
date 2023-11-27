import './header.css';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md fixed-top fade-in">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className='logo' src='../../../public/logo.png' alt='logo' />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">INICIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#servicios">SERVICIOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#sobre-nosotros">SOBRE NOSOTROS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#contacto">CONTACTO</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}