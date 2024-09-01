import React from 'react';

function Header() {
  return (
    <header className="header">
     
      <nav>
      <a href="/"><img src="logo.png" alt="Logo" className="logo" /></a>
        <ul className="nav-links">
          <li><a href="/about">About me</a></li>
          <li><a href="/art-gallery">Art Gallery</a></li>
          <li><a href="/gears">Gears</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;