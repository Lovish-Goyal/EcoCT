import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  profileImage: String,
});

const UserModel = mongoose.model("user", UserSchema);

export default UserModel;
