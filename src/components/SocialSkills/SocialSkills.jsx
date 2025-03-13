import React from 'react';
import './SocialSkills.css';

const SocialSkills = () => {
  return (  
    <section id="sociales" className="social-media p-4  rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Habilidades Sociales</h2>
      <div className='text-3xl  mb-4 text-black-800 flex items-center'> 

      <ul className="list-disc list-inside text-left ">
        <p>Comunicación efectiva</p>
        <p>Liderazgo</p>
        <p>Honestidad</p>
        <p>Respeto</p>
        <p>Trabajo en equipo</p>
      </ul>
      </div>
    </section>
  );
};

export default SocialSkills;
