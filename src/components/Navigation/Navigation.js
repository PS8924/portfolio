import React, { useState } from 'react';
import './Navigation.css';
import { linkedin, github } from '../../constants';

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
        <li><a href='#languages' onClick={toggleMenu}>Skills</a></li>
        <li><a href='#contact' onClick={toggleMenu}>Contact</a></li>
        <li><a href={linkedin} target="_blank" onClick={toggleMenu}><i className="fa-brands fa-linkedin-in"></i></a></li>
        <li><a href={github} target="_blank" onClick={toggleMenu}><i className="fa-brands fa-square-github"></i></a></li>
      </ul>
    </nav>
  )
}

export default Navigation;