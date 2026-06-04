import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const categories = ['All', 'Hair', 'Makeup', 'Interior', 'Bridal'];

const galleryImages = [
  { src: '/images/service-hair-styling.jpg', category: 'Hair', alt: 'Precision hair cutting' },
  { src: '/images/service-hair-coloring.jpg', category: 'Hair', alt: 'Hair coloring process' },
  { src: '/images/gallery-3.jpg', category: 'Makeup', alt: 'Makeup application' },
  { src: '/images/service-bridal-makeup.jpg', category: 'Bridal', alt: 'Bridal makeup' },
  { src: '/images/gallery-2.jpg', category: 'Interior', alt: 'Salon interior' },
  { src: '/images/gallery-1.jpg', category: 'Hair', alt: 'Hair styling result' },
  { src: '/images/gallery-6.jpg', category: 'Makeup', alt: 'Finished makeup look' },
  { src: '/images/gallery-4.jpg', category: 'Bridal', alt: 'Bridal portrait' },
  { src: '/images/gallery-5.jpg', category: 'Hair', alt: 'Hair coloring' },
  { src: '/images/service-facial.jpg', category: 'Makeup', alt: 'Facial treatment' },
  { src: '/images/service-spa.jpg', category: 'Interior', alt: 'Spa interior' },
  { src: '/images/hero-bg.jpg', category: 'Interior', alt: 'Salon ambiance' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  useScrollAnimation();

  const filtered = activeFilter === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filtered.length);
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, closeLightbox, goNext, goPrev]);

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-[140px] lg:pt-[160px] pb-[60px] lg:pb-[80px] text-center">
        <span className="eyebrow text-[var(--color-accent)] block animate-fade-up">OUR PORTFOLIO</span>
        <h1
          className="text-white text-[36px] lg:text-[64px] tracking-[-0.02em] font-normal mt-4 animate-fade-up"
          style={{ fontFamily: 'var(--font-serif)', transitionDelay: '100ms' }}
        >
          Gallery
        </h1>
        <p
          className="text-white/80 text-[16px] lg:text-[18px] font-light mt-3 max-w-[500px] mx-auto animate-fade-up"
          style={{ fontFamily: 'var(--font-sans)', transitionDelay: '200ms' }}
        >
          Browse through our collection of transformations and salon moments.
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

      {/* Gallery Grid */}
      <section className="bg-[#F7F7F7] pb-[60px] lg:pb-[100px]">
        <div className="container-main">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className="group relative overflow-hidden rounded-[var(--radius)] img-overlay-wipe cursor-pointer break-inside-avoid"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[rgba(10,10,10,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <ZoomIn size={20} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[1000] bg-[rgba(10,10,10,0.95)] flex items-center justify-center animate-fade-up"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:opacity-70 transition-opacity z-10 w-10 h-10 flex items-center justify-center"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 text-white hover:opacity-70 transition-opacity z-10 w-10 h-10 flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 text-white hover:opacity-70 transition-opacity z-10 w-10 h-10 flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[currentIndex]?.src}
              alt={filtered[currentIndex]?.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-[var(--radius)]"
            />
            {/* Counter & Caption */}
            <div className="text-center mt-4">
              <p className="text-white text-[13px]" style={{ fontFamily: 'var(--font-mono)' }}>
                {currentIndex + 1} / {filtered.length}
              </p>
              <p className="text-[#888888] text-[11.5px] uppercase tracking-[0.1em] mt-1" style={{ fontFamily: 'var(--font-mono)' }}>
                {filtered[currentIndex]?.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
