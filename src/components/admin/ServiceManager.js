import React, { useState, useEffect } from 'react';

const ServiceManager = () => {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = () => {
    const stored = localStorage.getItem('safariServices');
    if (stored) {
      setServices(JSON.parse(stored));
    }
  };

  const handleSave = (serviceData) => {
    let updatedServices;
    if (serviceData.id) {
      // Update existing
      updatedServices = services.map(svc => 
        svc.id === serviceData.id ? serviceData : svc
      );
    } else {
      // Add new
      serviceData.id = Date.now();
      updatedServices = [...services, serviceData];
    }
    setServices(updatedServices);
    localStorage.setItem('safariServices', JSON.stringify(updatedServices));
    setShowForm(false);
    setEditingService(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      const updatedServices = services.filter(svc => svc.id !== id);
      setServices(updatedServices);
      localStorage.setItem('safariServices', JSON.stringify(updatedServices));
    }
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setShowForm(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-safari-olive">Manage Services</h2>
        <button
          onClick={() => {
            setEditingService(null);
            setShowForm(true);
          }}
          className="bg-sunset-orange text-white px-6 py-2 rounded-lg hover:bg-sunset-orange/90 transition"
        >
          + Add New Service
        </button>
      </div>

      {showForm ? (
        <ServiceForm
          service={editingService}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingService(null);
          }}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-safari-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.iconPath} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-safari-olive mb-2 text-center">{service.title}</h3>
              <p className="text-dark-leather text-sm mb-4">{service.description}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(service)}
                  className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(service.id)}
                  className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ServiceForm = ({ service, onSave, onCancel }) => {
  const [formData, setFormData] = useState(
    service || {
      title: '',
      description: '',
      iconPath: ''
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  // Common SVG icon paths for quick selection
  const commonIcons = [
    { name: 'Globe/Safari', path: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Transport/Arrows', path: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
    { name: 'Clipboard/Check', path: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
    { name: 'Building/Hotel', path: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    { name: 'Calendar/Event', path: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { name: 'Map/Tour', path: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
    { name: 'Users/Group', path: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { name: 'Camera/Photo', path: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-safari-olive mb-4">
        {service ? 'Edit Service' : 'Add New Service'}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-safari-olive font-semibold mb-2">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-orange"
            placeholder="e.g., Wildlife Safaris"
            required
          />
        </div>

        <div>
          <label className="block text-safari-olive font-semibold mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-orange"
            placeholder="Service description..."
            rows="3"
            required
          />
        </div>

        <div>
          <label className="block text-safari-olive font-semibold mb-2">Icon (SVG Path)</label>
          <div className="mb-2">
            <p className="text-sm text-gray-600 mb-2">Quick Select:</p>
            <div className="grid grid-cols-2 gap-2">
              {commonIcons.map((icon, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setFormData({ ...formData, iconPath: icon.path })}
                  className={`flex items-center p-2 border rounded-lg hover:bg-gray-50 transition ${
                    formData.iconPath === icon.path ? 'border-sunset-orange bg-orange-50' : 'border-gray-300'
                  }`}
                >
                  <svg className="w-6 h-6 text-safari-olive mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon.path} />
                  </svg>
                  <span className="text-xs">{icon.name}</span>
                </button>
              ))}
            </div>
          </div>
          <textarea
            value={formData.iconPath}
            onChange={(e) => setFormData({ ...formData, iconPath: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-orange"
            placeholder="SVG path data (d attribute)"
            rows="2"
            required
          />
          {formData.iconPath && (
            <div className="mt-2 flex items-center">
              <span className="text-sm text-gray-600 mr-2">Preview:</span>
              <svg className="w-8 h-8 text-safari-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={formData.iconPath} />
              </svg>
            </div>
          )}
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex-1 bg-sunset-orange text-white py-3 rounded-lg hover:bg-sunset-orange/90 transition font-semibold"
          >
            Save Service
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition font-semibold"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceManager;
