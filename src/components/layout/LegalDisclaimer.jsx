import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';
import siteConfig from '../../data/siteConfig';

function formatParagraph(text) {
  const parts = text.split('{name}');
  if (parts.length === 1) return text;

  return parts.flatMap((part, i) =>
    i < parts.length - 1
      ? [
          part,
          <strong key={i} className="text-navy-900 font-semibold">{siteConfig.name}</strong>,
        ]
      : [part],
  );
}

export default function LegalDisclaimer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const acknowledged = localStorage.getItem(siteConfig.disclaimer.storageKey);
    if (!acknowledged) {
      setVisible(true);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleAcknowledge = () => {
    localStorage.setItem(siteConfig.disclaimer.storageKey, 'true');
    document.body.style.overflow = '';
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-disclaimer-title"
        >
          <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl shadow-black/30 border border-cream-200 overflow-hidden"
          >
            <div className="h-1.5 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-400" aria-hidden="true" />

            <div className="p-6 sm:p-8 md:p-10">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent-500/10 flex items-center justify-center mb-4">
                  <ShieldAlert className="w-7 h-7 text-accent-500" aria-hidden="true" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-600 mb-2">
                  Bar Council of India
                </p>
                <h2
                  id="legal-disclaimer-title"
                  className="text-2xl sm:text-3xl font-serif font-bold text-navy-900"
                >
                  Legal Disclaimer
                </h2>
                <div className="accent-divider mt-4" />
              </div>

              <div className="max-h-[40vh] overflow-y-auto rounded-xl bg-cream-50 border border-cream-200 p-5 sm:p-6 space-y-4">
                {siteConfig.disclaimer.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-sm sm:text-base text-navy-700 leading-relaxed text-left">
                    {formatParagraph(paragraph)}
                  </p>
                ))}
              </div>

              <p className="text-xs text-navy-500 text-center mt-4">
                Please read the above carefully before proceeding.
              </p>

              <button
                type="button"
                onClick={handleAcknowledge}
                className="btn-primary w-full mt-6 justify-center"
              >
                {siteConfig.disclaimer.acknowledgeLabel}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
