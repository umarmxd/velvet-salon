import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'HOME', path: '/' },
  { label: 'SERVICES', path: '/services' },
  { label: 'GALLERY', path: '/gallery' },
  { label: 'CONTACT', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container-main flex items-center justify-between h-[70px]">
          {/* Site Title */}
          <Link
            to="/"
            className="font-[var(--font-serif)] text-[21px] text-white tracking-[-0.05em] font-medium"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            VELVET SALON
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                <span
                  className={`text-[11.5px] font-medium tracking-[0.1em] uppercase transition-colors duration-200 ${
                    isActive(link.path) ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                </span>
                {/* Active dot */}
                {isActive(link.path) && (
                  <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[5px] h-[5px] bg-white rounded-full" />
                )}
                {/* Hover underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-200 ease-out group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop Book Button */}
          <Link
            to="/appointment"
            className="hidden lg:inline-flex btn-primary"
          >
            BOOK YOUR APPOINTMENT
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-[50px] h-[50px] flex items-center justify-center text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[1000] bg-[#0A0A0A] transition-transform duration-300 lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white text-[28px] uppercase tracking-[0.1em] transition-all duration-200 hover:text-[var(--color-accent)]"
              style={{
                fontFamily: 'var(--font-mono)',
                transitionDelay: mobileOpen ? `${300 + i * 100}ms` : '0ms',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateX(0)' : 'translateX(30px)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/appointment"
            className="btn-primary mt-6"
            style={{
              transitionDelay: mobileOpen ? '700ms' : '0ms',
              opacity: mobileOpen ? 1 : 0,
            }}
          >
            BOOK YOUR APPOINTMENT
          </Link>
        </div>

        {/* Close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 text-white w-[30px] h-[30px] flex items-center justify-center"
          style={{
            transitionDelay: mobileOpen ? '50ms' : '0ms',
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? 'translateY(0)' : 'translateY(-50px)',
            transition: 'all 200ms ease-out',
          }}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>
    </>
  );
}
