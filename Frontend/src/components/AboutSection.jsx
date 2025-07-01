import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80" 
            alt="About our restaurant" 
            className="rounded-lg shadow-lg w-full object-cover h-72 md:h-96" 
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-600">About Us</h2>
          <p className="text-gray-700 text-lg mb-4">
            At Gourmet Haven, we blend tradition and innovation to bring you an unforgettable dining experience. Our chefs use the freshest ingredients to craft dishes inspired by flavors from around the world. Whether you're here for a family dinner or a special occasion, we promise a warm atmosphere and exceptional service.
          </p>
          <p className="text-gray-600">
            Join us and discover why we are the city's favorite destination for food lovers. We look forward to welcoming you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 