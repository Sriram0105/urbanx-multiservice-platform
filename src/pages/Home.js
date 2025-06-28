import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // ✅ initialize navigation

  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white min-h-screen p-10">
        {/* Left: Image */}
        <div className="md:w-1/2">
          <img
            src="/professional.png"
            alt="Professional"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text + Dropdown + Button */}
        <div className="md:w-1/2 mt-8 md:mt-0 px-6">
          <h1 className="text-4xl font-bold mb-4">
            Quality home services, on demand
          </h1>
          <p className="mb-6 text-gray-300">
            Experienced, hand-picked Professionals to serve you at your doorstep
          </p>
          <div className="mb-4">
            <label className="block mb-2 text-sm">
              Where do you need a service?
            </label>
            <select className="w-full p-3 rounded text-black">
              <option>Select City</option>
              <option>Chennai</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
              <option>Delhi</option>
              <option>Mumbai</option>
            </select>
          </div>

          {/* ✅ Button navigates to BookService page */}
          <button
            onClick={() => navigate('/book-service')}
            className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white transition"
          >
            Book a Service
          </button>
        </div>
      </div>

      {/* Service Cards Section */}
      <div className="mt-16 px-10 pb-20 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          Book a Service
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Engineer Showcase */}
          <Link
            to="/engineers"
            className="bg-white text-black p-6 rounded-lg shadow hover:shadow-xl transition hover:bg-blue-100 text-center"
          >
            <h3 className="text-lg font-bold mb-2">Engineering Showcase</h3>
            <p className="text-sm">Hire civil engineers & view their portfolios</p>
          </Link>

          {/* Food Delivery */}
          <Link
            to="/food"
            className="bg-white text-black p-6 rounded-lg shadow hover:shadow-xl transition hover:bg-green-100 text-center"
          >
            <h3 className="text-lg font-bold mb-2">Food Delivery</h3>
            <p className="text-sm">Order fresh meals delivered to your home</p>
          </Link>

          {/* Medicine Delivery */}
          <Link
            to="/medicine"
            className="bg-white text-black p-6 rounded-lg shadow hover:shadow-xl transition hover:bg-red-100 text-center"
          >
            <h3 className="text-lg font-bold mb-2">Medicine Delivery</h3>
            <p className="text-sm">Order medicines and health essentials</p>
          </Link>

          {/* General Home Services */}
          <Link
            to="/services"
            className="bg-white text-black p-6 rounded-lg shadow hover:shadow-xl transition hover:bg-yellow-100 text-center"
          >
            <h3 className="text-lg font-bold mb-2">Other Services</h3>
            <p className="text-sm">Electricians, Carpenters, Cleaning, etc.</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
