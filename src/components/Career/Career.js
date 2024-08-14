import React from 'react';
import './Career.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { workdetails } from '../../constants';

const CareerCard = ({experience}) =>{
  //console.log(experience.points)
  return(
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgba(33, 150, 243, 0.28)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgba(33, 150, 243, 0.28)' }}
      date={experience.date}
      iconStyle={{ background: '#fff', color: '#fff' }}
      icon={
        <div className="career-icon-warp">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="career-icon"
          />
        </div>
      }
    >
      <h3 className="vertical-timeline-element-title">{experience.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{experience.company_name}</h4>
      <h4 className="vertical-timeline-element-subtitle">{experience.location}</h4>
      <ul className='work-timeline'>
        {experience.points.map((point, index)=>(
          <li key={`experience-point-${index}`}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Career = () => {

  return (
    <section id="career">
      <div className="carrer-education">
        <div className="carrer" data-aos="fade-right">
          <h3>Career and education</h3>
          <VerticalTimeline>
            {workdetails.map((work, index)=>(
              <CareerCard
                key={`experience-${index}`}
                experience={work}
              />
            ))}
        </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}

export default Career;