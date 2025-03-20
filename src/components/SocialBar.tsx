
import { Instagram, TiktokIcon, Smartphone, Youtube } from 'lucide-react';

const SocialBar = () => {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-30 hidden md:block">
      <div className="neo-gold-blur rounded-r-lg py-4 px-3 flex flex-col space-y-5">
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative"
          aria-label="Instagram"
        >
          <Instagram className="social-icon" />
          <span className="absolute left-full ml-2 px-2 py-1 text-sm neo-gold-blur rounded text-luxury-gold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
            Follow on Instagram
          </span>
        </a>
        
        <a 
          href="https://tiktok.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative"
          aria-label="TikTok"
        >
          <TiktokIcon className="social-icon" />
          <span className="absolute left-full ml-2 px-2 py-1 text-sm neo-gold-blur rounded text-luxury-gold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
            Follow on TikTok
          </span>
        </a>
        
        <a 
          href="https://wa.me/+971585959868" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative"
          aria-label="WhatsApp"
        >
          <Smartphone className="social-icon" />
          <span className="absolute left-full ml-2 px-2 py-1 text-sm neo-gold-blur rounded text-luxury-gold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
            Message on WhatsApp
          </span>
        </a>
        
        <a 
          href="https://youtube.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative"
          aria-label="YouTube"
        >
          <Youtube className="social-icon" />
          <span className="absolute left-full ml-2 px-2 py-1 text-sm neo-gold-blur rounded text-luxury-gold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
            Watch on YouTube
          </span>
        </a>
      </div>
    </div>
  );
};

export default SocialBar;
