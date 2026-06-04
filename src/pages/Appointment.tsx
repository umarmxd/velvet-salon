import { useState } from 'react';
import { Link } from 'react-router';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const serviceOptions = [
  { name: 'Hair Styling', duration: '60 min', price: '499' },
  { name: 'Hair Coloring', duration: '120 min', price: '1,499' },
  { name: 'Bridal Makeup', duration: '180 min', price: '4,999' },
  { name: 'Facial Treatment', duration: '60 min', price: '1,199' },
  { name: 'Spa & Relaxation', duration: '90 min', price: '2,499' },
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function Appointment() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [service, setService] = useState('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState('');
  const [calendarMonth, setCalendarMonth] = useState(() => new Date().getMonth());
  const [calendarYear, setCalendarYear] = useState(() => new Date().getFullYear());
  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmed, setConfirmed] = useState(false);
  useScrollAnimation();

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();

  const daysInMonth = getDaysInMonth(calendarYear, calendarMonth);
  const firstDay = getFirstDayOfMonth(calendarYear, calendarMonth);

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const isDateDisabled = (day: number) => {
    const date = new Date(calendarYear, calendarMonth, day);
    if (date < new Date(currentYear, currentMonth, currentDate)) return true;
    if (date.getDay() === 0) return true; // Sunday
    return false;
  };

  const prevMonth = () => {
    if (calendarMonth === 0) {
      setCalendarMonth(11);
      setCalendarYear(calendarYear - 1);
    } else {
      setCalendarMonth(calendarMonth - 1);
    }
    setSelectedDate('');
  };

  const nextMonth = () => {
    if (calendarMonth === 11) {
      setCalendarMonth(0);
      setCalendarYear(calendarYear + 1);
    } else {
      setCalendarMonth(calendarMonth + 1);
    }
    setSelectedDate('');
  };

  const canGoNext = () => {
    if (step === 1) return !!service;
    if (step === 2) return !!selectedDate && !!selectedTime;
    if (step === 3) return !!form.name && !!form.email && !!form.phone;
    if (step === 4) return true;
    return false;
  };

  const validateStep3 = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.phone.trim()) e.phone = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (step === 3 && !validateStep3()) return;
    if (step === 4) {
      setConfirmed(true);
      setStep(5);
      return;
    }
    setDirection('next');
    setStep((s) => s + 1);
  };

  const handleBack = () => {
    setDirection('prev');
    setStep((s) => s - 1);
  };

  const goToStep = (s: number) => {
    if (s < step) {
      setDirection('prev');
      setStep(s);
    }
  };

  const selectedService = serviceOptions.find((s) => s.name === service);
  const refNum = `VSL-${Math.floor(100000 + Math.random() * 900000)}`;

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const [y, m, d] = dateStr.split('-').map(Number);
    const date = new Date(y, m, d);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  };

  const slideClass = direction === 'next'
    ? 'animate-[slideInRight_300ms_ease-out]'
    : 'animate-[slideInLeft_300ms_ease-out]';

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-[140px] lg:pt-[160px] pb-[60px] lg:pb-[80px] text-center">
        <span className="eyebrow text-[var(--color-accent)] block animate-fade-up">BOOK YOUR APPOINTMENT</span>
        <h1
          className="text-white text-[36px] lg:text-[64px] tracking-[-0.02em] font-normal mt-4 animate-fade-up"
          style={{ fontFamily: 'var(--font-serif)', transitionDelay: '100ms' }}
        >
          Book Your Visit
        </h1>
        <p
          className="text-white/80 text-[16px] lg:text-[18px] font-light mt-3 animate-fade-up"
          style={{ fontFamily: 'var(--font-sans)', transitionDelay: '200ms' }}
        >
          Follow the simple steps below to schedule your appointment.
        </p>
      </section>

      {/* Wizard */}
      <section className="bg-[#F7F7F7] py-10 lg:py-20">
        <div className="container-main max-w-[800px]">
          <div className="bg-white rounded-[var(--radius)] shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
            {/* Progress */}
            <div className="p-6 lg:p-8 border-b border-[#F0F0F0]">
              <div className="flex items-center justify-between">
                {[1, 2, 3, 4, 5].map((s, i) => (
                  <div key={s} className="flex items-center flex-1 last:flex-none">
                    <button
                      onClick={() => goToStep(s)}
                      disabled={s >= step || confirmed}
                      className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-[11px] lg:text-[13px] font-medium transition-all duration-200 flex-shrink-0 ${
                        s < step
                          ? 'bg-[var(--color-accent)] text-white'
                          : s === step
                          ? 'bg-[var(--color-accent)] text-white'
                          : 'border-2 border-[#E0E0E0] text-[#888888]'
                      } ${s < step && !confirmed ? 'cursor-pointer hover:opacity-80' : ''}`}
                    >
                      {s < step ? <Check size={14} /> : s === 5 && confirmed ? <Check size={14} /> : s}
                    </button>
                    {i < 4 && (
                      <div className={`flex-1 h-[2px] mx-2 transition-colors duration-200 ${
                        s < step ? 'bg-[var(--color-accent)]' : 'bg-[#E0E0E0]'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 px-1">
                {['Service', 'Date', 'Details', 'Review', 'Done'].map((label, i) => (
                  <span
                    key={label}
                    className={`text-[9px] lg:text-[10px] uppercase tracking-[0.05em] ${
                      i + 1 <= step ? 'text-[var(--color-accent)]' : 'text-[#888888]'
                    }`}
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Step Content */}
            <div className="p-6 lg:p-10 min-h-[400px]">
              {/* Step 1 - Select Service */}
              {step === 1 && (
                <div className={slideClass}>
                  <h2 className="text-[20px] lg:text-[24px] text-[#222222] font-medium" style={{ fontFamily: 'var(--font-sans)' }}>
                    Select a Service
                  </h2>
                  <p className="text-[13px] lg:text-[14px] text-[#888888] mt-1" style={{ fontFamily: 'var(--font-sans)' }}>
                    Choose the service you'd like to book.
                  </p>
                  <div className="mt-6 space-y-3">
                    {serviceOptions.map((opt) => (
                      <label
                        key={opt.name}
                        className={`flex items-center gap-4 p-4 lg:p-5 rounded-[var(--radius)] border cursor-pointer transition-all duration-200 ${
                          service === opt.name
                            ? 'border-[var(--color-accent)] bg-[rgba(16,204,173,0.05)]'
                            : 'border-[#E0E0E0] hover:border-[#CCCCCC]'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                          service === opt.name
                            ? 'border-[var(--color-accent)] bg-[var(--color-accent)]'
                            : 'border-[#E0E0E0]'
                        }`}>
                          {service === opt.name && <div className="w-2 h-2 bg-white rounded-full" />}
                        </div>
                        <div className="flex-1">
                          <span className="text-[15px] lg:text-[16px] text-[#222222] block" style={{ fontFamily: 'var(--font-sans)' }}>
                            {opt.name}
                          </span>
                          <span className="text-[12px] lg:text-[13px] text-[#888888]" style={{ fontFamily: 'var(--font-sans)' }}>
                            {opt.duration}
                          </span>
                        </div>
                        <span className="text-[15px] lg:text-[16px] font-medium text-[var(--color-accent)]" style={{ fontFamily: 'var(--font-serif)' }}>
                          &#x20B9;{opt.price}
                        </span>
                        <input
                          type="radio"
                          name="service"
                          value={opt.name}
                          checked={service === opt.name}
                          onChange={() => setService(opt.name)}
                          className="sr-only"
                        />
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2 - Date & Time */}
              {step === 2 && (
                <div className={slideClass}>
                  <h2 className="text-[20px] lg:text-[24px] text-[#222222] font-medium" style={{ fontFamily: 'var(--font-sans)' }}>
                    Choose a Date & Time
                  </h2>
                  <p className="text-[13px] lg:text-[14px] text-[#888888] mt-1" style={{ fontFamily: 'var(--font-sans)' }}>
                    Pick your preferred appointment slot.
                  </p>

                  {/* Calendar */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-4">
                      <button onClick={prevMonth} className="w-8 h-8 flex items-center justify-center text-[#888888] hover:text-[#222222] transition-colors">
                        <ChevronLeft size={18} />
                      </button>
                      <span className="text-[16px] lg:text-[18px] font-medium text-[#222222]" style={{ fontFamily: 'var(--font-sans)' }}>
                        {monthNames[calendarMonth]} {calendarYear}
                      </span>
                      <button onClick={nextMonth} className="w-8 h-8 flex items-center justify-center text-[#888888] hover:text-[#222222] transition-colors">
                        <ChevronRight size={18} />
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                      {dayLabels.map((d) => (
                        <div key={d} className="text-center text-[10px] uppercase text-[#888888] py-2" style={{ fontFamily: 'var(--font-mono)' }}>
                          {d}
                        </div>
                      ))}
                      {Array.from({ length: firstDay }).map((_, i) => (
                        <div key={`pad-${i}`} />
                      ))}
                      {Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1;
                        const disabled = isDateDisabled(day);
                        const dateStr = `${calendarYear}-${calendarMonth}-${day}`;
                        const isSelected = selectedDate === dateStr;
                        const isToday = day === currentDate && calendarMonth === currentMonth && calendarYear === currentYear;

                        return (
                          <button
                            key={day}
                            disabled={disabled}
                            onClick={() => setSelectedDate(dateStr)}
                            className={`aspect-square rounded-[var(--radius)] text-[13px] lg:text-[14px] flex items-center justify-center transition-all duration-200 ${
                              disabled
                                ? 'bg-[#F7F7F7] text-[#CCCCCC] cursor-not-allowed'
                                : isSelected
                                ? 'bg-[var(--color-accent)] text-white'
                                : isToday
                                ? 'border border-[var(--color-accent)] text-[#222222]'
                                : 'text-[#222222] hover:bg-[#F7F7F7]'
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Slots */}
                  {selectedDate && (
                    <div className="mt-6">
                      <span className="eyebrow block mb-3">Available Times</span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setSelectedTime(slot)}
                            className={`py-2.5 px-3 rounded-[var(--radius)] text-[12px] lg:text-[13px] border transition-all duration-200 ${
                              selectedTime === slot
                                ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
                                : 'bg-white text-[#222222] border-[#E0E0E0] hover:border-[#CCCCCC]'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3 - Your Details */}
              {step === 3 && (
                <div className={slideClass}>
                  <h2 className="text-[20px] lg:text-[24px] text-[#222222] font-medium" style={{ fontFamily: 'var(--font-sans)' }}>
                    Your Details
                  </h2>
                  <p className="text-[13px] lg:text-[14px] text-[#888888] mt-1" style={{ fontFamily: 'var(--font-sans)' }}>
                    Tell us a bit about yourself.
                  </p>
                  <div className="mt-6 space-y-5">
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.1em] text-[#888888] block mb-2" style={{ fontFamily: 'var(--font-mono)' }}>Full Name</label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={`w-full border rounded-[var(--radius)] px-4 py-3.5 text-[16px] outline-none transition-all duration-200 focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(16,204,173,0.1)] ${errors.name ? 'border-[var(--color-error)]' : 'border-[#E0E0E0]'}`}
                      />
                      {errors.name && <p className="text-[12px] text-[var(--color-error)] mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.1em] text-[#888888] block mb-2" style={{ fontFamily: 'var(--font-mono)' }}>Email</label>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`w-full border rounded-[var(--radius)] px-4 py-3.5 text-[16px] outline-none transition-all duration-200 focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(16,204,173,0.1)] ${errors.email ? 'border-[var(--color-error)]' : 'border-[#E0E0E0]'}`}
                      />
                      {errors.email && <p className="text-[12px] text-[var(--color-error)] mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.1em] text-[#888888] block mb-2" style={{ fontFamily: 'var(--font-mono)' }}>Phone</label>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={`w-full border rounded-[var(--radius)] px-4 py-3.5 text-[16px] outline-none transition-all duration-200 focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(16,204,173,0.1)] ${errors.phone ? 'border-[var(--color-error)]' : 'border-[#E0E0E0]'}`}
                      />
                      {errors.phone && <p className="text-[12px] text-[var(--color-error)] mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.1em] text-[#888888] block mb-2" style={{ fontFamily: 'var(--font-mono)' }}>Special Requests</label>
                      <textarea
                        placeholder="Any special requests or notes? (optional)"
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        className="w-full border border-[#E0E0E0] rounded-[var(--radius)] px-4 py-3.5 text-[16px] outline-none transition-all duration-200 resize-y focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(16,204,173,0.1)]"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4 - Review */}
              {step === 4 && selectedService && (
                <div className={slideClass}>
                  <h2 className="text-[20px] lg:text-[24px] text-[#222222] font-medium" style={{ fontFamily: 'var(--font-sans)' }}>
                    Review Your Booking
                  </h2>
                  <p className="text-[13px] lg:text-[14px] text-[#888888] mt-1" style={{ fontFamily: 'var(--font-sans)' }}>
                    Please confirm your appointment details.
                  </p>

                  <div className="mt-6 bg-white border border-[#E0E0E0] rounded-[var(--radius)] p-6 lg:p-8 space-y-4">
                    {[
                      { label: 'Service', value: selectedService.name },
                      { label: 'Duration', value: selectedService.duration },
                      { label: 'Price', value: `\u20B9${selectedService.price}` },
                      { label: 'Date', value: formatDate(selectedDate) },
                      { label: 'Time', value: selectedTime },
                      { label: 'Name', value: form.name },
                      { label: 'Email', value: form.email },
                      { label: 'Phone', value: form.phone },
                      { label: 'Special Requests', value: form.notes || 'None' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start justify-between py-3 border-b border-[#F0F0F0] last:border-0">
                        <span className="text-[11px] uppercase tracking-[0.1em] text-[#888888]" style={{ fontFamily: 'var(--font-mono)' }}>
                          {item.label}
                        </span>
                        <span className="text-[14px] lg:text-[16px] text-[#222222] text-right max-w-[60%]" style={{ fontFamily: 'var(--font-sans)' }}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5 - Confirmation */}
              {step === 5 && confirmed && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full border-2 border-[var(--color-accent)] flex items-center justify-center mx-auto mb-6">
                    <Check size={32} className="text-[var(--color-accent)]" />
                  </div>
                  <h2 className="text-[20px] lg:text-[24px] text-[#222222] font-medium" style={{ fontFamily: 'var(--font-sans)' }}>
                    Booking Confirmed!
                  </h2>
                  <p className="text-[14px] text-[#888888] mt-2" style={{ fontFamily: 'var(--font-sans)' }}>
                    Your appointment has been successfully scheduled.
                  </p>
                  <p className="text-[16px] lg:text-[18px] text-[#222222] mt-6 max-w-[400px] mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>
                    Thank you, {form.name}! Your appointment for {selectedService?.name} is confirmed.
                  </p>
                  <div className="mt-4 p-4 bg-[#F7F7F7] rounded-[var(--radius)] inline-block">
                    <p className="text-[13px] text-[#888888]" style={{ fontFamily: 'var(--font-mono)' }}>
                      {formatDate(selectedDate)} at {selectedTime}
                    </p>
                  </div>
                  <p className="text-[13px] text-[#888888] mt-4" style={{ fontFamily: 'var(--font-mono)' }}>
                    Booking Reference: {refNum}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <button
                      onClick={() => window.location.reload()}
                      className="btn-outline text-[#222222] border-[#222222] hover:bg-[#222222] hover:text-white"
                    >
                      Book Another
                    </button>
                    <Link to="/" className="btn-primary">
                      Back to Home
                    </Link>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {step < 5 && (
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#F0F0F0]">
                  {step > 1 ? (
                    <button
                      onClick={handleBack}
                      className="btn-outline text-[#222222] border-[#E0E0E0] hover:bg-[#222222] hover:text-white hover:border-[#222222]"
                    >
                      <ChevronLeft size={14} />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}
                  <button
                    onClick={handleNext}
                    disabled={!canGoNext()}
                    className={`btn-primary ${step === 4 ? 'btn-primary-lg' : ''} ${!canGoNext() ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {step === 4 ? 'Confirm Booking' : 'Next Step'}
                    {step !== 4 && <ChevronRight size={14} />}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </main>
  );
}
