
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-madhwa-purple to-madhwa-dark-purple text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join our Spiritual Journey</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
          Be part of a community that values tradition while embracing modern approaches to spirituality. Register for Seva opportunities or connect with Pandits for your ritual needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/seva-registration" 
            className="bg-white text-madhwa-purple rounded-md px-6 py-3 font-medium hover:bg-madhwa-light-gray transition-colors duration-300"
          >
            Register for Seva
          </Link>
          <Link
            to="/pandit-connect"
            className="bg-transparent border border-white text-white rounded-md px-6 py-3 font-medium hover:bg-white/10 transition-colors duration-300"
          >
            Connect with Pandits
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
