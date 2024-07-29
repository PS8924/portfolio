import React from 'react';
import Avatar from '../../assests/images/2.jpg';
import './Home.css';
import { linkedin, github } from '../../constants';

const Home = () => {
  return (
    <section id="home">

      <div className="home-img">
        <div className="img-box">
          <img src={Avatar} alt="Avatar"/>
          <h2>Pankti Shah <br/><span>Full-Stack developer</span></h2>

          <div className="social">
            <a href={linkedin} target="_blank">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a href={github} target="_blank">
              <i className="fa-brands fa-square-github"></i>
            </a>

            <a href='#!'>
              <i className="hire-me">Hire Me</i>
            </a>

          </div>
        </div>
      </div>

      <div className="home-text">
        <strong>Hi, It's me</strong>
        <h1>Pankti Shah</h1>
        <p>I build web and mobile applications with deployments on cloud platfrom.</p>
        <a href="#summary" className='btn-link'>Scroll For me</a>
      </div>
    </section>
  )
}

export default Home;