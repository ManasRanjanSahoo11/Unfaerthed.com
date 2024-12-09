import React from 'react';

const Card = ({ title, description, linkText, linkUrl }) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-auto">
            <a href={linkUrl}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                {description}
            </p>
            <a
                href={linkUrl}
                className="inline-flex items-center text-white px-5 text-sm text-center dark:bg-[#FF9119] font-medium py-2.5 rounded-full transition duration-300 ease-in-out bg-[#FF9119] hover:bg-transparent hover:border-2 hover:border-[#FF9119] border-2 border-[#FF9119] hover:bg-[#FF9119] hover:text-white focus:ring-2 focus:outline-none focus:ring-[#FF9119]/50"
            >
                {linkText}{" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                </svg>
            </a>
        </div>
    );
};

export default Card;
