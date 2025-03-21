
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

// Update with paths to the uploaded images
const images = [
  {
    url: '/images/gallery/lamborghini-yacht-1.jpg',
    caption: 'Tecnomar for Lamborghini 63 - Exterior View'
  },
  {
    url: '/images/gallery/lamborghini-yacht-2.jpg',
    caption: 'Luxury Deck Space'
  },
  {
    url: '/images/gallery/lamborghini-yacht-3.jpg',
    caption: 'Dubai Marina Skyline Cruise'
  },
  {
    url: '/images/gallery/lamborghini-yacht-4.jpg',
    caption: 'Sleek Yacht Design'
  },
  {
    url: '/images/gallery/lamborghini-yacht-5.jpg',
    caption: 'Exclusive Onboard Experience'
  },
  {
    url: '/images/gallery/lamborghini-yacht-6.jpg',
    caption: 'Premium Interior Finishes'
  },
  {
    url: '/images/gallery/lamborghini-yacht-7.jpg',
    caption: 'Sunset Yacht Cruises'
  },
  {
    url: '/images/gallery/lamborghini-yacht-8.jpg',
    caption: 'Luxury Navigation Experience'
  }
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
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
    <section id="gallery" ref={sectionRef} className="py-20 md:py-28 transition-fade">
      <div className="luxury-container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold gold-text mb-6">
            Experience Luxury
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Browse through our gallery of the exclusive Tecnomar for Lamborghini 63 yacht experience in Dubai.
          </p>
        </div>
        
        <div className="relative overflow-hidden rounded-lg gold-border max-w-5xl mx-auto aspect-[16/9]">
          {/* Main Image */}
          <div 
            className="w-full h-full transition-all duration-500 ease-out"
            style={{
              backgroundImage: `url(${images[currentIndex].url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: isAnimating ? 0.7 : 1,
              transform: `scale(${isAnimating ? 1.05 : 1})`,
            }}
          ></div>
          
          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-4 neo-gold-blur">
            <p className="text-lg md:text-xl font-playfair text-luxury-gold">{images[currentIndex].caption}</p>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full 
                       neo-gold-blur flex items-center justify-center text-luxury-gold 
                       transition-all duration-300 hover:bg-luxury-gold/20"
            onClick={goToPrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full 
                       neo-gold-blur flex items-center justify-center text-luxury-gold 
                       transition-all duration-300 hover:bg-luxury-gold/20"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Thumbnails */}
        <div className="flex justify-center mt-6 space-x-2 overflow-x-auto py-2 px-4 max-w-full">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 flex-shrink-0 ${
                index === currentIndex 
                  ? 'bg-luxury-gold' 
                  : 'bg-luxury-gold/30 hover:bg-luxury-gold/50'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to image ${index + 1}`}
            ></button>
          ))}
        </div>
        
        {/* Thumbnail Preview */}
        <div className="mt-8 hidden md:block">
          <div className="grid grid-cols-4 gap-3">
            {images.slice(0, 4).map((image, index) => (
              <div 
                key={index}
                className={`aspect-video rounded overflow-hidden cursor-pointer transition-all duration-300 hover:opacity-100 ${
                  currentIndex === index ? 'ring-2 ring-luxury-gold opacity-100' : 'opacity-60'
                }`}
                onClick={() => goToSlide(index)}
              >
                <img 
                  src={image.url} 
                  alt={image.caption} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
