import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { articles, getArticleBySlug, getArticlesByCategory, categoryMeta } from '@/data/articles';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return generatePageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/articles/${article.id}`,
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const meta = categoryMeta[article.category];
  const related = getArticlesByCategory(article.category)
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.happydebtrelief.com' },
    { name: 'Articles', url: 'https://www.happydebtrelief.com/articles' },
    { name: article.title, url: `https://www.happydebtrelief.com/articles/${article.id}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: article.title,
              description: article.excerpt,
              slug: article.id,
              date: article.date,
              image: article.image,
            }),
          ),
        }}
      />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/articles" className="hover:text-white transition-colors">Articles</Link></li>
              <li>/</li>
              <li className="text-slate-200 truncate max-w-[200px]">{article.title}</li>
            </ol>
          </nav>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${meta.bgColor} ${meta.color} mb-4`}>
            {meta.label}
          </span>
          <h1 className="text-3xl md:text-5xl font-light leading-tight mb-4">{article.title}</h1>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span>{article.date}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar — Table of Contents */}
            <aside className="lg:w-56 flex-shrink-0 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Contents</h2>
                <nav>
                  <ul className="space-y-2 text-sm">
                    {article.outline.map((item) => (
                      <li key={item.id}>
                        <span className="text-slate-500 hover:text-blue-600 transition-colors cursor-default">
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 order-1 lg:order-2">
              <div
                className="prose prose-slate prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </div>
        </div>
      </article>

      {/* Back to Articles */}
      <div className="bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl py-8">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft size={16} /> Back to All Articles
          </Link>
        </div>
      </div>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-light text-slate-900 mb-8">
              More in <span className={`font-semibold ${meta.color}`}>{meta.label}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/articles/${rel.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img src={rel.image} alt={rel.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${rel.color} opacity-40`} />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-slate-400 mb-2">{rel.readTime}</div>
                    <h3 className="text-base font-medium text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">{rel.title}</h3>
                    <div className="mt-3 flex items-center gap-1 text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

