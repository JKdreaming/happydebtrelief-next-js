import { generatePageMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import GetStartedContent from './GetStartedContent';

export const metadata = generatePageMetadata({
  title: 'Start Your Free Debt Assessment — 2 Minutes, No Credit Impact',
  description: 'Take our quick financial assessment to discover your best path to debt freedom. Get matched with consolidation, HELOC, or settlement options.',
  path: '/get-started',
});

const breadcrumbs = [
  { name: 'Home', url: 'https://www.happydebtrelief.com' },
  { name: 'Get Started', url: 'https://www.happydebtrelief.com/get-started' },
];

export default function GetStartedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <GetStartedContent />
    </>
  );
}

