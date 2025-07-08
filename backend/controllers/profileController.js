import multer from "multer";
import path from "path";
import fs from "fs";
import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";

// Multer setup inside controller
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "uploads/profile-pictures";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.fieldname}${ext}`);
  },
});

const upload = multer({ storage }).single("profileImage");

const uploadProfilePicture = (req, res) => {
  const bearerHeader = req.headers["authorization"];
  if (!bearerHeader) {
    return res.status(403).json({ error: "No token provided" });
  }

  const token = bearerHeader.split(" ")[1];

  jwt.verify(token, "secretkey", async (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }

    // Proceed with multer upload
    upload(req, res, async (err) => {
      if (err) {
        console.error("Multer error:", err);
        return res.status(500).json({ error: "Image upload failed" });
      }

      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const imagePath = req.file.path.replace(/\\/g, "/");

      try {
        await UserModel.findByIdAndUpdate(decoded.id, {
          profileImage: imagePath,
        });

        res.status(200).json({
          message: "Profile image uploaded successfully",
          imagePath,
        });
      } catch (error) {
        console.error("DB update error:", error);
        res.status(500).json({ error: "Failed to update user" });
      }
    });
  });
};

export default {
  uploadProfilePicture,
};
