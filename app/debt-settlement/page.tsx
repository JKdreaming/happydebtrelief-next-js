import { generatePageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import DebtSettlementContent from './DebtSettlementContent';

export const metadata = generatePageMetadata({
  title: 'Debt Settlement — Negotiate & Pay Less Than You Owe',
  description: 'Facing financial hardship? Debt settlement can reduce what you owe by up to 50%. Learn how negotiation works and if it is right for you.',
  path: '/debt-settlement',
});

const faqs = [
  {
    question: 'What is debt settlement?',
    answer: 'Debt settlement is a negotiation process where you (or a company on your behalf) work with creditors to accept a lump-sum payment that is less than the full amount owed. Typically used as a last resort before bankruptcy, settlement can reduce your total debt by 30–50%, though it comes with significant trade-offs including credit score impact.',
  },
  {
    question: 'How much can debt settlement reduce what I owe?',
    answer: 'On average, successful debt settlements result in paying 40–60% of the original balance. For example, if you owe $50,000, you might settle for $25,000–$30,000. Results vary significantly based on the creditor, the age of the debt, and your financial hardship situation.',
  },
  {
    question: 'Will debt settlement affect my credit score?',
    answer: 'Yes. Debt settlement typically causes a significant drop in your credit score — often 80–150 points or more. Settled accounts are reported as "settled for less than full amount" and remain on your credit report for 7 years. However, if you are already behind on payments, settlement may be less damaging than continued delinquency or bankruptcy.',
  },
  {
    question: 'How long does the debt settlement process take?',
    answer: 'The typical debt settlement program takes 2–4 years to complete. During this time, you save money in a dedicated account while the settlement company negotiates with your creditors. Individual settlements can be reached in as little as a few weeks once sufficient funds are available.',
  },
  {
    question: 'Is debt settlement right for me?',
    answer: 'Settlement may be appropriate if you have $10,000+ in unsecured debt, are experiencing genuine financial hardship, cannot qualify for consolidation loans, and want to avoid bankruptcy. It is generally not recommended if you can afford your minimum payments, have secured debts, or have a good credit score you want to preserve. Our free assessment can help determine the best path.',
  },
  {
    question: 'What types of debt can be settled?',
    answer: 'Debt settlement works primarily with unsecured debts including credit cards, medical bills, personal loans, and some private student loans. It does not work for secured debts (mortgages, auto loans), federal student loans, tax debts, or child support. Credit card debt is the most commonly settled type of debt.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://www.happydebtrelief.com' },
  { name: 'Debt Settlement', url: 'https://www.happydebtrelief.com/debt-settlement' },
];

export default function DebtSettlementPage() {
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
      <DebtSettlementContent faqs={faqs} />
    </>
  );
}

