
import { Smartphone, Mail, MapPin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-luxury-gold/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-luxury-gold/5 filter blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-luxury-gold/5 filter blur-[100px]"></div>
      </div>
      
      <div className="luxury-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-luxury-gold text-xl font-playfair font-semibold mb-6">Yacht63 TOV</h3>
            <p className="text-gray-300 mb-4">
              Yacht63 TOV provides premium Lamborghini yacht charters and luxury Lamborghini rentals in Dubai Marina and Palm Jumeirah.
            </p>
            <p className="text-gray-300">
              Discover bespoke cruises, personalized concierge services, gourmet onboard catering, and unforgettable experiences from sea to city.
            </p>
          </div>
          
          <div>
            <h3 className="text-luxury-gold text-xl font-playfair font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#booking" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">Book Now</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">Concierge</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-luxury-gold text-xl font-playfair font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Smartphone className="text-luxury-gold mt-1 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-300">
                  WhatsApp: <a href="https://wa.me/+971585959868" className="hover:text-luxury-gold transition-colors duration-300">+971 58 5959 868</a>
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="text-luxury-gold mt-1 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-300">
                  Email: <a href="mailto:customercare@tov.ae" className="hover:text-luxury-gold transition-colors duration-300">customercare@tov.ae</a>
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-luxury-gold mt-1 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-300">Dubai Marina | Palm Jumeirah | JBR</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-luxury-gold text-xl font-playfair font-semibold mb-6">Follow Us</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest experiences and offers on social media.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full neo-gold-blur flex items-center justify-center transition-all duration-300 hover:bg-luxury-gold/20"
                aria-label="Instagram"
              >
                <Instagram className="text-luxury-gold" size={20} />
              </a>
              
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full neo-gold-blur flex items-center justify-center transition-all duration-300 hover:bg-luxury-gold/20"
                aria-label="YouTube"
              >
                <Youtube className="text-luxury-gold" size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-luxury-gold/10 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Yacht63 TOV. All rights reserved.
            <span className="mx-2">|</span>
            <span>Partnered with TOV Dubai for full-service luxury.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
