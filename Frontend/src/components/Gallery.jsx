import React from 'react';
import ImgGalleryGrid from './ImgGalleryGrid';

const Gallery = ({ galleryData }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
      {galleryData.map((images, index) => (
        <ImgGalleryGrid key={index} images={images} />
      ))}
    </div>
  );
};

export default Gallery;
