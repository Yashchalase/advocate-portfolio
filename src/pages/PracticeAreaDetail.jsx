import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../components/seo/SEO';
import { BreadcrumbSchema } from '../components/seo/SchemaMarkup';
import SectionHeading from '../components/ui/SectionHeading';
import FAQAccordion from '../components/ui/FAQAccordion';
import CTABanner from '../components/ui/CTABanner';
import { FadeIn } from '../components/ui/AnimatedCounter';
import { getPracticeAreaBySlug } from '../data/practiceAreas';
import caseStudies from '../data/caseStudies';
import siteConfig from '../data/siteConfig';

export default function PracticeAreaDetail() {
  const { slug } = useParams();
  const area = getPracticeAreaBySlug(slug);

  if (!area) return <Navigate to="/practice-areas" replace />;

  const relatedCases = caseStudies.filter((c) => c.practiceArea === slug);

  return (
    <>
      <SEO
        title={area.title}
        description={area.shortDescription}
        path={`/practice-areas/${slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Practice Areas', path: '/practice-areas' },
          { name: area.title, path: `/practice-areas/${slug}` },
        ]}
      />

      <section className="bg-navy-900 pt-32 pb-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <nav className="text-sm text-cream-200/60 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-accent-400">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/practice-areas" className="hover:text-accent-400">Practice Areas</Link>
              <span className="mx-2">/</span>
              <span className="text-accent-400">{area.title}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{area.title}</h1>
            <div className="accent-divider mx-0 mb-6" />
            <p className="text-cream-200 text-lg max-w-3xl">{area.shortDescription}</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">Overview</h2>
                <p className="text-navy-700 leading-relaxed mb-8">{area.fullDescription}</p>

                <h3 className="text-xl font-serif font-semibold text-navy-900 mb-4">Services Offered</h3>
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {area.services.map((service) => (
                    <li key={service} className="flex items-start gap-2 text-navy-700">
                      <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" aria-hidden="true" />
                      {service}
                    </li>
                  ))}
                </ul>
              </FadeIn>

              {relatedCases.length > 0 && (
                <FadeIn delay={0.2}>
                  <h3 className="text-xl font-serif font-semibold text-navy-900 mb-4">Related Case Studies</h3>
                  <div className="space-y-4">
                    {relatedCases.map((c) => (
                      <div key={c.id} className="p-5 bg-cream-50 rounded-lg border border-cream-200">
                        <h4 className="font-semibold text-navy-900 mb-2">{c.title}</h4>
                        <p className="text-sm text-navy-600 mb-2">{c.summary}</p>
                        <p className="text-sm font-medium text-accent-600">Outcome: {c.outcome}</p>
                      </div>
                    ))}
                  </div>
                  <Link to="/case-studies" className="inline-flex items-center gap-1 text-accent-600 font-medium mt-4 hover:gap-2 transition-all">
                    View All Case Studies <ArrowRight className="w-4 h-4" />
                  </Link>
                </FadeIn>
              )}
            </div>

            <div>
              <FadeIn delay={0.3}>
                <div className="sticky top-28 bg-navy-900 rounded-lg p-8 text-white">
                  <h3 className="text-xl font-serif font-semibold mb-4">Need Help with {area.title}?</h3>
                  <p className="text-cream-200 text-sm mb-6">
                    Schedule a confidential consultation to discuss your case.
                  </p>
                  <Link
                    to="/consultation"
                    className="block w-full text-center px-6 py-3 bg-accent-500 text-white font-semibold rounded-md hover:bg-accent-600 transition-colors mb-3"
                  >
                    Book Consultation
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 border border-white/30 font-semibold rounded-md hover:bg-white/10 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {area.faqs && area.faqs.length > 0 && (
        <section className="section-padding bg-cream-50">
          <div className="container-custom max-w-3xl">
            <SectionHeading subtitle="FAQ" title={`${area.title} — Common Questions`} />
            <FAQAccordion items={area.faqs} />
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
