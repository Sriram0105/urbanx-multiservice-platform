import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    bio: '',
    image: '', // base64 image
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'phone') {
      if (value.length > 10) return; // Prevent more than 10 digits
    }

    if (files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/professionals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to register professional.');
      }

      const result = await res.json();
      console.log('✅ Registered:', result);
      alert('Registration submitted! We will contact you soon.');

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        bio: '',
        image: '',
      });
    } catch (error) {
      console.error('❌ Registration failed:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Register as a Professional
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              maxLength={10}
              title="Enter exactly 10 digits"
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">Service Type</label>
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="">Select Service</option>
              <option>Electrician</option>
              <option>Plumber</option>
              <option>House Cleaning</option>
              <option>Civil Engineer</option>
              <option>AC Mechanic</option>
              <option>Food Partner</option>
              <option>Pharmacy Partner</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">Experience / Bio</label>
            <textarea
              name="bio"
              rows="3"
              required
              value={formData.bio}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">Portfolio Image (optional)</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full"
            />
            {formData.image && (
              <img
                src={formData.image}
                alt="Preview"
                className="mt-3 rounded w-full h-40 object-cover"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
