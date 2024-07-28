import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navigation'>
      <a href="#!" className='logo'>Pankti | Software Engineer</a>
      <div className='menu-icon' onClick={toggleMenu}>
        {isOpen ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>}
      </div>
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li><a href='#career' onClick={toggleMenu}>Work</a></li>
        <li><a href='#about' onClick={toggleMenu}>About</a></li>
        <li><a href='#contact' onClick={toggleMenu}>Contact</a></li>
        <li><a href='#' onClick={toggleMenu}>LinkedIn</a></li>
        <li><a href='#' onClick={toggleMenu}>GitHub</a></li>
      </ul>
    </nav>
  )
}

export default Navigation;