import React from 'react';
import Feature from '../../components/feature/Feature';
import './Features.css';

const featuresData = [
  {
    title: 'User Interface Designs',
    text: 'Using Figma, I can design aesthetic app and websites pages. I also design the prototype of the app and the interactions.',
  },
  {
    title: 'Frontend Developing',
    text: 'Efficient in HTML 5 and CSS 3. Perfecting on Javascript and React.',
  },
  {
    title: 'Artificial Intelligence',
    text: 'Enthusiastic on Machine Learning and Artificial Intelligence. Currently enrolled in ALX cohort 5.',
  },
  
];

const FEATURES = () => (
  <div className="portfolio__skills section__padding" id="features">
    <div className="portfolio__skills-heading">
      <h1 className="gradient__text">Skills</h1>
     
    </div>
    <div className="portfolio__skills-container">
      {featuresData.map((item, index) => 
        (<Feature title={item.title} text={item.text} key={item.title + index} />)
      )}
    </div>
    
  </div>
  
);


export default FEATURES;



