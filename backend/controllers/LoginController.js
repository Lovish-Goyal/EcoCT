import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";

const LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const targetUser = await UserModel.findOne({ email });

    if (!targetUser) {
      return res.status(401).json({ message: "Email not found" });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, targetUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({
      message: "Login successfull",
      user: {
        id: targetUser._id,
        email: targetUser.email,
        username: targetUser.username,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default LoginController;
