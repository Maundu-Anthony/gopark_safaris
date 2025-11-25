import React, { useState } from 'react';

const GalleryLightbox = ({ images, currentIndex, onClose }) => {
  const [index, setIndex] = useState(currentIndex);

  const nextImage = () => {
    setIndex((index + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') onClose();
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [index]);

  if (currentIndex === null) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-sunset-orange transition z-10"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous Button */}
      <button
        onClick={prevImage}
        className="absolute left-4 text-white hover:text-sunset-orange transition"
      >
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Image */}
      <div className="max-w-6xl max-h-[90vh] px-16">
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="max-w-full max-h-[90vh] object-contain"
        />
        <p className="text-white text-center mt-4 text-lg">{images[index].caption}</p>
        <p className="text-gray-400 text-center text-sm mt-2">
          {index + 1} / {images.length}
        </p>
      </div>

      {/* Next Button */}
      <button
        onClick={nextImage}
        className="absolute right-4 text-white hover:text-sunset-orange transition"
      >
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default GalleryLightbox;
