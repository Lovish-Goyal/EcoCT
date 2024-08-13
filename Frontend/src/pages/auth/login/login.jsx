import styles from "./login.module.css";
import {Link, useNavigate} from "react-router-dom";
import React, { useState} from 'react';
function LoginPage() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
    
      const [errors, setErrors] = useState({
        email: '',
        password: ''
      });

      const navigate = useNavigate();
    
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
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
          try {
            const response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: formData.email, password: formData.password })
            });

            if (response.ok) {
                const user = await response.json();
                console.log("Login successful");
                console.log(user)
                navigate("/profile", { state: { user } });
            } else {
                alert("Login failed: " + response.statusText);
            }
        } catch (error) {
            console.log("Error:", error);
        }
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
                    <input id="email" name="email" type="email" placeholder="Enter your Email" value={formData.email}
          onChange={handleChange}/>
          {errors.email && <p className="error" style={{color: "red", fontSize: "15px"}}>{errors.email}</p>}
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" placeholder="Enter your password" value={formData.password}
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