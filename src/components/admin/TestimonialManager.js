import React from 'react';

const TestimonialManager = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-safari-olive">Manage Testimonials</h2>
        <button className="bg-sunset-orange text-white px-6 py-2 rounded-lg hover:bg-sunset-orange/90 transition">
          + Add New Testimonial
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">
          Testimonials management will be implemented here. You can add, edit, and delete customer testimonials.
        </p>
      </div>
    </div>
  );
};

export default TestimonialManager;
