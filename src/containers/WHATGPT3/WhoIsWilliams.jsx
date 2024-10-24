import React from 'react';
import Feature from '../../components/feature/Feature';
import './whoIsWilliams.css';

const whoIsWilliams = () => (
  <div className="whoIsWilliams section__margin" id="WHO">
    <div className="whoIsWilliams-feature">
      <Feature title="Who is Williams" />
    </div>
    <div className="whoIsWilliams-heading">
      <h1 className="gradient__text">Leader, Dilligent and Technology enthusiastic</h1>
      <p><a href="https://drive.google.com/file/d/1VBYberIWf8lMUjmZgACXStGOnRR7MKsZ/view?usp=drive_link">View Resume</a></p>
    </div>
    <div className="whoIsWilliams-container">
      <Feature title="Education" text="Victoria Primary School, Maranda High School, Kenyatta University. ALX, AWS, Coursera"  />
      <Feature title="Experience" text="Winner of Google Hackathon I\O Extended 2024 Kisumu" />
      <Feature title="Certificates" text="Google Coursera- User Interface, Google-coursera-AI essentials, International Youth Fellowship-User Interface, ALX cohort 5" />
    </div>
  </div>
);

export default whoIsWilliams;
