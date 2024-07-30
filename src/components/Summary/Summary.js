import React from 'react';
import './Summary.css';
import pankticv from '../../assests/cv/pankti_cv.pdf'

const Summary = () => {
  return(
    <section id="summary">
      <div className="summary-heading">
        <strong><h3>Expertise</h3></strong>
        <h4>Web Development</h4>
        <h4>React native Development</h4>
        <h4>Backend Development</h4>
        <a href={pankticv} download className='btn-link'>
          Get CV <i class="fa-solid fa-download"></i>
        </a>
      </div>

      <div className="summary-details">
        <p>
          Passionate about developing data-rich web products by enhancing user experience and boosting business value. With extensive skills in JavaScript (ES6), TypeScript, React, Node.js, AWS and microservice architecture, I ensure applications are scalable and reliable, driving business growth. I collaborate with stakeholders to deliver efficient, user-centric solutions. 
        </p>
        <p>Let’s discuss how we can make your ideas a reality!</p>
      </div>
    </section>
  )
}

export default Summary;