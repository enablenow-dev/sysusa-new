import React from 'react';
import Image from 'next/image';

const CoreValues = () => {
  const values = [
    {
      icon: '/aboutimages/integrityicon.svg',
      title: 'Integrity',
      description: 'We conduct business with honesty and transparency, building trust through every interaction.',
    },
    {
      icon: '/aboutimages/exelicon.svg',
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, continuously improving our services.',
    },
    {
      icon: '/aboutimages/innovation.svg',
      title: 'Innovation',
      description: 'We embrace new ideas & technologies to deliver cutting-edge solutions for our clients.',
    },
    {
      icon: '/aboutimages/collabicon.svg',
      title: 'Collaboration',
      description: 'We work as one team with our clients, fostering partnerships that drive mutual success.',
    },
    {
      icon: '/aboutimages/communutyicon.svg',
      title: 'Community',
      description: 'We give back to the communities we serve, supporting causes that make a real difference.',
    },
    {
      icon: '/aboutimages/Diversityicon.svg',
      title: 'Diversity',
      description: 'We celebrate diverse perspectives and create an inclusive environment where everyone thrives.',
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wide mb-3">
            CORE VALUES
          </p>
          <h2 className="text-4xl font-[500] font-Syne leading-[1.15] text-gray-900 mb-4">
            What Drives Us Everyday
          </h2>
          <p className="text-gray-600 font-inter font-[400] text-lg max-w-2xl">
            Our values are the foundation of everything we do, guiding our decisions and shaping our culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">
 <Image 
                  src={value.icon} 
                  alt={`${value.title} icon`} 
                  width={40} 
                  height={40}
                //   className="brightness-0 invert"
                />

              </div>
               
              
              <h3 className="text-xl font-inter font-[500] text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 font-inter font-[400] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;