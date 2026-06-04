import { Link } from 'react-router';
import { Scissors, Droplet, Sparkles, Heart, Star, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Hair Styling',
    description: 'Precision cuts, blow-dries, and styling for every occasion.',
    icon: Scissors,
    image: '/images/service-hair-styling.jpg',
  },
  {
    title: 'Hair Coloring',
    description: 'From subtle highlights to bold transformations.',
    icon: Droplet,
    image: '/images/service-hair-coloring.jpg',
  },
  {
    title: 'Bridal Makeup',
    description: 'Look flawless on your special day with our expert artists.',
    icon: Sparkles,
    image: '/images/service-bridal-makeup.jpg',
  },
  {
    title: 'Facial Treatments',
    description: 'Rejuvenate your skin with premium facial therapies.',
    icon: Heart,
    image: '/images/service-facial.jpg',
  },
  {
    title: 'Spa & Relaxation',
    description: 'Unwind with massages, aromatherapy, and wellness rituals.',
    icon: Star,
    image: '/images/service-spa.jpg',
  },
];

export default function ServicesOverviewSection() {
  return (
    <section id="services" className="bg-[#F7F7F7]">
      {/* Sticky Title */}
      <div className="sticky top-[70px] z-50 bg-white border-b border-[var(--color-separator)]">
        <div className="container-main py-8 lg:py-[60px] text-center">
          <span className="eyebrow block mb-2">OUR SERVICES</span>
          <h2
            className="text-[28px] lg:text-[48px] font-light tracking-[-0.02em] text-[#222222]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            What We Offer
          </h2>
        </div>
      </div>

      {/* Service Cards */}
      <div className="container-main pb-[60px] lg:pb-[100px] pt-8 lg:pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 stagger-children">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group bg-white rounded-[var(--radius)] overflow-hidden animate-fade-up transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
              >
                {/* Image */}
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-5 lg:p-6">
                  <Icon
                    size={32}
                    className="text-[var(--color-accent)] mb-3"
                    strokeWidth={1.5}
                  />
                  <h3
                    className="text-[18px] lg:text-[20px] font-medium text-[#222222]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-[13px] lg:text-[14px] text-[#888888] leading-[1.5] mt-2"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="arrow-link mt-4 inline-flex"
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
