import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <span>Copyright &copy;2024</span>

      <div className="social-links">
        <a href="#!">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>

        <a href="#!">
          <i className="fa-brands fa-square-github"></i>
        </a>
      </div>

      <a href="#!" className='footer-logo'>Pankti Shah</a>
    </footer>
  )
}

export default Footer