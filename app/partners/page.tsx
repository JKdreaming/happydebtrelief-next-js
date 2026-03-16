import { generatePageMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import PartnersContent from './PartnersContent';

export const metadata = generatePageMetadata({
  title: 'Compare Qualifying Offers — Find Your Best Match',
  description: 'See personalized loan and settlement offers from our lending partners. Compare rates, terms, and monthly payments side-by-side.',
  path: '/partners',
});

const breadcrumbs = [
  { name: 'Home', url: 'https://www.happydebtrelief.com' },
  { name: 'Compare Partners', url: 'https://www.happydebtrelief.com/partners' },
];

export default function PartnersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <PartnersContent />
    </>
  );
}

