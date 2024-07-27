import React from 'react';
import Avatar from '../../assests/images/Avatar.png';
import './Home.css';

const Home = () => {
  return (
    <section id="home">
      <div className="home-text">
        <strong>Hello, it's me</strong>
        <h1>Pankti Shah</h1>
        <p>I am a software engineer, Full stack developer</p>
        <a href="#summary" className='btn-link'>Scroll For me</a>
      </div>

      <div className="home-img">
        <div className="img-box">
          <img src={Avatar} alt="Avatar"/>
          <h2>Pankti Shah <br/><span>Full-Stack developer</span></h2>

          <div className="social">
            <a href='#!'>
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a href='#!'>
              <i className="fa-brands fa-square-github"></i>
            </a>

            <a href='#!'>
              <i className="hire-me">Hire Me</i>
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;