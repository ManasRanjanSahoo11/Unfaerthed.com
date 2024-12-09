import React, { useState } from "react";
import HotelCard from "./HotelCard";

const TabNavigation = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex items-center justify-center flex-col">
      {/* Tabs Navigation */}
      <div className="mb-4 border-b w-[90%] border-gray-200 flex items-center justify-center">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
          {tabs.map((tab, index) => (
            <li key={index} className="mr-2" role="presentation">
              <button
                onClick={() => setActiveTab(index)}
                className={`inline-block p-4 rounded-t-lg ${
                  activeTab === index
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-500 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
                }`}
                type="button"
                role="tab"
                aria-selected={activeTab === index}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Tabs Content */}
      <div className="w-full h-[80vh]  overflow-auto px-16">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${
              activeTab === index ? "block" : "hidden"
            }`}
            role="tabpanel"
          >
            {tab.hotels.map((hotel, hotelIndex) => (
              <div key={hotelIndex} className="mb-4">
                <HotelCard {...hotel} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
