import React, { useState } from 'react';
import GalleryImage from '../components/GalleryImage';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    { src: '/images/gallery/mara.jpg', alt: 'Maasai Mara', caption: 'Majestic Lions in Maasai Mara' },
    { src: '/images/gallery/amboseli.jpg', alt: 'Elephants', caption: 'Elephant Herds in Amboseli' },
    { src: '/images/gallery/diani.jpg', alt: 'Beach', caption: 'Coastal Paradise' },
    { src: '/images/gallery/migration.jpg', alt: 'Migration', caption: 'Great Migration' },
    { src: '/images/gallery/mount-kenya.jpg', alt: 'Mountain', caption: 'Mount Kenya Trek' },
    { src: '/images/gallery/lc.jpg', alt: 'Lake', caption: 'Serene Lake Views' },
    { src: '/images/gallery/savannah.jpg', alt: 'Savannah', caption: 'Golden Savannah Landscape' },
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = React.useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const nextImage = React.useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const prevImage = React.useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages.length]);

  const handleKeyDown = React.useCallback((e) => {
    if (!lightboxOpen) return;
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeLightbox();
  }, [lightboxOpen, nextImage, prevImage, closeLightbox]);

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-safari-olive mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-sunset-orange mx-auto mb-4"></div>
          <p className="text-dark-leather max-w-2xl mx-auto">
            Explore the breathtaking beauty and incredible wildlife experiences that await you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} onClick={() => openLightbox(index)} className="cursor-pointer">
              <GalleryImage
                src={image.src}
                alt={image.alt}
                caption={image.caption}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-sunset-orange text-4xl font-bold z-10"
          >
            &times;
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-sunset-orange text-5xl font-bold z-10"
          >
            &#8249;
          </button>

          {/* Image */}
          <div className="max-w-6xl max-h-full flex flex-col items-center">
            <img
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              className="max-w-full max-h-[85vh] object-contain"
            />
            <p className="text-white text-xl mt-4 font-semibold">
              {galleryImages[currentImageIndex].caption}
            </p>
            <p className="text-warm-khaki text-sm mt-1">
              {currentImageIndex + 1} / {galleryImages.length}
            </p>
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-sunset-orange text-5xl font-bold z-10"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
