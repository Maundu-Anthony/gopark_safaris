import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-warm-khaki shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-safari-olive">GoPark Safaris</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-dark-leather hover:text-sunset-orange transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-dark-leather hover:text-sunset-orange transition">About</button>
            <button onClick={() => scrollToSection('services')} className="text-dark-leather hover:text-sunset-orange transition">Services</button>
            <button onClick={() => scrollToSection('packages')} className="text-dark-leather hover:text-sunset-orange transition">Packages</button>
            <button onClick={() => scrollToSection('gallery')} className="text-dark-leather hover:text-sunset-orange transition">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="text-dark-leather hover:text-sunset-orange transition">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-leather hover:text-sunset-orange focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-warm-khaki border-t border-safari-olive/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-dark-leather hover:text-sunset-orange hover:bg-warm-khaki/50">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-dark-leather hover:text-sunset-orange hover:bg-warm-khaki/50">About</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-dark-leather hover:text-sunset-orange hover:bg-warm-khaki/50">Services</button>
            <button onClick={() => scrollToSection('packages')} className="block w-full text-left px-3 py-2 text-dark-leather hover:text-sunset-orange hover:bg-warm-khaki/50">Packages</button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-3 py-2 text-dark-leather hover:text-sunset-orange hover:bg-warm-khaki/50">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-dark-leather hover:text-sunset-orange hover:bg-warm-khaki/50">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
