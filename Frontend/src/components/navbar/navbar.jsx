import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found, please log in.");
        }

        const response = await fetch("http://localhost:8080/profile", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Error fetching profile data");
        }

        const data = await response.json();
        setProfileData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.web_name}>
        <Link to="/">ECO<span>CT</span></Link>
      </div>
      <div className={styles.navbar_items}>
        <Link to="/home">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className={styles.auth}>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : profileData ? (
          <div className={styles.profile}>
            <Link to="/profile">
              <FontAwesomeIcon icon={faUserCircle} className={styles.userIcon} />
              <span className={styles.profileLink}>{profileData.authData?.username || 'User'}</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">
              <div className={styles.login}>Login</div>
            </Link>
            <Link to="/register">
              <div className={styles.login}>Register</div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
