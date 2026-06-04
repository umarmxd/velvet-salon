import { Link } from 'react-router';
import { ZoomIn, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const galleryImages = [
  { src: '/images/gallery-1.jpg', alt: 'Hair styling', span: 'col-span-2' },
  { src: '/images/gallery-3.jpg', alt: 'Makeup application', span: 'col-span-1' },
  { src: '/images/gallery-5.jpg', alt: 'Hair coloring', span: 'col-span-1' },
  { src: '/images/gallery-2.jpg', alt: 'Salon interior', span: 'col-span-2' },
  { src: '/images/gallery-4.jpg', alt: 'Bridal makeup', span: 'col-span-1' },
  { src: '/images/gallery-6.jpg', alt: 'Facial treatment', span: 'col-span-2' },
];

export default function GalleryPreviewSection() {
  return (
    <section className="bg-[#F7F7F7] section-padding">
      <div className="container-main">
        <SectionHeader
          eyebrow="GALLERY"
          heading="Our Work"
          subtext="A glimpse into the transformations we create."
        />

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-[var(--radius)] img-overlay-wipe cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[rgba(10,10,10,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <ZoomIn size={20} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 lg:mt-[60px] animate-fade-up">
          <Link to="/gallery" className="arrow-link">
            VIEW FULL GALLERY
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
