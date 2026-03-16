import { generatePageMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import HowItWorksContent from './HowItWorksContent';

export const metadata = generatePageMetadata({
  title: 'How Our Debt Assessment Works — Inside the Recommendation Engine',
  description: 'Our proprietary assessment analyzes your financial profile across 12+ data points to match you with the optimal debt relief path.',
  path: '/how-it-works',
});

const breadcrumbs = [
  { name: 'Home', url: 'https://www.happydebtrelief.com' },
  { name: 'How It Works', url: 'https://www.happydebtrelief.com/how-it-works' },
];

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <HowItWorksContent />
    </>
  );
}

