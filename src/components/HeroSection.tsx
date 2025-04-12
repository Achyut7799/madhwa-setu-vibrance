
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-[#f8f3eb] pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1F2C] leading-tight md:leading-none">
              MadhwaSetu —
              <br />
              <span className="text-[#1A1F2C]">Bridging Tradition</span>
              <br />
              <span className="text-[#1A1F2C]">and Technology</span>
            </h1>
            <p className="mt-6 text-lg text-[#1A1F2C]/80 max-w-2xl mx-auto md:mx-0">
              A digital platform for the Madhwa community, connecting ancient wisdom with modern accessibility.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/pravachans" className="bg-[#1A1F2C] text-white rounded-md px-6 py-3 hover:bg-[#1A1F2C]/90 transition-colors duration-300 font-medium">
                Explore Pravachans
              </Link>
              <Link to="/rituals-hub" className="bg-transparent border border-[#1A1F2C] text-[#1A1F2C] rounded-md px-6 py-3 hover:bg-[#1A1F2C]/10 transition-colors duration-300 font-medium">
                View Ritual Guides
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[url('/public/lovable-uploads/2412a8b1-71a2-44e3-bcf3-f5ff1dc4d072.png')] bg-contain bg-no-repeat bg-center opacity-15"></div>
              <div className="relative z-10 p-8 rounded-lg border border-[#1A1F2C]/10 bg-[#f8f3eb] h-[300px] flex flex-col items-center justify-center">
                <h2 className="text-3xl font-semibold text-[#1A1F2C] mb-4">MadhwaSetu</h2>
                <p className="text-[#1A1F2C]/80 text-center max-w-md">
                  Connecting the ancient wisdom of Madhwa philosophy with the modern digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
