import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Clock } from 'lucide-react';
import SEO from '../components/seo/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import CTABanner from '../components/ui/CTABanner';
import { FadeIn } from '../components/ui/AnimatedCounter';
import blogPosts, { blogCategories } from '../data/blog';
import siteConfig from '../data/siteConfig';

export default function BlogPage() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = blogPosts.filter((post) => {
    const matchCategory = category === 'All' || post.category === category;
    const matchSearch = !search ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <SEO
        title="Legal Insights & Blog"
        description={`Legal articles and insights by ${siteConfig.name} — expert guidance on property law, criminal law, family law, and more in ${siteConfig.city}.`}
        path="/blog"
      />

      <section className="bg-navy-900 pt-32 pb-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-accent-400 font-semibold uppercase tracking-widest text-sm mb-3">Blog</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Legal Insights</h1>
            <div className="accent-divider mb-6" />
            <p className="text-cream-200 text-lg max-w-2xl mx-auto">
              Expert legal knowledge to help you understand your rights and make informed decisions.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" aria-hidden="true" />
              <input
                type="search"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-cream-200 bg-white text-navy-800 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500"
                aria-label="Search blog articles"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === cat ? 'bg-navy-900 text-white' : 'bg-white text-navy-700 border border-cream-200 hover:border-accent-500'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.05}>
                <article className="bg-white rounded-lg border border-cream-200 overflow-hidden card-hover h-full flex flex-col">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" loading="lazy" />
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wide text-accent-600">{post.category}</span>
                    <h2 className="text-lg font-serif font-semibold text-navy-900 mt-2 mb-3 line-clamp-2">
                      <Link to={`/blog/${post.slug}`} className="hover:text-accent-600 transition-colors">{post.title}</Link>
                    </h2>
                    <p className="text-sm text-navy-600 line-clamp-3 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-cream-100">
                      <span className="text-xs text-navy-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                      <Link to={`/blog/${post.slug}`} className="text-sm font-medium text-accent-600 flex items-center gap-1 hover:gap-2 transition-all">
                        Read <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-navy-500 py-12">No articles found matching your search.</p>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
