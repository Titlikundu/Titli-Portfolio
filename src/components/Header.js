import React, { useState } from 'react';

function Header() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <a href="/">
        <img src="logo.png" alt="Logo" className="logo" />
      </a>
      <button className="mobile-menu-button" onClick={handleMenuToggle}>
        ☰
      </button>
      <nav>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
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
