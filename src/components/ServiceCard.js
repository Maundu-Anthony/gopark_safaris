import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-warm-khaki">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-warm-khaki rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-safari-olive mb-3 text-center">{title}</h3>
      <p className="text-dark-leather text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
