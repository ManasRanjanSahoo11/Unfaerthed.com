import React from "react";

const HotelCard = ({
  image,
  title,
  location,
  price,
  discount,
  rating,
  photos,
  amenities,
}) => {
  return (
    <div className="relative flex items-start p-3 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      {/* Left Section: Image */}
      <div className="relative w-72 h-44">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
        {/* Photos Overlay */}
        <div className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-md">
          +{photos} Photos
        </div>
      </div>

      {/* Right Section: Hotel Details */}
      <div className="w-full pl-3">
        {/* Title and Location */}
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-md text-red-500">{location}</p>

        {/* Amenities */}
        <div className="mt-1">
          <p className="text-sm font-medium text-gray-400">Amenities:</p>
          <div className="flex flex-wrap gap-1 mt-1 text-xs text-gray-600">
            {amenities.map((amenity, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 bg-gray-100 rounded-full"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* Price Details */}
        <div className="mt-2">
          <div className="flex items-baseline gap-2">
            <p className="text-xl font-bold text-white">₹{price}</p>
            <p className="text-sm line-through text-gray-500">₹{discount}</p>
          </div>
          <p className="text-sm text-gray-400">Per room/night</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-3 space-x-1">
          <button className="px-10 py-2 text-sm font-semibold bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
            View Details
          </button>
          <button className="px-10 py-2 text-sm font-semibold bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Book
          </button>
        </div>
      </div>

      {/* Rating Badge */}
      <span className="absolute top-3 right-3 text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-md">
        {rating}
      </span>
    </div>
  );
};

export default HotelCard;
