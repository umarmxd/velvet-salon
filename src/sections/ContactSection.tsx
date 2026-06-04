import { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Check } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
  { icon: Mail, label: 'Email', value: 'hello@velvetsalon.com' },
  { icon: MapPin, label: 'Address', value: 'Chennai, Tamil Nadu' },
  { icon: Instagram, label: 'Instagram', value: '@velvetsalon' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="bg-[#F7F7F7] section-padding">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-10 lg:gap-20">
          {/* Left Column */}
          <div className="stagger-children">
            <span className="eyebrow block mb-3 animate-fade-up">CONTACT US</span>
            <h2
              className="text-[32px] lg:text-[48px] font-light tracking-[-0.02em] text-[#222222] animate-fade-up"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Get In Touch
            </h2>
            <p
              className="text-[14px] lg:text-[16px] text-[#888888] mt-4 animate-fade-up"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              We'd love to hear from you. Reach out for bookings, inquiries, or
              just to say hello.
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-6">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4 animate-fade-up">
                    <Icon size={20} className="text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                    <div>
                      <span
                        className="text-[11px] uppercase tracking-[0.1em] text-[#888888] block mb-1"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {item.label}
                      </span>
                      <span
                        className="text-[16px] text-[#222222]"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        {item.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="animate-fade-up" style={{ transitionDelay: '200ms' }}>
            {submitted ? (
              <div className="bg-white rounded-[var(--radius)] p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                  <Check size={32} className="text-[var(--color-accent)]" />
                </div>
                <h3
                  className="text-[20px] text-[#222222] font-medium"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Thank You!
                </h3>
                <p className="text-[14px] text-[#888888] mt-2">
                  Your message has been sent. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-[var(--radius)] p-6 lg:p-8 space-y-5">
                <div>
                  <label className="text-[11px] uppercase tracking-[0.1em] text-[#888888] block mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full border rounded-[var(--radius)] px-4 py-3.5 text-[16px] outline-none transition-all duration-200 focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(16,204,173,0.1)] ${
                      errors.name ? 'border-[var(--color-error)]' : 'border-[#E0E0E0]'
                    }`}
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                  {errors.name && <p className="text-[13px] text-[var(--color-error)] mt-1.5">{errors.name}</p>}
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-[0.1em] text-[#888888] block mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full border rounded-[var(--radius)] px-4 py-3.5 text-[16px] outline-none transition-all duration-200 focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(16,204,173,0.1)] ${
                      errors.email ? 'border-[var(--color-error)]' : 'border-[#E0E0E0]'
                    }`}
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                  {errors.email && <p className="text-[13px] text-[var(--color-error)] mt-1.5">{errors.email}</p>}
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-[0.1em] text-[#888888] block mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-[#E0E0E0] rounded-[var(--radius)] px-4 py-3.5 text-[16px] outline-none transition-all duration-200 focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(16,204,173,0.1)]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-[0.1em] text-[#888888] block mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                    Message
                  </label>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full border rounded-[var(--radius)] px-4 py-3.5 text-[16px] outline-none transition-all duration-200 resize-y focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(16,204,173,0.1)] ${
                      errors.message ? 'border-[var(--color-error)]' : 'border-[#E0E0E0]'
                    }`}
                    style={{ fontFamily: 'var(--font-sans)', minHeight: '120px' }}
                  />
                  {errors.message && <p className="text-[13px] text-[var(--color-error)] mt-1.5">{errors.message}</p>}
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
