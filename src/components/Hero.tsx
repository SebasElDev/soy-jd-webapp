import logoFull from "../assets/YSJDLogoFull.jpeg";
import RotatingWords from "./RotatingWords";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-content">
          <img src={logoFull} alt="Soy Juan Diego" className="logo-full" />
          <h1>
            Un viaje de <RotatingWords />
          </h1>
          <p className="subtitle">
            Descubre la historia de Nuestra Señora de Guadalupe y su encuentro
            con San Juan Diego.
          </p>
          <a href="#journey" className="btn-primary cta-big">
            Empieza tu camino
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
