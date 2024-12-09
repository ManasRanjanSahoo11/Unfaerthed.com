import React from "react";

const HotelBooking__CheckAvailabilty = () => {
  return (
    <div className="p-10 shadow-lg rounded-md max-w-6xl mx-auto mb-96 -mt-28 relative z-10 bg-neutral-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Check In Date */}
        <div>
          <label className=" text-sm font-medium text-gray-700 flex items-center gap-2">
            <i className="ri-calendar-line"></i> Check In Date
          </label>
          <input
            type="date"
            className="mt-1 py-3 px-2 w-full border border-gray-300 rounded-sm shadow-sm focus:ring-brown-500 focus:border-brown-500 sm:text-sm"
          />
        </div>

        {/* Check Out Date */}
        <div>
          <label className=" text-sm font-medium text-gray-700 flex items-center gap-2">
            <i className="ri-calendar-line"></i> Check Out Date
          </label>
          <input
            type="date"
            className="mt-1 py-3 px-2 w-full border border-gray-300 rounded-sm shadow-sm focus:ring-brown-500 focus:border-brown-500 sm:text-sm"
          />
        </div>

        {/* Adults */}
        <div>
          <label className=" text-sm font-medium text-gray-700 flex items-center gap-2">
            <i className="ri-user-line"></i> Adults
          </label>
          <select className="mt-1 py-3 px-2 w-full border border-gray-300 rounded-sm shadow-sm focus:ring-brown-500 focus:border-brown-500 sm:text-sm">
            <option>Adults</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>

        {/* Child */}
        <div>
          <label className=" text-sm font-medium text-gray-700 flex items-center gap-2">
            <i className="ri-user-line"></i> Child
          </label>
          <select className="mt-1 py-3 px-2 w-full border border-gray-300 rounded-sm shadow-sm focus:ring-brown-500 focus:border-brown-500 sm:text-sm">
            <option>Child</option>
            <option>0</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>

        {/* Room */}
        <div>
          <label className=" text-sm font-medium text-gray-700 flex items-center gap-2">
            <i className="ri-hotel-line"></i> Room
          </label>
          <select className="mt-1 py-3 px-2 w-full border border-gray-300 rounded-sm shadow-sm focus:ring-brown-500 focus:border-brown-500 sm:text-sm">
            <option>Room</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>

        {/* Check Availability Button */}
        <div className="flex items-end">
          <button className="w-full bg-red-500 text-white py-3 px-4 rounded-sm hover:bg-brown-600 transition duration-200 shadow">
            CHECK AVAILABILITY
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelBooking__CheckAvailabilty;
