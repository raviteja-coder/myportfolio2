import React from 'react';
import Navbar from '../Navbar';
import './index.css';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Footer from '../Footer';

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className='contact-container'>
      
      <section id="contact" className="contact-section">
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-description">
          I'm Ravi Teja, a passionate web developer with a focus on building efficient and beautiful web experiences. 
          Feel free to reach out through any of the platforms below.
        </p>
        <div className="social-links">
          <a href="https://www.facebook.com/raviteja.nakka.10" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaFacebookF className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/ravi-teja-nakka-63400b247/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedinIn className="social-icon" />
          </a>
          <a href="https://wa.me/7036942879" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaWhatsapp className="social-icon" />
          </a>
          <a href="https://www.instagram.com/_ravi__teja___/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagram className="social-icon" />
          </a>
          <a href="mailto:nakkaraviteja161616@gmail.com" className="social-link">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
