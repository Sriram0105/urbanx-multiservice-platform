import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('urbanx-user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('urbanx-user');
    alert('You have been logged out!');
    navigate('/login');
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Clickable Logo that goes home */}
      <Link to="/" className="text-2xl font-bold flex items-center gap-2">
        <span className="bg-white text-black px-2 py-1 rounded">UC</span>
        <span>UrbanX</span>
      </Link>

      {/* Navigation Links */}
      <div className="space-x-6 text-sm flex items-center">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/blog" className="hover:text-gray-300">Blog</Link>
        <Link to="/register" className="hover:text-gray-300">Register as Professional</Link>
        <Link to="/bookings" className="hover:text-gray-300">My Bookings</Link>

        {user ? (
          <>
            <span className="text-gray-400">Hi, {user.name}</span>
            <button
              onClick={handleLogout}
              className="ml-2 bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="hover:text-gray-300">Login / Signup</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
