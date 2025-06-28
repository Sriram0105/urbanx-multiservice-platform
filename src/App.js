import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginSignup from './pages/LoginSignup';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Food from './pages/Food';
import Medicine from './pages/Medicine';
import EngineerShowcase from './pages/EngineerShowcase';
import MyBookings from './pages/MyBookings';
import Register from './pages/Register';
import './App.css';
import Blog from './pages/Blog';
import BookService from './pages/BookService';
import Transaction from './pages/Transaction'; 

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/" element={<Home />} />
        <Route path="/book-service" element={<BookService />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bookings" element={<MyBookings />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/services" element={<Services />} />
        <Route path="/food" element={<Food />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/engineers" element={<EngineerShowcase />} />
      </Routes>
    </div>
  );
}

export default App;
