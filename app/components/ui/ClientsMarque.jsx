"use client";

export default function MarqueeLogo() {
  const logos = [
    { name: "Symbility", url: "/logos/symbility.svg" },
    { name: "onr", url: "/logos/onr.svg" },
    { name: "BLS", url: "/bls.svg" },
    { name: "USDA", url: "/usda.svg" },
    { name: "Pepco", url: "/logos/pepco.svg" },
    { name: "Dept", url: "/logos/dept.svg" },
  ];

  const logos2 = [
    { name: "WWT", url: "/logos/wwt.svg" },
    { name: "Microsoft", url: "/logos/microsoftlogo.svg" },
    { name: "IRS", url: "/logos/irs.svg" },
    { name: "Energizer", url: "/logos/energizer.svg" },
    { name: "Abbott", url: "/logos/abott.svg" },
    { name: "Freddie Mac", url: "/logos/freddiemac.svg" },
    {name : "ironmountain", url:"/logos/ironmountain.svg"}
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <p className="text-indigo-600 text-center font-semibold tracking-wide uppercase text-sm mb-4">
          Trust is earned through reliability and innovation.
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 leading-tight">
          Top organizations trust SYSUSA for sustainable infrastructure solutions.
        </h2>
      </div>

      {/* Row 1 - Right to Left */}
      <div className="relative mb-8 overflow-hidden">
        <div className="marquee marquee-rtl">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`r1-${index}`}
              className="mx-8 flex-shrink-0 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <img src={logo.url} alt={logo.name} className="h-16 w-40 object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Left to Right */}
      <div className="relative overflow-hidden">
        <div className="marquee marquee-ltr">
          {[...logos2, ...logos2].map((logo, index) => (
            <div
              key={`r2-${index}`}
              className="mx-8 flex-shrink-0 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <img src={logo.url} alt={logo.name} className="h-16 w-40 object-contain" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee {
          display: flex;
          width: max-content;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        /* Right to left (default) */
        .marquee-rtl {
          animation-name: scroll-rtl;
          animation-duration: 40s;
        }

        /* Left to right */
        .marquee-ltr {
          animation-name: scroll-ltr;
          animation-duration: 45s;
        }

        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
