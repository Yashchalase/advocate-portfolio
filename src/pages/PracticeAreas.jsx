import SEO from '../components/seo/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import PracticeAreaCard from '../components/ui/PracticeAreaCard';
import CTABanner from '../components/ui/CTABanner';
import { FadeIn } from '../components/ui/AnimatedCounter';
import practiceAreas from '../data/practiceAreas';
import siteConfig from '../data/siteConfig';

export default function PracticeAreas() {
  return (
    <>
      <SEO
        title="Practice Areas"
        description={`Legal practice areas of ${siteConfig.name} — criminal law, civil litigation, corporate law, family law, property law, and intellectual property in ${siteConfig.city}.`}
        path="/practice-areas"
      />

      <section className="bg-navy-900 pt-32 pb-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-accent-400 font-semibold uppercase tracking-widest text-sm mb-3">Services</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Practice Areas</h1>
            <div className="accent-divider mb-6" />
            <p className="text-cream-200 text-lg max-w-2xl mx-auto">
              Comprehensive legal representation across diverse areas of Indian law.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, i) => (
              <PracticeAreaCard key={area.slug} area={area} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Area Applies?"
        description="Contact me for a consultation and I'll help identify the best legal approach for your situation."
      />
    </>
  );
}
