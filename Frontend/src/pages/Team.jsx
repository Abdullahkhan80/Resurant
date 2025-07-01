import React from 'react';

const team = [
  {
    name: 'Chef Maria Rossi',
    role: 'Head Chef',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    bio: 'With 20 years of culinary experience, Maria brings passion and creativity to every dish.'
  },
  {
    name: 'John Lee',
    role: 'Sous Chef',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    bio: 'John specializes in fusion cuisine and ensures every plate is perfect before it leaves the kitchen.'
  },
  {
    name: 'Priya Patel',
    role: 'Pastry Chef',
    photo: 'https://randomuser.me/api/portraits/women/22.jpg',
    bio: 'Priya crafts our delicious desserts and is known for her artistic cake designs.'
  },
  {
    name: 'Alex Kim',
    role: 'Restaurant Manager',
    photo: 'https://randomuser.me/api/portraits/men/56.jpg',
    bio: 'Alex ensures every guest has a wonderful experience from start to finish.'
  },
];

const Team = () => {
  return (
    <section className=" py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-600 mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center">
              <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-yellow-500" />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-yellow-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 