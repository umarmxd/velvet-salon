interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  subtext?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeader({ eyebrow, heading, subtext, light = false, centered = true }: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 lg:mb-16`}>
      <span
        className={`eyebrow block mb-3 animate-fade-up ${light ? 'text-white/50' : ''}`}
      >
        {eyebrow}
      </span>
      <h2
        className={`text-[32px] lg:text-[48px] font-light tracking-[-0.02em] leading-tight animate-fade-up ${
          light ? 'text-white' : 'text-[#222222]'
        }`}
        style={{ fontFamily: 'var(--font-sans)', transitionDelay: '100ms' }}
      >
        {heading}
      </h2>
      {subtext && (
        <p
          className={`text-[14px] lg:text-[16px] mt-4 max-w-[600px] leading-relaxed animate-fade-up ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-white/70' : 'text-[#888888]'}`}
          style={{ fontFamily: 'var(--font-sans)', transitionDelay: '200ms' }}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
