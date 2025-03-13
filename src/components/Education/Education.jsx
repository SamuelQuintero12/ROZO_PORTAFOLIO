import React from 'react';
import './Education.css';
import imagen2 from "../../assets/colegio.png";
import imagen3 from "../../assets/sena.png";

const Education = () => {
  return (
    <section  className="social-media p-4  rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Estudios</h2>
      <div>
        <h3 className="text-xl font-semibold">Institucion Educativa Ciudadela Del SUR</h3>
      <div className='text-2xl justify-center  text-black-800  items-center'> 
        <p>Graduado de bachiller y tecnico en programación de Software</p>
        <div className="image-container">
          <img src={imagen2} alt="Foto personal" className="colegio" />
        </div>
        <h3 className="text-xl font-semibold"></h3>
        <div>
        <h3 className="text-xl font-semibold">Institucion Educativa Ciudadela Del SUR</h3>
        <p>En la actualidad estudiandola carrera tecnologo en analisis y desarrollo de Software</p>
        <div className="image-container">
          <img src={imagen3} alt="Foto personal" className="colegio" />
        </div>
      </div>
      </div>
      </div>
      
    </section>
  );
};

export default Education;