import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-heading" data-aos="flip-left">
          <strong>About me</strong>
          <h3>Designing with passion for Problem Solving</h3>
          <a href="tel:0374481936" className='btn-link'>
            857-800-3604 <i className="fa-solid fa-phone-flip"></i>
          </a>
        </div>

        <div className="about-details" data-aos="flip-right">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda culpa obcaecati laborum omnis possimus animi. Doloribus sint quas animi dolor culpa voluptates aperiam recusandae, assumenda libero fugiat soluta eum voluptas.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda culpa obcaecati laborum omnis possimus animi. Doloribus sint quas animi dolor culpa voluptates aperiam recusandae, assumenda libero fugiat soluta eum voluptas.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda culpa obcaecati laborum omnis possimus animi. Doloribus sint quas animi dolor culpa voluptates aperiam recusandae, assumenda libero fugiat soluta eum voluptas.</p>
        </div>
      </div>
    </section>
  )
}

export default About;