import { Star } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const testimonials = [
  {
    quote: 'The best salon experience I\'ve ever had. The team at Velvet truly understands luxury care. My hair has never looked better!',
    name: 'Ananya R.',
    image: '/images/testimonial-1.jpg',
  },
  {
    quote: 'I booked the bridal package and it was absolutely perfect. They made me feel like a princess on my wedding day.',
    name: 'Meera K.',
    image: '/images/testimonial-2.jpg',
  },
  {
    quote: 'Professional, relaxing, and the results are always stunning. I wouldn\'t go anywhere else for my beauty treatments.',
    name: 'Sarah T.',
    image: '/images/testimonial-3.jpg',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-main">
        <SectionHeader
          eyebrow="TESTIMONIALS"
          heading="What Our Clients Say"
          subtext="Real experiences from our valued clients."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-150">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-[var(--radius)] p-6 lg:p-8 border border-[#F0F0F0] animate-fade-up transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="text-[var(--color-accent)] fill-[var(--color-accent)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-[15px] lg:text-[16px] text-[#444] leading-[1.7] italic"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                "{t.quote}"
              </p>

              {/* Customer */}
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#F0F0F0]">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span
                  className="text-[12px] text-[#888888] uppercase tracking-[0.05em]"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  — {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
