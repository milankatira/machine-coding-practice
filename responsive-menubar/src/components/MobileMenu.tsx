import React from "react";
import "./Navbar.css";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu">
      <button onClick={onClose} style={{ marginBottom: "16px" }}>Close ✖️</button>
      <a href="#home" onClick={onClose}>Home</a>
      <a href="#about" onClick={onClose}>About</a>
      <a href="#services" onClick={onClose}>Services</a>
      <a href="#contact" onClick={onClose}>Contact</a>
    </div>
  );
};

export default MobileMenu;
