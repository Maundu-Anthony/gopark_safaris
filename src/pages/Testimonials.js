import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch testimonials from Vercel backend
    fetch('https://gopark-safaris-backend.vercel.app/testimonials')
      .then(res => res.json())
      .then(data => setTestimonials(data))
      .catch(err => console.error('Error fetching testimonials:', err));
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-sunset-orange' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-safari-olive mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-sunset-orange mx-auto mb-4"></div>
          <p className="text-dark-leather max-w-2xl mx-auto">
            Hear from travelers who have experienced the magic of Kenya with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-warm-khaki p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-dark-leather mb-4 italic">"{testimonial.comment}"</p>
              <div className="border-t border-safari-olive/20 pt-4">
                <p className="font-semibold text-safari-olive">{testimonial.name}</p>
                <p className="text-sm text-dark-leather/70">{testimonial.location}</p>
                <p className="text-xs text-dark-leather/50 mt-1">{new Date(testimonial.date).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
