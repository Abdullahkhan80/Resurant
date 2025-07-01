import React from 'react';
import { Link } from 'react-router-dom';
import menuItems from './menu';


const MenuSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="menu">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-600 mb-10">Our Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {menuItems.slice(0, 8).map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
              <span className="text-yellow-600 font-bold text-lg mb-2">${item.price}</span>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/Menu" >
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 text-lg">
            View Full Menu
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuSection; 