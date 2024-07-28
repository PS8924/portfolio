import React from 'react';
import './Summary.css';
import pankticv from '../../assests/cv/pankti_cv.pdf'

const Summary = () => {
  return(
    <section id="summary">
      <div className="summary-heading">
        <strong><h3>Experties</h3></strong>
        <h4>Web development</h4>
        <h4>React native development</h4>
        <h4>Backend development</h4>
        <a href={pankticv} download className='btn-link'>
          Get CV <i class="fa-solid fa-download"></i>
        </a>
      </div>

      <div className="summary-details">
        <p>
          I specialize in building data-intensive web products that offer the best user experience and maximize business value. With extensive experience in JavaScript (ES6), TypeScript, Angular, React, and Node.js, I can code your ideas to life. I am versatile and collaborate closely with clients to create efficient, scalable, and user-friendly web products that solve real-world problems.
        </p>
        <p>Let's chat!</p>
      </div>
    </section>
  )
}

export default Summary;