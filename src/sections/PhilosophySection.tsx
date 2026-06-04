export default function PhilosophySection() {
  return (
    <section className="bg-[#0A0A0A] section-padding">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-20 items-end">
          {/* Left Column - Text */}
          <div>
            <h2
              className="text-white text-[28px] md:text-[48px] lg:text-[64px] leading-[1.2] tracking-[-0.02em] font-normal animate-fade-up"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Velvet Salon combines beauty expertise, luxury care, and{' '}
              <span className="text-[var(--color-accent)] underline decoration-[var(--color-accent)]/30 underline-offset-4">
                modern styling
              </span>
              .
            </h2>

            <p
              className="text-white/80 text-[16px] lg:text-[18px] font-light leading-[1.7] mt-8 lg:mt-10 max-w-[600px] animate-fade-up"
              style={{ fontFamily: 'var(--font-sans)', transitionDelay: '150ms' }}
            >
              We believe every client deserves a personalized experience that enhances
              their natural beauty. Our team of skilled professionals uses premium
              products and the latest techniques to deliver exceptional results in a
              luxurious, relaxing environment.
            </p>
          </div>

          {/* Right Column - Attribution */}
          <div className="flex items-center gap-4 animate-fade-up" style={{ transitionDelay: '300ms' }}>
            <img
              src="/images/founder-avatar.jpg"
              alt="Priya Sharma, Founder"
              className="w-[60px] h-[60px] rounded-full object-cover flex-shrink-0"
            />
            <span
              className="text-[#888888] text-[13px]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              — Priya Sharma, Founder
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
