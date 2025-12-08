import React, { useState, useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);

  const defaultServices = [
    {
      id: 1,
      slug: 'wildlife-safaris',
      iconPath: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Wildlife Safaris',
      description: 'Experience thrilling wildlife encounters in Kenya\'s most renowned national parks and game reserves, guided by our expert rangers.'
    },
    {
      id: 2,
      slug: 'transport',
      iconPath: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
      title: 'Transport',
      description: 'Reliable and comfortable transportation services with modern vehicles and professional drivers for all your travel needs.'
    },
    {
      id: 3,
      slug: 'ground-handling',
      iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
      title: 'Ground Handling',
      description: 'Comprehensive ground handling services including airport transfers, meet and greet, and seamless logistics coordination.'
    },
    {
      id: 4,
      slug: 'hotel-bookings',
      iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      title: 'Hotel Bookings',
      description: 'Secure comfortable and luxurious accommodations ranging from boutique lodges to premium resorts in prime locations.'
    },
    {
      id: 5,
      slug: 'conference-handling',
      iconPath: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      title: 'Conference Handling',
      description: 'Professional coordination of corporate conferences, meetings, team building activities, and business events in stunning natural settings.'
    },
    {
      id: 6,
      slug: 'custom-tours',
      iconPath: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
      title: 'Custom Tours',
      description: 'Tailor-made safari experiences designed around your preferences, schedule, and budget for truly personalized adventures.'
    },
    {
      id: 7,
      slug: 'excursions',
      iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      title: 'Excursions',
      description: 'Exciting day trips to Kenya\'s top destinations including Tsavo East, Shimba Hills, Mombasa, Nairobi City, and Wasini Marine Park.'
    }
  ];

  useEffect(() => {
    // Load services from localStorage or use defaults
    const stored = localStorage.getItem('safariServices');
    if (stored) {
      setServices(JSON.parse(stored));
    } else {
      setServices(defaultServices);
      localStorage.setItem('safariServices', JSON.stringify(defaultServices));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-safari-olive mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-sunset-orange mx-auto mb-4"></div>
          <p className="text-dark-leather max-w-2xl mx-auto">
            Comprehensive safari and tourism services designed to create unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id || index}
              serviceId={service.slug || service.title.toLowerCase().replace(/\s+/g, '-')}
              icon={
                <svg className="w-8 h-8 text-safari-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.iconPath} />
                </svg>
              }
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
