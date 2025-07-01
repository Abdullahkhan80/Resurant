import React from 'react';

const qualities = [
  {
    icon: '🌱',
    title: 'Organic & Local',
    desc: 'We source our ingredients from local farms, ensuring freshness and supporting our community.'
  },
  {
    icon: '👨‍🍳',
    title: 'Expert Chefs',
    desc: 'Our chefs are highly trained and passionate about delivering the best culinary experience.'
  },
  {
    icon: '🕒',
    title: 'Open Late',
    desc: 'Enjoy our delicious menu late into the night, perfect for any schedule.'
  },
  {
    icon: '💬',
    title: 'Excellent Service',
    desc: 'Our staff is dedicated to making your visit comfortable and memorable.'
  },
];

const Qualities = () => {
  return (
    <section className="py-16 bg-white" id="qualities">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-600 mb-10">Our Qualities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {qualities.map((q, idx) => (
            <div key={idx} className="flex items-center bg-gray-50 rounded-lg shadow p-6 hover:shadow-lg transition">
              <div className="text-5xl mr-6 flex-shrink-0">{q.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{q.title}</h3>
                <p className="text-gray-600">{q.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualities;