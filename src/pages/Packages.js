import React, { useState, useEffect } from 'react';
import PackageCard from '../components/PackageCard';

const Packages = ({ onBookNowClick }) => {
  const [packages, setPackages] = useState([]);

  const defaultPackages = [
    {
      id: 1,
      title: 'The Mara Classic',
      duration: '3 Days / 2 Nights',
      price: 'From $450',
      image: '/images/packages/mara.jpg',
      features: [
        'Game drives in Maasai Mara National Reserve',
        'Accommodation in luxury tented camp',
        'Full board',
        'Professional safari guide',
        'Park entrance fees',
        'Airport/hotel transfers'
      ]
    },
    {
      id: 2,
      title: 'Tsavo East Safari',
      duration: '3 Days / 2 Nights',
      price: 'From $420',
      image: '/images/packages/amboseli.jpg',
      features: [
        'Tsavo East National Park game drives',
        'Red elephants and diverse wildlife',
        'Comfortable lodge accommodation',
        'Full board',
        'Professional guide',
        'All park fees included'
      ]
    },
    {
      id: 3,
      title: 'Tsavo East, Amboseli & Tsavo West',
      duration: '4 Days / 3 Nights',
      price: 'From $680',
      image: '/images/packages/diani.jpg',
      features: [
        'Tsavo East National Park',
        'Amboseli National Park',
        'Tsavo West National Park',
        'Full board',
        'Professional safari guide',
        'All park entrance fees'
      ]
    },
    {
      id: 4,
      title: 'Tsavo East & Taita Hills Safari',
      duration: '3 Days / 2 Nights',
      price: 'From $480',
      image: '/images/packages/migration.jpg',
      features: [
        'Tsavo East game drives',
        'Taita Hills wildlife sanctuary',
        'Salt Lick Lodge experience',
        'Full board',
        'Professional guide',
        'All transfers included'
      ]
    },
    {
      id: 5,
      title: 'Great Migration Safari',
      duration: '7 Days / 6 Nights',
      price: 'From $1,450',
      image: '/images/packages/migration.jpg',
      features: [
        'Witness the Great Migration',
        'Maasai Mara & Serengeti',
        'Luxury lodge stays',
        'Hot air balloon safari option',
        'Full board',
        'Expert wildlife guide'
      ]
    },
    {
      id: 6,
      title: 'Salt Lick Safari Package',
      duration: '3 Days / 2 Nights',
      price: 'From $520',
      image: '/images/packages/lc.jpg',
      features: [
        'Iconic Salt Lick Lodge stay',
        'Taita Hills wildlife sanctuary',
        'Underground viewing bunker',
        'Floodlit waterhole viewing',
        'Full board',
        'Professional guide'
      ]
    },
    {
      id: 7,
      title: 'Complete Kenya Safari',
      duration: '11 Days / 10 Nights',
      price: 'From $2,800',
      image: '/images/packages/lc.jpg',
      features: [
        'Maasai Mara National Reserve',
        'Lake Nakuru National Park',
        'Tsavo East National Park',
        'Amboseli National Park',
        'Full board',
        'Comprehensive wildlife experience'
      ]
    },
    {
      id: 8,
      title: 'Honeymoon Safari',
      duration: 'Customizable',
      price: 'From $1,200',
      image: '/images/packages/diani.jpg',
      features: [
        'Romantic luxury accommodations',
        'Private game drives',
        'Candlelit dinners',
        'Champagne breakfast in the bush',
        'Full board',
        'Special honeymoon amenities'
      ]
    }
  ];

  useEffect(() => {
    // Load packages from localStorage or use defaults
    const stored = localStorage.getItem('safariPackages');
    if (stored) {
      setPackages(JSON.parse(stored));
    } else {
      setPackages(defaultPackages);
      localStorage.setItem('safariPackages', JSON.stringify(defaultPackages));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="packages" className="py-20 bg-warm-khaki">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-safari-olive mb-4">Safari Packages</h2>
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
              onBookNow={onBookNowClick}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-dark-leather mb-4">
            Can't find the perfect package? We'll create a custom safari just for you!
          </p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-sunset-orange text-white px-8 py-3 rounded-lg hover:bg-sunset-orange/90 transition-colors duration-300 font-semibold"
          >
            Request Custom Package
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
