
import { useEffect, useRef } from 'react';
import { 
  Ruler, 
  Gauge, 
  Sofa, 
  Tablet, 
  Star, 
  Ship
} from 'lucide-react';

const features = [
  {
    icon: Ruler,
    title: "Sleek Design",
    description: "Inspired by the iconic Lamborghini sports cars, this yacht features sharp lines, an aggressive stance, and a sleek, aerodynamic profile that cuts through the water with ease."
  },
  {
    icon: Gauge,
    title: "Powerful Performance",
    description: "Equipped with high-performance engines, the Lamborghini Yacht delivers exhilarating speed and agility, ensuring a smooth and powerful ride on the water."
  },
  {
    icon: Sofa,
    title: "Luxurious Interiors",
    description: "Step inside to discover a world of luxury, with plush seating, advanced entertainment systems, and top-of-the-line materials that reflect Lamborghini's commitment to excellence."
  },
  {
    icon: Tablet,
    title: "State-of-the-Art Technology",
    description: "Navigate the seas with precision thanks to cutting-edge technology, including advanced navigation systems, touch-screen controls, and customizable settings for an effortless journey."
  },
  {
    icon: Star,
    title: "Exclusive Amenities",
    description: "Enjoy bespoke services, including gourmet catering, a professional crew, and personalized experiences tailored to your preferences."
  },
  {
    icon: Ship,
    title: "Unrivaled Comfort",
    description: "The Lamborghini Yacht is designed with spacious living areas and ergonomic seating to ensure maximum comfort during your voyage, making it ideal for long journeys or leisurely cruises."
  }
];

const KeyFeatures = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.feature-card');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('appear');
            }, index * 150);
          });
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
    <section id="key-features" ref={sectionRef} className="py-20 md:py-28 bg-luxury-black/60 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-luxury-gold/5 filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-luxury-gold/5 filter blur-3xl"></div>
      
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold gold-text mb-6">
            Key Features of the Lamborghini Yacht
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The Tecnomar for Lamborghini 63 combines Italian automotive excellence with maritime craftsmanship
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card bg-luxury-black/40 rounded-lg p-6 border border-luxury-gold/20 hover:border-luxury-gold/60 transition-all duration-300 opacity-0 transform translate-y-8"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full neo-gold-blur flex items-center justify-center mr-4">
                  <feature.icon className="text-luxury-gold" size={24} />
                </div>
                <h3 className="text-xl font-playfair font-semibold gold-text">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
