import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current && window.innerWidth >= 1100) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollY * 0.25}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const next = document.getElementById('services');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src="/images/hero-bg.jpg"
          alt="Velvet Salon Interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[rgba(10,10,10,0.4)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[800px] mx-auto">
        <h1
          className="hero-title text-white text-[48px] md:text-[80px] lg:text-[120px] leading-[1.1] tracking-[-0.02em] font-normal"
          style={{
            fontFamily: 'var(--font-serif)',
            textShadow: '0 2px 30px rgba(0,0,0,0.4)',
          }}
        >
          Velvet Salon
        </h1>

        <p
          className="hero-subtitle text-white/90 text-[18px] md:text-[24px] font-light tracking-[-0.01em] mt-4"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Luxury Hair & Beauty Experience
        </p>

        <p
          className="hero-desc text-white/80 text-[14px] md:text-[16px] leading-[1.6] mt-5 max-w-[500px] mx-auto"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Expert styling, premium beauty treatments, and personalized salon care.
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link to="/appointment" className="btn-primary">
            Book Appointment
          </Link>
          <Link to="/services" className="btn-outline">
            View Services
          </Link>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToNext}
        className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:border-white hover:text-white transition-all duration-200 animate-scroll-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={16} />
      </button>
    </section>
  );
}
