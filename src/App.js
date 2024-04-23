import React, { useState, useEffect } from 'react';
import './App.css';

function NavigationMenu() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="logo">PRODIGY INFOTECH</div>
        <ul className="menu">
          <li><a href="#section-01">01</a></li>
          <li><a href="#section-02">Comillas Negras</a></li>
          <li><a href="#section-03">Task-01</a></li>
          <li><a href="#section-04">Responsive Landing Page</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationMenu;
