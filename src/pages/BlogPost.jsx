import { Link, useParams, Navigate } from 'react-router-dom';
import { Clock, Calendar, Share2, ArrowLeft } from 'lucide-react';
import SEO from '../components/seo/SEO';
import { ArticleSchema, BreadcrumbSchema } from '../components/seo/SchemaMarkup';
import CTABanner from '../components/ui/CTABanner';
import { FadeIn } from '../components/ui/AnimatedCounter';
import { getBlogPostBySlug, blogPosts } from '../data/blog';
import siteConfig from '../data/siteConfig';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);
  const formattedDate = new Date(post.date).toLocaleDateString('en-IN', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  const handleShare = async () => {
    const url = `${siteConfig.url}/blog/${post.slug}`;
    if (navigator.share) {
      await navigator.share({ title: post.title, url });
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  return (
    <>
      <SEO title={post.title} description={post.excerpt} path={`/blog/${slug}`} image={post.image} type="article" />
      <ArticleSchema post={post} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${slug}` },
        ]}
      />

      <section className="bg-navy-900 pt-32 pb-12">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-4xl">
          <FadeIn>
            <Link to="/blog" className="inline-flex items-center gap-1 text-cream-200/70 hover:text-accent-400 text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <span className="text-xs font-semibold uppercase tracking-wide text-accent-400">{post.category}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mt-3 mb-6 text-balance">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-cream-200/70 text-sm">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {formattedDate}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
              <span>By {post.author}</span>
              <button onClick={handleShare} className="flex items-center gap-1 hover:text-accent-400 transition-colors ml-auto">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <FadeIn>
            <img src={post.image} alt={post.title} className="w-full h-64 md:h-80 object-cover rounded-lg mb-10" loading="lazy" />
            <div className="prose-legal" dangerouslySetInnerHTML={{ __html: post.content.trim() }} />
          </FadeIn>

          {related.length > 0 && (
            <FadeIn delay={0.2}>
              <h2 className="text-2xl font-serif font-bold text-navy-900 mt-12 mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link key={r.slug} to={`/blog/${r.slug}`} className="block p-5 bg-cream-50 rounded-lg border border-cream-200 hover:border-accent-500 transition-colors">
                    <span className="text-xs font-semibold uppercase text-accent-600">{r.category}</span>
                    <h3 className="font-serif font-semibold text-navy-900 mt-1">{r.title}</h3>
                  </Link>
                ))}
              </div>
            </FadeIn>
          )}
        </div>
      </article>

      <CTABanner
        title="Have a Legal Question?"
        description="This article is for informational purposes. For advice specific to your situation, schedule a consultation."
      />
    </>
  );
}
