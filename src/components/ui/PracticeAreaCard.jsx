import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Gavel, FileText, Building2, Users, Home, Lightbulb, ArrowRight,
} from 'lucide-react';

const iconMap = {
  Gavel, FileText, Building2, Users, Home, Lightbulb,
};

export default function PracticeAreaCard({ area, index = 0 }) {
  const Icon = iconMap[area.icon] || Gavel;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to={`/practice-areas/${area.slug}`}
        className="group block bg-white rounded-2xl border border-cream-200 p-6 md:p-8 card-hover h-full relative overflow-hidden"
        aria-label={`Learn more about ${area.title}`}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-500/10 transition-colors" aria-hidden="true" />
        <div className="w-14 h-14 rounded-xl bg-navy-900 flex items-center justify-center mb-5 group-hover:bg-accent-500 transition-all duration-300 shadow-lg shadow-navy-900/20 group-hover:shadow-accent-500/30">
          <Icon className="w-7 h-7 text-white" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-serif font-semibold text-navy-900 mb-3 group-hover:text-accent-600 transition-colors">
          {area.title}
        </h3>
        <p className="text-navy-600 text-sm leading-relaxed mb-5">
          {area.shortDescription}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-600 group-hover:gap-2 transition-all">
          Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </span>
      </Link>
    </motion.div>
  );
}
