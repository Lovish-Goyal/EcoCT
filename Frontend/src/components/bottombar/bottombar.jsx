import styles from "./bottombar.module.css";
import {Link} from "react-router-dom";
function BottomBar() {
    return <>
    <div className={styles.main}>
    <div className={styles.bottombarcontainer}>
        <div className={styles.column1}>
        <div className={styles.head}>Eco<span>CT</span></div>
            <div className={styles.content}>Electronics play a crucial role in our lives, but improper disposal can harm the environment. By recycling your e-waste with us, you ensure that valuable materials are recovered and harmful substances are managed safely. Join us in making a positive impact and contributing to a cleaner, greener future.</div>
        </div>
        <div className={styles.column2}>

        <div className={styles.head}>Quick Links</div>
        <ul><li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Our Services</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        </div>
        <div className={styles.column3}>
            <div className={styles.head}>Contact Me!</div>
            <form action="">
            <input type="text" name="email" placeholder="your email address"/>
            <textarea name="message" id="message" placeholder="Message..."></textarea>
            <button>Send</button>
            </form>
        </div>
    </div>
    <footer className={styles.footer}><p>Thanks for visit our website</p></footer>
    </div>
    </>
}

export default BottomBar;