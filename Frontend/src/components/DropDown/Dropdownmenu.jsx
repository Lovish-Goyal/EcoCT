import React, { useState, useEffect, useRef } from 'react';
import styles from './DropdownMenu.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button 
        className={`${styles.dropdownButton} ${isOpen ? styles.open : ''}`} 
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <Link to="/home" className={styles.dropdownItem} onClick={handleLinkClick}>Home</Link>
          <Link to="/about" className={styles.dropdownItem} onClick={handleLinkClick}>About</Link>
          <Link to="/services" className={styles.dropdownItem} onClick={handleLinkClick}>Services</Link>
          <Link to="/contact" className={styles.dropdownItem} onClick={handleLinkClick}>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
