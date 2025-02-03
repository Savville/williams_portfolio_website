import React from 'react';
import EMMOBIE from '../../assets/EMMOBIE.png';
import './PROJECT3.css';

const PROJECT3 = () => (
  <div className="portfolio__project section__padding" id="project">
   
    <div className="portfolio__project-content">
      <h4>Emmobie Design and Research</h4>     
      <p>My desire to help solve Climate Change drove me to think of Emmobie, a business and an app for renting bikes.
       The business is to have bike stations at specific points along urban and sub-urban areas and allow users to rent bikes for a specific time to and allow flexibility of movement within the time. The bikes are to have GPS locators to track bikes to avoid malicious behavior like stealing.</p>
      <p>First, I had to do research on potential users around school . The people who usually rent bikes and also the others who use motorcycles
      </p>
      <p>They liked the fact of stations being placed in places so you can ride to another place with the station without having to return back to original place. Others loved the concept of an application to rent bikes like Uber will make transporting convenient and most especially others loved the flexibility part of going anyplace you want within the time limit .
      The other good points it was its cheapness and cleanliness.</p>
      <p></p> 
    </div>

    <div className="portfolio__project-image">
      <img src={EMMOBIE} alt="Emmobie" />
    </div>
  </div>
);

export default PROJECT3;
