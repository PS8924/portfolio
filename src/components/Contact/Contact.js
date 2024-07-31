import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" data-aos="fade-down">
      <strong>What's Next? Let's Work Together!</strong>
      {/* <h3>Let's Work Together!</h3> */}
      <p>Bringing 6 years of cross-functional experience in full-stack application development, with expertise in building and deploying data-intensive applications on cloud-based environments, and a proven ability to collaborate in diverse teams</p>
      <a href="mailto:shahpankti1188@gmail.com" className='btn-link contact-btn'>
        Write Me An Email <i className="fa-solid fa-envelope"></i>
      </a>
      <a href="tel:0374481936" className='btn-link contact-btn'>
        857-800-3604 <i className="fa-solid fa-phone-flip"></i>
      </a>
    </section>
  )
}

export default Contact