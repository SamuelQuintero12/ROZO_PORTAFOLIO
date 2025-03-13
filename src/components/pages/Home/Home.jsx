import React from 'react';
import './Home.css';
import imagen1 from "../../../assets/img1.png";

const Home = () => {
  return (

    <>
      <section id="home" className=" flex flex-col items-center ">
      <img  src={imagen1} alt="Foto personal" className='rounded-lg w-80 h-100 mb-35 ' />
      <h1 className="text-xl font-bold">Hola, soy Samuel Quintero</h1>
      <p className="text-lg p-7 tracking-tight ">Hola, mi nombre es Samuel Andrés Quintero Londoño. Tengo 17 años y actualmente estoy estudiando Análisis y Desarrollo de Software en el SENA.
      Desde siempre, me ha apasionado la tecnología y la programación, por lo que decidí formarme en este campo para desarrollar habilidades que me permitan crear soluciones innovadoras. Me interesa especialmente el desarrollo de aplicaciones, la inteligencia artificial y la seguridad informática.
      Soy una persona comprometida, responsable y con ganas de seguir aprendiendo cada día para mejorar mis conocimientos y contribuir en el mundo de la tecnología.
      ¡Gracias por tu atención!</p>
    </section>

    </>
  );
};

export default Home;
