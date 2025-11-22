import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center mt-20"
      style={{
        backgroundImage: 'url(/images/savannah.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Go Park Safaris
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Discover the Wild Beauty of Kenya - Your Gateway to Unforgettable Safari Adventures
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })}
            className="bg-sunset-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sunset-orange/90 transition-colors duration-300"
          >
            Explore Packages
          </button>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-warm-khaki text-warm-khaki px-8 py-4 rounded-lg font-semibold text-lg hover:bg-warm-khaki hover:text-safari-olive transition-colors duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
