import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import { FadeIn } from '../components/ui/AnimatedCounter';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." noindex />
      <section className="min-h-[70vh] flex items-center justify-center section-padding bg-cream-50">
        <FadeIn className="text-center">
          <p className="text-8xl font-serif font-bold text-accent-500 mb-4">404</p>
          <h1 className="text-3xl font-serif font-bold text-navy-900 mb-4">Page Not Found</h1>
          <p className="text-navy-600 mb-8 max-w-md mx-auto">
            The page you are looking for may have been moved or does not exist.
          </p>
          <Link
            to="/"
            className="inline-flex px-8 py-3.5 bg-navy-900 text-white font-semibold rounded-md hover:bg-navy-800 transition-colors"
          >
            Return Home
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
