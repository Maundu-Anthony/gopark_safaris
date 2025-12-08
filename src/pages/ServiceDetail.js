import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const services = {
    'wildlife-safaris': {
      title: 'Wildlife Safaris',
      description: 'Experience thrilling wildlife encounters in Kenya\'s most renowned national parks and game reserves, guided by our expert rangers.',
      details: `Our wildlife safaris offer an unforgettable journey through Kenya's most spectacular national parks and game reserves. Led by experienced guides who possess intimate knowledge of animal behavior and habitats, you'll witness the incredible diversity of African wildlife in their natural environment.

From the Big Five (lion, elephant, buffalo, leopard, and rhino) to countless other species, our safaris provide exceptional opportunities for wildlife viewing and photography. We operate in premier locations including Maasai Mara, Amboseli, Tsavo, and Lake Nakuru.`,
      features: [
        'Expert safari guides with extensive wildlife knowledge',
        'Game drives in custom 4x4 safari vehicles',
        'Access to premium national parks and reserves',
        'Professional wildlife photography opportunities',
        'Binoculars and field guides provided',
        'Flexible itineraries based on animal migrations'
      ],
      image: '/images/hero/hero1.jpg'
    },
    'transport': {
      title: 'Transport Services',
      description: 'Reliable and comfortable transportation services with modern vehicles and professional drivers for all your travel needs.',
      details: `GoPark Safaris provides comprehensive transportation services throughout Kenya, ensuring your journey is as comfortable and enjoyable as your destination. Our modern fleet of well-maintained vehicles is equipped with air conditioning, comfortable seating, and safety features.

Whether you need airport transfers, city tours, or long-distance travel between destinations, our professional drivers ensure punctual, safe, and pleasant journeys. All our drivers are licensed, experienced, and knowledgeable about local routes and attractions.`,
      features: [
        'Modern, well-maintained vehicle fleet',
        'Professional and courteous drivers',
        'Airport pickup and drop-off services',
        'Intercity and long-distance transfers',
        'Air-conditioned comfort',
        'Flexible scheduling and routes'
      ],
      image: '/images/hero/hero2.jpg'
    },
    'ground-handling': {
      title: 'Ground Handling',
      description: 'Comprehensive ground handling services including airport transfers, meet and greet, and seamless logistics coordination.',
      details: `Our ground handling services ensure that every aspect of your arrival and departure is managed with professionalism and care. From the moment you land until you depart, we handle all logistics to make your experience seamless and stress-free.

We provide meet and greet services at all major airports, assistance with luggage, customs support, and coordination with hotels and other service providers. Our team is available 24/7 to address any concerns and ensure smooth operations.`,
      features: [
        'Airport meet and greet services',
        'Luggage assistance and handling',
        'VIP lounge access coordination',
        'Hotel check-in coordination',
        'Emergency support available 24/7',
        'Multilingual staff available'
      ],
      image: '/images/hero/hero3.jpg'
    },
    'hotel-bookings': {
      title: 'Hotel Bookings',
      description: 'Secure comfortable and luxurious accommodations ranging from boutique lodges to premium resorts in prime locations.',
      details: `We partner with the finest hotels, lodges, and resorts throughout Kenya to provide you with exceptional accommodation options. From luxury tented camps in the bush to beachfront resorts and city hotels, we ensure your stay meets the highest standards of comfort and service.

Our team carefully selects properties based on location, amenities, service quality, and value. We handle all booking arrangements, special requests, and can accommodate various budgets while maintaining our quality standards.`,
      features: [
        'Handpicked luxury lodges and hotels',
        'Boutique tented camps in wildlife areas',
        'Beach resorts and coastal hotels',
        'City hotels for business and leisure',
        'Special dietary requirements accommodated',
        'Best available rates and packages'
      ],
      image: '/images/packages/diani.jpg'
    },
    'conference-handling': {
      title: 'Conference Handling',
      description: 'Professional coordination of corporate conferences, meetings, team building activities, and business events in stunning natural settings.',
      details: `Transform your corporate events and conferences into memorable experiences with our specialized conference handling services. We organize professional business events in some of Kenya's most inspiring locations, combining productivity with the beauty of natural surroundings.

From intimate board meetings to large-scale conferences and team-building retreats, we manage every detail including venue selection, catering, equipment setup, and activities. Our unique advantage is offering conference facilities in safari lodges and scenic locations that inspire creativity and team bonding.`,
      features: [
        'Conference venue sourcing and booking',
        'Audio-visual equipment provision',
        'Catering and refreshments coordination',
        'Team building activities and excursions',
        'Transportation for delegates',
        'Professional event coordination staff'
      ],
      image: '/images/packages/lc.jpg'
    },
    'custom-tours': {
      title: 'Custom Tours',
      description: 'Tailor-made safari experiences designed around your preferences, schedule, and budget for truly personalized adventures.',
      details: `Every traveler is unique, and so should be their safari experience. Our custom tour service allows you to design your perfect Kenyan adventure, tailored to your specific interests, time frame, and budget.

Whether you're interested in wildlife photography, bird watching, cultural experiences, or adventure activities, we work with you to create an itinerary that perfectly matches your vision. Our experienced team provides expert advice while ensuring your preferences remain at the heart of the planning process.`,
      features: [
        'Personalized itinerary planning',
        'Flexible scheduling and duration',
        'Budget-conscious options available',
        'Special interest focus (photography, birding, etc.)',
        'Private guides and vehicles available',
        'Modifications possible during the trip'
      ],
      image: '/images/packages/migration.jpg'
    },
    'excursions': {
      title: 'Excursions',
      description: 'Exciting day trips to Kenya\'s top destinations including Tsavo East, Shimba Hills, Mombasa, Nairobi City, and Wasini Marine Park.',
      details: `Our curated day excursions offer perfect opportunities to explore Kenya's diverse attractions without committing to multi-day trips. From wildlife parks to historical sites, marine adventures to city tours, these excursions are ideal for those with limited time or staying in one location.

Each excursion is carefully planned to maximize your experience, including transportation, guide services, and entrance fees. Perfect for cruise passengers, beach resort guests, or business travelers with limited free time.`,
      features: [
        'Tsavo East National Park day safari',
        'Shimba Hills rainforest and waterfalls',
        'Mombasa historical and cultural tour',
        'Nairobi City and National Park',
        'Wasini Island and Kisite Marine Park',
        'All-inclusive packages with lunch'
      ],
      image: '/images/packages/amboseli.jpg'
    }
  };

  const service = services[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen bg-warm-khaki flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-safari-olive mb-4">Service Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-sunset-orange text-white px-6 py-3 rounded-lg hover:bg-sunset-orange/90 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-khaki pt-24">
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

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-96 object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x400?text=' + service.title;
            }}
          />
          <div className="p-8">
            <h1 className="text-4xl font-bold text-safari-olive mb-4">{service.title}</h1>
            <p className="text-xl text-dark-leather mb-6">{service.description}</p>
            <div className="prose prose-lg max-w-none text-dark-leather whitespace-pre-line">
              {service.details}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-safari-olive mb-6">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-6 h-6 text-sunset-orange mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-dark-leather">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-safari-olive rounded-lg shadow-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Book This Service?</h2>
          <p className="text-xl mb-6">Contact us today to plan your perfect experience</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-sunset-orange text-white px-8 py-3 rounded-lg hover:bg-sunset-orange/90 transition font-semibold"
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate('/packages')}
              className="bg-white text-safari-olive px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold"
            >
              View Packages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
