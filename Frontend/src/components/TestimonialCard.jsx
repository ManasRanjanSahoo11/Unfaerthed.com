import React from 'react';

const TestimonialCard = ({ title, quote, name, role, imageSrc }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="my-4">{quote}</p>
      </div>
      <div className="flex items-center justify-center">
        <img className="rounded-full w-9 h-9" src={imageSrc} alt="profile picture" />
        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
          <div>{name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{role}</div>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = ({ testimonials }) => {
  return (
    <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          title={testimonial.title}
          quote={testimonial.quote}
          name={testimonial.name}
          role={testimonial.role}
          imageSrc={testimonial.imageSrc}
        />
      ))}
    </div>
  );
};

export default TestimonialSection;
