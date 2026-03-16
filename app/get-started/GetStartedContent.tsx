'use client';

import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Check, ChevronLeft, ShieldCheck, ShieldAlert, TrendingUp, Lock, Wallet, Building2, Banknote, Home, Info, Target, Zap, Percent, Cpu, Star } from 'lucide-react';

type RecommendationType = 'loan' | 'heloc' | 'settlement';

interface QuizState {
  step: number;
  answers: Record<string, any>;
  scores: { loan: number; heloc: number; settlement: number };
}

export default function GetStartedContent() {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);
  const [state, setState] = useState<QuizState>({
    step: 1, answers: {}, scores: { loan: 35, heloc: 10, settlement: 20 }
  });

  const leader: RecommendationType = useMemo(() => {
    const { loan, heloc, settlement } = state.scores;
    if (heloc >= loan && heloc >= settlement) return 'heloc';
    if (loan >= settlement) return 'loan';
    return 'settlement';
  }, [state.scores]);

  useEffect(() => {
    if (state.step === 6) {
      const timer = setTimeout(() => {
        const quizResult = { leader, answers: state.answers, scores: state.scores, timestamp: new Date().toISOString() };
        localStorage.setItem('debt_pathway_quiz', JSON.stringify(quizResult));
        setState(prev => ({ ...prev, step: 7 }));
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [state.step, leader, state.answers, state.scores]);

  const handleAnswer = (key: string, value: any, impact: { loan: number; sett: number; heloc: number }) => {
    setIsAnimating(true);
    setState(prev => {
      let newLoan = prev.scores.loan + impact.loan;
      let newSett = prev.scores.settlement + impact.sett;
      let newHeloc = prev.scores.heloc + impact.heloc;
      if (key === 'home' && value === 'renter') { newHeloc = 0; newLoan += 10; }
      if (key === 'credit' && value === 'poor') { newLoan = Math.min(newLoan, 20); newHeloc = Math.min(newHeloc, 10); newSett += 40; }
      if (key === 'equity' && value === 'high') { newHeloc += 30; newLoan -= 10; }
      newLoan += 0.001; newHeloc += 0.002;
      newLoan = Math.min(100, Math.max(0, newLoan));
      newSett = Math.min(100, Math.max(0, newSett));
      newHeloc = Math.min(100, Math.max(0, newHeloc));
      return { ...prev, answers: { ...prev.answers, [key]: value }, scores: { loan: newLoan, heloc: newHeloc, settlement: newSett } };
    });
    setTimeout(() => { setState(prev => ({ ...prev, step: prev.step + 1 })); setIsAnimating(false); window.scrollTo(0, 0); }, 450);
  };

  const prevStep = () => { if (state.step > 1) setState(prev => ({ ...prev, step: prev.step - 1 })); };

  const ScoreBar = ({ label, value, colorClass }: { label: string; value: number; colorClass: string }) => (
    <div className="mb-6">
      <div className="flex justify-between items-end mb-2">
        <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">{label}</span>
        <span className={`text-[11px] font-black ${colorClass.replace('bg-', 'text-')}`}>{Math.round(value)}% Match</span>
      </div>
      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all duration-1000 ease-out ${colorClass} shadow-sm`} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-32 pb-16">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {state.step < 6 && <ProgressBar step={state.step} />}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="w-full lg:w-[62%]">
            <div className={`transition-all duration-500 ease-out ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              {state.step === 1 && <Step1 handleAnswer={handleAnswer} />}
              {state.step === 2 && <Step2 handleAnswer={handleAnswer} prevStep={prevStep} />}
              {state.step === 3 && <Step3 handleAnswer={handleAnswer} prevStep={prevStep} />}
              {state.step === 4 && <Step4 handleAnswer={handleAnswer} prevStep={prevStep} answers={state.answers} />}
              {state.step === 5 && <Step5 handleAnswer={handleAnswer} prevStep={prevStep} />}
              {state.step === 6 && <ProcessingStep />}
              {state.step === 7 && <ResultsStep leader={leader} state={state} router={router} />}
            </div>
          </div>
          <div className="hidden lg:block lg:w-[32%]">
            <SidePanel leader={leader} state={state} ScoreBar={ScoreBar} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="mb-12 w-full">
      <div className="flex items-center gap-3 mb-6 w-full">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={`h-1.5 rounded-full flex-1 transition-all duration-500 ${i + 1 <= step ? 'bg-slate-900 shadow-sm' : 'bg-slate-200'}`}></div>
        ))}
      </div>
      <div className="flex justify-between items-center px-1">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Decision Engine Analysis</p>
        </div>
        <span className="text-slate-900 font-bold text-[11px] uppercase tracking-[0.15em]">Module {step} of 5</span>
      </div>
    </div>
  );
}

