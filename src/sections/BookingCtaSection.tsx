import { Link } from 'react-router';

export default function BookingCtaSection() {
  return (
    <section className="bg-[#0A0A0A] section-padding">
      <div className="container-main text-center">
        <span
          className="eyebrow text-[var(--color-accent)] block animate-fade-up"
        >
          BOOK YOUR APPOINTMENT
        </span>

        <h2
          className="text-white text-[32px] md:text-[48px] lg:text-[64px] font-light tracking-[-0.02em] mt-5 max-w-[700px] mx-auto leading-tight animate-fade-up"
          style={{ fontFamily: 'var(--font-sans)', transitionDelay: '100ms' }}
        >
          Ready For Your Next Beauty Experience?
        </h2>

        <p
          className="text-white/80 text-[16px] lg:text-[18px] font-light leading-[1.6] mt-5 max-w-[500px] mx-auto animate-fade-up"
          style={{ fontFamily: 'var(--font-sans)', transitionDelay: '200ms' }}
        >
          Our team of experts is ready to transform your look. Book your
          appointment today and experience the Velvet difference.
        </p>

        <div className="mt-10 animate-fade-up relative inline-block" style={{ transitionDelay: '300ms' }}>
          <Link
            to="/appointment"
            className="btn-primary btn-primary-lg animate-pulse-ring relative"
          >
            Book Your Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
