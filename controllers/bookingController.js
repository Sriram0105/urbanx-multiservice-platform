const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ success: true, message: 'Booking saved successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
