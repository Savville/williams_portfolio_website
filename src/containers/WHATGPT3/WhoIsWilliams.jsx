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
      <Feature title="Education" text="Currently a engineering student in Kenyatta University.
                      Learnt wireframing , User Interface and User Research on Google Coursera UI/UX.
                      Self tutoring myself on various technologies ,such as development and blockchain."  />
      <Feature title="Experience" text="Had first hand experience on usability study at the Africa Bitcoin Conference
                                        Completed and still working on personal and group projects.
                                        Currently working on Pixel Pioneers, an  open source project for designers  and developers alike for creating front-end components." />
      <Feature title="Certificates" text="- Google Coursera UI/UX.
                                          - International Youth Fellowship UI/UX course" />
    </div>
  </div>
);

export default whoIsWilliams;
