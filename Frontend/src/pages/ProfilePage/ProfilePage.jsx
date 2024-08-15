import React, { useState, useEffect } from 'react';
import styles from './ProfilePage.module.css';

function ProfilePage() {
  const [profileImage, setProfileImage] = useState(null);
  const [profileData, setProfileData] = useState(null);
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
        console.error("Error fetching profile data:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
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

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  // Displaying default content when there's no profile data
  return (
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
          <div className={styles.username}>
            Name: {profileData?.authData?.username || 'Not Available'}
          </div>
          <div className={styles.email}>
            Email: {profileData?.authData?.email || 'Not Available'}
          </div>
          <button className={styles.button1} onClick={handleUpdatePicture}>
            Upload Picture
          </button>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
        <div className={styles.column2}>
          <div className={styles.ProfileAbout}>
            <h1>About OurSelf</h1>
            <div className={styles.AboutContent}>
              {/* You can replace this with actual user data if available */}
              At Ecomind, we are dedicated to creating a sustainable future through the responsible recycling of e-waste. Our mission is to purchase and recycle electronic waste, ensuring that hazardous materials are disposed of properly while valuable resources are reclaimed and reused. We are committed to reducing the environmental impact of electronic waste by offering a reliable and eco-friendly solution for disposing of old and unwanted electronics. By partnering with us, you contribute to a greener planet and support our vision of a more sustainable and responsible future.
            </div>
          </div>
          <h1>Contact Information</h1>
          <div className={styles.userdetails}>Email: <span>ecomind@gmail.com</span></div>
            <div className={styles.userdetails}>Mobile No.: <span>(+91) 9865874521</span></div>
            <div className={styles.userdetails}>Landline No.: <span>122 - 8084654</span></div>
            <div className={styles.userdetails}>Address: <span>#121 Near Sarafa Bazar, New Delhi, India.</span></div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
