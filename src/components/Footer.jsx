// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>&copy; {new Date().getFullYear()} Movie App. All rights reserved by KJS.</p>
    </footer>
  );
};

export default Footer;
