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
        <>
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
        </>
      ),
    },
    what: {
      title: 'We innovate, secure, and transform businesses worldwide',
      text: (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            facilisis magna et dolor tincidunt, at tincidunt ex vestibulum.
            Mauris consequat, elit sed ultrices finibus, velit mi aliquam eros,
            nec dignissim orci sapien vel erat.
          </p>
          <p>
            Nunc tristique lectus nec ex tincidunt, eget viverra eros faucibus.
            Fusce imperdiet justo a nulla feugiat, vel malesuada lorem cursus.
          </p>
        </>
      ),
    },
    challenge: {
      title: 'We tackle complex challenges with strategic solutions',
      text: (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            suscipit, ex sit amet fringilla facilisis, odio turpis gravida
            neque, id rhoncus mi eros ut tortor.
          </p>
          <p>
            Donec volutpat, quam in efficitur tincidunt, augue libero bibendum
            ipsum, ac sollicitudin risus justo ut ante. Integer in semper lacus.
          </p>
        </>
      ),
    },
  };

  return (
    <div className="relative min-h-[90vh] w-full bg-[#F0F0F2] flex items-center justify-center px-4">
      {/* Inner Box - Overlapping Card */}
      <div className="relative max-w-8xl w-[90%] mx-auto bg-gray-100 p-16 rounded-3xl shadow-xl -mt-36 lg:-mt-60">
        
        {/* Navigation Tabs */}
        <div className="flex gap-8 mb-16 border-b border-gray-200">
          {tabs.map((tab) => (
            <div key={tab.id} className="flex flex-col items-start">
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`font-semibold text-lg mb-2 transition-colors duration-200 ${
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              {content[activeTab].title}
            </h1>

            <div className="space-y-4 text-gray-700 text-lg leading-relaxed font-inter">
              {content[activeTab].text}
            </div>

            <Button
              bgColor="white"
              border="border-2 border-yellow-500"
              textColor="text-black"
            >
              Discover Our Approach
            </Button>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/aboutimage.png" alt="About Section" width={800} height={600} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
