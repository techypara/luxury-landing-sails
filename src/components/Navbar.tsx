
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 neo-gold-blur' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="luxury-container flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-playfair font-bold gold-text">
          yacht63.tov.ae
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#why" className="text-white hover:gold-text transition-all duration-300">Why Yacht63</a>
          <a href="#gallery" className="text-white hover:gold-text transition-all duration-300">Gallery</a>
          <a href="#booking" className="text-white hover:gold-text transition-all duration-300">Booking</a>
          <a href="#faq" className="text-white hover:gold-text transition-all duration-300">FAQ</a>
          <a href="#booking" className="gold-button">
            Book Now
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden gold-text"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full neo-gold-blur py-4 animate-fade-in-up">
          <div className="luxury-container flex flex-col space-y-4">
            <a 
              href="#why" 
              className="text-white hover:gold-text transition-all duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Yacht63
            </a>
            <a 
              href="#gallery" 
              className="text-white hover:gold-text transition-all duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
            <a 
              href="#booking" 
              className="text-white hover:gold-text transition-all duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Booking
            </a>
            <a 
              href="#faq" 
              className="text-white hover:gold-text transition-all duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#booking" 
              className="gold-button self-start"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
