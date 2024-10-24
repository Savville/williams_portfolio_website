import React from 'react';
import ilearnapp from '../../assets/ilearnapp.png';
import './PROJECT1.css';

const PROJECT1 = () => (
  
 
  <div className="portfolio__project section__padding" id="PROJECT1">
   
    
    <div className="portfolio__project-content">
      <h4>KUsoma</h4>      
      <p>E learning app for Kenyatta University.</p>
      <p>As a student, I desired a learning system that will be closer to the students and enhance on impacting
        practical skills to students in technical courses.
      </p>
      <p>I started design and finished in duration 10 days on July 20th 2024.I am currently working on the frontend.</p> 
      
    </div>
    <div className="portfolio__project-image">
      <img src={ilearnapp} alt="ilearnapp" />
    </div>
  </div>
);

export default PROJECT1;
