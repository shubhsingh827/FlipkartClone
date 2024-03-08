import React from 'react';

const Footer = () => {
  return (
    <footer className="footer " style={{ backgroundColor: '#333', color: '#fff' }} >
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className='flex justify-center p-5'>My Website</span>
          </div>
          <div className="footer-links ">
            <ul className='flex flex-row justify-around'>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/group-companies">Group Companies</a></li>
              <li><a href="/help">Help</a></li>
              <li><a href="/consumer-policy">Consumer Policy</a></li>
              <li><a href="/contact">Mail Us</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-copyright flex justify-center mt-5">
          <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
