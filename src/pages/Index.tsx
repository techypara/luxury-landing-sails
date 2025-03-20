
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyYacht63 from '../components/WhyYacht63';
import Gallery from '../components/Gallery';
import Booking from '../components/Booking';
import FAQ from '../components/FAQ';
import SocialBar from '../components/SocialBar';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Set document title
    document.title = "Yacht63 TOV - Luxury Yacht & Lamborghini Experiences in Dubai";
    
    // Initialize scroll animations
    const initScrollAnimations = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      
      document.querySelectorAll('.transition-fade').forEach(el => {
        observer.observe(el);
      });
    };
    
    initScrollAnimations();
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: any) => {
      const href = e.currentTarget.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-luxury-black overflow-hidden">
      <Navbar />
      <SocialBar />
      <Hero />
      <WhyYacht63 />
      <Gallery />
      <Booking />
      <FAQ />
      <Footer />
      
      {/* Mobile Sticky Book Now Button */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
        <a href="#booking" className="gold-button shadow-lg">
          Book Now
        </a>
      </div>
      
      {/* Mobile WhatsApp Button */}
      <a 
        href="https://wa.me/+971585959868" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg z-40 md:hidden"
        aria-label="Contact on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </div>
  );
};

export default Index;
