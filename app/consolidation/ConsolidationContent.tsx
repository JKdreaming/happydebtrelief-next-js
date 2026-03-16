'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface FAQ {
  question: string;
  answer: string;
}

interface QuizData {
  debtAmount?: number;
  creditScore?: string;
  pathway?: string;
}

export default function ConsolidationContent({ faqs }: { faqs: FAQ[] }) {
  const [quizData, setQuizData] = useState<QuizData | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('debt_pathway_quiz');
      if (stored) setQuizData(JSON.parse(stored));
    } catch {}
  }, []);

  return (
    <article>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-white py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-primary/10 text-brand-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Most Popular Solution
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-tight mb-6">
              Debt Consolidation Loans
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Combine multiple high-interest debts into one simple, fixed-rate payment. Cut your interest rates by up to 50% and see your exact debt-free date from day one.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-started"
                className="bg-brand-primary text-white px-8 py-3.5 rounded-full font-medium hover:bg-green-600 transition-all hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <i className="fa-solid fa-clipboard-check" /> Check My Options
              </Link>
              <Link
                href="/calculator"
                className="border border-slate-300 text-slate-700 px-8 py-3.5 rounded-full font-medium hover:bg-slate-50 transition-all inline-flex items-center gap-2"
              >
                <i className="fa-solid fa-calculator" /> Calculate Savings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Section */}
      {quizData && (
        <section className="py-12 bg-green-50 border-y border-green-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-green-100 max-w-3xl mx-auto">
              <h2 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <i className="fa-solid fa-user-check text-brand-primary" /> Your Personalized Insights
              </h2>
              <p className="text-slate-600">
                Based on your assessment, debt consolidation
                {quizData.debtAmount && <> for your <strong>${quizData.debtAmount.toLocaleString()}</strong> in debt</>}
                {quizData.creditScore && <> with a <strong>{quizData.creditScore}</strong> credit profile</>}
                {' '}could significantly reduce your monthly payments and total interest paid.
              </p>
              <Link href="/get-started" className="inline-flex items-center gap-2 text-brand-primary font-medium mt-4 hover:underline">
                Update your assessment <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center mb-4">How Debt Consolidation Works</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">Three simple steps to lower payments and a clear path to being debt-free.</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', icon: 'fa-magnifying-glass-dollar', title: 'Assess Your Debt', desc: 'We analyze your balances, interest rates, and credit profile to find the best consolidation options for your situation.' },
              { step: '2', icon: 'fa-file-signature', title: 'Choose Your Offer', desc: 'Compare personalized loan offers with fixed rates, clear terms, and no hidden fees. Pick the one that fits your budget.' },
              { step: '3', icon: 'fa-champagne-glasses', title: 'One Payment, Done', desc: 'Your old debts are paid off. You make one simple monthly payment at a lower rate with a guaranteed payoff date.' },
            ].map((item) => (
              <div key={item.step} className="text-center p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <i className={`fa-solid ${item.icon} text-xl`} />
                </div>
                <span className="text-xs font-semibold text-brand-primary uppercase tracking-wider">Step {item.step}</span>
                <h3 className="text-xl font-semibold text-slate-900 mt-2 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center mb-16">Why Consolidation Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: 'fa-percent', title: 'Lower Interest Rates', desc: 'Replace 20–29% APR credit cards with a fixed rate as low as 7%.' },
              { icon: 'fa-calendar-check', title: 'Fixed Payoff Date', desc: 'Know exactly when you will be debt-free — no more minimum-payment treadmill.' },
              { icon: 'fa-wallet', title: 'One Monthly Payment', desc: 'Simplify your finances with a single payment instead of juggling multiple bills.' },
              { icon: 'fa-chart-line', title: 'Credit Score Boost', desc: 'Reducing utilization and building payment history can improve your score over time.' },
            ].map((b, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center mb-4">
                  <i className={`fa-solid ${b.icon}`} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-center mb-12">Everything you need to know about debt consolidation.</p>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-green-600">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Ready to Simplify Your Debt?</h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Take our free 5-minute assessment and get personalized consolidation offers — no impact to your credit score.
          </p>
          <Link
            href="/get-started"
            className="bg-white text-brand-primary px-10 py-4 rounded-full font-semibold hover:bg-green-50 transition-all hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2 text-lg"
          >
            <i className="fa-solid fa-clipboard-check" /> Start Free Assessment
          </Link>
        </div>
      </section>
    </article>
  );
}