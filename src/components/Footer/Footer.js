import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <p>Made By  
            <a href="https://www.linkedin.com/in/chiranjeebmohanta/" target="_blank" rel="noopener noreferrer">Chiranjeeb</a>, Odisha, India</p>
          <p>
            <a href="/">...</a>
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
