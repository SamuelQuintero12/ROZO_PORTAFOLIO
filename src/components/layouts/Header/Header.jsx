import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-purple-300 text-white p-4 shadow-md z-50">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <h1 className="text-xl font-bold">Mi Portafolio</h1>

        <button 
          className="md:hidden bg-purple-500 text-white p-2 rounded-md" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <nav className={`absolute md:static top-16 left-0 w-full bg-gray-300 md:bg-transparent transition-all 
          ${menuOpen ? 'block' : 'hidden'} md:flex md:space-x-6 text-center`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li><Link to="/" className="block py-2 px-4 hover:bg-white-700">Inicio</Link></li>
            <li><Link to="/habilidades" className="block py-2 px-4 hover:bg-white-700">Habilidades Técnicas</Link></li>
            <li><Link to="/sociales" className="block py-2 px-4 hover:bg-white-700">Habilidades Sociales</Link></li>
            <li><Link to="/ingles" className="block py-2 px-4 hover:bg-white-700">Nivel de Inglés</Link></li>
            <li><Link to="/experiencia" className="block py-2 px-4 hover:bg-white-700">Experiencia</Link></li>
            <li><Link to="/estudios" className="block py-2 px-4 hover:bg-white-700">Estudios</Link></li>
            <li><Link to="/redes" className="block py-2 px-4 hover:bg-white-700">Redes Sociales</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
