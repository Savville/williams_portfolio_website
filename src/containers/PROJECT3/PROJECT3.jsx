import React from 'react';
import GAMERZHUB from '../../assets/GAMERSHUB.png';
import './PROJECT3.css';

const PROJECT3 = () => (
  <div className="portfolio__project section__padding" id="project">
   
    <div className="portfolio__project-content">
      <h4>Gamerz Hub</h4>     
      <p>App for Gamers to coexist.</p>
      <p>During the emergence of the "Reject Finance Bill 2024",It was realised that people should be more involved in making the decisions affecting lifes
        and making proposals for changes. And this should be done in a peaceful way without protests that are highly fatal. Hence the need for an app for Citizen to participate
        , know their country and have a voice on a national and devolved levels peaceful.
      </p>
      <p>Development stage.</p> 
    </div>

    <div className="portfolio__project-image">
      <img src={GAMERZHUB} alt="GAMERZHUB" />
    </div>
  </div>
);

export default PROJECT3;
