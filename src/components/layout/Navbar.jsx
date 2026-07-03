import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import siteConfig from '../../data/siteConfig';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollY = useScrollPosition();
  const location = useLocation();
  const isScrolled = scrollY > 50;

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-dark shadow-xl shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-custom flex items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-accent-500 flex items-center justify-center font-serif font-bold text-white text-lg shadow-lg shadow-accent-500/30 group-hover:scale-105 transition-transform">
            RM
          </div>
          <div className="hidden sm:block">
            <p className="font-serif font-semibold text-white text-sm leading-tight group-hover:text-accent-400 transition-colors">
              {siteConfig.shortName}
            </p>
            <p className="text-silver-400 text-xs">{siteConfig.title}</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {siteConfig.navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-accent-500/20 border border-accent-500/30'
                    : 'text-cream-100 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-cream-100 text-sm hover:text-accent-400 transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            {siteConfig.contact.phoneDisplay}
          </a>
          <Link
            to="/consultation"
            className="px-5 py-2.5 bg-accent-500 text-white text-sm font-semibold rounded-lg shadow-lg shadow-accent-500/25 hover:bg-accent-600 hover:shadow-accent-600/30 transition-all"
          >
            Book Consultation
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-navy-950 border-l border-white/10 shadow-2xl flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="font-serif text-white font-semibold">{siteConfig.shortName}</span>
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-white p-1 rounded-lg hover:bg-white/10">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                {siteConfig.navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `block py-3.5 px-4 rounded-lg text-base font-medium transition-colors mb-1 ${
                        isActive ? 'text-white bg-accent-500/20 border border-accent-500/30' : 'text-cream-100 hover:bg-white/5'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
              <div className="p-6 border-t border-white/10 space-y-4">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-cream-100 text-sm"
                >
                  <Phone className="w-4 h-4" /> {siteConfig.contact.phoneDisplay}
                </a>
                <Link
                  to="/consultation"
                  className="block w-full text-center px-5 py-3 bg-accent-500 text-white font-semibold rounded-lg shadow-lg shadow-accent-500/25"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
