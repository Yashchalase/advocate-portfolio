import SEO from '../components/seo/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import CTABanner from '../components/ui/CTABanner';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/AnimatedCounter';
import testimonials, { averageRating, totalReviews } from '../data/testimonials';
import siteConfig from '../data/siteConfig';
import { Star } from 'lucide-react';

export default function TestimonialsPage() {
  return (
    <>
      <SEO
        title="Client Testimonials"
        description={`Read client reviews and testimonials for ${siteConfig.name}. Rated ${averageRating}/5 based on ${totalReviews} reviews.`}
        path="/testimonials"
      />

      <section className="bg-navy-900 pt-32 pb-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-accent-400 font-semibold uppercase tracking-widest text-sm mb-3">Reviews</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Client Testimonials</h1>
            <div className="accent-divider mb-6" />
            <div className="flex items-center justify-center gap-2 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent-500 fill-accent-500" aria-hidden="true" />
              ))}
            </div>
            <p className="text-cream-200 text-lg">
              {averageRating} out of 5 based on {totalReviews} client reviews
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <StaggerItem key={t.id}>
                <article className="bg-white rounded-lg border border-cream-200 p-6 md:p-8 h-full flex flex-col card-hover">
                  <div className="flex gap-0.5 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < t.rating ? 'text-accent-500 fill-accent-500' : 'text-cream-200'}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="text-navy-700 leading-relaxed flex-1 mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <div className="pt-4 border-t border-cream-100">
                    <p className="font-semibold text-navy-900">{t.name}</p>
                    <p className="text-sm text-navy-500">{t.designation}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
