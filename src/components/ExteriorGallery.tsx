
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const exteriorImages = [
  {
    url: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    caption: 'Aerodynamic Exterior Design'
  },
  {
    url: 'https://images.unsplash.com/photo-1589974732948-15129a1058c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    caption: 'Signature Lamborghini Profile'
  },
  {
    url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    caption: 'Dubai Marina Cruising'
  },
  {
    url: 'https://images.unsplash.com/photo-1618825779286-b4922381416c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    caption: 'Sunset Yacht Experience'
  }
];

const ExteriorGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % exteriorImages.length);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + exteriorImages.length) % exteriorImages.length);
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
    <section id="exterior-gallery" ref={sectionRef} className="py-20 md:py-28 transition-fade">
      <div className="luxury-container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold gold-text mb-6">
            Stunning Exterior
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Admire the breathtaking exterior of the Tecnomar for Lamborghini 63, where sleek lines and aggressive styling meet nautical engineering for an unmistakable presence on the water.
          </p>
        </div>
        
        <div className="relative overflow-hidden rounded-lg gold-border max-w-5xl mx-auto aspect-[16/9]">
          {/* Main Image */}
          <div 
            className="w-full h-full transition-all duration-500 ease-out"
            style={{
              backgroundImage: `url(${exteriorImages[currentIndex].url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: isAnimating ? 0.7 : 1,
              transform: `scale(${isAnimating ? 1.05 : 1})`,
            }}
          ></div>
          
          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-4 neo-gold-blur">
            <p className="text-lg md:text-xl font-playfair text-luxury-gold">{exteriorImages[currentIndex].caption}</p>
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
          {exteriorImages.map((_, index) => (
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

export default ExteriorGallery;
