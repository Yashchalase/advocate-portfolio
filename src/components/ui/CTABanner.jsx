import { Link } from 'react-router-dom';
import { FadeIn } from './AnimatedCounter';

export default function CTABanner({
  title = 'Need Legal Assistance?',
  description = 'Schedule a confidential consultation to discuss your case with an experienced advocate.',
  primaryLabel = 'Book Consultation',
  primaryLink = '/consultation',
  secondaryLabel = 'Contact Us',
  secondaryLink = '/contact',
}) {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0f1a_70%)]" />
      </div>
      <div className="container-custom relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-5 text-balance">
            {title}
          </h2>
          <p className="text-silver-300 text-lg mb-10 leading-relaxed">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={primaryLink} className="btn-primary">
              {primaryLabel}
            </Link>
            <Link to={secondaryLink} className="btn-outline-light">
              {secondaryLabel}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
