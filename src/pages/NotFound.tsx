
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-madhwa-light-gray/50">
      <div className="text-center max-w-lg px-4">
        <h1 className="text-6xl font-bold text-madhwa-purple mb-4">404</h1>
        <p className="text-2xl text-madhwa-deep-purple mb-6">Page Not Found</p>
        <p className="text-madhwa-deep-purple/80 mb-8">
          The page you're looking for doesn't exist or has been moved. Let's guide you back to the spiritual path.
        </p>
        <Link 
          to="/" 
          className="flex items-center justify-center bg-madhwa-purple text-white py-3 px-6 rounded-md hover:bg-madhwa-dark-purple transition-colors mx-auto w-fit"
        >
          <Home className="mr-2" size={18} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
