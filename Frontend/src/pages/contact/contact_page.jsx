import styles from "./contact_page.module.css";

export default function ContactPage() {
    return <>
    <div className={styles.container}>
    <div className={styles.page_heading}>Welcome to Help Center (EcoCT).
    </div>
    <div className={styles.small_heading}>We value your input and are here to help! If you have any questions, comments, or need assistance, please don’t hesitate to contact us. At EcoCT, we’re committed to providing you with the best support possible. Reach out via the contact form or email us directly, and our team will respond promptly. Thank you for choosing to connect with us!</div>
    <div className={styles.page_heading}>Get In Touch</div>
        <div className={styles.formcontainer}>
            <div className={styles.column1}>
            <form action="">
                <div className={styles.form_heading}>
                Enter Your Details:</div>
                <label className={styles.mg10} htmlFor="username">Your Name</label>
                <input className={styles.mg10} type="text" placeholder="Enter you name" />
                    <label className={styles.mg10} htmlFor="useremail">Your Email</label>
                    <input className={styles.mg10} type="text" placeholder="Enter you Email" />
                    <label className={styles.mg10} htmlFor="mobile">Mobile No.</label>
                    <input className={styles.mg10} type="number" placeholder="Enter you Mobile number" />
                    <label className={styles.mg10} htmlFor="address">Your Address</label>
                    <input className={styles.mg10} type="text" placeholder="Enter you address" />
                    <label className={styles.mg10} htmlFor="message">Message</label>
                    <textarea className={styles.mg10} type="text" placeholder="Enter you Message" rows="5"/>
                    <button className={styles.submit_button}>Submit</button>
            </form>
            </div>
            <div className={styles.column2}>
                <div className={styles.c2_heading}>Contact Information</div>
                <label className={styles.c2_head}>🗺️ Location:</label>
                <div className={styles.c2_content}>Address 1: #15765 Near Ekta Vihar, New Housing Board Colony, Ambala Cantt(133001), Haryana, India</div>
                <hr />
                <label className={styles.c2_head}> 📲 Call Us:</label>
                <div className={styles.c2_content}>Mobile No: 9876456300</div>
                <div className={styles.c2_content}>Landline No.122-8084654</div>
                <hr />
                <label className={styles.c2_head}>📧 Email Us:</label>
                <div className={styles.c2_content}>officialEcoMind@gmail.com</div>
                <div className={styles.c2_content}>official@ecomind.yahoo.com</div>
                <div className={styles.brandname}>EcoCT</div>
            </div>
        </div>
    </div>
    </>
}   