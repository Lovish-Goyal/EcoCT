import express from "express";
import LoginController from "../controllers/LoginController.js";
import RegisterController from "../controllers/RegisterController.js";

const router = express.Router();

router.post("/login", LoginController);

router.post("/register", RegisterController);

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Failed to logout" });
    }
    res.clearCookie("connect.sid"); // Clear session cookie
    res.redirect("/login"); // Redirect to login page or home
  });
});

export default router;
