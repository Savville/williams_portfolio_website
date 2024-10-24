import React from 'react';
import './FOOTER.css';

const FOOTER = () => (
  <div className="portfolio__footer section__padding">
    <div className="portfolio__footer-heading">
      <h1 className="gradient__text">Feel free to contact me for collaboration and building each other</h1>
    </div>    
    <div className="portfolio__footer-links">
     <div className="logo">
          WO
          <p className="gradient__text">Williams Otieno</p>
      </div>
      <div className="portfolio__footer-links_div">
        <h4>Contacts</h4>
        <p><a href="mailto:ochiwilliamotieno@gmail.com">Gmail: ochiwilliamotieno@gmail.com</a></p>
        <p>Telephone: 0710731021</p>       
        <p>Whatsapp: 0710731021</p>        
      </div>
     
    </div>

    <div className="portfolio__footer-copyright">
      <p>@2024 WO. All rights reserved.</p>
    </div>
  </div>
);

export default FOOTER;
