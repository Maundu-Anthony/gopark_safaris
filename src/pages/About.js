import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-warm-khaki">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-safari-olive mb-4">About Go Park Safaris</h2>
          <div className="w-24 h-1 bg-sunset-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-safari-olive mb-6">
              Your Trusted Safari Partner
            </h3>
            <p className="text-dark-leather mb-4 leading-relaxed">
              At Go Park Safaris, we are passionate about creating extraordinary safari experiences 
              that showcase the stunning beauty and diverse wildlife of Kenya. With years of expertise 
              in the tourism industry, we specialize in crafting personalized adventures that exceed 
              expectations.
            </p>
            <p className="text-dark-leather mb-4 leading-relaxed">
              Whether you're seeking thrilling wildlife encounters, cultural immersion, or peaceful 
              escapes into nature, our dedicated team ensures every detail of your journey is 
              thoughtfully planned and executed.
            </p>
            <p className="text-dark-leather leading-relaxed">
              We pride ourselves on our commitment to sustainable tourism, supporting local communities, 
              and preserving Kenya's natural heritage for future generations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-safari-olive/20">
              <div className="text-4xl font-bold text-sunset-orange mb-2">500+</div>
              <div className="text-dark-leather">Happy Clients</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-safari-olive/20">
              <div className="text-4xl font-bold text-sunset-orange mb-2">15+</div>
              <div className="text-dark-leather">Destinations</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-safari-olive/20">
              <div className="text-4xl font-bold text-sunset-orange mb-2">10+</div>
              <div className="text-dark-leather">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-safari-olive/20">
              <div className="text-4xl font-bold text-sunset-orange mb-2">100%</div>
              <div className="text-dark-leather">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
