import React, { useState } from 'react';
import styles from './DropdownMenu.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from "react-router-dom";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles.dropdown}>
      <button 
        className={`${styles.dropdownButton} ${isOpen ? styles.open : ''}`} 
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <Link to="/home" className={styles.dropdownItem}>Home</Link>
          <Link to="/about" className={styles.dropdownItem}>About</Link>
          <Link to="/services" className={styles.dropdownItem}>Services</Link>
          <Link to="/contact" className={styles.dropdownItem}>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
