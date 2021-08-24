import React from "react";

function Header({ title, store, slogan }) {
  return (
    <header className="header my-3 animate__animated animate__fadeInUp">
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
