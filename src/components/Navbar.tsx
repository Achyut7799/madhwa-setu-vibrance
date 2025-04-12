
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Pravachans", path: "/pravachans" },
  { name: "Rituals Hub", path: "/rituals-hub" },
  { name: "Festival Alerts", path: "/festival-alerts" },
  { name: "Seva Registration", path: "/seva-registration" },
  { name: "Pandit Connect", path: "/pandit-connect" }
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-white/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-madhwa-purple">MadhwaSetu</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `
                  nav-item ${isActive ? "text-madhwa-purple after:w-full" : ""}
                `}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Join the Movement Button (Desktop) */}
          <div className="hidden md:block">
            <Link to="/seva-registration" className="btn-primary">
              Join the Movement
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-madhwa-deep-purple"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                block py-2 px-4 rounded-md ${
                  isActive
                    ? "bg-madhwa-light-gray text-madhwa-purple"
                    : "text-madhwa-deep-purple hover:bg-madhwa-light-gray"
                }
              `}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/seva-registration"
            className="btn-primary text-center mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Join the Movement
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
