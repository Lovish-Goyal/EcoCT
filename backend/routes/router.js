import express from "express";
import LoginController from "../controllers/LoginController.js";
import RegisterController from "../controllers/RegisterController.js";
import LoginCheckController from "../controllers/LoginCheckController.js";
import ContactController from "../controllers/ContactController.js";
import BookingController from "../controllers/BookingController.js";

const router = express.Router();

router.post("/login", LoginController);

router.post("/register", RegisterController);

router.post("/profile", verifyToken, LoginCheckController);

router.post("/contact", ContactController);

router.post("/booking", BookingController);

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    next(); // Proceed to the next middleware or route handler
  } else {
    res.status(403).send({
      result: "Token is not valid",
    });
  }
}

export default router;
