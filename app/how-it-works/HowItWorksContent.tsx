'use client';

import Link from 'next/link';

export default function HowItWorksContent() {
  return (
    <article>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-slate-50 to-white py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Transparent Process
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-tight mb-6">
              How Our Debt Assessment Works
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Our proprietary recommendation engine analyzes your financial profile across 12+ data points to match you with the optimal debt relief path — in under 5 minutes.
            </p>
            <Link
              href="/get-started"
              className="bg-brand-primary text-white px-8 py-3.5 rounded-full font-medium hover:bg-green-600 transition-all hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <i className="fa-solid fa-clipboard-check" /> Start Your Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center mb-4">The 4-Step Process</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">From assessment to action — here is exactly what happens.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: '1', icon: 'fa-clipboard-question', title: 'Quick Assessment', desc: 'Answer questions about your debts, income, credit profile, and financial goals. Takes about 5 minutes — no SSN required.' },
              { step: '2', icon: 'fa-microchip', title: 'Smart Analysis', desc: 'Our engine evaluates 12+ factors including debt-to-income ratio, interest rates, credit utilization, and homeownership status.' },
              { step: '3', icon: 'fa-route', title: 'Pathway Match', desc: 'We match you with the best strategy: consolidation loan, HELOC, settlement, or a hybrid approach — with projected savings and timelines.' },
              { step: '4', icon: 'fa-handshake', title: 'Partner Connection', desc: 'We connect you with vetted lending partners who compete for your business, ensuring you get the best rates and terms available.' },
            ].map((item) => (
              <div key={item.step} className="relative p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow bg-white">
                <div className="absolute -top-4 left-8 bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <div className="w-14 h-14 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mb-5 mt-2">
                  <i className={`fa-solid ${item.icon} text-xl`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Data Points */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center mb-4">12+ Data Points Analyzed</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">Our engine considers the full picture of your financial health.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: 'fa-credit-card', label: 'Total Debt Balance' },
              { icon: 'fa-percent', label: 'Average Interest Rate' },
              { icon: 'fa-chart-simple', label: 'Credit Score Range' },
              { icon: 'fa-money-bill-wave', label: 'Monthly Income' },
              { icon: 'fa-house', label: 'Homeownership Status' },
              { icon: 'fa-scale-balanced', label: 'Debt-to-Income Ratio' },
              { icon: 'fa-clock', label: 'Payment History' },
              { icon: 'fa-bullseye', label: 'Financial Goals' },
              { icon: 'fa-briefcase', label: 'Employment Stability' },
              { icon: 'fa-piggy-bank', label: 'Savings Available' },
              { icon: 'fa-list-check', label: 'Number of Accounts' },
              { icon: 'fa-calendar', label: 'Desired Timeline' },
            ].map((dp, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3 hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 bg-brand-primary/10 text-brand-primary rounded-lg flex items-center justify-center shrink-0">
                  <i className={`fa-solid ${dp.icon} text-sm`} />
                </div>
                <span className="text-sm font-medium text-slate-700">{dp.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pathways */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center mb-4">Three Possible Pathways</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">Our engine recommends the best fit based on your unique profile.</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl border-2 border-green-200 bg-green-50/50 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-5">
                <i className="fa-solid fa-arrow-trend-down text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Debt Consolidation</h3>
              <p className="text-slate-600 leading-relaxed mb-6">Best for borrowers with fair-to-good credit who want lower rates and a fixed payoff date. Combines debts into one loan.</p>
              <Link href="/consolidation" className="text-green-600 font-medium hover:underline inline-flex items-center gap-2">
                Learn More <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
            <div className="p-8 rounded-2xl border-2 border-indigo-200 bg-indigo-50/50 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-5">
                <i className="fa-solid fa-house-chimney text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">HELOC</h3>
              <p className="text-slate-600 leading-relaxed mb-6">Best for homeowners with significant equity and $25k+ in debt. Offers the lowest possible rates using your home as collateral.</p>
              <Link href="/heloc" className="text-indigo-600 font-medium hover:underline inline-flex items-center gap-2">
                Learn More <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
            <div className="p-8 rounded-2xl border-2 border-orange-200 bg-orange-50/50 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-5">
                <i className="fa-solid fa-handshake text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Debt Settlement</h3>
              <p className="text-slate-600 leading-relaxed mb-6">Best for those in financial hardship who cannot qualify for loans. Negotiates with creditors to reduce total amount owed.</p>
              <Link href="/debt-settlement" className="text-orange-600 font-medium hover:underline inline-flex items-center gap-2">
                Learn More <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-green-600">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Ready to Find Your Path to Freedom?</h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Take our free 5-minute assessment. No SSN required, no credit impact, no obligation.
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