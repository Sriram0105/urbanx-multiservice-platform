import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: '', password: '', name: '' });

  const navigate = useNavigate();

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setForm({ email: '', password: '', name: '' });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: isLogin ? 'User' : form.name,
      email: form.email,
    };

    localStorage.setItem('urbanx-user', JSON.stringify(user));
    alert(isLogin ? 'Login successful!' : 'Signup successful!');
    navigate('/bookings');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {isLogin ? 'Login to UrbanX' : 'Create a new account'}
        </h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm mb-1 text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm mb-1 text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-1 text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={toggleMode}
            className="text-blue-600 hover:underline focus:outline-none"
          >
            {isLogin ? 'Sign up here' : 'Login here'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
