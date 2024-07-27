import React from 'react';
import './Career.css';
import pankticv from '../../assests/cv/pankti_cv.pdf'

const Career = () => {
  const Careers = [
    {
      title: "Front-end Developer",
      name: "Software",
      year: "2018 - 2020"
    },
    {
      title: "Back-end Developer",
      name: "Software",
      year: "2018 - 2020"
    },
    {
      title: "Front-end Developer",
      name: "Software",
      year: "2018 - 2020"
    },
    {
      title: "Back-end Developer",
      name: "Software",
      year: "2018 - 2020"
    }
  ]

  const educations = [
    {
      title: "Front-end Developer",
      name: "Software",
      year: "2018 - 2020"
    },
    {
      title: "Back-end Developer",
      name: "Software",
      year: "2018 - 2020"
    }
  ]

  return (
    <section id="career">
      <div className="career-education">
        <div className="career" data-aos="fade-right">
          <h3>Career</h3>

          <div className="c-b-container">
            {
              Careers.map((career, index) => (
                <div className="c-box" key={index}>
                  <h4>{career.title}</h4>
                  <strong>{career.name}</strong>
                  <span>{career.year}</span>
                </div>
              ))
            }
          </div>
        </div>

        <div className="career edu" data-aos="fade-left">
          <h3>Education</h3>

          <div className="c-b-container">
            {
              educations.map((career, index) => (
                <div className="c-box" key={index}>
                  <h4>{career.title}</h4>
                  <strong>{career.name}</strong>
                  <span>{career.year}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="btn-c">
        <a href={pankticv} download className='btn-link'>
          Get CV <i className="fa-solid fa-download"></i>
        </a>
      </div>
    </section>
  )
}

export default Career;