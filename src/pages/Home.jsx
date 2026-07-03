import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Scale, HeartHandshake, Target, Shield } from 'lucide-react';
import SEO from '../components/seo/SEO';
import { AttorneySchema, LegalServiceSchema } from '../components/seo/SchemaMarkup';
import SectionHeading from '../components/ui/SectionHeading';
import AnimatedCounter, { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/AnimatedCounter';
import PracticeAreaCard from '../components/ui/PracticeAreaCard';
import TestimonialCarousel from '../components/ui/TestimonialCarousel';
import CTABanner from '../components/ui/CTABanner';
import siteConfig from '../data/siteConfig';
import practiceAreas from '../data/practiceAreas';
import testimonials from '../data/testimonials';
import blogPosts from '../data/blog';

const uspIcons = { Scale, HeartHandshake, Target, Shield };

export default function Home() {
  return (
    <>
      <SEO
        title={`${siteConfig.name} — Advocate in ${siteConfig.city}`}
        description={siteConfig.description}
        path="/"
      />
      <AttorneySchema />
      <LegalServiceSchema />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-navy-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={siteConfig.images.hero}
            alt="Law books and scales of justice representing legal practice"
            className="w-full h-full object-cover opacity-15 scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/98 to-navy-800/90" />
          <div className="absolute inset-0 hero-glow" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent-600/10 rounded-full blur-3xl" aria-hidden="true" />
        </div>

        <div className="container-custom relative z-10 section-padding pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" aria-hidden="true" />
                <p className="text-accent-400 font-medium uppercase tracking-widest text-xs">
                  {siteConfig.title}
                </p>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-5 text-balance max-w-lg">
                {siteConfig.name}
              </h1>
              <p className="text-base md:text-lg text-silver-300 leading-relaxed mb-8 max-w-lg">
                {siteConfig.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/consultation" className="btn-primary">
                  Book Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/practice-areas" className="btn-outline-light">
                  View Practice Areas
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative w-[220px] xl:w-[240px]">
                <div className="absolute -inset-1 bg-gradient-to-br from-accent-500/60 via-accent-600/30 to-transparent rounded-2xl blur-sm" aria-hidden="true" />
                <div className="absolute -top-4 -right-4 w-full h-full border border-accent-500/30 rounded-2xl" aria-hidden="true" />
                <div className="absolute -bottom-4 -left-4 w-full h-full border border-white/10 rounded-2xl" aria-hidden="true" />
                <img
                  src={siteConfig.images.portrait}
                  alt={`Professional portrait of ${siteConfig.name}`}
                  className="relative rounded-2xl w-full object-cover aspect-[3/4] shadow-2xl shadow-black/50 ring-1 ring-white/10"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-silver-400/60" aria-hidden="true">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-accent-400 to-transparent"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-8 z-20" aria-label="Key statistics">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {siteConfig.stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="stat-card group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 to-accent-400 rounded-t-xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left" aria-hidden="true" />
                  <p className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs md:text-sm text-navy-500 uppercase tracking-wide font-medium">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="section-padding bg-cream-50 pt-20">
        <div className="container-custom">
          <SectionHeading
            subtitle="Expertise"
            title="Practice Areas"
            description="Comprehensive legal services across multiple domains of Indian law."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.slice(0, 6).map((area, i) => (
              <PracticeAreaCard key={area.slug} area={area} index={i} />
            ))}
          </div>
          <FadeIn className="text-center mt-12">
            <Link
              to="/practice-areas"
              className="inline-flex items-center gap-2 px-6 py-3 text-accent-600 font-semibold border border-accent-500/30 rounded-lg hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-all"
            >
              View All Practice Areas <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Why Choose Me"
            title="Trusted Legal Partner"
            description="A commitment to excellence, integrity, and results-driven advocacy."
          />
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.usps.map((usp) => {
              const Icon = uspIcons[usp.icon] || Scale;
              return (
                <StaggerItem key={usp.title}>
                  <div className="group text-center p-8 rounded-2xl border border-cream-200 bg-cream-50/50 hover:bg-white hover:border-accent-500/20 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-300 h-full">
                    <div className="w-16 h-16 rounded-2xl bg-navy-900 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent-500 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-navy-900 mb-3">{usp.title}</h3>
                    <p className="text-sm text-navy-600 leading-relaxed">{usp.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-b from-cream-100 to-cream-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Client Reviews"
            title="What Clients Say"
            description="Trusted by individuals and businesses across Delhi and India."
          />
          <TestimonialCarousel testimonials={testimonials.slice(0, 4)} />
          <FadeIn className="text-center mt-10">
            <Link to="/testimonials" className="text-accent-600 font-semibold hover:text-accent-500 transition-colors">
              Read All Testimonials →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Legal Insights"
            title="Recent Articles"
            description="Expert legal knowledge to help you understand your rights and options."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.1}>
                <article className="group bg-white rounded-2xl border border-cream-200 overflow-hidden card-hover h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wide text-accent-600">{post.category}</span>
                    <h3 className="text-lg font-serif font-semibold text-navy-900 mt-2 mb-3 line-clamp-2">
                      <Link to={`/blog/${post.slug}`} className="hover:text-accent-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-navy-600 line-clamp-2 flex-1">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent-600 mt-4 hover:gap-2 transition-all"
                    >
                      Read More <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
