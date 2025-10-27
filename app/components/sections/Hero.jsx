'use client';
import React from 'react';
import Header from '../layout/Header';
import Button from '../ui/Button';
import Image from 'next/image';

function Hero() {
  return (
    <div className="relative">
      <Header />

      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* === Background Image === */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/bgbanner.png"
            alt="Hero background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>

        {/* === Main Content === */}
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-16 pt-32 sm:pt-36 md:pt-40 pb-16 flex flex-col justify-between h-full">

            {/* === Text + CTA === */}
            <div className="max-w-4xl mb-auto">
              <h1 className="text-white font-[500] font-[syne] leading-[1.2] text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] mb-6">
                Transform your business<br className="hidden sm:block" /> with ServiceNow and<br className="hidden sm:block" /> cybersecurity expertise
              </h1>

              <p className="text-white/90 text-[1rem] sm:text-[1.125rem] leading-[1.6] font-[400] font-inter mb-8 max-w-xl">
                Transform your business with ServiceNow and Cybersecurity solutions.
                We drive efficiency, security, and innovation.
              </p>

              <div>
                <Button>Get In Touch</Button>
              </div>
            </div>

            {/* === Logos + Stats Row (Bottom) === */}
            <div className="w-full mt-auto pt-16">
              <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-8">
                
                {/* === Logos Left === */}
                <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-start gap-8 lg:gap-10">
                  <Image 
                    src="/sba.svg" 
                    alt="SBA" 
                    width={90} 
                    height={45} 
                    className="w-[70px] sm:w-[80px] lg:w-[90px] h-auto" 
                  />
                  <Image 
                    src="/dbe.svg" 
                    alt="DBE" 
                    width={90} 
                    height={45} 
                    className="w-[70px] sm:w-[80px] lg:w-[90px] h-auto" 
                  />
                  <Image 
                    src="/iso.svg" 
                    alt="ISO" 
                    width={90} 
                    height={45} 
                    className="w-[70px] sm:w-[80px] lg:w-[90px] h-auto" 
                  />
                  <Image 
                    src="/cmmi.svg" 
                    alt="CMMI" 
                    width={90} 
                    height={45} 
                    className="w-[70px] sm:w-[80px] lg:w-[90px] h-auto" 
                  />
                </div>

                {/* === Stats Right === */}
                <div className="flex flex-row items-end justify-center lg:justify-end gap-12 sm:gap-16 lg:gap-20">
                  {/* Stat 1 */}
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="font-inter text-white text-[3rem] sm:text-[3.5rem] lg:text-[4.5rem] font-[400] leading-[1] mb-2">
                      99%
                    </span>
                    <span className="text-white/70 text-[0.8rem] sm:text-[0.85rem] lg:text-[0.9rem] font-[300] font-inter uppercase tracking-wider text-center lg:text-left">
                      Clients satisfied and<br />repeating
                    </span>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="font-inter text-white text-[3rem] sm:text-[3.5rem] lg:text-[4.5rem] font-[400] leading-[1] mb-2">
                      150+
                    </span>
                    <span className="text-white/70 text-[0.8rem] sm:text-[0.85rem] lg:text-[0.9rem] font-[300] font-inter uppercase tracking-wider text-center lg:text-left">
                      Projects completed in<br />24 countries
                    </span>
                  </div>
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