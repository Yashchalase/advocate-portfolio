import SEO from '../components/seo/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/AnimatedCounter';
import CTABanner from '../components/ui/CTABanner';
import siteConfig from '../data/siteConfig';
import { aboutBio, education, awards, memberships } from '../data/experience';
import { Award, GraduationCap, Users } from 'lucide-react';

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description={`Learn about ${siteConfig.name} — qualifications, career journey, awards, and professional memberships.`}
        path="/about"
      />

      {/* Page Header */}
      <section className="bg-navy-900 pt-32 pb-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-accent-400 font-semibold uppercase tracking-widest text-sm mb-3">About</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">About Me</h1>
            <div className="accent-divider mb-6" />
            <p className="text-cream-200 text-lg max-w-2xl mx-auto">{aboutBio.intro}</p>
          </FadeIn>
        </div>
      </section>

      {/* Bio */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="max-w-xs mx-auto lg:mx-0">
                <img
                  src={siteConfig.images.about}
                  alt={`${siteConfig.name} in professional setting`}
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
                  loading="lazy"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">My Story</h2>
              <div className="accent-divider mx-0 mb-6" />
              <div className="space-y-4 text-navy-700 leading-relaxed">
                {aboutBio.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8 p-4 bg-cream-50 rounded-lg border border-cream-200">
                <p className="text-sm text-navy-600">
                  <strong className="text-navy-900">Bar Council Enrollment:</strong>{' '}
                  {siteConfig.barCouncil.enrollmentNumber} ({siteConfig.barCouncil.council}, {siteConfig.barCouncil.year})
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <SectionHeading subtitle="Qualifications" title="Education & Credentials" align="left" />
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {education.map((edu) => (
              <StaggerItem key={edu.degree}>
                <div className="bg-white rounded-lg border border-cream-200 p-6 h-full">
                  <GraduationCap className="w-8 h-8 text-accent-500 mb-4" aria-hidden="true" />
                  <h3 className="font-serif font-semibold text-navy-900 mb-2">{edu.degree}</h3>
                  <p className="text-sm text-navy-600">{edu.institution}</p>
                  <p className="text-sm text-accent-600 font-medium mt-2">{edu.year}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Awards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading subtitle="Recognition" title="Awards & Honors" />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {awards.map((award, i) => (
              <FadeIn key={award.title} delay={i * 0.1}>
                <div className="flex gap-4 p-6 bg-cream-50 rounded-lg border border-cream-200">
                  <Award className="w-8 h-8 text-accent-500 shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-serif font-semibold text-navy-900">{award.title}</h3>
                    <p className="text-sm text-navy-600">{award.org} — {award.year}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <SectionHeading subtitle="Professional Bodies" title="Memberships" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {memberships.map((m, i) => (
              <FadeIn key={m} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-cream-200">
                  <Users className="w-5 h-5 text-accent-500 shrink-0" aria-hidden="true" />
                  <span className="text-sm text-navy-800">{m}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading subtitle="Gallery" title="Office & Courtroom" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {siteConfig.images.gallery.map((img, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <img
                  src={img}
                  alt={`Professional gallery image ${i + 1} — office and courtroom settings`}
                  className="rounded-lg w-full h-48 object-cover hover:opacity-90 transition-opacity"
                  loading="lazy"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
