import React from 'react';
import GalleryImage from '../components/GalleryImage';

const Gallery = () => {
  // Placeholder images - replace with actual images from /images/gallery/
  const galleryImages = [
    { src: '/images/gallery/safari-1.jpg', alt: 'Safari Wildlife', caption: 'Majestic Lions in Maasai Mara' },
    { src: '/images/gallery/safari-2.jpg', alt: 'Elephants', caption: 'Elephant Herds in Amboseli' },
    { src: '/images/gallery/safari-3.jpg', alt: 'Landscape', caption: 'African Sunset' },
    { src: '/images/gallery/safari-4.jpg', alt: 'Giraffe', caption: 'Giraffes at Dawn' },
    { src: '/images/gallery/safari-5.jpg', alt: 'Beach', caption: 'Coastal Paradise' },
    { src: '/images/gallery/safari-6.jpg', alt: 'Mountain', caption: 'Mount Kenya Trek' },
    { src: '/images/gallery/safari-7.jpg', alt: 'Zebras', caption: 'Zebra Migration' },
    { src: '/images/gallery/safari-8.jpg', alt: 'Cheetah', caption: 'Cheetah on the Hunt' },
    { src: '/images/gallery/safari-9.jpg', alt: 'Hot Air Balloon', caption: 'Balloon Safari Experience' },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the breathtaking beauty and incredible wildlife experiences that await you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <GalleryImage
              key={index}
              src={image.src}
              alt={image.alt}
              caption={image.caption}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 italic">
            Note: Add your safari images to the <code className="bg-gray-200 px-2 py-1 rounded">/public/images/gallery/</code> folder
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
