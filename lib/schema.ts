const BASE_URL = "https://www.happydebtrelief.com";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Happy Debt Relief",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      "Expert debt consolidation and relief solutions. Lower your payments, reduce interest rates, and become debt-free faster.",
    sameAs: [],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  slug: string;
  date: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${BASE_URL}/articles/${article.slug}`,
    datePublished: article.date,
    image: article.image,
    publisher: {
      "@type": "Organization",
      name: "Happy Debt Relief",
      url: BASE_URL,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

