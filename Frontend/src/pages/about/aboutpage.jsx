import styles from "./aboutpage.module.css";
import image1 from "../../images/our_mission.jpg";
import image2 from "../../images/choose_us.jpg";
import image3 from "../../images/our_team.jpg";
import cx from "classnames";
export default function AboutPage(params) {
    return <>
    <div className={styles.head_image}>
        About Us
    </div>
    <div className={styles.row}>
        <div className={styles.image_content}>
            <div className={styles.heading}>Our Mission</div>
            <div className={styles.content}>At EcoCT, our mission is to lead the way in electronic waste management through innovative and eco-friendly practices. We are committed to minimizing the environmental impact of electronic waste by employing advanced recycling techniques and responsible disposal methods. Our goal is to contribute to a sustainable future by ensuring that electronic waste is managed efficiently and ethically.</div>
        </div>
    <div className={styles.image}><img className={styles.images} src={image1} alt="" /></div>
    </div>
    
    <div className={cx(styles.row,styles.Large)}>
    <div className={styles.image}><img className={styles.images} src={image2} alt="" /></div>
    <div className={styles.image_content}>
            <div className={styles.heading}>Why Choose Us?</div>
            <div className={styles.content}>Our comprehensive e-waste recycling services encompass every stage of the process, from collection and transportation to processing and disposal. Equipped with cutting-edge technology and facilities, we guarantee that electronic waste is handled with the highest standards of safety and sustainability. Partnering with EcoCT means supporting a cleaner environment and aligning with best practices in waste management.</div>
        </div>
    </div>

    <div className={cx(styles.row,styles.Small)}>
    <div className={styles.image_content}>
            <div className={styles.heading}>Why Choose Us?</div>
            <div className={styles.content}>Our comprehensive e-waste recycling services encompass every stage of the process, from collection and transportation to processing and disposal. Equipped with cutting-edge technology and facilities, we guarantee that electronic waste is handled with the highest standards of safety and sustainability. Partnering with EcoCT means supporting a cleaner environment and aligning with best practices in waste management.</div>
        </div>
        <div className={styles.image}><img className={styles.images} src={image2} alt="" /></div>
    </div>

    <div className={styles.row}>
        <div className={styles.image_content}>
            <div className={styles.heading}>Our Team</div>
            <div className={styles.content}>Our team is composed of skilled professionals who bring extensive expertise in electronic waste management. We are dedicated to continuous improvement and adhere to the latest industry standards and regulations. Our commitment to excellence ensures that we deliver superior service while advancing the field of e-waste management.</div>
        </div>
        <div className={styles.image}><img className={styles.images} src={image3} alt="" /></div>
    </div>
    </>
}