import React, { useState, useEffect } from 'react';

const GalleryManager = () => {
  const [images, setImages] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    const stored = localStorage.getItem('galleryImages');
    if (stored) {
      setImages(JSON.parse(stored));
    }
  };

  const handleAddImage = (imageData) => {
    imageData.id = Date.now();
    const updatedImages = [...images, imageData];
    setImages(updatedImages);
    localStorage.setItem('galleryImages', JSON.stringify(updatedImages));
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      const updatedImages = images.filter(img => img.id !== id);
      setImages(updatedImages);
      localStorage.setItem('galleryImages', JSON.stringify(updatedImages));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-safari-olive">Manage Gallery</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-sunset-orange text-white px-6 py-2 rounded-lg hover:bg-sunset-orange/90 transition"
        >
          + Add New Image
        </button>
      </div>

      {showForm && (
        <ImageForm
          onSave={handleAddImage}
          onCancel={() => setShowForm(false)}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300?text=Image';
              }}
            />
            <div className="p-4">
              <p className="font-semibold text-safari-olive">{img.caption}</p>
              <button
                onClick={() => handleDelete(img.id)}
                className="mt-2 w-full bg-red-600 text-white py-1 rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ImageForm = ({ onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    src: '',
    alt: '',
    caption: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      // Create preview and convert to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, src: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.src) {
      alert('Please upload an image or provide an image URL');
      return;
    }
    onSave(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-safari-olive mb-4">Add New Image</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-safari-olive font-semibold mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-orange"
          />
          <p className="text-sm text-gray-600 mt-2">Or enter image URL below:</p>
        </div>

        <div>
          <label className="block text-safari-olive font-semibold mb-2">Image URL (Optional)</label>
          <input
            type="text"
            value={formData.src}
            onChange={(e) => {
              setFormData({ ...formData, src: e.target.value });
              setImagePreview(e.target.value);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-orange"
            placeholder="/images/gallery/... or https://..."
          />
        </div>

        {imagePreview && (
          <div>
            <label className="block text-safari-olive font-semibold mb-2">Preview</label>
            <img 
              src={imagePreview} 
              alt="Preview" 
              className="w-full h-64 object-cover rounded-lg"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300?text=Image+Preview';
              }}
            />
          </div>
        )}

        <div>
          <label className="block text-safari-olive font-semibold mb-2">Alt Text</label>
          <input
            type="text"
            value={formData.alt}
            onChange={(e) => setFormData({ ...formData, alt: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-orange"
            placeholder="Description for accessibility"
            required
          />
        </div>
        <div>
          <label className="block text-safari-olive font-semibold mb-2">Caption</label>
          <input
            type="text"
            value={formData.caption}
            onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-orange"
            required
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex-1 bg-sunset-orange text-white py-3 rounded-lg hover:bg-sunset-orange/90 transition"
          >
            Add Image
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default GalleryManager;
