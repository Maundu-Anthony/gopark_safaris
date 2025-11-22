import React from 'react';
import PackageCard from '../components/PackageCard';

const Packages = () => {
  const packages = [
    {
      title: 'Maasai Mara Classic',
      duration: '3 Days / 2 Nights',
      price: 'From $450',
      features: [
        'Game drives in Maasai Mara National Reserve',
        'Accommodation in luxury tented camp',
        'All meals included',
        'Professional safari guide',
        'Park entrance fees',
        'Airport/hotel transfers'
      ]
    },
    {
      title: 'Amboseli Explorer',
      duration: '4 Days / 3 Nights',
      price: 'From $580',
      features: [
        'Amboseli National Park game drives',
        'View of Mount Kilimanjaro',
        'Luxury lodge accommodation',
        'Elephant observation',
        'Cultural Maasai village visit',
        'All meals and transportation'
      ]
    },
    {
      title: 'Coastal Paradise',
      duration: '5 Days / 4 Nights',
      price: 'From $720',
      features: [
        'Beach resort accommodation',
        'Mombasa city tour',
        'Snorkeling and diving',
        'Dhow sunset cruise',
        'Visit to Fort Jesus',
        'Water sports activities'
      ]
    },
    {
      title: 'Great Migration Safari',
      duration: '7 Days / 6 Nights',
      price: 'From $1,450',
      features: [
        'Witness the Great Migration',
        'Maasai Mara & Serengeti',
        'Luxury lodge stays',
        'Hot air balloon safari option',
        'All meals and park fees',
        'Expert wildlife guide'
      ]
    },
    {
      title: 'Mt. Kenya Adventure',
      duration: '5 Days / 4 Nights',
      price: 'From $890',
      features: [
        'Mountain trekking expedition',
        'Professional mountain guide',
        'Camping equipment provided',
        'All meals during trek',
        'Park fees included',
        'Pre and post trek accommodation'
      ]
    },
    {
      title: 'Complete Kenya Safari',
      duration: '10 Days / 9 Nights',
      price: 'From $2,200',
      features: [
        'Multiple national parks',
        'Maasai Mara, Amboseli, Nakuru',
        'Beach extension in Mombasa',
        'Luxury accommodations',
        'All meals and activities',
        'Comprehensive wildlife experience'
      ]
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Safari Packages</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated safari packages or let us create a custom itinerary for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              title={pkg.title}
              duration={pkg.duration}
              price={pkg.price}
              features={pkg.features}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            Can't find the perfect package? We'll create a custom safari just for you!
          </p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold"
          >
            Request Custom Package
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
