import styles from "./register.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
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

    if (!formData.username) {
      newErrors.username = 'Username cannot be empty';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password cannot be empty';
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
        const response = await fetch('http://localhost:8080/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("response:", formData)
          alert("Registration successful!");
          navigate('/login');
          setFormData({
            username: '',
            email: '',
            password: ''
          });
          setErrors({
            username: '',
            email: '',
            password: ''
          });
        } else {
          const errorData = await response.json();
          setErrors(errorData); // Set errors from the server response
          console.error('Server Error:', errorData);
        }
      } catch (error) {
        console.error('Error registering user:', error.message);
      }
    }
  };

  return (
    <div className={styles.image}>
      <div className={styles.container}>
        <div className={styles.registerImage}></div>
        <div className={styles.registerForm}>
          <form onSubmit={handleSubmit}>
            <div className={styles.logoContainer}>
              <div className={styles.logo}></div>
            </div>
            <div className={styles.note}>Enter Your Register Details -</div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter Your Username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error" style={{ color: "red", fontSize: "15px" }}>{errors.username}</p>}
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error" style={{ color: "red", fontSize: "15px" }}>{errors.email}</p>}
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error" style={{ color: "red", fontSize: "15px" }}>{errors.password}</p>}
            <button type="submit" className={styles.registerButton}>Register</button>
            <div className={styles.new_account}>Already Have an account? <Link to="/login" className={styles.linktag}>Login Here</Link></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;