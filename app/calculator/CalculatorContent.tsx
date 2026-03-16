'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { DollarSign, Percent, Calculator as CalcIcon, RefreshCw, CreditCard, TrendingUp, Wallet, PieChart, Coins, Banknote, Landmark, CircleDollarSign, ShieldAlert, Home } from 'lucide-react';
import BlogSection from '@/components/BlogSection';

export default function CalculatorContent() {
  const [mode, setMode] = useState<'consolidation' | 'heloc' | 'settlement'>('consolidation');
  const [debtAmount, setDebtAmount] = useState(25000);
  const [currentRate, setCurrentRate] = useState(24);
  const [newRate, setNewRate] = useState(mode === 'heloc' ? 8 : 12);
  const [term, setTerm] = useState(36);

  const calculateLoanPayment = (principal: number, rate: number, months: number) => {
    const monthlyRate = rate / 100 / 12;
    if (monthlyRate === 0) return principal / months;
    return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
  };

  const currentMinPayment = calculateLoanPayment(debtAmount, currentRate, 180);
  const loanPayment = calculateLoanPayment(debtAmount, newRate, term);
  const loanSavings = (currentMinPayment * 180) - (loanPayment * term);

  const settlementPercentage = 0.50;
  const feePercentage = 0.20;
  const totalSettlementCost = debtAmount * (settlementPercentage + feePercentage);
  const settlementMonthlyDeposit = totalSettlementCost / term;
  const settlementSavings = debtAmount - totalSettlementCost;

  const iconList = [DollarSign, CreditCard, TrendingUp, Wallet, PieChart, Coins, Banknote, Landmark, CircleDollarSign];
  const floatingIcons = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => {
      const Icon = iconList[i % iconList.length];
      const left = Math.floor(Math.random() * 90) + 5;
      const duration = Math.floor(Math.random() * 10) + 15;
      const delay = Math.floor(Math.random() * 15);
      const size = Math.floor(Math.random() * 20) + 24;
      return { Icon, left, duration, delay, size };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-[#f8fcf5] via-[#e8f5df] to-[#d5eac4] pt-32 pb-24 relative overflow-hidden shadow-sm">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {floatingIcons.map((item, i) => (
            <div key={i} className="absolute text-brand-primary opacity-0 animate-float-up" style={{ left: `${item.left}%`, animationDuration: `${item.duration}s`, animationDelay: `-${item.delay}s`, top: 0 }}>
              <item.Icon size={item.size} strokeWidth={1.5} />
            </div>
          ))}
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">Savings Calculator</h1>
          <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">Compare your potential savings across all three pathways.</p>
        </div>
      </section>

      <div className="container mx-auto px-6 pb-24 -mt-12 relative z-20">
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1.5 rounded-2xl shadow-lg inline-flex relative border border-slate-100">
            <button onClick={() => setMode('consolidation')} className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all relative z-10 ${mode === 'consolidation' ? 'text-white' : 'text-slate-500'}`}>Loan</button>
            <button onClick={() => setMode('heloc')} className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all relative z-10 ${mode === 'heloc' ? 'text-white' : 'text-slate-500'}`}>HELOC</button>
            <button onClick={() => setMode('settlement')} className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all relative z-10 ${mode === 'settlement' ? 'text-white' : 'text-slate-500'}`}>Settlement</button>
            <div className={`absolute top-1.5 bottom-1.5 w-[calc(33.33%-4px)] rounded-xl transition-all duration-300 ${mode === 'consolidation' ? 'translate-x-0 bg-brand-primary' : mode === 'heloc' ? 'translate-x-full bg-indigo-600' : 'translate-x-[200%] bg-orange-500'}`}></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
            <h3 className="text-xl font-medium text-slate-800 mb-6 flex items-center gap-2">
              <CalcIcon size={20} className={mode === 'settlement' ? 'text-orange-500' : mode === 'heloc' ? 'text-indigo-600' : 'text-brand-primary'} />
              Plan Inputs
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Total Debt</label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="number" value={debtAmount} onChange={(e) => setDebtAmount(Number(e.target.value))} className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none" />
                </div>
              </div>
              {mode !== 'settlement' ? (
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">New APR (%)</label>
                  <input type="number" value={newRate} onChange={(e) => setNewRate(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none" />
                </div>
              ) : (
                <div className="p-4 bg-orange-50 rounded-xl text-xs text-orange-800 border border-orange-100">Estimated ~50% principal reduction before program fees.</div>
              )}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Plan Duration (Months)</label>
                <select value={term} onChange={(e) => setTerm(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none">
                  <option value="24">24 Months</option>
                  <option value="36">36 Months</option>
                  <option value="48">48 Months</option>
                  <option value="60">60 Months</option>
                </select>
              </div>
            </div>
          </div>

          <div className={`text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-500 ${mode === 'settlement' ? 'bg-orange-600' : mode === 'heloc' ? 'bg-indigo-900' : 'bg-slate-900'}`}>
            <div>
              <h3 className="text-lg font-light text-white/80 mb-8 flex items-center gap-2">
                {mode === 'heloc' ? <Home size={20} /> : <TrendingUp size={20} />} Results
              </h3>
              <div className="space-y-8">
                <div>
                  <p className="text-white/60 text-xs mb-1">Monthly Payment</p>
                  <p className="text-5xl font-light">${Math.round(mode === 'settlement' ? settlementMonthlyDeposit : loanPayment)}</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <p className="text-white/60 text-xs mb-1">Total Savings</p>
                  <p className="text-3xl font-bold">${Math.round(mode === 'settlement' ? settlementSavings : Math.max(0, loanSavings)).toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/get-started" className={`block w-full py-4 rounded-xl font-bold text-center bg-white ${mode === 'settlement' ? 'text-orange-600' : mode === 'heloc' ? 'text-indigo-900' : 'text-slate-900'}`}>See Your Real Rate</Link>
            </div>
          </div>
        </div>
      </div>
      <BlogSection />
    </div>
  );
}

