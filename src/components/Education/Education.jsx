import React from 'react';
import './Education.css';
import imagen2 from "../../assets/colegio.png";
import imagen3 from "../../assets/sena.png";

const Education = () => {
  return (
    <section className="p-4 rounded-lg shadow-md w-full max-w-[400px] mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Estudios</h2>

      {/* Primera Institución */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Institución Educativa Ciudadela Del SUR</h3>
        <p className="text-black-800">Graduado de bachiller y técnico en programación de Software</p>
        <div className="flex justify-center">
          <img src={imagen2} alt="Colegio" className="w-[150px] rounded-lg" />
        </div>
      </div>

      {/* Segunda Institución */}
      <div>
        <h3 className="text-xl font-semibold">SENA</h3>
        <p className="text-black-800">Actualmente estudiando tecnología en análisis y desarrollo de Software</p>
        <div className="flex justify-center">
          <img src={imagen3} alt="SENA" className="w-[150px] rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Education;
