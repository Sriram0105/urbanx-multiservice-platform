import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ title, image, description }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/book-service', { state: { service: title } }); // ✅ Pass service name
  };

  return (
    <div className="bg-white rounded-lg shadow-md m-4 w-72 p-4 flex flex-col items-center">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <button
        onClick={handleBookNow}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Book Now
      </button>
    </div>
  );
};

export default ServiceCard;
