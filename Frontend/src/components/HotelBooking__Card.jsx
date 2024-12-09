import React from "react";

const HotelBooking__Card = ({ icon, title, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-gray-100 shadow-md rounded-lg">
      <div className="p-5">
        {/* Icon */}
        <div className="mb-4 h-16 w-16 text-gray-900">{icon}</div>

        {/* Title */}
        <h5 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h5>

        {/* Description */}
        <p className="text-gray-600 text-md">{description}</p>
      </div>

      <div className="border-t px-6 py-5">
        <a href={buttonLink} className="inline-block">
          <button className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600 transition">
            {buttonText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default HotelBooking__Card;
