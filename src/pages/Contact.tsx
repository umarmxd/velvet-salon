import { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Check, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from '../components/SectionHeader';

const contactCards = [
  { icon: Phone, title: 'Phone', value: '+91 98765 43210' },
  { icon: Mail, title: 'Email', value: 'hello@velvetsalon.com' },
  { icon: MapPin, title: 'Address', value: '42 Marina Beach Road, Chennai, Tamil Nadu 600001' },
  { icon: Instagram, title: 'Instagram', value: '@velvetsalon' },
];

const hours = [
  { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 6:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  useScrollAnimation();

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.firstName.trim()) e.firstName = 'Required';
    if (!formData.lastName.trim()) e.lastName = 'Required';
    if (!formData.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Invalid email';
    if (!formData.message.trim()) e.message = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-[140px] lg:pt-[160px] pb-[60px] lg:pb-[80px] text-center">
        <span className="eyebrow text-[var(--color-accent)] block animate-fade-up">REACH OUT</span>
        <h1
          className="text-white text-[36px] lg:text-[64px] tracking-[-0.02em] font-normal mt-4 animate-fade-up"
          style={{ fontFamily: 'var(--font-serif)', transitionDelay: '100ms' }}
        >
          Contact Us
        </h1>
        <p
          className="text-white/80 text-[16px] lg:text-[18px] font-light mt-3 max-w-[500px] mx-auto animate-fade-up"
          style={{ fontFamily: 'var(--font-sans)', transitionDelay: '200ms' }}
        >
          We'd love to hear from you. Visit us, call us, or send a message.
        </p>
      </section>

      {/* Contact Info */}
      <section className="bg-[#F7F7F7] py-[60px] lg:py-[100px]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left */}
            <div className="stagger-children">
              <h2
                className="text-[28px] lg:text-[36px] font-light tracking-[-0.02em] text-[#222222] animate-fade-up"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Get In Touch
              </h2>

              <div className="mt-8 space-y-4">
                {contactCards.map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={i}
                      className="bg-white rounded-[var(--radius)] p-5 lg:p-6 flex items-start gap-4 animate-fade-up"
                    >
                      <Icon size={24} className="text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                      <div>
                        <span
                          className="text-[11px] uppercase tracking-[0.1em] text-[#888888] block mb-1"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          {card.title}
                        </span>
                        <span
                          className="text-[14px] lg:text-[16px] text-[#222222]"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          {card.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Operating Hours */}
              <div className="mt-8 animate-fade-up">
                <h3
                  className="text-[16px] lg:text-[18px] font-medium text-[#222222] flex items-center gap-2"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <Clock size={18} className="text-[var(--color-accent)]" />
                  Operating Hours
                </h3>
                <div className="mt-4 space-y-0">
                  {hours.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2.5 border-b border-[#E0E0E0]"
                    >
                      <span className="text-[13px] lg:text-[14px] text-[#888888]" style={{ fontFamily: 'var(--font-sans)' }}>
                        {h.day}
                      </span>
                      <span className="text-[13px] lg:text-[14px] text-[#222222]" style={{ fontFamily: 'var(--font-sans)' }}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Map Placeholder */}
            <div className="animate-fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="bg-white border border-[#E0E0E0] rounded-[var(--radius)] overflow-hidden h-full min-h-[300px] lg:min-h-0">
                {/* Map visual */}
                <div className="h-[250px] lg:h-[70%] bg-[#EDE9E0] relative overflow-hidden">
                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `
                        linear-gradient(#C4BFB5 1px, transparent 1px),
                        linear-gradient(90deg, #C4BFB5 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px',
                    }}
                  />
                  {/* Water area */}
                  <div className="absolute top-0 right-0 w-[40%] h-[50%] bg-[#A8D0E6] opacity-40 rounded-bl-[60%]" />
                  {/* Pin marker */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-10 h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </div>
                      <div className="w-3 h-3 bg-[var(--color-accent)] rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2" />
                    </div>
                  </div>
                  {/* Road labels */}
                  <div className="absolute bottom-4 left-4 text-[10px] text-[#888] uppercase tracking-wider" style={{ fontFamily: 'var(--font-mono)' }}>
                    Marina Beach Road
                  </div>
                  <div className="absolute top-4 right-4 text-[10px] text-[#888] uppercase tracking-wider" style={{ fontFamily: 'var(--font-mono)' }}>
                    Chennai
                  </div>
                </div>
                <div className="p-4 lg:p-5">
                  <p className="text-[13px] text-[#888888]" style={{ fontFamily: 'var(--font-sans)' }}>
                    42 Marina Beach Road, Chennai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-[60px] lg:py-[100px]">
        <div className="container-main max-w-[800px]">
          <SectionHeader
            eyebrow="SEND A MESSAGE"
            heading="We'd Love to Hear From You"
            subtext="Fill out the form below and we'll get back to you within 24 hours."
          />

          {submitted ? (
            <div className="bg-[#F7F7F7] rounded-[var(--radius)] p-10 text-center animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-[var(--color-accent)]" />
              </div>
              <h3 className="text-[20px] text-[#222222] font-medium" style={{ fontFamily: 'var(--font-sans)' }}>
                Thank You!
              </h3>
              <p className="text-[14px] text-[#888888] mt-2 max-w-[400px] mx-auto">
                Your message has been sent. We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="stagger-children">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="animate-fade-up">
                  <label className="text-[11px] uppercase tracking-[0.1em] text-[#888888] block mb-2" style={{ fontFamily: 'var(--font-mono)' }}>First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className={`w-full border rounded-[var(--radius)] px-4 py-3.5 text-[16px] outline-none transition-all duration-200 focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(16,204,173,0.1)] ${errors.firstName ? 'border-[var(--color-error)]' : 'border-[#E0E0E0]'}`}
                  />
                  {errors.firstName && <p className="text-[12px] text-[var(--color-error)] mt-1">{errors.firstName}</p>}
                </div>
                <div className="animate-fade-up">
                  <label className="text-[11px] uppercase tracking-[0.1em] text-[#888888] block mb-2" style={{ fontFamily: 'var(--font-mono)' }}>Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className={`w-full border rounded-[var(--radius)] px-4 py-3.5 text-[16px] outline-none transition-all duration-200 focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(16,204,173,0.1)] ${errors.lastName ? 'border-[var(--color-error)]' : 'border-[#E0E0E0]'}`}
                  />
                  {errors.lastName && <p className="text-[12px] text-[var(--color-error)] mt-1">{errors.lastName}</p>}
                </div>
                <div className="animate-fade-up">
                  <label className="text-[11px] uppercase tracking-[0.1em] text-[#888888] block mb-2" style={{ fontFamily: 'var(--font-mono)' }}>Email Address</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full border rounded-[var(--radius)] px-4 py-3.5 text-[16px] outline-none transition-all duration-200 focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(16,204,173,0.1)] ${errors.email ? 'border-[var(--color-error)]' : 'border-[#E0E0E0]'}`}
                  />
                  {errors.email && <p className="text-[12px] text-[var(--color-error)] mt-1">{errors.email}</p>}
                </div>
                <div className="animate-fade-up">
                  <label className="text-[11px] uppercase tracking-[0.1em] text-[#888888] block mb-2" style={{ fontFamily: 'var(--font-mono)' }}>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-[#E0E0E0] rounded-[var(--radius)] px-4 py-3.5 text-[16px] outline-none transition-all duration-200 focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(16,204,173,0.1)]"
                  />
                </div>
              </div>

              <div className="mt-5 animate-fade-up">
                <label className="text-[11px] uppercase tracking-[0.1em] text-[#888888] block mb-2" style={{ fontFamily: 'var(--font-mono)' }}>Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full border border-[#E0E0E0] rounded-[var(--radius)] px-4 py-3.5 text-[16px] outline-none transition-all duration-200 focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(16,204,173,0.1)] bg-white appearance-none"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <option>General Inquiry</option>
                  <option>Booking Question</option>
                  <option>Feedback</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div className="mt-5 animate-fade-up">
                <label className="text-[11px] uppercase tracking-[0.1em] text-[#888888] block mb-2" style={{ fontFamily: 'var(--font-mono)' }}>Your Message</label>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full border rounded-[var(--radius)] px-4 py-3.5 text-[16px] outline-none transition-all duration-200 resize-y focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(16,204,173,0.1)] ${errors.message ? 'border-[var(--color-error)]' : 'border-[#E0E0E0]'}`}
                  style={{ minHeight: '150px' }}
                />
                {errors.message && <p className="text-[12px] text-[var(--color-error)] mt-1">{errors.message}</p>}
              </div>

              <button type="submit" className="btn-primary w-full mt-6 animate-fade-up">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
