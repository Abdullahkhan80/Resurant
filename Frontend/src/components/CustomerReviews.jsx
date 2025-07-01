import React from 'react';

const reviews = [
  {
    name: 'Sarah M.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'Absolutely loved the food and the cozy atmosphere! The staff was so friendly. Will definitely come back.'
  },
  {
    name: 'James L.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4,
    text: 'Great service and delicious meals. The desserts are a must-try!'
  },
  {
    name: 'Priya S.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    text: 'Best dining experience I have had in a long time. Highly recommend Gourmet Haven!'
  },
  {
    name: 'Alex R.',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
    rating: 4,
    text: 'Lovely place for family dinners. The menu has something for everyone.'
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-16 bg-gray-50" id="reviews">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-600 mb-10">Customer Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center">
              <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-yellow-500" />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{review.name}</h3>
              <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < review.rating ? 'text-yellow-500' : 'text-gray-300'}>★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews; 