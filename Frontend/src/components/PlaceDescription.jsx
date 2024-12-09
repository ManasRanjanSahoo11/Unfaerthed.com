import React from 'react';

export default function PlaceDescription({ title, description }) {
    return (
        <div className="w-full p-4 text-center bg-tranparent sm:p-8">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white uppercase">
                {title}
            </h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400 pt-5">
                {description}
            </p>
        </div>
    );
}
