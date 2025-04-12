
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-madhwa-purple/10 to-madhwa-blue/10 pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-madhwa-deep-purple leading-tight">
              The Digital
              <span className="text-madhwa-purple"> Madhwa </span>
              Experience
            </h1>
            <p className="mt-6 text-lg text-madhwa-deep-purple/80 max-w-2xl mx-auto md:mx-0">
              Connecting the Madhwa community through accessible spiritual knowledge, 
              simplified rituals, and timely festival updates for the modern seeker.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/pravachans" className="btn-primary">
                Explore Pravachans
              </Link>
              <Link to="/rituals-hub" className="btn-secondary">
                View Ritual Guides
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-madhwa-pink rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-madhwa-blue rounded-full opacity-30 animate-pulse"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl bg-madhwa-purple/10 h-[300px] flex items-center justify-center">
                <p className="text-madhwa-purple text-xl font-medium">MadhwaSetu Digital Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
