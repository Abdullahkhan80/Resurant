import React from 'react';

const qualities = [
  {
    icon: '🥗',
    title: 'Fresh Ingredients',
    desc: 'We use only the freshest, locally sourced ingredients in every dish.'
  },
  {
    icon: '⏱️',
    title: 'Fast Service',
    desc: 'Enjoy prompt and friendly service every time you visit.'
  },
  {
    icon: '🍽️',
    title: 'Cozy Ambience',
    desc: 'Relax in our warm, inviting, and beautifully designed space.'
  },
  {
    icon: '⭐',
    title: 'Top Rated',
    desc: 'Our guests love us! Consistently rated 5 stars for food and service.'
  },
];

const Qualities = () => {
  return (
    <section className="py-16 bg-white" id="qualities">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-600 mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {qualities.map((q, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">{q.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{q.title}</h3>
              <p className="text-gray-600">{q.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualities;