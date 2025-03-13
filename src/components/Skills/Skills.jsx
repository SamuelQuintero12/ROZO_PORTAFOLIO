import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    
    <section id="habilidades" className="social-media p-4  rounded-lg shadow-md">
      <h2 className="text-5xl font-bold  mb-4 ">Habilidades Técnicas</h2>
      <div className='text-2xl justify-center  text-black-800 flex items-center'> 
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 space-x-6 space-y-1">
        <div>
          <h3 className="text-xl  font-bold ">Frontend</h3>
          <ul className="list-disc list-inside ">
            <p>React</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Tailwind CSS</p>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold ">Control de Versiones</h3>
          <ul className="list-disc list-inside">
            <p>Git</p>
            <p>GitHub</p>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold   ">Educación y Liderazgo</h3>
          <ul className="list-disc list-inside">
            <p>Lógica de programación</p>
            <p>Preparación y conducción de conferencias</p>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold">Desarrollo Web</h3>
          <ul className="list-disc list-inside">
            <p>Aplicaciones del lado del cliente</p>
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Skills;
