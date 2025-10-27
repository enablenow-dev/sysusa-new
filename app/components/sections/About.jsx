'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

function About() {
  const [activeTab, setActiveTab] = useState('who');

  const tabs = [
    { id: 'who', label: 'WHO WE ARE?' },
    { id: 'what', label: 'WHAT DO WE DO?' },
    { id: 'challenge', label: 'THE CHALLENGE' },
  ];

  const content = {
    who: {
      title: 'We are certified experts delivering high-value technology solutions',
      text: (
        <p>
          SYSUSA was founded on{' '}
          <span className="font-semibold text-gray-900">
            trust, integrity, and honesty
          </span>{' '}
          to empower individuals, support communities, and promote human
          development. Driven by innovation, security, and agility, we deliver
          high-quality,{' '}
          <span className="font-semibold text-gray-900">
            best-value technology and security services
          </span>{' '}
          with a strong focus on customer satisfaction.
        </p>
      ),
    },
    what: {
      title: 'We innovate, secure, and transform businesses worldwide',
      text: (
        <p>
          SYSUSA was founded on{' '}
          <span className="font-semibold text-gray-900">
            trust, integrity, and honesty
          </span>{' '}
          to empower individuals, support communities, and promote human
          development. Driven by innovation, security, and agility, we deliver
          high-quality,{' '}
          <span className="font-semibold text-gray-900">
            best-value technology and security services
          </span>{' '}
          with a strong focus on customer satisfaction.
        </p>
      ),
    },
    challenge: {
      title: 'We tackle complex challenges with strategic solutions',
      text: (
        <p>
          SYSUSA was founded on{' '}
          <span className="font-semibold text-gray-900">
            trust, integrity, and honesty
          </span>{' '}
          to empower individuals, support communities, and promote human
          development. Driven by innovation, security, and agility, we deliver
          high-quality,{' '}
          <span className="font-semibold text-gray-900">
            best-value technology and security services
          </span>{' '}
          with a strong focus on customer satisfaction.
        </p>
      ),
    },
  };

  return (
    <section className="relative w-full bg-[#F0F0F2] flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-8 pb-12 md:pb-16 lg:pb-24">
      {/* Inner Box */}
      <div className="relative w-full max-w-7xl mx-auto bg-gray-100 p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl shadow-xl -mt-4 md:-mt-8 lg:-mt-12">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-6 sm:gap-8 mb-6 sm:mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <div key={tab.id} className="flex flex-col items-start">
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`font-semibold text-base sm:text-lg mb-2 transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'text-purple-600'
                    : 'text-gray-800 hover:text-purple-500'
                }`}
              >
                {tab.label}
              </button>
              <div
                className={`h-1 w-full rounded-full transition-all duration-300 ${
                  activeTab === tab.id ? 'bg-purple-600' : 'bg-transparent'
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Fixed title size at 2rem (32px) */}
            <h1 className="text-[2rem] font-bold text-gray-900 leading-snug">
              {content[activeTab].title}
            </h1>

            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed font-inter">
              {content[activeTab].text}
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button
                bgColor="white"
                border="border-2 border-yellow-500"
                textColor="text-black"
              >
                Discover Our Approach
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl max-w-[90%] sm:max-w-[80%] lg:max-w-full">
              <Image
                src="/aboutimage.png"
                alt="About Section"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
