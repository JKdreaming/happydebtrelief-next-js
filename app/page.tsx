import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { organizationSchema, faqSchema } from "@/lib/schema";
import Hero from "@/components/Hero";
import PathSelection from "@/components/PathSelection";
import Pillars from "@/components/Pillars";
import GrowthEngine from "@/components/GrowthEngine";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import DualSplit from "@/components/DualSplit";
import CtaBand from "@/components/CtaBand";
import GradientCards from "@/components/GradientCards";
import Team from "@/components/Team";
import BlogSection from "@/components/BlogSection";

export const metadata: Metadata = generatePageMetadata({
  title: "Happy Debt Relief — Lower Your Payments, Eliminate Debt Faster",
  description:
    "Compare debt consolidation, HELOC, and settlement options. Get matched with the right solution in minutes. No credit impact to check your rate.",
  path: "/",
});

const homeFaqs = [
  {
    question: "What is debt consolidation?",
    answer:
      "Debt consolidation combines multiple debts into a single loan with a lower interest rate, reducing your monthly payment and simplifying your finances.",
  },
  {
    question: "Will checking my rate affect my credit score?",
    answer:
      "No. We use a soft credit pull to check your rate, which does not impact your credit score. A hard pull only occurs if you choose to proceed with a loan.",
  },
  {
    question: "How quickly can I get funded?",
    answer:
      "Most applicants receive funds within 24 to 48 hours of loan approval. The entire process from application to funding can be completed online.",
  },
  {
    question: "What credit score do I need to qualify?",
    answer:
      "Consolidation loans typically require a credit score of 640 or higher. HELOC options are available for homeowners, and settlement programs are designed for those experiencing financial hardship regardless of credit score.",
  },
  {
    question: "How much can I save with debt consolidation?",
    answer:
      "On average, our customers save $580 per month by consolidating high-interest credit card debt into a lower-rate fixed loan. Your savings depend on your current rates and balances.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(homeFaqs)),
        }}
      />

      <Hero />
      <PathSelection />
      <Pillars />
      <GrowthEngine />
      <Features />

      {/* Dual Split 1: Acquisition/Problem */}
      <DualSplit
        type="acquisition"
        title="Stop the Interest Rate Bleed"
        body="If you are making minimum payments on high-interest cards, you are mostly paying interest, not principal. Consolidation stops this cycle instantly."
        bullets={[
          "Cut rates by up to 50%",
          "Stop compound interest growth",
          "See the exact date you will be debt-free",
        ]}
        pill="The Problem"
        imageSrc="https://picsum.photos/600/800?random=1"
        align="left"
      />

      {/* Dual Split 2: Retention/Solution */}
      <DualSplit
        type="retention"
        title="One Payment. Zero Stress."
        body="Replace the chaos of multiple due dates and varying amounts with a single, fixed monthly payment that fits your budget."
        bullets={[
          "Predictable monthly budgeting",
          "Autopay discounts available",
          "Improve your credit utilization ratio",
        ]}
        pill="The Solution"
        imageSrc="https://picsum.photos/600/800?random=2"
        align="right"
      />

      <Projects />
      <GradientCards />
      <Team />
      <BlogSection />
      <CtaBand />
    </>
  );
}
