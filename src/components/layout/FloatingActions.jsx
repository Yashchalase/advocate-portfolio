import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import siteConfig from '../../data/siteConfig';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col-reverse items-center gap-3">
      <a
        href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
        className="p-3.5 bg-accent-500 text-white rounded-full shadow-lg shadow-accent-500/30 hover:bg-accent-600 transition-all hover:scale-110"
        aria-label="Call now"
      >
        <Phone className="w-5 h-5" />
      </a>
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3.5 bg-green-600 text-white rounded-full shadow-lg shadow-green-600/30 hover:bg-green-500 transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="p-3.5 bg-navy-900 text-white rounded-full shadow-lg hover:bg-accent-500 transition-all hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