function Step1({ handleAnswer }: any) {
  return (
    <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100 min-h-[500px]">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 bg-green-50 text-brand-primary rounded-xl"><Banknote size={22} /></div>
        <h2 className="text-slate-400 font-bold uppercase tracking-[0.25em] text-[10px]">Financial Blueprint</h2>
      </div>
      <h1 className="text-4xl md:text-6xl font-light text-slate-900 mb-10 leading-[1.1]">What is your total <br /><span className="font-medium text-brand-primary">debt volume?</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { label: "Under $15,000", imp: { loan: 20, sett: -20, heloc: -10 } },
          { label: "$15,000 - $45,000", imp: { loan: 15, sett: 5, heloc: 15 } },
          { label: "$45,000 - $100,000", imp: { loan: -10, sett: 20, heloc: 30 } },
          { label: "$100,000+", imp: { loan: -30, sett: 40, heloc: 40 } }
        ].map((opt, i) => (
          <button key={i} onClick={() => handleAnswer('amount', opt.label, opt.imp)} className="p-8 bg-slate-50/50 rounded-3xl border border-slate-100 text-center hover:border-brand-primary hover:bg-white hover:shadow-lg transition-all flex flex-col items-center justify-center group">
            <span className="font-bold text-slate-700 text-xl">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}



function Step2({ handleAnswer, prevStep }: any) {
  return (
    <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100 min-h-[500px]">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 bg-blue-50 text-blue-500 rounded-xl"><Star size={22} /></div>
        <h2 className="text-slate-400 font-bold uppercase tracking-[0.25em] text-[10px]">Lending Profile</h2>
      </div>
      <h1 className="text-4xl md:text-6xl font-light text-slate-900 mb-10 leading-[1.1]">Your estimated <br /><span className="font-medium text-blue-600">credit score?</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { label: "Excellent (720+)", val: '720', imp: { loan: 35, sett: -40, heloc: 30 } },
          { label: "Good (660-719)", val: '660', imp: { loan: 20, sett: -25, heloc: 15 } },
          { label: "Fair (600-659)", val: '600', imp: { loan: 5, sett: 15, heloc: -15 } },
          { label: "Poor (< 600)", val: 'poor', imp: { loan: -50, sett: 50, heloc: -50 } }
        ].map((opt, i) => (
          <button key={i} onClick={() => handleAnswer('credit', opt.val, opt.imp)} className="p-8 bg-slate-50/50 rounded-3xl border border-slate-100 text-center hover:border-blue-500 hover:bg-white hover:shadow-lg transition-all flex flex-col items-center">
            <span className="font-bold text-slate-800 text-xl mb-1">{opt.label.split(' ')[0]}</span>
            <span className="text-[11px] text-slate-400 font-black uppercase tracking-widest">{opt.label.split(' ')[1]}</span>
          </button>
        ))}
      </div>
      <button onClick={prevStep} className="mt-10 text-slate-400 flex items-center gap-2 text-[11px] font-black uppercase tracking-widest hover:text-slate-900 transition-colors"><ChevronLeft size={16} /> Go Back</button>
    </div>
  );
}

function Step3({ handleAnswer, prevStep }: any) {
  return (
    <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100 min-h-[500px]">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl"><Home size={22} /></div>
        <h2 className="text-slate-400 font-bold uppercase tracking-[0.25em] text-[10px]">Asset Audit</h2>
      </div>
      <h1 className="text-4xl md:text-6xl font-light text-slate-900 mb-10 leading-[1.1]">Do you own <br /><span className="font-medium text-indigo-600">your home?</span></h1>
      <div className="grid gap-5">
        <button onClick={() => handleAnswer('home', 'owner', { loan: 0, sett: -20, heloc: 50 })} className="w-full text-left p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 hover:border-indigo-600 hover:bg-white hover:shadow-xl transition-all flex items-center gap-8 group">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white shadow-sm transition-all"><Home size={32} /></div>
          <div>
            <span className="font-bold text-slate-800 text-2xl block mb-1">Yes, I am a Homeowner</span>
            <span className="text-sm text-slate-500">I own my primary residence or have a mortgage.</span>
          </div>
        </button>
        <button onClick={() => handleAnswer('home', 'renter', { loan: 25, sett: 25, heloc: -100 })} className="w-full text-left p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 hover:border-slate-400 hover:bg-white hover:shadow-xl transition-all flex items-center gap-8 group">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white shadow-sm transition-all"><Building2 size={32} /></div>
          <div>
            <span className="font-bold text-slate-800 text-2xl block mb-1">No, I rent my home</span>
            <span className="text-sm text-slate-500">Algorithm will prioritize unsecured debt solutions.</span>
          </div>
        </button>
      </div>
      <button onClick={prevStep} className="mt-10 text-slate-400 flex items-center gap-2 text-[11px] font-black uppercase tracking-widest hover:text-slate-900 transition-colors"><ChevronLeft size={16} /> Go Back</button>
    </div>
  );
}

