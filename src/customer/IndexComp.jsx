import React from 'react';

const images = [
  {
    id: 1,
    src: 'https://rukminim2.flixcart.com/fk-p-flap/1600/350/image/8f0bb7dd1533286d.jpg?q=20',
    alt: 'Main Banner',
  },
  {
    id: 2,
    src: 'https://rukminim1.flixcart.com/fk-p-flap/520/280/image/80a51f6c755e25a9.jpg?q=20',
    alt: 'Category 1',
  },
  {
    id: 3,
    src: 'https://rukminim2.flixcart.com/fk-p-flap/520/280/image/3a35d0c0bb91d02a.jpg?q=20',
    alt: 'Category 2',
  },
  {
    id: 4,
    src: 'https://rukminim2.flixcart.com/fk-p-flap/520/280/image/aa3c181b834bbe2a.png?q=20',
    alt: 'Category 3',
  },
];

const IndexComp = () => {
  return (
    <div className="p-4 space-y-4">
      {/* Main Banner */}
      <div className="w-full">
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Category Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.slice(1).map((image) => (
          <div key={image.id} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto hover:scale-105 transition-transform duration-300 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexComp;
