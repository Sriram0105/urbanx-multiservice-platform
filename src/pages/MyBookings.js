import React, { useEffect, useState } from 'react';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/bookings')
      .then((res) => res.json())
      .then((data) => setBookings(Array.isArray(data) ? data : []))
      .catch((err) => {
        console.error('Failed to fetch bookings:', err);
        setBookings([]);
      });
  }, []);

  // ✅ Cancel booking by ID
  const handleCancel = (id) => {
    if (!window.confirm('Are you sure you want to cancel this booking?')) return;

    fetch(`http://localhost:5000/api/bookings/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to cancel booking');
        }
        // ✅ Remove from UI after successful delete
        setBookings((prev) => prev.filter((b) => b.id !== id));
      })
      .catch((err) => {
        console.error('Cancel error:', err);
        alert('Failed to cancel booking.');
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        My Bookings
      </h1>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-600">You have no bookings yet.</p>
      ) : (
        <div className="space-y-6">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{booking.service}</h2>
                <span
                  className={`text-sm px-3 py-1 rounded-full ${
                    booking.status === 'Delivered'
                      ? 'bg-blue-100 text-blue-700'
                      : booking.status === 'Cancelled'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {booking.status || 'Confirmed'}
                </span>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Name:</strong> {booking.name}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Phone:</strong> {booking.phone}
              </p>
              <p className="text-sm text-gray-700">
                <strong>City:</strong> {booking.city}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Date:</strong> {booking.datetime?.split('T')[0]} &nbsp;|&nbsp;
                <strong>Time:</strong> {booking.datetime?.split('T')[1]}
              </p>

              {booking.status === 'Confirmed' && (
                <div className="mt-4">
                  <button
                    onClick={() => handleCancel(booking.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                  >
                    Cancel Booking
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
