import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);

      const fetchProfileData = async () => {
        try {
          const response = await fetch("process.env.BACKEND_URL/profile", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            const data = await response.json();
            setProfileData(data);
          } else {
            setIsLoggedIn(false);
            localStorage.removeItem("token");
          }
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };

      fetchProfileData();
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.web_name}>
        <Link to="/">
          ECO<span>CT</span>
          <span style={{ color: "white" }} className={styles.slogan}>
            {" "}
            - Reclaim. Renew. Recycle.
          </span>
        </Link>
      </div>
      <div className={styles.navbar_items}>
        <Link to="/home">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className={styles.auth}>
        {isLoggedIn ? (
          <div className={styles.profile}>
            <Link to="/profile">
              <FontAwesomeIcon
                icon={faUserCircle}
                className={styles.userIcon}
              />
              <span className={styles.profileLink}>
                {profileData?.authData?.username || "User"}
              </span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login" className={styles.login}>
              Login
            </Link>
            <Link to="/register" className={styles.login}>
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
