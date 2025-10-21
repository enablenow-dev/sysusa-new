// components/Capability.jsx

import React from 'react';
import Image from 'next/image';
import Button from './Button';

/**
 * Renders a single capability card with an icon, title, description, and link.
 */
const Capability = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center p-6 sm:p-8 bg-white rounded-xl transition duration-300 hover:shadow-lg">
      
      {/* Icon and Title Container */}
    <div className="flex items-center w-full sm:w-auto sm:min-w-[140px] mb-4 sm:mb-0">
  {/* Icon container */}
  <div className="text-purple-600 w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 mr-5 flex items-center justify-center">
    {typeof icon === 'string' ? (
      <Image
        src={icon}
        alt={`${title} icon`}
        width={88}
        height={68}
        className="object-contain"
      />
    ) : (
      <div className="scale-125">{icon}</div>
    )}
  </div>

  {/* Title */}
  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 sm:hidden">
    {title}
  </h3>
</div>

      
      {/* Description */}
      <div className="flex-grow">
        {/* Title for larger screens */}
       
        <p className="text-gray-600 text-base px-35  font-inter ">
          {description}
        </p>
      </div>

      {/* Explore More Button */}
      <div className="mt-4 sm:mt-0 sm:ml-8 flex-shrink-0">
        <Button
        bgColor='white'
        border='2px border-2 border-yellow-500'
        textColor='black'
        >
            Explore More
        </Button>
      </div>
    </div>
  );
};

export default Capability;