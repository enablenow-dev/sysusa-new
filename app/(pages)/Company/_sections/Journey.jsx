'use client';

import { useState, useEffect, useRef } from 'react';

export default function CompanyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  const milestones = [
    {
      year: '2000',
      title: 'Founded by Sumara & Muneer Baig',
      description: 'SYSUSA began with a passion for solving mission-critical challenges through insight and innovation.'
    },
    {
      year: '2010',
      title: 'Build trust with public & private clients',
      description: 'Established ourselves as a reliable transformation partner across sectors.'
    },
    {
      year: '2015',
      title: 'Expanded expertise in ServiceNow',
      description: 'Deepened our technical capabilities and service offerings.'
    },
    {
      year: '2020',
      title: 'Achieved Elite Partner Status',
      description: 'Recognized for excellence in delivering transformational solutions.'
    },
    {
      year: '2025',
      title: 'Global Expansion & Innovation',
      description: 'Expanded our reach internationally while pioneering new technologies.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const timelineTop = timelineRef.current.offsetTop;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        
        const itemTop = item.offsetTop + timelineTop;
        const itemMiddle = itemTop + item.offsetHeight / 2;
        const viewportMiddle = scrollPosition + windowHeight / 2;

        if (Math.abs(viewportMiddle - itemMiddle) < windowHeight / 3) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Static Content */}
          <div className="lg:sticky lg:top-20 lg:self-start">
            <h1 className="text-5xl font-Syne font-[500] text-gray-900 mb-8">Our Journey</h1>
            <div className="text-lg text-gray-600 leading-relaxed space-y-4 font-inter-[400]">
              <p className='font-inter font-[400]'>Founded in <span className='font-inter font-[700]'>2000 by Sumara and Muneer Baig</span>, SYSUSA began with a passion for solving mission-critical challenges through insight and innovation. From our Virginia headquarters, we’ve grown into a trusted transformation partner for both public and private sectors.

</p>
            </div>
          </div>

          {/* Right Side - Scrolling Timeline */}
          <div ref={timelineRef} className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300" />
            
            <div className="space-y-24">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  ref={el => itemRefs.current[index] = el}
                  className="relative pl-12 transition-all duration-500"
                >
                  {/* Timeline Dot */}
                  <div 
                    className={`absolute left-0 top-0 w-4 h-4 rounded-full -ml-2 transition-all duration-500 ${
                      activeIndex === index 
                        ? 'bg-blue-600 scale-150 ring-4 ring-blue-200' 
                        : 'bg-gray-400'
                    }`}
                  />
                  
                  {/* Content */}
                  <div 
                    className={`transition-all duration-500 ${
                      activeIndex === index 
                        ? 'opacity-100 transform translate-y-0' 
                        : 'opacity-40 transform translate-y-4'
                    }`}
                  >
                    <div className="text-3xl font-inter font-[600] text-gray-900 mb-2">
                      {milestone.year}
                    </div>
                    <div className="font-inter font-[600]  text-gray-800 mb-3">
                      {milestone.title}
                    </div>
                    <div className="font-inter font-[400] text-gray-600">
                      {milestone.description}
                    </div>
                   
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}