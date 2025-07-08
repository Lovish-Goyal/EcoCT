import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";

const LoginCheckController = async (req, res) => {
  jwt.verify(req.token, "secretkey", async (err, authData) => {
    if (err) {
      res.status(403).send({ result: "Invalid token" });
    } else {
      try {
        // Fetch user from DB
        const user = await UserModel.findById(authData.id).select(
          "username email profileImage"
        );

        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
          message: "Profile accessed",
          authData: user,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching user data" });
      }
    }
  });
};

export default LoginCheckController;
