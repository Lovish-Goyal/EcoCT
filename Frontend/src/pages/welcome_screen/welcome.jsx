import styles from './welcome.module.css'; 
import image from "../../images/E_waste_image.png";
import {Link} from "react-router-dom";
import AboutPage from "../about/aboutpage.jsx";
import ServicePage from "../services/services_page.jsx";
import BottomBar from "../../components/bottombar/bottombar.jsx";

function welcome_screen() {
    return <>
    <div className={styles.welcome_screen}>
    
    <nav>
        <div className={styles.logo}></div>
        <div className={styles.nav_links}><ul>
        <li ><Link to="/home" className={styles.nav_link}> Home </Link></li>
        <li ><Link to="/services" className={styles.nav_link}> Services</Link></li>
        <li > <Link to="/about" className={styles.nav_link}> About Us </Link></li>
        <li > <Link to="contact" className={styles.nav_link}> Contact Us</Link></li></ul></div>
    </nav>
    <div className={styles.body_container}>
        
        {/* content of the body */}
        
        <div className={styles.body_content}>
            <div className={styles.heading}>
              Welcome to Eco<span>CT</span> ! 🌱
               <div className={styles.smallheading}>"Turning E-Waste into Opportunity"
               </div>
                <div className={styles.content}>
                Transforming electronic waste into a sustainable future starts here. At EcoElectra,
                 we’re committed to providing efficient, environmentally-friendly solutions for 
                 recycling and managing your electronic devices. Discover how you can contribute to 
                 a cleaner planet by responsibly disposing of your old electronics. Together, let’s 
                 turn electronic waste into a positive force for our environment!
                </div>
            </div>
            <Link to="/home" className={styles.submit_button}> Get Started</Link>
        </div>

        {/* image of the body  */}
        <div className={styles.body_image}>
            <img className={styles.e_image} src={image} alt="" />
        </div>
    </div>
    </div>
    <ServicePage/>
    <div className={styles.extraimage}></div>
    <AboutPage/>
    <BottomBar />
    </>
}
export default welcome_screen;