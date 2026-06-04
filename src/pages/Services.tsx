import { useState } from 'react';
import { Link } from 'react-router';
import { Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const categories = ['All', 'Hair', 'Makeup', 'Skin', 'Spa'];

const services = [
  {
    category: 'Hair',
    title: 'Precision Haircut',
    description: 'A tailored cut designed to complement your face shape and personal style. Includes consultation, shampoo, and styling.',
    duration: '60 min',
    price: '499',
    image: '/images/service-hair-styling.jpg',
  },
  {
    category: 'Hair',
    title: 'Hair Coloring',
    description: 'From balayage to full color transformation, using premium ammonia-free dyes for vibrant, long-lasting results.',
    duration: '120 min',
    price: '1,499',
    image: '/images/service-hair-coloring.jpg',
  },
  {
    category: 'Hair',
    title: 'Hair Treatment',
    description: 'Intensive conditioning treatment to repair damaged hair. Includes scalp massage and hot towel therapy.',
    duration: '45 min',
    price: '899',
    image: '/images/service-hair-styling.jpg',
  },
  {
    category: 'Makeup',
    title: 'Bridal Makeup',
    description: 'Complete bridal makeup application with a trial session. Uses long-wear, high-definition products for a flawless finish.',
    duration: '180 min',
    price: '4,999',
    image: '/images/service-bridal-makeup.jpg',
  },
  {
    category: 'Skin',
    title: 'Deep Cleansing Facial',
    description: 'A rejuvenating facial that deeply cleanses, exfoliates, and hydrates. Includes steam, extraction, and mask treatment.',
    duration: '60 min',
    price: '1,199',
    image: '/images/service-facial.jpg',
  },
  {
    category: 'Spa',
    title: 'Aromatherapy Massage',
    description: 'A full-body massage using essential oils to relieve tension, improve circulation, and promote deep relaxation.',
    duration: '90 min',
    price: '2,499',
    image: '/images/service-spa.jpg',
  },
];

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('All');
  useScrollAnimation();

  const filtered = activeFilter === 'All'
    ? services
    : services.filter((s) => s.category === activeFilter);

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-[140px] lg:pt-[160px] pb-[60px] lg:pb-[80px] text-center">
        <span className="eyebrow text-[var(--color-accent)] block animate-fade-up">WHAT WE DO</span>
        <h1
          className="text-white text-[36px] lg:text-[64px] tracking-[-0.02em] font-normal mt-4 animate-fade-up"
          style={{ fontFamily: 'var(--font-serif)', transitionDelay: '100ms' }}
        >
          Our Services
        </h1>
        <p
          className="text-white/80 text-[16px] lg:text-[18px] font-light mt-3 max-w-[500px] mx-auto animate-fade-up"
          style={{ fontFamily: 'var(--font-sans)', transitionDelay: '200ms' }}
        >
          Discover our range of premium beauty and wellness services.
        </p>
      </section>

      {/* Filter */}
      <section className="bg-[#F7F7F7] py-8 lg:py-10">
        <div className="container-main flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 lg:px-5 py-2.5 rounded-[var(--radius)] text-[11.5px] uppercase tracking-[0.1em] transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-[var(--color-accent)] text-white border border-[var(--color-accent)]'
                  : 'bg-transparent text-[#888888] border border-[#E0E0E0] hover:border-[#CCCCCC] hover:text-[#222222]'
              }`}
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#F7F7F7] pb-[60px] lg:pb-[100px]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {filtered.map((service, i) => (
              <div
                key={`${service.title}-${i}`}
                className="group bg-white rounded-[var(--radius)] overflow-hidden flex flex-col lg:flex-row transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                style={{
                  animation: `fadeInUp 300ms ease-out ${i * 100}ms both`,
                }}
              >
                {/* Image */}
                <div className="lg:w-[45%] aspect-[4/3] lg:aspect-auto overflow-hidden flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="lg:w-[55%] p-6 lg:p-8 flex flex-col">
                  <span
                    className="text-[10px] uppercase tracking-[0.1em] text-[var(--color-accent)] mb-2"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {service.category}
                  </span>
                  <h3
                    className="text-[20px] lg:text-[24px] font-medium text-[#222222]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-[13px] lg:text-[14px] text-[#888888] leading-[1.6] mt-2"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {service.description}
                  </p>

                  {/* Details */}
                  <div className="mt-auto pt-4 lg:pt-5 border-t border-[#E0E0E0] flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#888888]">
                      <Clock size={14} />
                      <span className="text-[13px]" style={{ fontFamily: 'var(--font-sans)' }}>
                        {service.duration}
                      </span>
                    </div>
                    <span
                      className="text-[20px] lg:text-[24px] text-[var(--color-accent)]"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      &#x20B9;{service.price}
                    </span>
                  </div>

                  <Link
                    to="/appointment"
                    className="btn-primary w-full text-center mt-4"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#0A0A0A] py-[60px] lg:py-[100px] text-center">
        <h2
          className="text-white text-[28px] lg:text-[48px] font-light tracking-[-0.02em] animate-fade-up"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Ready to Experience Luxury?
        </h2>
        <Link
          to="/appointment"
          className="btn-primary btn-primary-lg mt-8 inline-flex animate-fade-up"
          style={{ transitionDelay: '200ms' }}
        >
          Book Your Appointment
        </Link>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
