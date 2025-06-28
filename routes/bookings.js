const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const bookingsFile = path.join(__dirname, '..', 'bookings.json');

const readBookings = () => {
  const data = fs.readFileSync(bookingsFile);
  return JSON.parse(data);
};

const writeBookings = (data) => {
  fs.writeFileSync(bookingsFile, JSON.stringify(data, null, 2));
};

// GET all bookings
router.get('/', (req, res) => {
  const bookings = readBookings();
  res.json(bookings);
});

// POST new booking
router.post('/', (req, res) => {
  const newBooking = req.body;
  newBooking.id = Date.now(); // generate unique ID
  newBooking.status = 'Confirmed'; // default status
  const bookings = readBookings();
  bookings.push(newBooking);
  writeBookings(bookings);
  res.status(201).json({ message: 'Booking added successfully', booking: newBooking });
});

// DELETE booking by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let bookings = readBookings();
  bookings = bookings.filter((booking) => booking.id !== id);
  writeBookings(bookings);
  res.json({ message: 'Booking cancelled' });
});

module.exports = router;
