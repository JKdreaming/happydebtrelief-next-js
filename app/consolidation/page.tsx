import { generatePageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import ConsolidationContent from './ConsolidationContent';

export const metadata = generatePageMetadata({
  title: 'Debt Consolidation Loans — Lower Interest, One Simple Payment',
  description: 'Consolidate high-interest credit card debt into one low fixed-rate loan. Cut rates by up to 50% and see your exact debt-free date.',
  path: '/consolidation',
});

const faqs = [
  {
    question: 'What is debt consolidation?',
    answer: 'Debt consolidation combines multiple debts — such as credit cards, medical bills, and personal loans — into a single loan with one monthly payment, typically at a lower interest rate. This simplifies your finances and can save you thousands in interest over the life of the loan.',
  },
  {
    question: 'How much can I save with debt consolidation?',
    answer: 'Most borrowers save between 30–50% on interest charges by consolidating high-rate credit card debt (often 20–29% APR) into a fixed-rate consolidation loan (typically 7–15% APR). On $30,000 of debt, that can mean saving $5,000–$12,000 over a 3–5 year repayment term.',
  },
  {
    question: 'Will debt consolidation hurt my credit score?',
    answer: 'Initially, a hard credit inquiry may cause a small, temporary dip of 5–10 points. However, consolidation often improves your credit score over time by reducing your credit utilization ratio and establishing a consistent payment history on the new loan.',
  },
  {
    question: 'What credit score do I need to qualify?',
    answer: 'Most consolidation lenders require a minimum credit score of 580–620 for approval. Borrowers with scores above 670 typically qualify for the best interest rates. Even if your score is lower, options like secured loans or credit union programs may be available.',
  },
  {
    question: 'How long does the consolidation process take?',
    answer: 'From application to funding, the process typically takes 3–7 business days. Our assessment takes about 5 minutes, after which you receive personalized loan offers. Once you accept an offer, funds are usually disbursed within 1–3 business days and sent directly to your creditors.',
  },
  {
    question: 'Can I consolidate debt if I own a home?',
    answer: 'Yes. Homeowners have additional options, including home equity loans (HELOCs) that often offer lower rates than unsecured consolidation loans. However, these use your home as collateral, so it is important to weigh the risks. Our assessment will recommend the best path for your situation.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://www.happydebtrelief.com' },
  { name: 'Debt Consolidation', url: 'https://www.happydebtrelief.com/consolidation' },
];

export default function ConsolidationPage() {
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
      <ConsolidationContent faqs={faqs} />
    </>
  );
}

