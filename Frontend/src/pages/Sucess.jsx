import React from 'react';
import { Link } from 'react-router-dom';

const Sucess = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <div className="flex justify-center mb-6">
          <span className="text-green-500 text-6xl">✔️</span>
        </div>
        <h2 className="text-3xl font-bold text-yellow-600 mb-4">Reservation Successful!</h2>
        <p className="text-gray-700 mb-6">Thank you for your reservation. We look forward to welcoming you to Gourmet Haven!</p>
        <Link to="/">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">Back to Home</button>
        </Link>
      </div>
    </section>
  );
};

export default Sucess;