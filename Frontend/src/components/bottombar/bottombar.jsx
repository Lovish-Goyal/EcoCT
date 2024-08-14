import React, { useState } from "react";
import styles from "./bottombar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BottomBar() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;

    // Email validation
    if (!email) {
      toast.error('Email is required.');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) { // Simple regex for email validation
      toast.error('Please enter a valid email address.');
      isValid = false;
    }

    // Message validation
    if (!message) {
      toast.error('Message cannot be empty.');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; 
    }

    toast.success("Thanks for Contacting Us");

    setEmail('');
    setMessage('');

    navigate("/home");
  };

  return (
    <div className={styles.main}>
      <div className={styles.bottombarcontainer}>
        <div className={styles.column1}>
          <div className={styles.head}>Eco<span>CT</span></div>
          <div className={styles.content}>
            Electronics play a crucial role in our lives, but improper disposal can harm the environment. By recycling your e-waste with us, you ensure that valuable materials are recovered and harmful substances are managed safely. Join us in making a positive impact and contributing to a cleaner, greener future.
          </div>
        </div>
        <div className={styles.column2}>
          <div className={styles.head}>Quick Links</div>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className={styles.column3}>
          <div className={styles.head}>Contact Me!</div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              name="message"
              id="message"
              placeholder="Message..."
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>Thanks for visiting our website</p>
      </footer>
      <ToastContainer />
    </div>
  );
}

export default BottomBar;
