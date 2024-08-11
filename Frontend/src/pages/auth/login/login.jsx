import styles from "./login.module.css";
import {Link} from "react-router-dom";
import React, { useState } from 'react';
function LoginPage() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
    
      const [errors, setErrors] = useState({
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const validateForm = () => {
        let isValid = true;
        const newErrors = {};
    
        if (!formData.email) {
          newErrors.email = 'Email is required';
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Email address is invalid';
          isValid = false;
        }
    
        if (!formData.password) {
          newErrors.password = 'Password Can not be Empty';
          isValid = false;
        } else if (formData.password.length < 8) {
          newErrors.password = 'Password must be at least 8 characters long';
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          console.log('Form submitted:', formData);
        }
      };

    return <>
    <div className={styles.image}>
        <div className={styles.container}>
            <div className={styles.LoginForm}>
                <form action="" onSubmit={handleSubmit}>
                    <div className={styles.logoContainer}><div className={styles.logo}></div></div>
                    <div className={styles.note}>Enter Your Login Details -</div>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" placeholder="Enter your Email" value={formData.email}
          onChange={handleChange}/>
          {errors.email && <p className="error" style={{color: "red", fontSize: "15px"}}>{errors.email}</p>}
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" placeholder="Enter your password" value={formData.password}
          onChange={handleChange}/>
          {errors.password && <p className="error" style={{color: "red", fontSize: "15px"}}>{errors.password}</p>}
                    <button type="submit" className={styles.LoginButton}>Login</button>
                    <div className={styles.new_account}>Create a new account? <Link to="/register" className={styles.linktag}>Register Here</Link></div>
                </form>
            </div>
            <div className={styles.LoginImage}>
            </div>
        </div>
    </div>
    </>
}

export default LoginPage;