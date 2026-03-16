import { generatePageMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import CalculatorContent from './CalculatorContent';

export const metadata = generatePageMetadata({
  title: 'Debt Savings Calculator — See How Much You Could Save',
  description: 'Calculate your potential savings with debt consolidation, HELOC, or settlement. Compare monthly payments and total interest saved.',
  path: '/calculator',
});

const breadcrumbs = [
  { name: 'Home', url: 'https://www.happydebtrelief.com' },
  { name: 'Savings Calculator', url: 'https://www.happydebtrelief.com/calculator' },
];

export default function CalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <CalculatorContent />
    </>
  );
}

