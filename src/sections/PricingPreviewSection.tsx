import { Link } from 'react-router';
import SectionHeader from '../components/SectionHeader';

const pricingPlans = [
  {
    service: 'Haircut',
    price: '499',
    description: 'Includes consultation, shampoo, cut, and styling.',
    featured: false,
  },
  {
    service: 'Facial',
    price: '1,199',
    description: 'Deep cleansing facial with premium skincare products.',
    featured: true,
  },
  {
    service: 'Bridal Package',
    price: '4,999',
    description: 'Complete bridal hair, makeup, and styling package.',
    featured: false,
  },
];

export default function PricingPreviewSection() {
  return (
    <section className="bg-[#F7F7F7] section-padding">
      <div className="container-main">
        <SectionHeader
          eyebrow="PRICING"
          heading="Simple & Transparent"
          subtext="Premium services at honest prices."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-150">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-[var(--radius)] p-8 lg:p-10 animate-fade-up transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] ${
                plan.featured
                  ? 'bg-[rgba(16,204,173,0.05)] border-t-[3px] border-[var(--color-accent)] shadow-md'
                  : 'bg-white'
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <span
                  className="text-[10px] uppercase tracking-[0.1em] text-[var(--color-accent)] mb-4 block"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Most Popular
                </span>
              )}

              {/* Service Name */}
              <h3
                className="text-[20px] lg:text-[24px] font-medium text-[#222222]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {plan.service}
              </h3>

              {/* Accent Rule */}
              <div className="w-10 h-[1px] bg-[var(--color-accent)] my-4" />

              {/* Price */}
              <div className="flex items-baseline gap-1">
                <span
                  className="text-[20px] lg:text-[24px] text-[var(--color-accent)]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  &#x20B9;
                </span>
                <span
                  className="text-[36px] lg:text-[48px] text-[var(--color-accent)] leading-none"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {plan.price}
                </span>
              </div>

              {/* Description */}
              <p
                className="text-[13px] lg:text-[14px] text-[#888888] mt-4 leading-[1.6]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {plan.description}
              </p>

              {/* Book Button */}
              <Link
                to="/appointment"
                className="btn-primary w-full mt-8 block text-center"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
