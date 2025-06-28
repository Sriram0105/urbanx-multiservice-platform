// src/pages/Transaction.js
import React, { useEffect, useState } from 'react';

const Transaction = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem('urbanx-latest-order'));
    setOrder(savedOrder);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-center">
        {order ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Confirmed!</h2>
            <p className="text-gray-700 mb-2">You ordered:</p>
            <h3 className="text-xl font-semibold">{order.name}</h3>
            <p className="text-sm text-gray-600">{order.description}</p>
            <p className="text-lg font-bold text-green-700 mt-2">₹{order.price}</p>
          </>
        ) : (
          <p>No recent order found.</p>
        )}
        <button
          onClick={() => window.location.href = '/'}
          className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Transaction;
