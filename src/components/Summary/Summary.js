import React from 'react';
import './Summary.css';
import pankticv from '../../assests/cv/pankti_cv.pdf'

const Summary = () => {
  return(
    <section id="summary">
      <div className="summary-heading">
        <strong>My Skillsets</strong>
        <h2>Some random text here</h2>
        <a href={pankticv} download className='btn-link'>
          Get CV <i class="fa-solid fa-download"></i>
        </a>
      </div>

      <div className="summary-details">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur voluptate repellat laudantium ipsa voluptatum neque velit ex deserunt, assumenda sed doloremque! Corporis quibusdam quae maxime error optio voluptas distinctio amet? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur voluptate repellat laudantium ipsa voluptatum neque velit ex deserunt, assumenda sed doloremque! Corporis quibusdam quae maxime error optio voluptas distinctio amet? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur voluptate repellat laudantium ipsa voluptatum neque velit ex deserunt, assumenda sed doloremque! Corporis quibusdam quae maxime error optio voluptas distinctio amet?
        </p>
      </div>
    </section>
  )
}

export default Summary;