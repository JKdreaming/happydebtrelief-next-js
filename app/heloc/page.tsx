import { generatePageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import HelocContent from './HelocContent';

export const metadata = generatePageMetadata({
  title: 'HELOC Debt Consolidation — Use Home Equity to Eliminate Debt',
  description: 'Homeowners: leverage your equity with a HELOC to consolidate debt at prime rates as low as 6.5%. Best for balances over $25k.',
  path: '/heloc',
});

const faqs = [
  {
    question: 'What is a HELOC?',
    answer: 'A Home Equity Line of Credit (HELOC) is a revolving credit line secured by the equity in your home. It works like a credit card with a much lower interest rate — often prime rate plus a small margin — making it one of the most cost-effective ways to consolidate high-interest debt.',
  },
  {
    question: 'How much equity do I need to qualify?',
    answer: 'Most lenders require at least 15–20% equity in your home after accounting for your existing mortgage. For example, if your home is worth $300,000 and you owe $200,000, you have $100,000 (33%) in equity. Lenders typically allow you to borrow up to 80–85% of your home value minus your mortgage balance.',
  },
  {
    question: 'What are the risks of using home equity for debt consolidation?',
    answer: 'The primary risk is that your home serves as collateral. If you cannot make payments, the lender can foreclose. Additionally, HELOC rates are often variable, meaning your payments could increase if interest rates rise. It is important to have stable income and a solid repayment plan before pursuing this option.',
  },
  {
    question: 'HELOC vs personal loan — which is better for debt consolidation?',
    answer: 'HELOCs typically offer lower interest rates (6–9%) compared to personal loans (8–20%) because they are secured by your home. HELOCs are better for larger balances ($25k+) and homeowners with significant equity. Personal loans are better for smaller amounts or renters who want a fixed rate with no collateral risk.',
  },
  {
    question: 'What credit score do I need for a HELOC?',
    answer: 'Most HELOC lenders require a minimum credit score of 620, though scores above 700 qualify for the best rates. Some credit unions may approve borrowers with scores as low as 600. Your debt-to-income ratio (ideally under 43%) and employment stability are also key factors in approval.',
  },
  {
    question: 'How long does it take to get a HELOC?',
    answer: 'The HELOC application and approval process typically takes 2–6 weeks, including the home appraisal. Once approved, you can draw funds immediately. Some lenders offer expedited processing for existing customers, potentially closing in as little as 10 business days.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://www.happydebtrelief.com' },
  { name: 'HELOC Debt Consolidation', url: 'https://www.happydebtrelief.com/heloc' },
];

export default function HelocPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <HelocContent faqs={faqs} />
    </>
  );
}

