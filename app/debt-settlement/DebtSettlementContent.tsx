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

export default function DebtSettlementContent({ faqs }: { faqs: FAQ[] }) {
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
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-white py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-orange-100 text-orange-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Financial Hardship Option
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-tight mb-6">
              Debt Settlement
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
              When traditional repayment is not feasible, debt settlement can reduce what you owe by up to 50%. A last-resort alternative to bankruptcy with real results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-started"
                className="bg-orange-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-orange-700 transition-all hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <i className="fa-solid fa-clipboard-check" /> Free Assessment
              </Link>
              <Link
                href="/consolidation"
                className="border border-slate-300 text-slate-700 px-8 py-3.5 rounded-full font-medium hover:bg-slate-50 transition-all inline-flex items-center gap-2"
              >
                <i className="fa-solid fa-scale-balanced" /> Compare Options
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Personalized Section */}
      {quizData && (
        <section className="py-12 bg-orange-50 border-y border-orange-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-orange-100 max-w-3xl mx-auto">
              <h2 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <i className="fa-solid fa-user-check text-orange-600" /> Your Personalized Insights
              </h2>
              <p className="text-slate-600">
                Based on your assessment
                {quizData.debtAmount && <>, your <strong>${quizData.debtAmount.toLocaleString()}</strong> in debt</>}
                {' '}has been evaluated for settlement potential. We recommend exploring all options before choosing settlement.
              </p>
              <Link href="/get-started" className="inline-flex items-center gap-2 text-orange-600 font-medium mt-4 hover:underline">
                Update your assessment <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* How Settlement Works */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center mb-4">How Debt Settlement Works</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">Understanding the negotiation process and what to expect.</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', icon: 'fa-pause-circle', title: 'Stop Payments', desc: 'You stop paying creditors directly and instead deposit funds into a dedicated savings account that builds your negotiation leverage.' },
              { step: '2', icon: 'fa-comments-dollar', title: 'Negotiate', desc: 'Once sufficient funds accumulate, negotiators contact your creditors to reach settlement agreements — typically 40–60% of the balance.' },
              { step: '3', icon: 'fa-handshake', title: 'Settle & Resolve', desc: 'Accepted settlements are paid from your savings account. Each settled debt is marked as resolved, and you move closer to being debt-free.' },
            ].map((item) => (
              <div key={item.step} className="text-center p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <i className={`fa-solid ${item.icon} text-xl`} />
                </div>
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">Step {item.step}</span>
                <h3 className="text-xl font-semibold text-slate-900 mt-2 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Considerations */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center mb-4">Important Considerations</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">Settlement is powerful but comes with trade-offs. Know the full picture.</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-green-200">
              <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
                <i className="fa-solid fa-circle-check" /> Potential Benefits
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-green-500 mt-1" /> Reduce total debt by 30–50%</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-green-500 mt-1" /> Avoid bankruptcy filing</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-green-500 mt-1" /> Resolve debts in 2–4 years</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-green-500 mt-1" /> One monthly savings deposit</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-red-200">
              <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center gap-2">
                <i className="fa-solid fa-triangle-exclamation" /> Risks to Consider
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2"><i className="fa-solid fa-xmark text-red-500 mt-1" /> Significant credit score impact</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-xmark text-red-500 mt-1" /> Potential for creditor lawsuits</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-xmark text-red-500 mt-1" /> Forgiven debt may be taxable</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-xmark text-red-500 mt-1" /> Not all debts are eligible</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-center mb-12">Common questions about the debt settlement process.</p>
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Not Sure If Settlement Is Right for You?</h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Our free assessment compares all options — consolidation, HELOC, and settlement — so you can make an informed decision.
          </p>
          <Link
            href="/get-started"
            className="bg-white text-orange-600 px-10 py-4 rounded-full font-semibold hover:bg-orange-50 transition-all hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2 text-lg"
          >
            <i className="fa-solid fa-clipboard-check" /> Get Free Assessment
          </Link>
        </div>
      </section>
    </article>
  );
}