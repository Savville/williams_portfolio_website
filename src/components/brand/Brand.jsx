import React from 'react';
import { GITHUB, LINKEDIN} from './imports';
import './brand.css';

const Brand = () => (
  <div className="portfolio__link section__padding">
    <div>
      
      <a href="https:/https://github.com/Savville"><img src={GITHUB} /><p>GITHUB</p></a>
    </div>
   
    <div>
      
      <a href="https://www.linkedin.com/in/williams-otieno-ochieng?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={LINKEDIN} /><p>LINKEDIN</p></a>
    </div>
    </div>
);

export default Brand;
