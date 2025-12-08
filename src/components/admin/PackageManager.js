import React, { useState, useEffect } from 'react';

const PackageManager = () => {
  const [packages, setPackages] = useState([]);
  const [editingPackage, setEditingPackage] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadPackages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadPackages = () => {
    const stored = localStorage.getItem('safariPackages');
    if (stored) {
      setPackages(JSON.parse(stored));
    } else {
      // Load default packages
      const defaultPackages = getDefaultPackages();
      setPackages(defaultPackages);
      localStorage.setItem('safariPackages', JSON.stringify(defaultPackages));
    }
  };

  const getDefaultPackages = () => [
    {
      id: 1,
      title: 'The Mara Classic',
      duration: '3 Days / 2 Nights',
      price: 'From $450',
      image: '/images/packages/mara.jpg',
      features: [
        'Game drives in Maasai Mara National Reserve',
        'Accommodation in luxury tented camp',
        'Full board',
        'Professional safari guide',
        'Park entrance fees',
        'Airport/hotel transfers'
      ]
    },
    // Add other default packages here
  ];

  const handleSave = (packageData) => {
    let updatedPackages;
    if (packageData.id) {
      // Update existing
      updatedPackages = packages.map(pkg => 
        pkg.id === packageData.id ? packageData : pkg
      );
    } else {
      // Add new
      packageData.id = Date.now();
      updatedPackages = [...packages, packageData];
    }
    setPackages(updatedPackages);
    localStorage.setItem('safariPackages', JSON.stringify(updatedPackages));
    setShowForm(false);
    setEditingPackage(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      const updatedPackages = packages.filter(pkg => pkg.id !== id);
      setPackages(updatedPackages);
      localStorage.setItem('safariPackages', JSON.stringify(updatedPackages));
    }
  };

  const handleEdit = (pkg) => {
    setEditingPackage(pkg);
    setShowForm(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-safari-olive">Manage Packages</h2>
        <button
          onClick={() => {
            setEditingPackage(null);
            setShowForm(true);
          }}
          className="bg-sunset-orange text-white px-6 py-2 rounded-lg hover:bg-sunset-orange/90 transition"
        >
          + Add New Package
        </button>
      </div>

      {showForm ? (
        <PackageForm
          package={editingPackage}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingPackage(null);
          }}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg shadow-md p-6">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=Safari+Package';
                }}
              />
              <h3 className="text-xl font-bold text-safari-olive mb-2">{pkg.title}</h3>
              <p className="text-dark-leather mb-2">{pkg.duration}</p>
              <p className="text-sunset-orange font-bold mb-4">{pkg.price}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(pkg)}
                  className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(pkg.id)}
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

const PackageForm = ({ package: pkg, onSave, onCancel }) => {
  const [formData, setFormData] = useState(
    pkg || {
      title: '',
      duration: '',
      price: '',
      image: '',
      features: ['']
    }
  );

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ''] });
  };

  const removeFeature = (index) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: newFeatures });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-safari-olive mb-4">
        {pkg ? 'Edit Package' : 'Add New Package'}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-safari-olive font-semibold mb-2">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-orange"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-safari-olive font-semibold mb-2">Duration</label>
            <input
              type="text"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-orange"
              placeholder="e.g., 3 Days / 2 Nights"
              required
            />
          </div>
          <div>
            <label className="block text-safari-olive font-semibold mb-2">Price</label>
            <input
              type="text"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-orange"
              placeholder="e.g., From $450"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-safari-olive font-semibold mb-2">Image URL</label>
          <input
            type="text"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-orange"
            placeholder="/images/packages/..."
            required
          />
        </div>

        <div>
          <label className="block text-safari-olive font-semibold mb-2">Features</label>
          {formData.features.map((feature, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                value={feature}
                onChange={(e) => handleFeatureChange(index, e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-sunset-orange"
                placeholder="Enter feature"
                required
              />
              <button
                type="button"
                onClick={() => removeFeature(index)}
                className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-700"
              >
                ×
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addFeature}
            className="text-sunset-orange hover:text-sunset-orange/80"
          >
            + Add Feature
          </button>
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex-1 bg-sunset-orange text-white py-3 rounded-lg hover:bg-sunset-orange/90 transition font-semibold"
          >
            Save Package
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

export default PackageManager;
