import React, { useState, useEffect } from "react";
import styles from "./ProfilePage.module.css";

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

        const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

        const response = await fetch(`${BACKEND_URL}/profile`, {
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
        console.log("Profile data:", data);
        setProfileData(data);

        if (data?.authData?.profileImage) {
          setProfileImage(`${BACKEND_URL}/${data.authData.profileImage}`);
        }
      } catch (err) {
        console.error("Error fetching profile data:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const formData = new FormData();
      formData.append("profileImage", file);

      const token = localStorage.getItem("token");
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

      try {
        const res = await fetch(`${BACKEND_URL}/upload-profile-picture`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });

        const result = await res.json();

        if (res.ok) {
          setProfileImage(`${BACKEND_URL}/${result.imagePath}`);
        } else {
          alert(result.error || "Failed to upload image.");
        }
      } catch (err) {
        console.error("Upload failed:", err.message);
      }
    } else {
      alert("Please select a valid image file.");
    }
  };

  const handleUpdatePicture = () => {
    document.getElementById("fileInput").click();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.ProfileBody}>
      <div className={styles.ProfileContainer}>
        <div className={styles.column1}>
          <div className={styles.profileImage}>
            <img
              src={
                profileImage ||
                "https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png"
              }
              alt="Profile"
              className={styles.profileImageContent}
            />
          </div>
          <div className={styles.username}>
            {profileData?.authData?.username || "Not Available"}
          </div>
          <div className={styles.email}>
            {profileData?.authData?.email || "Not Available"}
          </div>
          <button className={styles.button1} onClick={handleUpdatePicture}>
            Upload Picture
          </button>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
        <div className={styles.column2}>
          <div className={styles.ProfileAbout}>
            <h1>About OurSelf</h1>
            <div className={styles.AboutContent}>
              At EcoCT, our customers are individuals and organizations who
              share a commitment to environmental responsibility. They
              understand the importance of properly disposing of electronic
              waste and actively choose sustainable solutions to reduce their
              ecological footprint. From households clearing out old devices to
              businesses managing large-scale tech upgrades, our customers trust
              us to handle their e-waste safely and ethically. Their support not
              only drives our mission forward but also plays a vital role in
              building a cleaner, greener future for everyone.
            </div>
          </div>
          <h1>Contact Information</h1>
          <div className={styles.userdetails}>
            Email: <span>support@ecoct.com</span>
          </div>
          <div className={styles.userdetails}>
            Mobile No.: <span>(+91) 98658XXXXX</span>
          </div>
          <div className={styles.userdetails}>
            Landline No.: <span>122 - 80XXXXX</span>
          </div>
          <div className={styles.userdetails}>
            Address:{" "}
            <span>
              EcoCT 4th Floor, EcoTower Business Park Sector 21, New Delhi –
              110075 India
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
