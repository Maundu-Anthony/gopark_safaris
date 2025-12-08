import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PackageCard from '../components/PackageCard';

const PackagesPage = () => {
  const [packages] = useState(() => {
    const stored = localStorage.getItem('safariPackages');
    return stored ? JSON.parse(stored) : [];
  });
  const navigate = useNavigate();

  const openBookingModal = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-warm-khaki pt-24 pb-12">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-safari-olive hover:text-sunset-orange transition"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-safari-olive mb-4">Safari Packages</h1>
          <div className="w-24 h-1 bg-sunset-orange mx-auto mb-4"></div>
          <p className="text-dark-leather max-w-2xl mx-auto">
            Choose from our carefully curated safari packages or let us create a custom itinerary for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard
              key={pkg.id || index}
              title={pkg.title}
              duration={pkg.duration}
              price={pkg.price}
              image={pkg.image}
              features={pkg.features}
              onBookNow={openBookingModal}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-dark-leather mb-4">
            Can't find the perfect package? We'll create a custom safari just for you!
          </p>
          <button 
            onClick={openBookingModal}
            className="bg-sunset-orange text-white px-8 py-3 rounded-lg hover:bg-sunset-orange/90 transition-colors duration-300 font-semibold"
          >
            Request Custom Package
          </button>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;
