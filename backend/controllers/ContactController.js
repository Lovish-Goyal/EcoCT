import ContactModel from "../models/ContactModel.js";
const ContactController = async (req, res) => {
  try {
    const { username, useremail, mobile, address, message } = req.body;

    // Create a new user
    const ContactDetails = new ContactModel({
      username,
      useremail,
      mobile,
      address,
      message,
    });

    // Save the user to the database
    await ContactDetails.save();

    res.status(201).json({
      message: "User registered successfully",
      contact: ContactDetails,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default ContactController;
