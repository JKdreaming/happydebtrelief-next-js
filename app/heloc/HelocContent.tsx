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
  homeOwner?: boolean;
  pathway?: string;
}

export default function HelocContent({ faqs }: { faqs: FAQ[] }) {
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
      <section className="relative bg-gradient-to-br from-indigo-50 via-blue-50 to-white py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Homeowners Only
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-tight mb-6">
              HELOC Debt Consolidation
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Leverage your home equity to consolidate high-interest debt at prime rates as low as 6.5%. The smartest option for homeowners with $25k+ in debt.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-started"
                className="bg-indigo-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-indigo-700 transition-all hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <i className="fa-solid fa-house-chimney" /> Check My Equity
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
        <section className="py-12 bg-indigo-50 border-y border-indigo-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-indigo-100 max-w-3xl mx-auto">
              <h2 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <i className="fa-solid fa-user-check text-indigo-600" /> Your Personalized Insights
              </h2>
              <p className="text-slate-600">
                Based on your assessment
                {quizData.debtAmount && <>, your <strong>${quizData.debtAmount.toLocaleString()}</strong> in debt</>}
                {quizData.homeOwner && <> and homeowner status</>}
                {' '}could benefit from a HELOC consolidation strategy with rates significantly below standard credit cards.
              </p>
              <Link href="/get-started" className="inline-flex items-center gap-2 text-indigo-600 font-medium mt-4 hover:underline">
                Update your assessment <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* How HELOC Works */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center mb-4">How HELOC Consolidation Works</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">Turn your home equity into a powerful debt elimination tool.</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', icon: 'fa-house-chimney', title: 'Equity Assessment', desc: 'We estimate your available home equity and determine how much you could access through a HELOC to consolidate your debts.' },
              { step: '2', icon: 'fa-file-contract', title: 'Lender Matching', desc: 'Get matched with HELOC lenders offering competitive rates based on your equity, credit score, and debt profile.' },
              { step: '3', icon: 'fa-money-bill-transfer', title: 'Debt Payoff', desc: 'Use your HELOC funds to pay off high-interest credit cards and loans, then repay the HELOC at a fraction of the original rate.' },
            ].map((item) => (
              <div key={item.step} className="text-center p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <i className={`fa-solid ${item.icon} text-xl`} />
                </div>
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Step {item.step}</span>
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
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center mb-16">Why Homeowners Choose HELOC</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: 'fa-arrow-down', title: 'Lowest Rates Available', desc: 'Prime-based rates as low as 6.5% — far below credit cards and personal loans.' },
              { icon: 'fa-sack-dollar', title: 'Higher Borrowing Limits', desc: 'Access $50k–$500k+ depending on your equity — enough to consolidate all debts.' },
              { icon: 'fa-hand-holding-dollar', title: 'Tax-Deductible Interest', desc: 'HELOC interest may be tax-deductible when used to improve your home (consult your tax advisor).' },
              { icon: 'fa-rotate', title: 'Revolving Credit', desc: 'Unlike a fixed loan, you can draw and repay as needed during the draw period.' },
            ].map((b, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
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
          <p className="text-slate-600 text-center mb-12">Everything you need to know about HELOC debt consolidation.</p>
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
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Ready to Unlock Your Home Equity?</h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Find out how much you could save by consolidating with a HELOC. Free assessment, no obligation.
          </p>
          <Link
            href="/get-started"
            className="bg-white text-indigo-600 px-10 py-4 rounded-full font-semibold hover:bg-indigo-50 transition-all hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2 text-lg"
          >
            <i className="fa-solid fa-house-chimney" /> Start Free Assessment
          </Link>
        </div>
      </section>
    </article>
  );
}