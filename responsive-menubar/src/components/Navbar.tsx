import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">🌟 MySite</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
