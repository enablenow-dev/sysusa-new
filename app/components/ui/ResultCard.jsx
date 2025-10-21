import Image from "next/image";
import React from "react";

export default function ResultCard({ quote, author, organization, logo, impact }) {
  return (
    <div className="bg-white rounded-2xl p-18 shadow-sm flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Quote Section */}
      <div>
        <p className="text-lg text-gray-900 font-[700] font-syne leading-relaxed mb-4">
          “{quote}”
        </p>
        <p className="text-sm text-gray-700">
          {author}, <span className="font-semibold">{organization}</span>
        </p>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-200" />

      {/* Logo + Impact */}
      <div className="flex items-center gap-4">
        <div className="w-20 h-16 relative flex-shrink-0">
          <Image src={logo} alt={`${organization} logo`} fill className="object-contain" />
        </div>
        <p className="text-gray-800 text-sm font-inter font[400] font-1remleading-snug">
          {impact}
        </p>
      </div>
    </div>
  );
}
