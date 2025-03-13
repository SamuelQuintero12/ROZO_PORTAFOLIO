import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';
import './SocialMedia.css';

const SocialMedia = () => {
  return (
    
    <section id="redes" className="social-media p-4  rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-black-800 flex items-center">
         Redes Sociales 
      </h2>
      <ul className="flex space-x-10 space-y-8">
        
          <a href="https://facebook.com/tu-perfil"  className="text-blue-600 hover:text-blue-800 text-3xl">
            <FaFacebook />
          </a>

          <a href="https://instagram.com/tu-perfil" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 text-3xl">
            <FaInstagram />
          </a>
      
          <a href="https://youtube.com/tu-canal" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 text-3xl">
            <FaYoutube />
          </a>

          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 text-3xl">
            <FaGithub />
          </a>
      </ul>
    </section>
  );
};

export default SocialMedia;