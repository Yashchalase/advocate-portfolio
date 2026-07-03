import SEO from '../components/seo/SEO';
import { FAQSchema } from '../components/seo/SchemaMarkup';
import SectionHeading from '../components/ui/SectionHeading';
import FAQAccordion from '../components/ui/FAQAccordion';
import CTABanner from '../components/ui/CTABanner';
import { FadeIn } from '../components/ui/AnimatedCounter';
import faqItems from '../data/faq';
import siteConfig from '../data/siteConfig';

export default function FAQPage() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description={`Common questions about legal services, consultation fees, and process — answered by ${siteConfig.name}, advocate in ${siteConfig.city}.`}
        path="/faq"
      />
      <FAQSchema items={faqItems} />

      <section className="bg-navy-900 pt-32 pb-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-accent-400 font-semibold uppercase tracking-widest text-sm mb-3">FAQ</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Frequently Asked Questions</h1>
            <div className="accent-divider mb-6" />
            <p className="text-cream-200 text-lg max-w-2xl mx-auto">
              Answers to common questions about consultations, fees, and the legal process.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-custom max-w-3xl">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
