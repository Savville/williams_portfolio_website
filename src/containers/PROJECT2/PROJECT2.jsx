import React from 'react';
import SAUTIYETU from '../../assets/sautiyetu homepage.png';
import './PROJECT2.css';

const PROJECT2 = () => (
  <div className="portfolio__project section__padding" id="project">
    <div className="portfolio__project-content">
      <h4>Sauti Yetu</h4>      
      <p>App for Citizen's Bills proposals and Recommendations .</p>
      <p>During the emergence of the "Reject Finance Bill 2024",It is realised that people should be more involved in making the decisions affecting lifes
        and making proposals for changes. And this should be done in a peaceful way without protests that are highly fatal. Hence the need for an app for Citizen to participate
        , know their country and have a voice on a national and devolved levels peaceful.
      </p>
      <p>Development stage.</p> 
      
    </div>
    <div className="portfolio__project-image">
      <img src={SAUTIYETU} alt="SAUTI YETU" />
    </div>
  </div>
);

export default PROJECT2;
