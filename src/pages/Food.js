// src/pages/Food.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const foodItems = [
  {
    id: 1,
    name: 'Veg Biryani',
    description: 'Aromatic basmati rice with mixed vegetables and Indian spices.',
    price: 150,
    image: '/food1.jpg',
  },
  {
    id: 2,
    name: 'Paneer Butter Masala',
    description: 'Cottage cheese cubes in rich buttery tomato gravy.',
    price: 180,
    image: '/food2.jpg',
  },
  {
    id: 3,
    name: 'Chicken Shawarma',
    description: 'Middle Eastern wrap filled with grilled chicken and sauces.',
    price: 120,
    image: '/food3.jpg',
  },
];

const Food = () => {
  const navigate = useNavigate(); // ✅ Enable navigation

  const handleOrder = (item) => {
    // Optionally store selected item in localStorage to access in /transaction
    localStorage.setItem('urbanx-latest-order', JSON.stringify(item));
    navigate('/transaction');
  };

  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Order Fresh Food Online
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {foodItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
            <p className="text-lg font-bold text-green-600 mb-4">₹{item.price}</p>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              onClick={() => handleOrder(item)} // ✅ Redirect
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
