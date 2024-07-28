import React from 'react';
import './Languages.css';
import {technologies} from '../../constants';

const Languages = () => {
  return (
    <section id="languages" data-aos="fade">
      <div className="languages-box">
        <ul>
          {technologies.map((tech) => (
            <li>
              <img src={tech.imgName} alt="Avatar"/>
              <h3>{tech.text}</h3>
          </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Languages;