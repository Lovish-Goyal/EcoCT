import express from "express";
import LoginController from "../controllers/LoginController.js";
import RegisterController from "../controllers/RegisterController.js";

const router = express.Router();

router.post("/login", LoginController);

router.post("/register", RegisterController);

export default router;