function Step4({ handleAnswer, prevStep, answers }: any) {
  return (
    <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100 min-h-[500px]">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 bg-indigo-50 text-indigo-500 rounded-xl"><TrendingUp size={22} /></div>
        <h2 className="text-slate-400 font-bold uppercase tracking-[0.25em] text-[10px]">Equity Valuation</h2>
      </div>
      {answers.home === 'owner' ? (
        <>
          <h1 className="text-4xl md:text-6xl font-light text-slate-900 mb-10 leading-[1.1]">Estimated <br /><span className="font-medium text-indigo-600">home equity?</span></h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Over $100,000", val: 'high', imp: { loan: -10, sett: -30, heloc: 60 } },
              { label: "$40,000 - $100,000", val: 'mid', imp: { loan: 0, sett: -10, heloc: 30 } },
              { label: "Less than $40,000", val: 'low', imp: { loan: 15, sett: 10, heloc: 10 } },
              { label: "Not Sure / Negative", val: 'none', imp: { loan: 20, sett: 20, heloc: -40 } }
            ].map((opt, i) => (
              <button key={i} onClick={() => handleAnswer('equity', opt.val, opt.imp)} className="w-full text-center p-8 bg-slate-50/50 rounded-3xl border border-slate-100 hover:border-indigo-500 hover:bg-white transition-all flex flex-col items-center justify-center group">
                <span className="font-bold text-xl text-slate-700">{opt.label}</span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className="text-4xl md:text-6xl font-light text-slate-900 mb-10 leading-[1.1]">Monthly <br /><span className="font-medium text-slate-700">budget status?</span></h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Stable & Predictable", imp: { loan: 30, sett: -30, heloc: 0 } },
              { label: "Tight every month", imp: { loan: 5, sett: 15, heloc: 0 } },
              { label: "Experiencing Hardship", imp: { loan: -40, sett: 60, heloc: 0 } }
            ].map((opt, i) => (
              <button key={i} onClick={() => handleAnswer('budget', opt.label, opt.imp)} className="w-full text-center p-8 bg-slate-50/50 rounded-3xl border border-slate-100 hover:border-slate-900 hover:bg-white transition-all font-bold text-xl text-slate-700">
                {opt.label}
              </button>
            ))}
          </div>
        </>
      )}
      <button onClick={prevStep} className="mt-10 text-slate-400 flex items-center gap-2 text-[11px] font-black uppercase tracking-widest hover:text-slate-900 transition-colors"><ChevronLeft size={16} /> Go Back</button>
    </div>
  );
}

function Step5({ handleAnswer, prevStep }: any) {
  return (
    <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100 min-h-[500px]">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl"><Target size={22} /></div>
        <h2 className="text-slate-400 font-bold uppercase tracking-[0.25em] text-[10px]">Objective Core</h2>
      </div>
      <h1 className="text-4xl md:text-6xl font-light text-slate-900 mb-10 leading-[1.1]">Your primary <br /><span className="font-medium text-purple-600">financial goal?</span></h1>
      <div className="grid gap-5">
        <button onClick={() => handleAnswer('goal', 'rate', { loan: 25, sett: -50, heloc: 35 })} className="w-full text-left p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 hover:border-purple-600 hover:bg-white hover:shadow-xl transition-all flex items-center gap-6 group">
          <div className="w-14 h-14 bg-white rounded-2xl border border-slate-100 text-purple-600 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-all"><Percent size={28} /></div>
          <span className="font-bold text-slate-800 text-2xl">Extreme Interest Savings</span>
        </button>
        <button onClick={() => handleAnswer('goal', 'balance', { loan: -30, sett: 50, heloc: -30 })} className="w-full text-left p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 hover:border-purple-600 hover:bg-white hover:shadow-xl transition-all flex items-center gap-6 group">
          <div className="w-14 h-14 bg-white rounded-2xl border border-slate-100 text-slate-600 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all"><Wallet size={28} /></div>
          <span className="font-bold text-slate-800 text-2xl">Reduce Total Principal Balance</span>
        </button>
      </div>
      <button onClick={prevStep} className="mt-10 text-slate-400 flex items-center gap-2 text-[11px] font-black uppercase tracking-widest hover:text-slate-900 transition-colors"><ChevronLeft size={16} /> Go Back</button>
    </div>
  );
}

function ProcessingStep() {
  return (
    <div className="bg-white p-16 md:p-24 rounded-[3rem] shadow-2xl text-center border border-slate-100 min-h-[500px] flex flex-col items-center justify-center">
      <div className="w-28 h-28 bg-slate-900 rounded-full flex items-center justify-center text-white mb-10 shadow-2xl relative">
        <div className="absolute inset-0 rounded-full border-4 border-emerald-400 border-t-transparent animate-spin"></div>
        <Cpu size={44} className="animate-pulse" />
      </div>
      <h1 className="text-4xl font-light text-slate-900 mb-6">Final Analysis Run...</h1>
      <p className="text-slate-500 max-w-sm mx-auto mb-2 leading-relaxed italic text-sm">Validating pathways against 45+ verified partners</p>
    </div>
  );
}

