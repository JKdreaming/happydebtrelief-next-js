import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import { articles, categoryMeta, type Article } from '@/data/articles';

export const metadata = generatePageMetadata({
  title: 'Debt Relief Articles & Guides — Strategies, Education & Success Stories',
  description:
    'Explore in-depth guides on debt consolidation, HELOCs, settlement strategies, and real success stories to help you become debt-free faster.',
  path: '/articles',
});

const breadcrumbs = [
  { name: 'Home', url: 'https://www.happydebtrelief.com' },
  { name: 'Articles', url: 'https://www.happydebtrelief.com/articles' },
];

const categories: Article['category'][] = ['Strategy', 'Education', 'Lifestyle', 'News', 'Success'];

function ArticleCard({ article }: { article: Article }) {
  const meta = categoryMeta[article.category];
  return (
    <Link
      href={`/articles/${article.id}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${article.color} opacity-40 group-hover:opacity-60 transition-opacity`} />
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${meta.bgColor} ${meta.color}`}>
          {meta.label}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
          {article.title}
        </h3>
        <p className="text-sm text-slate-500 line-clamp-2">{article.excerpt}</p>
        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
          Read Article <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
}

export default function ArticlesPage() {
  const grouped = categories.reduce(
    (acc, cat) => {
      acc[cat] = articles.filter((a) => a.category === cat);
      return acc;
    },
    {} as Record<Article['category'], Article[]>,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Debt Relief Articles & Guides',
            description:
              'Explore in-depth guides on debt consolidation, HELOCs, settlement strategies, and real success stories.',
            url: 'https://www.happydebtrelief.com/articles',
            publisher: {
              '@type': 'Organization',
              name: 'Happy Debt Relief',
              url: 'https://www.happydebtrelief.com',
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            Articles & <span className="font-semibold text-blue-400">Guides</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Expert-verified strategies, educational deep-dives, and real success stories to help you take control of your finances.
          </p>
        </div>
      </section>

      {/* Articles by Category */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          {categories.map((cat) => {
            const meta = categoryMeta[cat];
            const catArticles = grouped[cat];
            if (!catArticles.length) return null;
            return (
              <div key={cat} className="mb-16 last:mb-0">
                <h2 className="text-2xl font-light text-slate-900 mb-8">
                  <span className={`font-semibold ${meta.color}`}>{meta.label}</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {catArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

