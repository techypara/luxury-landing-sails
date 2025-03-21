
import { useEffect, useRef } from 'react';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollY = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    // Initialize video with proper settings
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.autoplay = true;
      videoRef.current.loop = true;
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Video background with parallax effect */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 z-0 h-120 w-full"
      >
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
        >
          <source src="/videos/lamborghini-yacht.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 luxury-container">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 animate-fade-in-up" style={{animationDelay: "0.3s"}}>
          <span className="text-white">Experience Maritime Excellence –</span> <br />
          <span className="gold-text">Tecnomar for Lamborghini 63 in Dubai</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 md:mb-10 animate-fade-in-up" style={{animationDelay: "0.6s"}}>
          Luxury. Power. Unparalleled Design.
        </p>
        
        <a 
          href="#booking" 
          className="gold-button inline-block animate-fade-in-up"
          style={{animationDelay: "0.9s"}}
        >
          Reserve Your Experience
        </a>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-float">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-luxury-gold flex justify-center items-start p-1">
          <div className="w-1 h-3 bg-luxury-gold rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
