import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  quantity: String,
  Address: String,
});

const BookingModel = mongoose.model("Bookings", BookingSchema);

export default BookingModel;
