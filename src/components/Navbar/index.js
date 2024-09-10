import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <h1 className="header-title">Ravi Teja's Portfolio</h1>
      
      <nav className="navbar">
        <div className="container">
          <button className="navbar-toggler" onClick={handleToggle}>
            <span className="navbar-toggler-icon">&#9776;</span> {/* Hamburger icon */}
          </button>

          
          <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <Link className="nav-link" to="/">About</Link>
            <Link className="nav-link" to="/projects">Projects</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;