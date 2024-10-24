import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="portfolio__navbar">
      <div className="portfolio__navbar-links">
        <div className="logo">
          WO
        </div>
        <div className="portfolio__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#WHO">Who is Williams</a></p>                
          <p><a href="#features">Skills</a></p>
          <p><a href="#PROJECT1">Projects</a></p>
          
        </div>
      </div>
     
      <div className="portfolio__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="portfolio__navbar-menu_container scale-up-center">
          <div className="portfolio__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#WHO">Who is Williams</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#PROJECT1">Projects</a></p>
          </div>          
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
