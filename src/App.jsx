import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';
import Home from './components/pages/Home/Home';
import Skills from './components/Skills/Skills';
import SocialSkills from './components/SocialSkills/SocialSkills';
import EnglishLevel from './components/EnglishLevel/EnglishLevel';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import SocialMedia from './components/SocialMedia/SocialMedia';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/habilidades" element={<Skills />} />
            <Route path="/sociales" element={<SocialSkills />} />
            <Route path="/ingles" element={<EnglishLevel />} />
            <Route path="/experiencia" element={<Experience />} />
            <Route path="/estudios" element={<Education />} />
            <Route path="/redes" element={<SocialMedia />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
