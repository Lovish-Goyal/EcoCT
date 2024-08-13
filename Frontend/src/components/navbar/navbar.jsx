import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
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
        {/* Always show these links since we're removing session logic */}
        <Link to="/login">
          <div className={styles.login}>Login</div>
        </Link>
        <Link to="/register">
          <div className={styles.login}>Register</div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;