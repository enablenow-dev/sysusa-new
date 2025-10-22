'use client';
import React, { useState, useRef, useEffect } from "react";
import ResultCard from "@/app/components/ui/ResultCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ResultsSection() {
  const results = [
    {
      quote: "SYSUSA’s IT solutions delivered immediate results, reducing our operational costs by 25%. Highly recommended.",
      author: "IT Director, Bureau of Labor Statistics",
      organization: "(BLS)",
      logo: "/bls.svg",
      impact: "Reduced IT operational costs by 35% through ServiceNow optimization.",
    },
    {
      quote: "SYSUSA’s solutions transformed how we manage IT. The impact was immediate, and the results speak for themselves.",
      author: "IT Director, Leading Financial Institution",
      organization: "(USDA)",
      logo: "/usda.svg",
      impact: "Reduced IT operational costs by 25% through ServiceNow optimization.",
    },
     {
      quote: "SYSUSA’s IT solutions delivered immediate results, reducing our operational costs by 25%. Highly recommended.",
      author: "IT Director, Bureau of Labor Statistics",
      organization: "(BLS)",
      logo: "/bls.svg",
      impact: "Reduced IT operational costs by 35% through ServiceNow optimization.",
    },
     {
      quote: "SYSUSA’s solutions transformed how we manage IT. The impact was immediate, and the results speak for themselves.",
      author: "IT Director, Leading Financial Institution",
      organization: "(USDA)",
      logo: "/usda.svg",
      impact: "Reduced IT operational costs by 25% through ServiceNow optimization.",
    },
      {
      quote: "SYSUSA’s IT solutions delivered immediate results, reducing our operational costs by 25%. Highly recommended.",
      author: "IT Director, Bureau of Labor Statistics",
      organization: "(BLS)",
      logo: "/bls.svg",
      impact: "Reduced IT operational costs by 35% through ServiceNow optimization.",
    },
    {
      quote: "SYSUSA’s solutions transformed how we manage IT. The impact was immediate, and the results speak for themselves.",
      author: "IT Director, Leading Financial Institution",
      organization: "(USDA)",
      logo: "/usda.svg",
      impact: "Reduced IT operational costs by 25% through ServiceNow optimization.",
    },
     {
      quote: "SYSUSA’s IT solutions delivered immediate results, reducing our operational costs by 25%. Highly recommended.",
      author: "IT Director, Bureau of Labor Statistics",
      organization: "(BLS)",
      logo: "/bls.svg",
      impact: "Reduced IT operational costs by 35% through ServiceNow optimization.",
    },
     {
      quote: "SYSUSA’s solutions transformed how we manage IT. The impact was immediate, and the results speak for themselves.",
      author: "IT Director, Leading Financial Institution",
      organization: "(USDA)",
      logo: "/usda.svg",
      impact: "Reduced IT operational costs by 25% through ServiceNow optimization.",
    },
    
  ];

  const [index, setIndex] = useState(0);
  const visibleCount = 2; // number of cards visible
  const carouselRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Calculate card width dynamically
  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        const card = carouselRef.current.querySelector('.carousel-card');
        if (card) setCardWidth(card.offsetWidth + 32); // +gap-8 spacing
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handlePrev = () => setIndex(prev => Math.max(prev - 1, 0));
  const handleNext = () => setIndex(prev => Math.min(prev + 1, results.length - visibleCount));

  return (
    <section className="relative text-white py-20 px-6 lg:px-16">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bgbanner.png"
          alt="Hero background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div className="absolute inset-0 bg-black/60" /> {/* overlay */}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 md:mb-0">
            Delivering results that matter
          </h2>
          <p className="text-gray-200 max-w-md">
            See how we’ve helped clients achieve operational excellence, security, and growth.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out gap-8"
            style={{ transform: `translateX(-${index * cardWidth}px)` }}
          >
            {results.map((item, i) => (
              <div key={i} className="carousel-card flex-shrink-0 w-1/2">
                <ResultCard {...item} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows (Bottom-Right) */}
        <div className="flex justify-end mt-6 gap-4">
          <button
            onClick={handlePrev}
            disabled={index === 0}
            className={`w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition ${index === 0 ? 'opacity-40 cursor-not-allowed' : ''}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={index + visibleCount >= results.length}
            className={`w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition ${index + visibleCount >= results.length ? 'opacity-40 cursor-not-allowed' : ''}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
