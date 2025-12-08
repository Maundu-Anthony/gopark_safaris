import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, serviceId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-warm-khaki cursor-pointer transform hover:-translate-y-1"
    >
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-warm-khaki rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-safari-olive mb-3 text-center">{title}</h3>
      <p className="text-dark-leather text-center">{description}</p>
      <div className="text-center mt-4">
        <span className="text-sunset-orange font-semibold hover:underline">Learn more →</span>
      </div>
    </div>
  );
};

export default ServiceCard;