function ResultsStep({ leader, state, router }: any) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black mb-10 shadow-sm ${leader === 'loan' ? 'bg-green-100 text-green-700' : leader === 'heloc' ? 'bg-indigo-100 text-indigo-700' : 'bg-orange-100 text-orange-700'}`}>
        {leader === 'loan' ? <ShieldCheck size={18} strokeWidth={3} /> : leader === 'heloc' ? <Home size={18} strokeWidth={3} /> : <ShieldAlert size={18} strokeWidth={3} />}
        ALGORITHM RECOMMENDATION: {leader.toUpperCase()}
      </div>
      <h1 className="text-5xl md:text-7xl font-light text-slate-900 mb-10 leading-tight">
        {leader === 'loan' ? 'Consolidation Loan' : leader === 'heloc' ? 'Home Equity (HELOC)' : 'Strategic Settlement'}
      </h1>
      <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-2xl mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <p className="text-2xl text-slate-600 leading-relaxed font-light mb-10">
          {leader === 'heloc'
            ? "Your significant home equity and credit tier make a HELOC the absolute mathematical winner. By leveraging your asset, you access prime-relative rates (~7.9%) that cut your interest burden by over 70% compared to typical credit cards."
            : leader === 'loan'
            ? "Your stable profile makes an unsecured consolidation loan the definitive choice. This path protects your credit score entirely while instantly simplifying your bills into one fixed, low-interest payment without putting your home at risk."
            : "The data decisively points to Strategic Debt Settlement as your most effective route to relief. Given your current hardship markers, our partners can negotiate to legally forgive up to 50% of your principal balance."}
        </p>
        <div className="flex flex-wrap gap-5">
          <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-2xl text-xs font-black text-slate-500 border border-slate-100 uppercase tracking-widest">
            <Check className="text-emerald-500" size={18} strokeWidth={3} /> Score: {Math.round(state.scores[leader])}% Match
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-2xl text-xs font-black text-slate-500 border border-slate-100 uppercase tracking-widest">
            <Zap className="text-amber-500" size={18} fill="currentColor" /> Optimal Confidence
          </div>
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <button onClick={() => router.push('/partners')} className={`w-full py-6 rounded-3xl font-bold text-white text-lg shadow-2xl transition-all hover:-translate-y-1 hover:brightness-110 active:scale-[0.98] ${leader === 'heloc' ? 'bg-indigo-600 shadow-indigo-200' : leader === 'loan' ? 'bg-brand-primary shadow-green-200' : 'bg-orange-600 shadow-orange-200'}`}>
          Browse Verified Partners
        </button>
        <button onClick={() => router.push(leader === 'heloc' ? '/heloc' : leader === 'loan' ? '/consolidation' : '/debt-settlement')} className="w-full py-6 rounded-3xl border-2 border-slate-200 font-bold text-slate-600 bg-white hover:bg-slate-50 transition-all flex items-center justify-center gap-3 text-lg">
          Detailed Breakdown <Info size={22} />
        </button>
      </div>
    </div>
  );
}

function SidePanel({ leader, state, ScoreBar }: any) {
  return (
    <div className={`rounded-[3rem] p-10 shadow-2xl border transition-all duration-1000 relative overflow-hidden flex flex-col min-h-[500px] ${leader === 'loan' ? 'bg-[#f0fdf4] border-green-100' : leader === 'heloc' ? 'bg-[#eef2ff] border-indigo-100' : 'bg-[#fff7ed] border-orange-100'}`}>
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-10">
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
          </div>
          <span className="text-[9px] font-black uppercase text-slate-400 tracking-[0.3em]">Diagnostic Engine Status</span>
        </div>
        <h3 className="text-3xl font-light text-slate-900 mb-10 leading-tight">Live Weighted Logic</h3>
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-[2.5rem] shadow-sm border border-white/50 mb-12">
          <ScoreBar label="Consolidation (Loan)" value={state.scores.loan} colorClass="bg-brand-primary" />
          <ScoreBar label="Equity Path (HELOC)" value={state.scores.heloc} colorClass="bg-indigo-600" />
          <ScoreBar label="Relief Path (Settlement)" value={state.scores.settlement} colorClass="bg-orange-500" />
        </div>
        <div className="mt-auto pt-10 border-t border-slate-200/50">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-50">
              <Lock size={20} className="text-slate-400" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.25em]">Bank-Level Security</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">256-bit AES Encryption</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}