import React from 'react';

const ImgCard = ({ image, title, description, link }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={link}>
                <img className="rounded-t-lg inside-img" src={image} alt={title} />
            </a>
            <div className="p-5">
                <a href={link}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight line-clamp-1 text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 line-clamp-2 dark:text-gray-400">
                    {description}
                </p>
                <a
                    href={link}
                    className="inline-flex items-center text-white px-5 text-sm text-center dark:bg-[#FF9119] font-medium py-2.5 rounded-full transition duration-300 ease-in-out bg-[#FF9119] hover:bg-transparent hover:border-2 hover:border-[#FF9119] border-2 border-[#FF9119] hover:bg-[#FF9119] hover:text-white focus:ring-2 focus:outline-none focus:ring-[#FF9119]/50"
                >
                    Read more
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
        </div>
    );
};

export default ImgCard;
