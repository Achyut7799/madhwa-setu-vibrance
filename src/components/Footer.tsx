
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-madhwa-deep-purple text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">MadhwaSetu</h3>
            <p className="text-sm text-gray-300 mb-4">
              A digital spiritual companion for the Madhwa community, making Dvaita philosophy accessible and engaging.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-madhwa-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-madhwa-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-madhwa-purple transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-madhwa-purple transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-madhwa-purple transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/pravachans" className="hover:text-madhwa-purple transition-colors">Pravachans</Link>
              </li>
              <li>
                <Link to="/rituals-hub" className="hover:text-madhwa-purple transition-colors">Rituals Hub</Link>
              </li>
              <li>
                <Link to="/festival-alerts" className="hover:text-madhwa-purple transition-colors">Festival Alerts</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/seva-registration" className="hover:text-madhwa-purple transition-colors">Seva Registration</Link>
              </li>
              <li>
                <Link to="/pandit-connect" className="hover:text-madhwa-purple transition-colors">Pandit Connect</Link>
              </li>
              <li>
                <a href="#" className="hover:text-madhwa-purple transition-colors">Support Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-madhwa-purple transition-colors">Volunteer</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: info@madhwasetu.org</li>
              <li>Phone: +91 1234567890</li>
              <li>Address: No. 123, Temple Street, Bengaluru, Karnataka, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} MadhwaSetu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
