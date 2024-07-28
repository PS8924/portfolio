import React from 'react';
import './Languages.css';
import reactjs from '../../assests/images/tech/reactjs.png';

const Languages = () => {
  return (
    <section id="languages" data-aos="fade">
      {/* {
        data.map(item => (
          <div className="languages-box" key={item.title}>
            <ul>
              <li>
                <img src={reactjs} alt="Avatar"/>
                <h3>ReactJS</h3>
              </li>
            </ul>
          </div>
        ))
      } */}
      <div className="languages-box">
        <ul>
          <li>
            <img src={reactjs} alt="Avatar"/>
            <h3>ReactJS</h3>
          </li>
          <li>
            <img src={reactjs} alt="Avatar"/>
            <h3>ReactJS</h3>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Languages;