
import { useEffect, useRef } from 'react';
import { Anchor, Car, Building } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="hover-card group">
      <div className="text-luxury-gold mb-5 flex justify-center">
        <Icon size={48} className="transition-all duration-300 group-hover:scale-110" />
      </div>
      <h3 className="text-xl md:text-2xl font-playfair font-semibold mb-3 gold-text text-center">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  );
};

const WhyYacht63 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.stagger-animation > *');
          elements.forEach(el => {
            (el as HTMLElement).style.animationPlayState = 'running';
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
    <section id="why" ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-luxury-gold/5 filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-luxury-gold/5 filter blur-3xl"></div>
      
      <div className="luxury-container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold gold-text mb-6">
            Why Yacht63 TOV
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the pinnacle of luxury with our exclusive offerings, combining the thrill of the sea and the power of Italian engineering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
          <FeatureCard 
            icon={Anchor}
            title="63-ft Tecnomar Lamborghini Yacht"
            description="Experience the limited edition masterpiece, combining Lamborghini's design DNA with cutting-edge marine engineering."
          />
          
          <FeatureCard 
            icon={Car}
            title="Lamborghini Huracán & Urus"
            description="Take your luxury experience from sea to land with our premium Lamborghini rentals, available for your entire Dubai stay."
          />
          
          <FeatureCard 
            icon={Building}
            title="Cruise Marina or Tour the City"
            description="Whether it's exploring Dubai's iconic coastline or its luxurious cityscape, experience it all in elite style."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyYacht63;
