import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookService = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    service: '',
    datetime: '',
  });

  const [bookingSuccess, setBookingSuccess] = useState(null);

  // Get today's datetime-local value to prevent past booking
  const minDateTime = new Date().toISOString().slice(0, 16);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('urbanx-user'));
    const passedService = location.state?.service;

    setForm((prev) => ({
      ...prev,
      name: user?.name || '',
      email: user?.email || '',
      service: passedService || '',
    }));
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only allow max 10 digits for phone
    if (name === 'phone' && value.length > 10) return;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const text = await response.text();

      if (!response.ok) {
        console.error("❌ Server responded with error:", text);
        throw new Error(`Server error: ${response.status}`);
      }

      const result = JSON.parse(text);
      setBookingSuccess(result.booking);

      // Reset only editable fields
      setForm((prev) => ({
        ...prev,
        phone: '',
        city: '',
        service: '',
        datetime: '',
      }));

      // Auto redirect to bookings after 4 seconds
      setTimeout(() => {
        navigate('/bookings');
      }, 4000);

    } catch (error) {
      console.error("❌ Booking failed:", error.message);
      alert("Something went wrong while booking.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Book a Service
        </h2>

        {/* ✅ Show success summary */}
        {bookingSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded mb-6">
            <h3 className="font-bold text-lg">Booking Confirmed!</h3>
            <p><strong>Service:</strong> {bookingSuccess.service}</p>
            <p><strong>Date:</strong> {bookingSuccess.datetime?.split('T')[0]}</p>
            <p><strong>Time:</strong> {bookingSuccess.datetime?.split('T')[1]}</p>
            <p><strong>City:</strong> {bookingSuccess.city}</p>
            <p className="text-sm mt-2 text-gray-700 italic">Redirecting to My Bookings...</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              readOnly
              className="w-full px-3 py-2 border rounded bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              readOnly
              className="w-full px-3 py-2 border rounded bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              pattern="[0-9]{10}"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter 10-digit number"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">City</label>
            <select
              name="city"
              required
              value={form.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="">Select City</option>
              <option>Chennai</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
              <option>Delhi</option>
              <option>Mumbai</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">Service Type</label>
            <select
              name="service"
              required
              value={form.service}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="">Select Service</option>
              <option>Civil Engineer</option>
              <option>Electrician</option>
              <option>Plumber</option>
              <option>AC Mechanic</option>
              <option>Home Cleaning</option>
              <option>Food Delivery</option>
              <option>Medicine Delivery</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">Date & Time</label>
            <input
              type="datetime-local"
              name="datetime"
              required
              value={form.datetime}
              onChange={handleChange}
              min={minDateTime}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookService;
