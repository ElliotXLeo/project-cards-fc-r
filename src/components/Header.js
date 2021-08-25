import React from "react";
import PropTypes from 'prop-types';

function Header({ company }) {

  const { slogan } = company;

  return (
    <header className="header animate__animated animate__fadeInUp">
      <h1>{slogan}</h1>
    </header>
  );
}

Header.propTypes = {
  company: PropTypes.object.isRequired
}

export default Header;
