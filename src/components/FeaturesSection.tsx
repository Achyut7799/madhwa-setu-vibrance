
import { Book, Calendar, UserCheck, Video } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Video className="w-10 h-10 text-madhwa-purple" />,
    title: "Bite-sized Pravachans",
    description: "Short-form spiritual content tailored for the modern seeker, making Dvaita philosophy accessible to all.",
    link: "/pravachans"
  },
  {
    icon: <Book className="w-10 h-10 text-madhwa-purple" />,
    title: "Visual Ritual Guides",
    description: "Clear, step-by-step visual guides to practice dharma meaningfully with proper context.",
    link: "/rituals-hub"
  },
  {
    icon: <Calendar className="w-10 h-10 text-madhwa-purple" />,
    title: "Festival Alerts",
    description: "Regional festival alerts and calendar to never miss important spiritual events and celebrations.",
    link: "/festival-alerts"
  },
  {
    icon: <UserCheck className="w-10 h-10 text-madhwa-purple" />,
    title: "Pandit Connect",
    description: "Easy access to registered pandits for ceremonies with regional filters and profiles.",
    link: "/pandit-connect"
  }
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-header inline-block">What We Offer</h2>
          <p className="text-madhwa-deep-purple/80 max-w-3xl mx-auto mt-4">
            MadhwaSetu brings the traditional Madhwa wisdom to the digital age with features designed for the modern seeker.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="spiritual-card p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-madhwa-purple mb-2">{feature.title}</h3>
              <p className="text-sm text-madhwa-deep-purple/80 mb-4">{feature.description}</p>
              <Link to={feature.link} className="text-madhwa-purple hover:text-madhwa-dark-purple font-medium">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
