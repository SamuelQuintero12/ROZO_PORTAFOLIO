import React from 'react'; 
import './SocialSkills.css';

const SocialSkills = () => {
  return (  
    <section id="sociales" className="p-4 rounded-lg shadow-md w-full max-w-[400px] mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Habilidades Sociales</h2>

      <ul className="list-disc list-inside text-left text-lg space-y-2">
        <li>Comunicación efectiva</li>
        <li>Liderazgo</li>
        <li>Honestidad</li>
        <li>Respeto</li>
        <li>Trabajo en equipo</li>
      </ul>
    </section>
  );
};

export default SocialSkills;
