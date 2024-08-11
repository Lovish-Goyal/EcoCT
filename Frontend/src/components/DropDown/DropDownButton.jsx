import React, { useState } from 'react';
import styles from './DropdownMenu.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

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
          <a href="#home" className={styles.dropdownItem}>Home</a>
          <a href="#about" className={styles.dropdownItem}>About</a>
          <a href="#services" className={styles.dropdownItem}>Services</a>
          <a href="#contact" className={styles.dropdownItem}>Contact</a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
