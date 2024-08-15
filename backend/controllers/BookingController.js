import BookingModel from "../models/BookingModel.js";
const BookingController = async (req, res) => {
  try {
    const { name, mobile, quantity, address } = req.body;

    // Create a new user
    const BookingDetails = new BookingModel({
      name,
      mobile,
      quantity,
      address,
    });

    // Save the user to the database
    await BookingDetails.save();

    res.status(201).json({
      message: "Booking successfull",
      Booking: BookingDetails,
    });
  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default BookingController;
