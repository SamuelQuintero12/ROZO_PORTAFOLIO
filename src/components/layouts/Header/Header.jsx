import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (

    <header className="header font-bold">
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/habilidades">Habilidades Técnicas</Link></li>
          <li><Link to="/sociales">Habilidades Sociales</Link></li>
          <li><Link to="/ingles">Nivel de Inglés</Link></li>
          <li><Link to="/experiencia">Experiencia</Link></li>
          <li><Link to="/estudios">Estudios</Link></li>
          <li><Link to="/redes">Redes Sociales</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
