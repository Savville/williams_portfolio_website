import React from 'react';
import myimage from '../../assets/myimage.png';
import './HEADER.css';

const HEADER = () => (
  <div className="portfolio__header section__padding" id="home">
     <div className="portfolio__header-image">
      <img src={myimage} alt="me"/>
    </div>
    <div className="portfolio__header-content">
      <h1 className="gradient__text">Williams Otieno</h1>
      <div className="whoIsWilliams-heading">
         <h1 className="Title">Product Designer, Junior Developer</h1>
      </div>
      <p> Currently a student at Kenyatta University studying software
      engineering.</p>
      <p> A user interface designer with certificates from
      International Youth Fellowship and Google.
      </p>
      <p> A tech enthusiast self tutoring on website development ,
      mobile app development and Artificial Intelligence.
      </p>
    </div>

  </div>
);

export default HEADER;
