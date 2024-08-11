import styles from "./ProfilePage.module.css";
function ProfilePage() {
    return <>
    <div className={styles.ProfileBody}>
        <div className={styles.ProfileContainer}>
            <div className={styles.column1}>
                <div className={styles.profileImage}>
                   your image
                </div>
                <div className={styles.username}>Rahul Kashayap</div>
                <button className={styles.button1}>Upload Picture</button>
                <button className={styles.button2}>Update Profile</button>
            </div>
            <div className={styles.column2}>
              <div className={styles.ProfileAbout}>
                <h1> About Yourself</h1>
                <div className={styles.AboutContent}>
                Please provide a brief overview of who you are and what interests or skills you bring. You might include details such as your background, key experiences, what motivates you, and any goals or aspirations you have. Feel free to share anything that helps us understand you better and how you engage with our platform. Your insights will help us tailor our services to better meet your needs.
                </div>
              </div>
              <h1>Personal Information</h1>
              <div className={styles.userdetails}>Email: <span>rahul@gmail.com</span></div>
              <div className={styles.userdetails}>Mobile: <span>(+91) 9865874521</span></div>
              <div className={styles.userdetails}>Address: <span>near Tahalka Colony, Raipur Rani</span></div>
            </div>
        </div>
    </div>
    <div className={styles.Activity}>
        <div className={styles.Activity_head}>Your Activity</div>
        <hr />
    </div>
    </>
}

export default ProfilePage;