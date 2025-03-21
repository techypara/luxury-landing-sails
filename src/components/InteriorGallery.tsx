import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const interiorImages = [
  {
    url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20Rent%20Lamborghini%20Yacht%20%281%29.jpeg',
    caption: 'Lamborghini 63 Yacht - Exterior View'
  },
  {
    url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20Rent%20Lamborghini%20Yacht%20%2810%29.jpeg',
    caption: 'Sleek Aerodynamic Design'
  },
  {
    url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20Rent%20Lamborghini%20Yacht%20%2813%29.jpeg',
    caption: 'Stunning Dubai Waterfront View'
  },
  {
    url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20Rent%20Lamborghini%20Yacht%20%2815%29.jpeg',
    caption: 'Luxury Yacht Experience'
  },
  {
    url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20Rent%20Lamborghini%20Yacht%20%2816%29.jpeg',
    caption: 'Signature Lamborghini Lines'
  },
  {
    url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20Rent%20Lamborghini%20Yacht%20%2819%29.jpeg',
    caption: 'Premium Yacht Craftsmanship'
  },
  {
    url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20Rent%20Lamborghini%20Yacht%20%282%29.jpeg',
    caption: 'Exclusive Dubai Yacht Experience'
  },
  {
    url: 'https://vip.tov.ae/images/yacht63/img/EXTERIOR%20lamborghini%2063%20Dubai/yacht63%20Dubai%20Rent%20Lamborghini%20Yacht%20%2820%29.jpeg',
    caption: 'Lamborghini Yacht at Marina'
  }
];

const InteriorGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % interiorImages.length);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + interiorImages.length) % interiorImages.length);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="interior-gallery" ref={sectionRef} className="py-20 md:py-28 transition-fade">
      <div className="luxury-container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold gold-text mb-6">
            Interior Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Step inside the Tecnomar for Lamborghini 63 and discover Italian craftsmanship at its finest, featuring carbon fiber elements, premium upholstery, and Lamborghini-inspired details.
          </p>
        </div>
        
        <div className="relative overflow-hidden rounded-lg gold-border max-w-5xl mx-auto aspect-[16/9]">
          {/* Main Image */}
          <div 
            className="w-full h-full transition-all duration-500 ease-out"
            style={{
              backgroundImage: `url(${interiorImages[currentIndex].url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: isAnimating ? 0.7 : 1,
              transform: `scale(${isAnimating ? 1.05 : 1})`,
            }}
          ></div>
          
          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-4 neo-gold-blur">
            <p className="text-lg md:text-xl font-playfair text-luxury-gold">{interiorImages[currentIndex].caption}</p>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full 
                       neo-gold-blur flex items-center justify-center text-luxury-gold 
                       transition-all duration-300 hover:bg-luxury-gold/20"
            onClick={goToPrev}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full 
                       neo-gold-blur flex items-center justify-center text-luxury-gold 
                       transition-all duration-300 hover:bg-luxury-gold/20"
            onClick={goToNext}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Thumbnails */}
        <div className="flex justify-center mt-6 space-x-2">
          {interiorImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-luxury-gold' 
                  : 'bg-luxury-gold/30 hover:bg-luxury-gold/50'
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorGallery;
