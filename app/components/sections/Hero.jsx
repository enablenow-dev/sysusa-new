"use client";
import React from "react";
import Header from "../layout/Header";
import Button from "../ui/Button";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative">
      <Header />
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/bgbanner.png"
            alt="Hero background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-32 sm:pt-40 pb-16 sm:pb-20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-16">

            {/* Left: Text and Logos */}
            <div className="max-w-3xl text-center lg:text-left">
              <h1 className="text-white mb-6 font-[500] leading-tight text-[2rem] sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] font-syne">
                Transform your business with ServiceNow and cybersecurity expertise
              </h1>

              <p className="text-white/90 text-[15px] sm:text-[16px] leading-[26px] font-[400] font-inter max-w-2xl mx-auto lg:mx-0">
                Transform your business with ServiceNow and Cybersecurity solutions.
                We drive efficiency, security, and innovation.
              </p>

              <div className="flex justify-center lg:justify-start">
                <Button className="mt-8">Get In Touch</Button>
              </div>

              {/* Logos */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 sm:gap-8 mt-16 sm:mt-20 opacity-90">
                <Image src="/sba.svg" alt="SBA" width={70} height={35} className="h-auto w-[60px] sm:w-[70px]" />
                <Image src="/dbe.svg" alt="DBE" width={70} height={35} className="h-auto w-[60px] sm:w-[70px]" />
                <Image src="/iso.svg" alt="ISO" width={70} height={35} className="h-auto w-[60px] sm:w-[70px]" />
                <Image src="/cmmi.svg" alt="CMMI" width={70} height={35} className="h-auto w-[60px] sm:w-[70px]" />
              </div>
            </div>

            {/* Right: Stats Section */}
            <div className="relative flex items-center justify-center w-full lg:w-[600px] mt-12 lg:mt-0">
              {/* Background Mask Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/bgmask.svg"
                  alt=""
                  width={1200}
                  height={800}
                  className="w-full h-auto opacity-30"
                />
              </div>

              {/* Stats */}
              <div className="relative z-10 grid grid-cols-2 gap-8 sm:gap-10 md:gap-12 w-full sm:w-[80%]">
                <div className="flex flex-col items-center">
                  <span className="text-white text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-[100] leading-[3rem] sm:leading-[3.5rem] md:leading-[4rem]">
                    99%
                  </span>
                  <span className="text-white text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] font-[200] font-inter mt-2 text-center px-2 sm:px-4">
                    Clients satisfied and repeating
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-white text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-[100] leading-[3rem] sm:leading-[3.5rem] md:leading-[4rem]">
                    150+
                  </span>
                  <span className="text-white text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] font-[200] font-inter mt-2 text-center px-2 sm:px-4">
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
