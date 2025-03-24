
import { useEffect, useRef } from 'react';
import { Anchor, Gauge, SparkleIcon } from 'lucide-react';

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
            Why Choose the Lamborghini Yacht?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where Supercar Heritage Meets Maritime Excellence
          </p>
          
          <div className="mt-8 text-gray-300 text-lg max-w-4xl mx-auto">
            <p className="mb-6">
              Step aboard the Lamborghini Tecnomar 63 — a bold fusion of speed, innovation, and unmistakable Italian craftsmanship. 
              This isn't just a yacht; it's a floating supercar, engineered to stir your soul with every wave it cuts through.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
          <FeatureCard 
            icon={SparkleIcon}
            title="Sleek Design"
            description="Inspired by Lamborghini's most iconic sports cars, the Tecnomar 63 mirrors the same cutting-edge aesthetics — sharp contours, futuristic angles, and a carbon-fiber silhouette built for elegance and speed. It's not just design; it's an attitude."
          />
          
          <FeatureCard 
            icon={Gauge}
            title="Powerful Performance"
            description="Equipped with twin MAN V12 engines unleashing a staggering 2,000 horsepower, this beast dominates the sea at a thrilling top speed of 60 knots. It's not simply fast — it's the fastest in its class."
          />
          
          <FeatureCard 
            icon={Anchor}
            title="Italian Innovation"
            description="Born from the DNA of Lamborghini and crafted in the spirit of performance and luxury, every detail of the Tecnomar 63 reflects precision, passion, and prestige — a vessel designed for those who dare to redefine limits."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyYacht63;
