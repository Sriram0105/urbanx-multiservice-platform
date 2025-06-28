import React from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: 'Home Cleaning',
    image: 'https://source.unsplash.com/400x300/?cleaning',
    description: 'Professional home and office cleaning services.',
  },
  {
    title: 'Electrician',
    image: 'https://source.unsplash.com/400x300/?electrician',
    description: 'Expert electrical repair and installation.',
  },
  {
    title: 'Carpentry',
    image: 'https://source.unsplash.com/400x300/?carpentry',
    description: 'Custom furniture and repairs by skilled carpenters.',
  },
  {
    title: 'Plumbing',
    image: 'https://source.unsplash.com/400x300/?plumbing',
    description: 'Fix leaks and install bathroom fittings.',
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleBookNow = (service) => {
    navigate('/book-service', {
      state: { service: service.title },
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Our Services</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white w-80 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-center">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm text-center mb-4">
                {service.description}
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => handleBookNow(service)}
                  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
