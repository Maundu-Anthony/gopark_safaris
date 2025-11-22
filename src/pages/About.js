import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Go Park Safaris</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Your Trusted Safari Partner
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At Go Park Safaris, we are passionate about creating extraordinary safari experiences 
              that showcase the stunning beauty and diverse wildlife of Kenya. With years of expertise 
              in the tourism industry, we specialize in crafting personalized adventures that exceed 
              expectations.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Whether you're seeking thrilling wildlife encounters, cultural immersion, or peaceful 
              escapes into nature, our dedicated team ensures every detail of your journey is 
              thoughtfully planned and executed.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We pride ourselves on our commitment to sustainable tourism, supporting local communities, 
              and preserving Kenya's natural heritage for future generations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Destinations</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
