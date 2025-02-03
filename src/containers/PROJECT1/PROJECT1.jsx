import React from 'react';
import MACHANKURA from '../../assets/MACHANKURA.jpg';
import './PROJECT1.css';

const PROJECT1 = () => (
  
 
  <div className="portfolio__project section__padding" id="PROJECT1">
   
    
    <div className="portfolio__project-content">
      <h4>Machankura App Usability Research</h4>      
      <p>I had a chance to participate in the Africa Bitcoin Boot camp that happened in December 2024.</p>
      <p>Among the Bitcoin wallet we were given to research on was Machankura, an app for sending Bitcoin Sats offline.
      </p>
      <p>The users who did the usability tests liked the fact that they could send Sats through USSD service. The process of sending and receiving was also smooth to most users.</p>
      <p>The major pain point was the fact that as a wallet , it did not have a form of security like a password to log in to ensure safety of user’s Sats.</p> 
 
      
    </div>
    <div className="portfolio__project-image">
      <img src={MACHANKURA} alt="machankura" />
    </div>
  </div>
);

export default PROJECT1;
