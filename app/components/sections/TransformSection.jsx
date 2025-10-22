import Button from "../ui/Button";

// components/GridBackgroundSection.js
export default function GridBackgroundSection() {
  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-16"
      style={{
        minHeight: '33vh',
        backgroundColor: '#7859d4',
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      {/* Left Side - Heading */}
      <div className="font-syne text-center lg:text-left mb-8 lg:mb-0 lg:mr-10 ">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-4 mr-40">
          Ready to transform your business with SYSUSA?
        </h1>
      </div>

      {/* Right Side - Paragraph and Button */}
      <div className="font-inter text-center lg:text-left max-w-md">
        <p className="text-white text-base sm:text-lg leading-relaxed mb-6">
          Our experts are here to guide you every step of the way, ensuring you reduce costs, 
          increase performance, and achieve a higher ROI.
        </p>
       <Button>
        Get in Touch
       </Button>
       <div>

       </div>
      </div>
    </section>
  );
}
