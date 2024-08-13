import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ProfilePage.module.css';

function ProfilePage() {
  const [profileImage, setProfileImage] = useState(null);

  const location = useLocation();
  const user = location.state?.user.user;

  console.log({user})

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {

      // Create a URL for the selected file

      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    } else {
      alert('Please select a valid image file.');
    }
  };

  const handleUpdatePicture = () => {
    document.getElementById('fileInput').click();
  };

  useEffect(() => {
    return () => {
      if (profileImage) {
        URL.revokeObjectURL(profileImage);
      }
    };
  }, [profileImage]);

  return (
    <>
      <div className={styles.ProfileBody}>
        <div className={styles.ProfileContainer}>
          <div className={styles.column1}>
            <div className={styles.profileImage}>
              <img
                src={profileImage || 'https://via.placeholder.com/300'}
                alt="Profile"
                className={styles.profileImageContent}
              />
            </div>
            <div className={styles.username}>Name: {user.username}</div>
            <div className={styles.username}>Email: {user.email}</div>
            <button className={styles.button1} onClick={handleUpdatePicture}>
              Upload Picture
            </button>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }} // Hide the actual file input
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
          <div className={styles.column2}>
            <div className={styles.ProfileAbout}>
              <h1> About Yourself</h1>
              <div className={styles.AboutContent}>
                Please provide a brief overview of who you are and what interests or skills you bring. You might include details such as your background, key experiences, what motivates you, and any goals or aspirations you have. Feel free to share anything that helps us understand you better and how you engage with our platform. Your insights will help us tailor our services to better meet your needs.
              </div>
            </div>
            <h1>Contact Information</h1>
            <div className={styles.userdetails}>Email: <span>ecomind@gmail.com</span></div>
            <div className={styles.userdetails}>Mobile: <span>(+91) 9865874521</span></div>
            <div className={styles.userdetails}>Address: <span>#121 Near Sarafa Bazar, New Delhi, India.</span></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
