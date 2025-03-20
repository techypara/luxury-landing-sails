
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-luxury-black">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-playfair font-bold gold-text mb-6">404</h1>
        <p className="text-xl md:text-2xl text-white mb-8">The luxurious experience you're looking for is not available.</p>
        <a 
          href="/" 
          className="inline-flex items-center gold-button"
        >
          <ArrowLeft size={20} className="mr-2" />
          Return to Luxury
        </a>
      </div>
    </div>
  );
};

export default NotFound;
