import React from 'react';

const PackageCard = ({ title, duration, price, features, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-warm-khaki">
      <div className="h-48 bg-gradient-to-r from-safari-olive to-sunset-orange flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-safari-olive mb-2">{title}</h3>
        <div className="flex justify-between items-center mb-4">
          <span className="text-dark-leather/70">{duration}</span>
          <span className="text-2xl font-bold text-sunset-orange">{price}</span>
        </div>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-sunset-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-dark-leather">{feature}</span>
            </li>
          ))}
        </ul>
        <button className="w-full bg-sunset-orange text-white py-3 rounded-lg hover:bg-sunset-orange/90 transition-colors duration-300 font-semibold">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
