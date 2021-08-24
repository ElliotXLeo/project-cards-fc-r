import React from 'react';

const Footer = ({ currentDate }) => {
  return (
    <footer className="footer animate__animated animate__fadeInUp">
      <p>Todos los derechos reservados &copy; {currentDate}</p>
    </footer>
  );
}

export default Footer;

