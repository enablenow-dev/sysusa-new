// components/Capabilities.jsx

import React from 'react';
import Capability from '@/app/components/ui/Capability';

const Capabilities = () => {
    
  // Placeholder for your custom icons (you will define and import these)
  const ServiceNowIcon = <div className="bg-purple-200 w-full h-full rounded-full flex items-center justify-center text-xs font-bold">Icon</div>;
  const CybersecurityIcon = <div className="bg-purple-200 w-full h-full rounded-full flex items-center justify-center text-xs font-bold">Icon</div>;


  return (
    // Outer section matching the light background color
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12 lg:mb-20">
          <div className="lg:w-1/2">
            <p className="uppercase text-sm tracking-widest text-purple-600 font-medium mb-3">
              Our Capabilities
            </p>
            <h1 className="text-4xl sm:text-5xl font-[500] font-syne text-gray-900 ">
              Fueled by our passion for <br className="hidden sm:inline" />
              innovation, security, and agility
            </h1>
          </div>
          <div className="lg:w-5/12 mt-6 lg:mt-5 pt-5">
            <p className="text-lg text-gray-600 font-inter">
              Our game-changing solutions enable and sustain
              organizations&apos; digital transformation and maximize their
              business benefits.
            </p>
          </div>
        </div>

        {/* Capabilities List - The two boxes */}
        <div className="space-y-6">
          
          <Capability
            icon={'/settings.svg'}
            title="ServiceNow"
            description="SYSUSA excels in building and scaling platforms, fixing stalled projects, and driving value with ServiceNow, automating processes and integrating systems for operational excellence."
          />

          {/* This empty div provides the visual spacing/separator similar to the screenshot */}
          <div className="h-1 bg-transparent"></div> 

          <Capability
            icon={'/settings2.svg'}
            title="Cybersecurity"
            description="SYSUSA leads in cybersecurity, tailoring strategies to reduce risk and empower your enterprise with the expertise to defend against evolving threats."
          />
        </div>
      </div>
    </section>
  );
};

export default Capabilities;