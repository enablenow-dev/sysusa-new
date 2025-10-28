'use client';
import React from 'react';
import Header from '../layout/Header';
import Button from '../ui/Button';
import Image from 'next/image';

function Hero() {
  return (
    <div className="relative">
      <Header />

      <section className="relative h-screen flex flex-col overflow-hidden">
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
          <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-20 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-6 sm:pb-10 md:pb-12 lg:pb-14 flex flex-col justify-between h-full">

            {/* === Text + CTA === */}
            <div className="max-w-4xl flex-shrink-0">
              <h1 className="text-white font-[500] font-[syne] leading-[1.15] sm:leading-[1.2] text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                Transform your business with ServiceNow and cybersecurity expertise
              </h1>

              <p className="text-white/90 text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] lg:text-[1.125rem] leading-[1.5] sm:leading-[1.6] font-[400] font-inter mb-5 sm:mb-6 md:mb-7 lg:mb-8 max-w-xl">
                Transform your business with ServiceNow and Cybersecurity solutions.
                We drive efficiency, security, and innovation.
              </p>

              <div>
                <Button>Get In Touch</Button>
              </div>
            </div>

            {/* === Logos + Stats Row (Bottom) === */}
            <div className="w-full mt-auto pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-8 sm:pb-6 md:pb-8 lg:pb-10 flex-shrink-0">
              {/* Mobile: Stacked Layout */}
              <div className="lg:hidden flex flex-col gap-6 sm:gap-8 pb-4">
                {/* Stats First on Mobile */}
                <div className="flex flex-row items-center justify-around gap-6 sm:gap-8 pb-2">
                  {/* Stat 1 */}
                  <div className="flex flex-col items-center">
                    <span className="font-inter text-white text-[2.5rem] sm:text-[3rem] font-[400] leading-[1] mb-1">
                      99%
                    </span>
                    <span className="text-white/70 text-[0.7rem] sm:text-[0.75rem] font-[300] font-inter uppercase tracking-wide text-center">
                      Clients satisfied<br />and repeating
                    </span>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex flex-col items-center">
                    <span className="font-inter text-white text-[2.5rem] sm:text-[3rem] font-[400] leading-[1] mb-1">
                      150+
                    </span>
                    <span className="text-white/70 text-[0.7rem] sm:text-[0.75rem] font-[300] font-inter uppercase tracking-wide text-center">
                      Projects completed<br />in 24 countries
                    </span>
                  </div>
                </div>

                {/* Logos Below on Mobile */}
                <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 pb-4 sm:pb-6">
                  <Image 
                    src="/sba.svg" 
                    alt="SBA" 
                    width={90} 
                    height={45} 
                    className="w-[60px] sm:w-[70px] h-auto" 
                  />
                  <Image 
                    src="/dbe.svg" 
                    alt="DBE" 
                    width={90} 
                    height={45} 
                    className="w-[60px] sm:w-[70px] h-auto" 
                  />
                  <Image 
                    src="/iso.svg" 
                    alt="ISO" 
                    width={90} 
                    height={45} 
                    className="w-[60px] sm:w-[70px] h-auto" 
                  />
                  <Image 
                    src="/cmmi.svg" 
                    alt="CMMI" 
                    width={90} 
                    height={45} 
                    className="w-[60px] sm:w-[70px] h-auto" 
                  />
                </div>
              </div>

              {/* Desktop: Original Layout */}
              <div className="hidden lg:flex flex-row items-end justify-between gap-8 pb-6">
                
                {/* === Logos Left === */}
                <div className="flex flex-nowrap items-center justify-start gap-8 xl:gap-10 pb-2">
                  <Image 
                    src="/sba.svg" 
                    alt="SBA" 
                    width={90} 
                    height={45} 
                    className="w-[75px] xl:w-[85px] h-auto" 
                  />
                  <Image 
                    src="/dbe.svg" 
                    alt="DBE" 
                    width={90} 
                    height={45} 
                    className="w-[75px] xl:w-[85px] h-auto" 
                  />
                  <Image 
                    src="/iso.svg" 
                    alt="ISO" 
                    width={90} 
                    height={45} 
                    className="w-[75px] xl:w-[85px] h-auto" 
                  />
                  <Image 
                    src="/cmmi.svg" 
                    alt="CMMI" 
                    width={90} 
                    height={45} 
                    className="w-[75px] xl:w-[85px] h-auto" 
                  />
                </div>

                {/* === Stats Right === */}
                <div className="flex flex-row items-end justify-end gap-16 xl:gap-20 pb-2">
                  {/* Stat 1 */}
                  <div className="flex flex-col items-start">
                    <span className="font-inter text-white text-[3.5rem] xl:text-[4rem] font-[400] leading-[1] mb-2">
                      99%
                    </span>
                    <span className="text-white/70 text-[0.85rem] xl:text-[0.9rem] font-[300] font-inter uppercase tracking-wider text-left">
                      Clients satisfied and<br />repeating
                    </span>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex flex-col items-start">
                    <span className="font-inter text-white text-[3.5rem] xl:text-[4rem] font-[400] leading-[1] mb-2">
                      150+
                    </span>
                    <span className="text-white/70 text-[0.85rem] xl:text-[0.9rem] font-[300] font-inter uppercase tracking-wider text-left">
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