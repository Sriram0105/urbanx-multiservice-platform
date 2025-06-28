const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// ========== MIDDLEWARE ==========
app.use(cors());
app.use(express.json());

// ========== FILE PATHS ==========
const bookingsFile = path.join(__dirname, 'bookings.json');
const professionalsFile = path.join(__dirname, 'professionals.json');

// ========== SHARED HELPERS ==========
const readJSON = (filePath) => {
  try {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (err) {
    return []; // Return empty if file is unreadable or not found
  }
};

const writeJSON = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// ========== BOOKINGS ROUTES ==========

// Get all bookings
app.get('/api/bookings', (req, res) => {
  try {
    const bookings = readJSON(bookingsFile);
    res.json(bookings);
  } catch {
    res.status(500).json({ error: 'Failed to read bookings.' });
  }
});

// Add a new booking
app.post('/api/bookings', (req, res) => {
  try {
    const newBooking = { ...req.body, id: Date.now(), status: 'Confirmed' };
    const bookings = readJSON(bookingsFile);
    bookings.push(newBooking);
    writeJSON(bookingsFile, bookings);
    res.status(201).json({ message: 'Booking saved', booking: newBooking });
  } catch {
    res.status(500).json({ error: 'Failed to save booking.' });
  }
});

// Delete a booking by ID
app.delete('/api/bookings/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const bookings = readJSON(bookingsFile).filter((b) => b.id !== id);
    writeJSON(bookingsFile, bookings);
    res.json({ message: 'Booking deleted' });
  } catch {
    res.status(500).json({ error: 'Failed to delete booking.' });
  }
});

// ========== PROFESSIONALS ROUTES ==========

// Register a professional
app.post('/api/professionals', (req, res) => {
  try {
    const newPro = { ...req.body, id: Date.now() };
    const professionals = readJSON(professionalsFile);
    professionals.push(newPro);
    writeJSON(professionalsFile, professionals);
    res.status(201).json({ message: 'Professional registered', professional: newPro });
  } catch {
    res.status(500).json({ error: 'Failed to register professional.' });
  }
});

// Get all professionals
app.get('/api/professionals', (req, res) => {
  try {
    const professionals = readJSON(professionalsFile);
    res.json(professionals);
  } catch {
    res.status(500).json({ error: 'Failed to read professionals.' });
  }
});

// ========== START SERVER ==========
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
