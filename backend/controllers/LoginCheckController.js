import jwt from "jsonwebtoken";

const LoginCheckController = (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.status(403).send({ result: "Invalid token" });
    } else {
      res.status(200).json({
        message: "Profile accessed",
        authData,
      });
    }
  });
};

export default LoginCheckController;
