import React, { useState } from 'react';

const BookingModal = ({ isOpen, onClose, packageTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: packageTitle || '',
    startDate: '',
    endDate: '',
    adults: 1,
    children: 0,
    specialRequests: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Save to db.json via json-server
    try {
      const response = await fetch('http://localhost:3001/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          createdAt: new Date().toISOString()
        })
      });

      if (response.ok) {
        alert('Booking request submitted successfully! We will contact you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          package: packageTitle || '',
          startDate: '',
          endDate: '',
          adults: 1,
          children: 0,
          specialRequests: ''
        });
        onClose();
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('There was an error submitting your booking. Please try again or contact us directly.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 transition-opacity bg-black bg-opacity-75"
          onClick={onClose}
        ></div>

        {/* Modal panel */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="bg-warm-khaki px-4 py-5 sm:px-6 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-safari-olive">Book Your Safari</h3>
            <button
              onClick={onClose}
              className="text-safari-olive hover:text-sunset-orange transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="bg-white px-4 pt-5 pb-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-safari-olive mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-warm-khaki rounded-lg focus:ring-2 focus:ring-sunset-orange focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-safari-olive mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-warm-khaki rounded-lg focus:ring-2 focus:ring-sunset-orange focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-safari-olive mb-1">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-warm-khaki rounded-lg focus:ring-2 focus:ring-sunset-orange focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-safari-olive mb-1">Safari Package *</label>
                <input
                  type="text"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-warm-khaki rounded-lg focus:ring-2 focus:ring-sunset-orange focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-safari-olive mb-1">Start Date *</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-warm-khaki rounded-lg focus:ring-2 focus:ring-sunset-orange focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-safari-olive mb-1">End Date *</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-warm-khaki rounded-lg focus:ring-2 focus:ring-sunset-orange focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-safari-olive mb-1">Adults *</label>
                <input
                  type="number"
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  min="1"
                  required
                  className="w-full px-3 py-2 border border-warm-khaki rounded-lg focus:ring-2 focus:ring-sunset-orange focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-safari-olive mb-1">Children</label>
                <input
                  type="number"
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-3 py-2 border border-warm-khaki rounded-lg focus:ring-2 focus:ring-sunset-orange focus:border-transparent"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-safari-olive mb-1">Special Requests</label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 py-2 border border-warm-khaki rounded-lg focus:ring-2 focus:ring-sunset-orange focus:border-transparent"
                placeholder="Dietary requirements, accessibility needs, etc."
              ></textarea>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="submit"
                className="flex-1 bg-sunset-orange text-white py-3 rounded-lg hover:bg-sunset-orange/90 transition font-semibold"
              >
                Submit Booking Request
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border border-safari-olive text-safari-olive rounded-lg hover:bg-warm-khaki transition font-semibold"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
