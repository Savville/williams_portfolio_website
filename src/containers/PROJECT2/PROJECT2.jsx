import React from 'react';
import NOTEHUB from '../../assets/NOTEHUB.png';
import './PROJECT2.css';

const PROJECT2 = () => (
  <div className="portfolio__project section__padding" id="project">
    <div className="portfolio__project-content">
      <h4>NoteHub App: Usability Research and Design</h4>      
      <p>As a team of University Students around Nairobi, we did research on how we can be able to help improve the current learning process.</p>
      <p>The following points came through:</p>
      <ul><li>We learned from fellow Students that accessing notes and revision materials was hard at sometimes.</li>
      <li>Other users claimed the timetable was rigid in case someone had other obligations and would be forced to miss a class</li>
      <li>Most of them claimed that the learning from classes was inefficient sometimes.</li>
      </ul>
      <p>We are now working on solving some of these by developing an
      application that can allow student flexibility, make accessing notes easier and learning interactive.</p> 
      
    </div>
    <div className="portfolio__project-image">
      <img src={NOTEHUB} alt="notehub" />
    </div>
  </div>
);

export default PROJECT2;
