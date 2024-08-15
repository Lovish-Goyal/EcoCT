import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  username: String,
  useremail: String,
  mobile: String,
  address: String,
  message: String,
});

const ContactModel = mongoose.model("contact_us", ContactSchema);

export default ContactModel;
