
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

// FAQ data
const faqData = [
  {
    question: "What distinguishes the 1 of 63 Tecnomar for Lamborghini 63 from other luxury charters?",
    answer: "The 1 of 63 Tecnomar for Lamborghini 63 is the ultimate fusion of Italian design and marine innovation. As one of a limited series, this yacht offers unmatched exclusivity, performance, and style — making your charter a one-of-a-kind experience with Yacht63 TOV."
  },
  {
    question: "How can I book the Tecnomar for Lamborghini 63 for charter?",
    answer: "Simply begin with a private consultation with our team. Yacht63 TOV offers tailored service to ensure your expectations are exceeded from the very first interaction."
  },
  {
    question: "What is the rate for chartering the Tecnomar for Lamborghini 63?",
    answer: "Rates are bespoke and reflect your personalized experience, including itinerary, onboard services, and amenities. Contact Yacht63 TOV for a tailored quote."
  },
  {
    question: "Are there any qualifications needed to charter this yacht?",
    answer: "Our clientele is carefully selected. A short qualification call ensures the experience matches your expectations and maintains the prestige of the Lamborghini legacy."
  },
  {
    question: "Can I view the yacht before booking?",
    answer: "Yes, private showings are available upon request as part of your VIP onboarding process with Yacht63 TOV."
  },
  {
    question: "What exclusive services are included in the charter?",
    answer: "Expect concierge-level service, gourmet dining, private crew, event setup, and curated itineraries. Additional luxury services can be arranged upon request."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
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
    <section id="faq" ref={sectionRef} className="py-20 md:py-28 transition-fade">
      <div className="luxury-container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold gold-text mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Lamborghini Yacht Charter with Yacht63 TOV
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto neo-gold-blur rounded-lg overflow-hidden divide-y divide-luxury-gold/20">
          {faqData.map((item, index) => (
            <div key={index} className="question-item">
              <button
                className="question-button"
                onClick={() => toggleQuestion(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="font-playfair text-lg">{item.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-luxury-gold transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {activeIndex === index && (
                <div className="answer animate-fade-in-up">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#booking" className="inline-block text-luxury-gold hover:text-luxury-gold-light underline transition-colors duration-300">
            Have more questions? Contact our concierge team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
