import React from 'react';

const ImgGalleryGrid = ({ images }) => {
  return (
    <div className="grid gap-4">
      {images.map((image, index) => (
        <div key={index}>
          <img
            className="h-auto max-w-full rounded-lg"
            src={image.src}
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
};

export default ImgGalleryGrid;
