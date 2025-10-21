import React from 'react';
import Header from '../layout/Header';
import Button from '../ui/Button';
import Image from 'next/image';

function Hero() {
  return (
    <div className="relative">
      <Header />
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background image (optimized) */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/bgbanner.png"
            alt="Hero background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>
      

        {/* Main Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="container mx-auto px-8 lg:px-12 pt-40 pb-20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16">

            {/* Left: Text and Logos */}
            <div className="max-w-3xl">
              <h1
                className="text-white mb-6 font-[500] leading-[60px] text-[48px] tracking-[0] font-syne"
              >
                Transform your business with ServiceNow and cybersecurity expertise
              </h1>

              <p className="text-white/90 text-[16px] leading-[26px] font-[400] tracking-[0] font-inter">
                Transform your business with ServiceNow and Cybersecurity solutions.
                We drive efficiency, security, and innovation.
              </p>
              <div  >

              </div>
              <Button className="mt-8">
                Get In Touch
              </Button>

              {/* Logos */}
              <div className="flex items-center space-x-8 mt-24 opacity-90">
                <Image src="/sba.svg" alt="SBA" width={80} height={40} />
                <Image src="/dbe.svg" alt="DBE" width={80} height={40} />
                <Image src="/iso.svg" alt="ISO" width={80} height={40} />
                <Image src="/cmmi.svg" alt="CMMI" width={80} height={40} />
              </div>
            </div>

         
         
        
            {/* Right: Stats Section */}
            <div className="relative flex items-center justify-center mt-10 lg:mt-0 min-w-[650px]">
              {/* Background Mask Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image src="/bgmask.svg" alt="" width={1200} height={800} className="w-full h-auto opacity-30" />
              </div>
              {/* Stats */}
              <div className="relative z-10 grid grid-cols-2 gap-4 mt-120">
                <div className="flex flex-col items-center">
                  <span className="text-white text-[4rem] font-[100] leading-[4rem]">
                    99%
                  </span>
                  <span className="text-white text-[1.2rem] font-[200] leading-[1rem] font-inter px-4 mt-2 mb-4 text-center ">
                    Clients satisfied and repeating
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-white text-[4rem] font-[100] leading-[4rem]">
                    150+
                  </span>
                  <span className="text-white text-[1.2rem] font-[200] leading-[1rem] font-inter px-4 mt-2 mb-4 text-center ">
                    Projects completed in 24 countries
                  </span>
                </div>
              </div>

             
            </div>
           

          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
