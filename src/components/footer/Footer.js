import React from 'react';
import './Footer.css';

const Footer = ({ onNext }) => {
  return (
    <footer className="footer">
      <button type="button" className="next2-button" onClick={onNext}>
        Next
      </button>
    </footer>
  );
};

export default Footer;
