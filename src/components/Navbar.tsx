import logoSmall from '../assets/YSJDLogoSmall.jpeg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src={logoSmall} alt="Logo Soy Juan Diego" className="logo-small" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#about">Sobre Nosotros</a>
        </li>
        <li>
          <a href="#journey">Historia</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
      <a href="#journey" className="btn-primary cta-nav">
        Empieza tu camino
      </a>
    </nav>
  );
};

export default Navbar; 