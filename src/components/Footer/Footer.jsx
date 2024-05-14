import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="wrapper">
        <div className="container-fluid d-flex flex-column flex-md-row justify-content-center align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 mt-4">
            <h4>S-Sound</h4>
            <div className="social-icons">
              <a href='https://www.instagram.com/kumbhani___sanket/'><i className="fab fa-instagram"></i></a>
              <a href='https://hi-in.facebook.com/hitesh.ladumor.376'> <i className="fab fa-facebook"></i></a>
              <a href='https://www.youtube.com/channel/UCmEEsQe1Rz0nZp3ZWRuaQrg'><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
          <div className="col-md-6 text-center text-md-end mt-4">
            <h4>Quick Links</h4>
            <div className="links">
              <Link to="/moreblogs">Blogs</Link><br />
              <Link to="/policy">Policy</Link>
            </div>
          </div>
        </div>
        <p className='text-center mt-4'>© [2024] [Sanket Kumbhani]. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
