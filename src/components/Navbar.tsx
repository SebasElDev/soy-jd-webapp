import { useEffect, useState } from 'react';
import logoSmall from '../assets/YSJDLogoSmall.jpeg';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 0) return;
      if (currentY > lastScrollY && currentY > 80) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${show ? '' : 'navbar-hidden'}`}>
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
      <a href="#journey" className="btn-secondary cta-nav">
        ¡Descubre el milagro!
      </a>
    </nav>
  );
};

export default Navbar; 