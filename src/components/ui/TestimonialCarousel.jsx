import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialCarousel({ testimonials }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const testimonial = testimonials[current];

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Client testimonials"
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl border border-cream-200 p-8 md:p-12 shadow-xl shadow-navy-900/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 to-accent-400" aria-hidden="true" />
          <Quote className="w-12 h-12 text-accent-500/20 mb-6" aria-hidden="true" />
          <p className="text-lg md:text-xl text-navy-700 leading-relaxed mb-8 italic">
            &ldquo;{testimonial.text}&rdquo;
          </p>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="font-semibold text-navy-900">{testimonial.name}</p>
              <p className="text-sm text-navy-500">{testimonial.designation}</p>
            </div>
            <div className="flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < testimonial.rating ? 'text-accent-500 fill-accent-500' : 'text-cream-200'}`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="p-2.5 rounded-full border border-cream-200 text-navy-600 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-accent-500' : 'w-2.5 bg-cream-200 hover:bg-accent-400'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-2.5 rounded-full border border-cream-200 text-navy-600 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
