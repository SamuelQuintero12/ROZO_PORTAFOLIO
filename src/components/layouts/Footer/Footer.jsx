import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (

    <footer className="bg-purple-200 text-black p-4 text-center w-full rounded-2xl">
      <div className='w-300 flex justify-between'> 
      <p className="text-lg text-white-400">Samuel Quintero &copy; </p>
      <div className="flex justify-center mt-2 space-x-">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-black w-20 h-9" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-black w-20 h-9" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-black w-20 h-9" />
        </a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-black w-20 h-9" />
        </a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
