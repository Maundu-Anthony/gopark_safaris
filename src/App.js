import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import StickyBookButton from './components/StickyBookButton';
import BookingModal from './components/BookingModal';
import Hero from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Packages from './pages/Packages';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import useScrollAnimation from './hooks/useScrollAnimation';
import './App.css';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
  // Enable scroll animations
  useScrollAnimation();

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="App">
      <Navbar />
      <Hero onBookNowClick={openBookingModal} />
      <About />
      <Services />
      <Packages onBookNowClick={openBookingModal} />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      
      {/* Floating Buttons */}
      <WhatsAppButton />
      <StickyBookButton onBookNowClick={openBookingModal} />
      
      {/* Booking Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
    </div>
  );
}

export default App;
