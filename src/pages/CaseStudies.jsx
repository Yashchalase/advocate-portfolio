import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import CTABanner from '../components/ui/CTABanner';
import { FadeIn } from '../components/ui/AnimatedCounter';
import caseStudies from '../data/caseStudies';
import practiceAreas from '../data/practiceAreas';
import siteConfig from '../data/siteConfig';

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? caseStudies
    : caseStudies.filter((c) => c.practiceArea === filter);

  return (
    <>
      <SEO
        title="Case Studies"
        description={`Notable case studies and legal outcomes by ${siteConfig.name} across criminal, civil, family, property, and corporate law.`}
        path="/case-studies"
      />

      <section className="bg-navy-900 pt-32 pb-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-accent-400 font-semibold uppercase tracking-widest text-sm mb-3">Track Record</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Case Studies</h1>
            <div className="accent-divider mb-6" />
            <p className="text-cream-200 text-lg max-w-2xl mx-auto">
              Anonymized summaries of notable cases demonstrating legal expertise and successful outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all' ? 'bg-navy-900 text-white' : 'bg-white text-navy-700 border border-cream-200 hover:border-accent-500'
              }`}
            >
              All
            </button>
            {practiceAreas.map((area) => (
              <button
                key={area.slug}
                onClick={() => setFilter(area.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === area.slug ? 'bg-navy-900 text-white' : 'bg-white text-navy-700 border border-cream-200 hover:border-accent-500'
                }`}
              >
                {area.title}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((study, i) => (
              <FadeIn key={study.id} delay={i * 0.05}>
                <article className="bg-white rounded-lg border border-cream-200 p-6 md:p-8 card-hover h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wide text-accent-600 bg-accent-500/10 px-3 py-1 rounded-full">
                      {study.practiceAreaLabel}
                    </span>
                    <span className="text-xs text-navy-400">{study.year}</span>
                  </div>
                  <h2 className="text-xl font-serif font-semibold text-navy-900 mb-3">{study.title}</h2>
                  <p className="text-navy-600 text-sm leading-relaxed mb-4">{study.summary}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-cream-100">
                    <p className="text-sm font-medium text-green-700">{study.outcome}</p>
                    <span className="text-xs text-navy-400">{study.court}</span>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-navy-500 py-12">No case studies found for this practice area.</p>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
