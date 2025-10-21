import React from "react";
import ResultCard from "@/app/components/ui/ResultCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ResultsSection() {
  const results = [
    {
      quote:
        "SYSUSA’s IT solutions delivered immediate results, reducing our operational costs by 25%. Highly recommended.",
      author: "IT Director, Bureau of Labor Statistics",
      organization: "(BLS)",
      logo: "/bls.svg",
      impact: "Reduced IT operational costs by 35% through ServiceNow optimization.",
    },
    {
      quote:
        "SYSUSA’s solutions transformed how we manage IT. The impact was immediate, and the results speak for themselves.",
      author: "IT Director, Leading Financial Institution",
      organization: "(USDA)",
      logo: "/usda.svg",
      impact: "Reduced IT operational costs by 25% through ServiceNow optimization.",
    },
    //  {
    //   quote:
    //     "SYSUSA’s IT solutions delivered immediate results, reducing our operational costs by 25%. Highly recommended.",
    //   author: "IT Director, Bureau of Labor Statistics",
    //   organization: "BLS",
    //   logo: "/bls.svg",
    //   impact: "Reduced IT operational costs by 35% through ServiceNow optimization.",
    // },
    //  {
    //   quote:
    //     "SYSUSA’s solutions transformed how we manage IT. The impact was immediate, and the results speak for themselves.",
    //   author: "IT Director, Leading Financial Institution",
    //   organization: "USDA",
    //   logo: "/usda.svg",
    //   impact: "Reduced IT operational costs by 25% through ServiceNow optimization.",
    // },
  ];

  return (
    <section className="relative text-white py-20 px-6 lg:px-16">
      <div className="absolute inset-0 -z-10">
                <Image
                  src="/bgbanner.png"
                  alt="Hero background"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  priority
                />
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

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {results.map((item, index) => (
            <ResultCard key={index} {...item} />
          ))}
        </div>

        {/* Navigation Arrows (if needed for slider) */}
        <div className="flex justify-center mt-10 gap-4">
          <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
