// components/Capability.jsx

import React from 'react';
import Image from 'next/image';
import Button from './Button';


const Capability = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center p-6 sm:p-8 bg-white rounded-xl transition duration-300 hover:shadow-lg">
      
     

  {/* Icon container */}
  <div className="text-purple-600 w-100 h-100 sm:w-16 sm:h-16 flex-shrink-0 mr-5 flex items-center justify-center">
    {typeof icon === 'string' ? (
      <Image
        src={icon}
        alt={`${title} icon`}
        width={200}
        height={200}
        className="object-contain"
      />
    ) : (
      <div className="scale-125">{icon}</div>
    )}
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