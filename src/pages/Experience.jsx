import SEO from '../components/seo/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import CTABanner from '../components/ui/CTABanner';
import { FadeIn } from '../components/ui/AnimatedCounter';
import experienceTimeline, { courts } from '../data/experience';
import siteConfig from '../data/siteConfig';
import { Briefcase, GraduationCap, Award, BookOpen, Milestone } from 'lucide-react';

const typeIcons = {
  career: Briefcase,
  education: GraduationCap,
  award: Award,
  publication: BookOpen,
  milestone: Milestone,
};

const typeColors = {
  career: 'bg-navy-900',
  education: 'bg-accent-500',
  award: 'bg-maroon-600',
  publication: 'bg-navy-700',
  milestone: 'bg-accent-600',
};

export default function ExperiencePage() {
  return (
    <>
      <SEO
        title="Experience & Timeline"
        description={`Career timeline and professional experience of ${siteConfig.name} — courts practiced, milestones, and legal career journey.`}
        path="/experience"
      />

      <section className="bg-navy-900 pt-32 pb-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-accent-400 font-semibold uppercase tracking-widest text-sm mb-3">Career</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Experience & Timeline</h1>
            <div className="accent-divider mb-6" />
            <p className="text-cream-200 text-lg max-w-2xl mx-auto">
              A journey of over two decades in Indian courts and legal practice.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-cream-200 md:-translate-x-px" aria-hidden="true" />

            {experienceTimeline.map((item, i) => {
              const Icon = typeIcons[item.type] || Briefcase;
              const isEven = i % 2 === 0;

              return (
                <FadeIn key={item.year + item.title} delay={i * 0.05}>
                  <div className={`relative flex items-start gap-6 mb-10 md:mb-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`hidden md:block md:w-1/2 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                      <span className="text-2xl font-serif font-bold text-accent-600">{item.year}</span>
                    </div>

                    <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full ${typeColors[item.type]} flex items-center justify-center z-10 shadow-md`}>
                      <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>

                    <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                      <span className="md:hidden text-lg font-serif font-bold text-accent-600">{item.year}</span>
                      <h3 className="text-lg font-serif font-semibold text-navy-900 mt-1 mb-2">{item.title}</h3>
                      <p className="text-sm text-navy-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <SectionHeading subtitle="Jurisdiction" title="Courts Practiced Before" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {courts.map((court, i) => (
              <FadeIn key={court} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-cream-200">
                  <div className="w-2 h-2 rounded-full bg-accent-500 shrink-0" />
                  <span className="text-sm text-navy-800">{court}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
