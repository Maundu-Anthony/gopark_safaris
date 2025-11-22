import React from 'react';

const GalleryImage = ({ src, alt, caption }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
          {caption}
        </p>
      </div>
    </div>
  );
};

export default GalleryImage;
