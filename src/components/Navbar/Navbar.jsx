import React, { useState } from 'react';
import './Navbar.css';
import Topics from '../Topics/Topics';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const scrollToComponent = (id) => {
  //   console.log("Scrolling to:", id);
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop; // Calculate the offsetTop of the element
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <nav className={`navbar fixed-top`} id='navbar'> {/* Add the "fixed-top" class */}
      <button className='navbar-brand btn btn-outline-info' onClick={() => { scrollToComponent('header') }} style={{boxShadow:'none'}}><span className='S'>S</span>-Sound</button>
      <div className="hide">
        <ul className="ml-auto navbar2 position-absolute end-0">
          <li className="nav-item">
            <button className='nav-link btn btn-outline-info ms-2 p-2' onClick={() => { scrollToComponent('topics') }} style={{boxShadow:'none'}}>Courese Details</button>
          </li>
        
          <li className="nav-item"> 
            <button className='nav-link btn btn-outline-info ms-2 p-2' onClick={() => { scrollToComponent('blog') }} style={{boxShadow:'none'}}>Blogs</button>
          </li>
          <li className="nav-item">
            <button className='nav-link btn btn-outline-info ms-2 p-2' onClick={() => { scrollToComponent('info') }} style={{boxShadow:'none'}}>About</button>
          </li>
          <li className="nav-item">
            <button className='nav-link btn btn-outline-info ms-2 p-2' onClick={() => { scrollToComponent('reviews') }} style={{boxShadow:'none'}}>Feedback</button>
          </li>
        </ul>
      </div>

      <div className="btnhide">
        <button className="navbar-toggler" type="button" onClick={toggleMenu} style={{boxShadow:'none'}}>
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className={`navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <button className='nav-link btn btn-outline-info ms-2 p-2' onClick={() => { scrollToComponent('topics') }} style={{boxShadow:'none'}}>Courese Details</button>
          </li>
        
          <li className="nav-item">
            <button className='nav-link btn btn-outline-info ms-2 p-2' onClick={() => { scrollToComponent('blog') }} style={{boxShadow:'none'}}>Blogs</button>
          </li>
          <li className="nav-item">
            <button className='nav-link btn btn-outline-info ms-2 p-2' onClick={() => { scrollToComponent('info') }} style={{boxShadow:'none'}}>About</button>
          </li>
          <li className="nav-item">
            <button className='nav-link btn btn-outline-info ms-2 p-2' onClick={() => { scrollToComponent('reviews') }} style={{boxShadow:'none'}}>Feedback</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
