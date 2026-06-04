import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] pt-[80px] pb-[60px] lg:pt-[140px] lg:pb-[80px]">
      <div className="container-main text-center">
        {/* Heading */}
        <h2
          className="text-white text-[36px] lg:text-[64px] tracking-[-0.02em] font-normal"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Velvet Salon
        </h2>

        {/* Accent Rule */}
        <div className="w-20 h-[1px] bg-[var(--color-accent)] mx-auto mt-5" />

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-[700px] mx-auto">
          <div className="flex items-center justify-center gap-3 text-white/80">
            <MapPin size={16} className="text-[var(--color-accent)] flex-shrink-0" />
            <span className="text-[13px]" style={{ fontFamily: 'var(--font-sans)' }}>
              Chennai, Tamil Nadu
            </span>
          </div>
          <div className="flex items-center justify-center gap-3 text-white/80">
            <Phone size={16} className="text-[var(--color-accent)] flex-shrink-0" />
            <span className="text-[13px]" style={{ fontFamily: 'var(--font-sans)' }}>
              +91 98765 43210
            </span>
          </div>
          <div className="flex items-center justify-center gap-3 text-white/80">
            <Mail size={16} className="text-[var(--color-accent)] flex-shrink-0" />
            <span className="text-[13px]" style={{ fontFamily: 'var(--font-sans)' }}>
              hello@velvetsalon.com
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p
          className="text-[var(--color-accent)] text-[18px] lg:text-[21px] italic mt-12 lg:mt-[60px]"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Where Beauty Meets Excellence
        </p>

        {/* Quick Links */}
        <div className="flex items-center justify-center gap-6 mt-10 flex-wrap">
          {[
            { label: 'Home', path: '/' },
            { label: 'Services', path: '/services' },
            { label: 'Gallery', path: '/gallery' },
            { label: 'Contact', path: '/contact' },
            { label: 'Book Now', path: '/appointment' },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white/50 text-[12px] uppercase tracking-[0.05em] hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p
          className="text-[#888888] text-[10.5px] tracking-[0.05em] mt-10 lg:mt-[60px]"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          &copy; 2025 Velvet Salon. All rights reserved.
        </p>

        {/* Agency Credit */}
        <p className="text-[#666] text-[10px] mt-3" style={{ fontFamily: 'var(--font-sans)' }}>
          Crafted by Zenith Flow
        </p>
      </div>
    </footer>
  );
}
