# EcoCT - E-Waste Selling Platform

---

## Project Overview

EcoCT is a modern web application designed to facilitate the responsible selling and recycling of electronic waste (e-waste) at the best market prices. The platform empowers individuals and organizations to sell their old or unwanted electronic devices in an environmentally friendly manner while earning fair value. By bridging sellers with eco-conscious buyers and recyclers, EcoCT aims to reduce electronic waste and promote sustainability.

---

## Features

- **User Authentication & Profile Management**  
  Secure login and registration with JWT-based authentication. Users can view and update their profiles, including uploading profile pictures.

- **E-Waste Selling Portal**  
  Easily list electronic items for sale, with dynamic pricing based on market rates.

- **Image Upload & Management**  
  Users can upload images of their devices securely. Images are stored on the server and linked to user profiles.

- **Secure Backend APIs**  
  Built with Node.js and Express, providing robust RESTful endpoints with token verification.

- **Responsive Frontend**  
  Developed using React.js to offer a seamless and intuitive user experience across devices.

- **Contact & Support**  
  Users can get in touch via a contact form to receive support or inquiries.

---

## Tech Stack

| Frontend            | Backend           | Database          | Authentication     |
| ------------------- | ----------------- | ----------------- | ------------------ |
| React.js            | Node.js           | MongoDB           | JWT (JSON Web Token)|
| CSS Modules         | Express.js        | Mongoose ODM      |                    |

---

## Installation & Setup (Local Development)

Follow these steps to run the project on your local machine.

### Prerequisites

- Node.js (v14 or above)
- MongoDB (local installation or cloud service like MongoDB Atlas)
- npm package manager

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Lovish-Goyal/ecoct.git
   ```
2. Install dependencies:
   #### Frontend
   ```bash
   cd ecoct/frontend
   npm install
   ```
   #### Backend
   ```bash
   cd ecoct/backend
   npm install
   ```
3. Create .env file
   
4. Start the Server:

   #### Backend
   ```bash
   cd ecoct/backend
   nodemon server.js
   ```
   #### Frontend
   ```bash
   cd ecoct/frontend
   npm start
   ```
