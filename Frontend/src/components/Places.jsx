import React from 'react';

const Places = ({ image, title, description, link }) => {
  return (
    <a
      href={link}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      style={{ height: '13vw', width: '29vw' }} // Specify fixed height and width
    >
      <img
        className="object-cover h-full w-1/3 rounded-t-lg md:rounded-none md:rounded-s-lg"
        src={image}
        alt={title}
      />
      <div className="flex gap-1 flex-col justify-between p-4 leading-normal w-2/3">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </a>
  );
};

export default Places;
