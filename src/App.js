import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import StickyBookButton from './components/StickyBookButton';
import BookingModal from './components/BookingModal';
import Hero from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import PackagesPage from './pages/PackagesPage';
import AdminLogin from './pages/AdminLogin';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
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
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/forgot-password" element={<ForgotPassword />} />
      <Route path="/admin/reset-password" element={<ResetPassword />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Service Detail Routes */}
      <Route path="/services/:serviceId" element={<ServiceDetail />} />
      
      {/* Packages Page Route */}
      <Route path="/packages" element={<PackagesPage />} />

      {/* Main Website */}
      <Route
        path="/"
        element={
          <div className="App">
            <Navbar />
            <Hero onBookNowClick={openBookingModal} />
            <About />
            <Services />
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
        }
      />
    </Routes>
  );
}

export default App;
